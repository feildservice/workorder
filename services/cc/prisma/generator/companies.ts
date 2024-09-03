import { faker } from '@faker-js/faker/locale/en';
import { Prisma, CompanyStatus, Gender } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

const defaultCompanySectors = [
  'Communication Services',
  'Consumer Discretionary',
  'Consumer Staples',
  'Energy',
  'Financials',
  'Health Care',
  'Industrials',
  'Information Technology',
  'Materials',
  'Real Estate',
  'Utilities',
];

// const sizes = [1, 10, 50, 250, 500];

const regex = /\W+/;

export const generateCompanies = (
  fakeCompanies: number,
): Prisma.CustomerUpsertArgs<DefaultArgs>[] => {
  // export const generateCompanies = (): any[] => {
  return Array.from(Array(fakeCompanies).keys()).map((id) => {
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
        industry: faker.helpers.arrayElement(defaultCompanySectors),
        founded: faker.helpers.arrayElement(['1950', '2000', '1985', '2010']),
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
        taxIdentifier: faker.random.alphaNumeric(10),
        size: faker.helpers.arrayElement(['1', '10', '50+', '250+', '500+']),
        revenue: faker.helpers.arrayElement(['$1M', '$10M', '$100M', '$1B']),
        logo: {
          create: {
            title: faker.lorem.text().substring(0, 1),
            src: `./logos/${id}.png`,
          },
        },
        addresses: {
          create: [
            {
              street: faker.location.streetAddress(),
              city: faker.location.city(),
              state: faker.location.state(),
              zipcode: faker.location.zipCode(),
              country: faker.location.county(),
              isPrimary: true,
            },
          ],
        },
        status: CompanyStatus.ACTIVE,
      },
    };
  });
};

export const generateContacts = (
  companyId: number,
): Prisma.ContactUpsertArgs<DefaultArgs>[] => {
  return Array.from(Array(10).keys()).map(() => {
    const contactEmail = faker.internet.email();
    return {
      where: {
        email: contactEmail,
      },
      update: {},
      create: {
        customerId: companyId,
        firstName: faker.person.firstName(),
        middleName: faker.person.middleName(),
        lastName: faker.person.lastName(),
        title: faker.person.prefix(),
        designation: faker.person.jobDescriptor(),
        gender: faker.helpers.arrayElement([Gender.MALE, Gender.FEMALE]),
        email: contactEmail,
        phone: faker.phone.number(),
        isPrimary: true,
      },
    };
  });
};
