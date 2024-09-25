import { faker } from '@faker-js/faker/locale/en';
import { Prisma, CompanyStatus, Gender, OranizationStatus } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

const regex = /\W+/;

export const generatOrganizations = (
  fakeOrganizations: number,
): Prisma.OrganizationUpsertArgs<DefaultArgs>[] => {
  // export const generateCompanies = (): any[] => {
  return Array.from(Array(fakeOrganizations).keys()).map((id) => {
    const name = faker.company.name();
    const website = faker.internet.url();
    const companyEmail = faker.internet.email();
    return {
      where: { email: companyEmail },
      update: {},
      create: {
        name: name,
        description: faker.lorem.paragraph(1).substr(1, 100),
        domain: website,
        address: faker.location.streetAddress(),
        city: faker.location.city(),
        country: faker.helpers.arrayElement(['USA', 'France', 'UK']),
        zipcode: faker.location.zipCode(),
        email: companyEmail,
        phone: faker.phone.number(),
        company: name,
        website: website,
        linkedinUrl: `https://www.linkedin.com/company/${name
          .toLowerCase()
          .replace(regex, '_')}`,
        taxIdentifier: faker.string.alphanumeric(10),
        logo: {
          create: {
            title: faker.lorem.text().substring(0, 1),
            src: `./logos/${id}.png`,
          },
        },
        status: OranizationStatus.ACTIVE,
      },
    };
  });
};