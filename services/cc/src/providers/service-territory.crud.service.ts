import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { BaseCrudService } from './basecrud.service';
import {
  CreateManyServiceTerritoryArgs,
  CreateOneServiceTerritoryArgs,
  DeleteManyServiceTerritoryArgs,
  DeleteOneServiceTerritoryArgs,
  FindFirstServiceTerritoryArgs,
  FindManyServiceTerritoryArgs,
  FindUniqueServiceTerritoryArgs,
  UpdateManyServiceTerritoryArgs,
  UpdateOneServiceTerritoryArgs,
  ServiceTerritory,
  ServiceTerritoryAggregateArgs,
  ServiceTerritoryGroupByArgs,
} from '../generated/prismagraphql/service-territory';

import {
  FindManyCustomerIncludeArgs,
  FindUniqueCustomerIncludeArgs,
} from '../types/types';

@Injectable()
export class ServiceTerritoryCrudService extends BaseCrudService<
  ServiceTerritory,
  FindFirstServiceTerritoryArgs,
  FindUniqueServiceTerritoryArgs,
  FindManyServiceTerritoryArgs,
  ServiceTerritoryGroupByArgs,
  ServiceTerritoryAggregateArgs,
  CreateOneServiceTerritoryArgs,
  CreateManyServiceTerritoryArgs,
  UpdateOneServiceTerritoryArgs,
  UpdateManyServiceTerritoryArgs,
  DeleteOneServiceTerritoryArgs,
  DeleteManyServiceTerritoryArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
