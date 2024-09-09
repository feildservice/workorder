import {
  Agent,
  FindFirstAgentArgs,
  FindUniqueAgentArgs,
  FindManyAgentArgs,
  AgentGroupBy,
  AgentGroupByArgs,
  AggregateAgent,
  AgentAggregateArgs,
  CreateOneAgentArgs,
  CreateManyAgentArgs,
  UpdateOneAgentArgs,
  UpdateManyAgentArgs,
  DeleteOneAgentArgs,
  DeleteManyAgentArgs,
} from '../generated/prismagraphql/agent';


import { AffectedRows } from '../generated/prismagraphql/prisma';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { AgentCrudService } from './agent.crud.service';

// import { CognitoAuthGuard } from "src/shared/guards/cognito-auth/cognito-auth.guard";
// import { RolesGuard } from "src/shared/guards/roles/roles.guard";
// import { UseGuards } from "@nestjs/common";

@Resolver(() => Agent)
export class AgentResolver {
  constructor(private readonly agentService: AgentCrudService) {}

  @Query(() => Agent, { nullable: false })
  findFirstAgent(@Args() args: FindFirstAgentArgs) {
    return this.agentService.findFirst(args);
  }

  @Query(() => Agent, { nullable: false })
  findUniqueAgent(@Args() args: FindUniqueAgentArgs) {
    return this.agentService.findUnique(args);
  }

  @Query(() => [Agent], { nullable: false })
  listAgents(@Args() args: FindManyAgentArgs) {
    return this.agentService.findMany(args);
  }

  @Query(() => [AgentGroupBy], { nullable: false })
  groupByAgent(@Args() args: AgentGroupByArgs) {
    return this.agentService.groupBy(args);
  }

  @Query(() => AggregateAgent, { nullable: false })
  aggregateAgent(@Args() args: AgentAggregateArgs) {
    return this.agentService.aggregate(args);
  }

  @Mutation(() => Agent, { nullable: true })
  createAgent(@Args() args: CreateOneAgentArgs) {
    return this.agentService.create(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  createManyAgent(@Args() args: CreateManyAgentArgs) {
    return this.agentService.createMany(args);
  }

  @Mutation(() => Agent, { nullable: true })
  updateAgent(@Args() args: UpdateOneAgentArgs) {
    return this.agentService.update(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  updateManyAgent(@Args() args: UpdateManyAgentArgs) {
    return this.agentService.updateMany(args);
  }

  @Mutation(() => Agent, { nullable: true })
  deleteAgent(@Args() args: DeleteOneAgentArgs) {
    return this.agentService.delete(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  deleteManyAgent(@Args() args: DeleteManyAgentArgs) {
    return this.agentService.deleteMany(args);
  }
}
