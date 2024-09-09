import { faker } from '@faker-js/faker/locale/en';
import { Prisma, Gender, AgentType } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

export const generateAgents = (
  agentsToGenerate: number,
): Prisma.AgentUpsertArgs<DefaultArgs>[] => {
  return Array.from(Array(agentsToGenerate).keys()).map(() => {
    const agentEmail = faker.internet.email();
    return {
      where: { email: agentEmail },
      update: {},
      create: {
        firstName: faker.person.firstName(),
        middleName: faker.person.middleName(),
        lastName: faker.person.lastName(),
        title: faker.person.prefix(),
        designation: faker.person.jobDescriptor(),
        gender: faker.helpers.arrayElement([Gender.MALE, Gender.FEMALE]),
        email: agentEmail,
        phone: faker.phone.number(),
        agentType: faker.helpers.arrayElement([
          AgentType.CUSTOMER_AGENT,
          AgentType.FIELD_TECHNICIAN,
        ]),
      },
    };
  });
};

export const generateWorkCalendar = (
  agentId: number,
): Prisma.WorkCalendarCreateManyArgs<DefaultArgs> => {
  const year = new Date(Date.now()).getFullYear();
  const month = new Date(Date.now()).getMonth();
  const daysInMonth = new Date(year, month, 0).getDate();

  const workCalendarForAgent = Array.from(Array(daysInMonth).keys()).map(
    (id) => {
      return {
        agentId: agentId,
        year: year,
        month: month,
        day: id,
        startTime: new Date(year, month, id, 8, 0, 0),
        endTime: new Date(year, month, id, 17, 0, 0),
        available: true,
      };
    },
  );

  return {
    data: [...workCalendarForAgent],
  };
};

export const generateAgentTerritories = (
  agentId: number,
  territoryIds: number[],
): Prisma.AgentTerritoryCreateManyArgs<DefaultArgs> => {
  const subTerritoriesForAgent = Array.from(
    faker.helpers.arrayElements(territoryIds, { min: 1, max: 2 }),
  ).map((territoryId) => {
    return {
      agentId: agentId,
      subTerritoryId: territoryId,
    };
  });

  return {
    data: [...subTerritoriesForAgent],
  };
};
