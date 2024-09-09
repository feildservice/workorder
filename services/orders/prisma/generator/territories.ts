import { Prisma, ServiceTerritory } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';
import { territories } from './indiancitiesstate';

const territoriesList = territories;
const subTerritories = ['ALL', 'North', 'South', 'East', 'West', 'Central'];

export const generateTerritories =
  (): Prisma.ServiceTerritoryCreateArgs<DefaultArgs>[] => {
    return Array.from(territoriesList).map((territory) => {
      return {
        data: {
          name: territory.city,
          locality: territory.city,
          city: territory.city,
          state: territory.admin_name,
          country: territory.country,
          isocode: territory.iso2,
          latitude: Number(territory.lat),
          longitude: Number(territory.lng),
        },
      };
    });
  };

export const generateSubTerritories = (
  territory: ServiceTerritory,
): Prisma.SubTerritoryCreateManyArgs<DefaultArgs> => {
  const subTerrs = Array.from(subTerritories).map((subTerritory) => {
    return {
      name: territory.city,
      locality: subTerritory,
      latitude: territory.latitude,
      longitude: territory.longitude,
      parentTerritoryId: territory.id,
    };
  });
  return {
    data: [...subTerrs],
  };
};
