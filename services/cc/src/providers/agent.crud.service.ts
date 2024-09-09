import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { BaseCrudService } from './basecrud.service';
import {
  CreateManyAgentArgs,
  CreateOneAgentArgs,
  DeleteManyAgentArgs,
  DeleteOneAgentArgs,
  FindFirstAgentArgs,
  FindManyAgentArgs,
  FindUniqueAgentArgs,
  UpdateManyAgentArgs,
  UpdateOneAgentArgs,
  Agent,
  AgentAggregateArgs,
  AgentGroupByArgs,
} from '../generated/prismagraphql/agent';

import {
  FindManyCustomerIncludeArgs,
  FindUniqueCustomerIncludeArgs,
} from '../types/types';

@Injectable()
export class AgentCrudService extends BaseCrudService<
  Agent,
  FindFirstAgentArgs,
  FindUniqueAgentArgs,
  FindManyAgentArgs,
  AgentGroupByArgs,
  AgentAggregateArgs,
  CreateOneAgentArgs,
  CreateManyAgentArgs,
  UpdateOneAgentArgs,
  UpdateManyAgentArgs,
  DeleteOneAgentArgs,
  DeleteManyAgentArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
