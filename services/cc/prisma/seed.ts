import { PrismaClient, ServiceTerritory } from '@prisma/client';
import { generateCompanies, generateContacts } from './generator/companies';
import {
  generateTerritories,
  generateSubTerritories,
} from './generator/territories';

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
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
