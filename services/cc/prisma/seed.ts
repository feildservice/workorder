import { PrismaClient } from '@prisma/client';
import { generateCompanies, generateContacts } from './generator/companies';
import { ar } from '@faker-js/faker';

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

  console.log('Seeding... companies');

  const companiesToCreate = generateCompanies(55);
  let arrCompanyIds : number[] = new Array();

  for (let i = 0; i < companiesToCreate.length; i++) {
    // console.log(companiesToCreate[i]);
    // console.log(companiesToCreate[i].create.addresses.create[0]);
    // console.log(companiesToCreate[i].create.contacts.create[0]);
    let company = await prisma.customer.upsert(companiesToCreate[i]);
    arrCompanyIds.push(company.id);
  } 

  for(let i=0; i<arrCompanyIds.length; i++){
    // console.log(arrCompanyIds);
    let contactsForCompany = generateContacts(arrCompanyIds[i]);
    // console.log(contactsForCompany.length);
    for (let j = 0; j < contactsForCompany.length; j++) {
      // try{
        // console.log(contactsForCompany[j]);
        await prisma.contact.upsert(contactsForCompany[j]);
      // }catch(err){

      // }
    }
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
