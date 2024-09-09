import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { BaseCrudService } from './basecrud.service';
import {
  CreateManyAgentTerritoryArgs,
  CreateOneAgentTerritoryArgs,
  DeleteManyAgentTerritoryArgs,
  DeleteOneAgentTerritoryArgs,
  FindFirstAgentTerritoryArgs,
  FindManyAgentTerritoryArgs,
  FindUniqueAgentTerritoryArgs,
  UpdateManyAgentTerritoryArgs,
  UpdateOneAgentTerritoryArgs,
  AgentTerritory,
  AgentTerritoryAggregateArgs,
  AgentTerritoryGroupByArgs,
} from '../generated/prismagraphql/agent-territory';

import {
  FindManyCustomerIncludeArgs,
  FindUniqueCustomerIncludeArgs,
} from '../types/types';

@Injectable()
export class AgentTerritoryCrudService extends BaseCrudService<
  AgentTerritory,
  FindFirstAgentTerritoryArgs,
  FindUniqueAgentTerritoryArgs,
  FindManyAgentTerritoryArgs,
  AgentTerritoryGroupByArgs,
  AgentTerritoryAggregateArgs,
  CreateOneAgentTerritoryArgs,
  CreateManyAgentTerritoryArgs,
  UpdateOneAgentTerritoryArgs,
  UpdateManyAgentTerritoryArgs,
  DeleteOneAgentTerritoryArgs,
  DeleteManyAgentTerritoryArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
