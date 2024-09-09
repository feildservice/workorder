import {
  AgentTerritory,
  FindFirstAgentTerritoryArgs,
  FindUniqueAgentTerritoryArgs,
  FindManyAgentTerritoryArgs,
  AgentTerritoryGroupBy,
  AgentTerritoryGroupByArgs,
  AggregateAgentTerritory,
  AgentTerritoryAggregateArgs,
  CreateOneAgentTerritoryArgs,
  CreateManyAgentTerritoryArgs,
  UpdateOneAgentTerritoryArgs,
  UpdateManyAgentTerritoryArgs,
  DeleteOneAgentTerritoryArgs,
  DeleteManyAgentTerritoryArgs,
} from '../generated/prismagraphql/agent-territory';


import { AffectedRows } from '../generated/prismagraphql/prisma';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { AgentTerritoryCrudService } from './agent-territory.crud.service';

// import { CognitoAuthGuard } from "src/shared/guards/cognito-auth/cognito-auth.guard";
// import { RolesGuard } from "src/shared/guards/roles/roles.guard";
// import { UseGuards } from "@nestjs/common";

@Resolver(() => AgentTerritory)
export class AgentTerritoryResolver {
  constructor(private readonly agentTerritoryService: AgentTerritoryCrudService) {}

  @Query(() => AgentTerritory, { nullable: false })
  findFirstAgentTerritory(@Args() args: FindFirstAgentTerritoryArgs) {
    return this.agentTerritoryService.findFirst(args);
  }

  @Query(() => AgentTerritory, { nullable: false })
  findUniqueAgentTerritory(@Args() args: FindUniqueAgentTerritoryArgs) {
    return this.agentTerritoryService.findUnique(args);
  }

  @Query(() => [AgentTerritory], { nullable: false })
  listAgentTerritorys(@Args() args: FindManyAgentTerritoryArgs) {
    return this.agentTerritoryService.findMany(args);
  }

  @Query(() => [AgentTerritoryGroupBy], { nullable: false })
  groupByAgentTerritory(@Args() args: AgentTerritoryGroupByArgs) {
    return this.agentTerritoryService.groupBy(args);
  }

  @Query(() => AggregateAgentTerritory, { nullable: false })
  aggregateAgentTerritory(@Args() args: AgentTerritoryAggregateArgs) {
    return this.agentTerritoryService.aggregate(args);
  }

  @Mutation(() => AgentTerritory, { nullable: true })
  createAgentTerritory(@Args() args: CreateOneAgentTerritoryArgs) {
    return this.agentTerritoryService.create(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  createManyAgentTerritory(@Args() args: CreateManyAgentTerritoryArgs) {
    return this.agentTerritoryService.createMany(args);
  }

  @Mutation(() => AgentTerritory, { nullable: true })
  updateAgentTerritory(@Args() args: UpdateOneAgentTerritoryArgs) {
    return this.agentTerritoryService.update(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  updateManyAgentTerritory(@Args() args: UpdateManyAgentTerritoryArgs) {
    return this.agentTerritoryService.updateMany(args);
  }

  @Mutation(() => AgentTerritory, { nullable: true })
  deleteAgentTerritory(@Args() args: DeleteOneAgentTerritoryArgs) {
    return this.agentTerritoryService.delete(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  deleteManyAgentTerritory(@Args() args: DeleteManyAgentTerritoryArgs) {
    return this.agentTerritoryService.deleteMany(args);
  }
}
