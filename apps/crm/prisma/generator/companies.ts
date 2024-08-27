import { faker } from '@faker-js/faker/locale/en';
import { Customer, Contact, Address, Prisma } from '@prisma/client'
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

const sizes = [1, 10, 50, 250, 500];

const regex = /\W+/;

export const generateCompanies = (): Prisma.CustomerUpsertArgs<DefaultArgs>[] => {
    // export const generateCompanies = (): any[] => {
    return Array.from(Array(55).keys()).map(id => {
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
                yearFounded: faker.helpers.arrayElement(['1950', '2000', '1985', '2010']),
                country: faker.helpers.arrayElement(['USA', 'France', 'UK']),
                city: faker.location.city(),
                zipcode: faker.location.zipCode(),
                email: companyEmail,
                phone: faker.phone.number(),
                company: name,
                website: website,
                linkedinUrl: `https://www.linkedin.com/company/${name
                    .toLowerCase()
                    .replace(regex, '_')}`,
                taxIdentifier: faker.random.alphaNumeric(10),
                empsize: faker.helpers.arrayElement(["1", "10", "50+", "250+", "500+"]),
                revenue: faker.helpers.arrayElement(['$1M', '$10M', '$100M', '$1B']),

                // logo: {
                //     title: lorem.text(1),
                //     src: `./logos/${id}.png`,
                // },            
                addresses: {
                    create: [
                        {
                            street: faker.location.streetAddress(),
                            city: faker.location.city(),
                            state: faker.location.state(),
                            zipCode: faker.location.zipCode(),
                            country: faker.location.county(),
                            isPrimary: true
                        }
                    ]
                },
                contacts: {
                    create: [
                        {
                            firstName: faker.person.fullName(),
                            lastName: faker.person.lastName(),
                            email: faker.internet.email(),
                            phone: faker.phone.number(),
                            isPrimary: true
                        }
                    ]
                }
            }
        };
    });
};
