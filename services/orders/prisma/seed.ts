import { PrismaClient } from '@prisma/client';
import { generateCompanies, generateContacts } from './generator/companies';
import {
  generateTerritories,
  generateSubTerritories,
} from './generator/territories';

import {
  generateAgents,
  generateWorkCalendar,
  generateAgentTerritories,
} from './generator/agentstechnicians';

const prisma = new PrismaClient();

async function main() {
  await prisma.agreement.deleteMany();
  await prisma.sLA.deleteMany();
  await prisma.service.deleteMany();
  await prisma.address.deleteMany();
  await prisma.contact.deleteMany();
  await prisma.hierarchy.deleteMany();
  await prisma.logo.deleteMany();
  await prisma.customer.deleteMany();

  await prisma.subTerritory.deleteMany();
  await prisma.serviceTerritory.deleteMany();

  await prisma.workCalendar.deleteMany();
  await prisma.agentTerritory.deleteMany();
  await prisma.agent.deleteMany();

  console.log('Seeding... companies');

  const companiesToCreate = generateCompanies(55);
  const arrCompanyIds: number[] = [];

  for (let i = 0; i < companiesToCreate.length; i++) {
    const company = await prisma.customer.upsert(companiesToCreate[i]);
    arrCompanyIds.push(company.id);
  }

  for (let i = 0; i < arrCompanyIds.length; i++) {
    const contactsForCompany = generateContacts(arrCompanyIds[i]);
    for (let j = 0; j < contactsForCompany.length; j++) {
      await prisma.contact.upsert(contactsForCompany[j]);
    }
  }

  const serviceTerritories = generateTerritories();

  for (let i = 0; i < serviceTerritories.length; i++) {
    const serviceTerritory = await prisma.serviceTerritory.create(
      serviceTerritories[i],
    );
    await prisma.subTerritory.createMany(
      generateSubTerritories(serviceTerritory),
    );
  }

  const subTerritoriesIds = await prisma.subTerritory.findMany({
    select: {
      id: true,
    },
  });

  const agentsToCreate = generateAgents(100);

  for (let i = 0; i < agentsToCreate.length; i++) {
    const agentCreated = await prisma.agent.upsert(agentsToCreate[i]);
    await prisma.workCalendar.createMany(generateWorkCalendar(agentCreated.id));
    await prisma.agentTerritory.createMany(
      generateAgentTerritories(
        agentCreated.id,
        subTerritoriesIds.map((subTerritory) => subTerritory.id),
      ),
    );
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
