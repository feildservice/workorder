import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.agreement.deleteMany();
    await prisma.sLA.deleteMany();
    await prisma.service.deleteMany();
    await prisma.address.deleteMany();
    await prisma.hierarchy.deleteMany();
    await prisma.customer.deleteMany();

    console.log('Seeding... companies');

    const customer1 = await prisma.customer.upsert({
        where: { email: 'one@acme.com' },
        update: {},
        create: {
            email: 'one@acme.com',
            name: 'Alice',
            phone: '1234567890',
            company: 'Acme Enterprises',
            addresses: {
                create: [
                    {
                        street: '1st cross',
                        city: 'Los Angeles',
                        state: 'LA',
                        zipCode: '60005',
                        country: 'USA',
                        isPrimary: true
                    },
                    {
                        street: '2st cross',
                        city: 'Los Angeles',
                        state: 'LA',
                        zipCode: '60004',
                        country: 'USA',
                        isPrimary: false
                    }
                ]
            },
            contacts: {
                create:[
                    {
                        firstName: 'Manager',
                        lastName: 'MD',
                        email: 'mgr@acme.com',
                        phone: '1231313123',
                        isPrimary: true
                    }
                ]
            }
        }
    });
    //console.log({ user1, user2 });
}

main()
    .catch((e) => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });