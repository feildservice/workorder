import {
  ServiceTerritory,
  FindFirstServiceTerritoryArgs,
  FindUniqueServiceTerritoryArgs,
  FindManyServiceTerritoryArgs,
  ServiceTerritoryGroupBy,
  ServiceTerritoryGroupByArgs,
  AggregateServiceTerritory,
  ServiceTerritoryAggregateArgs,
  CreateOneServiceTerritoryArgs,
  CreateManyServiceTerritoryArgs,
  UpdateOneServiceTerritoryArgs,
  UpdateManyServiceTerritoryArgs,
  DeleteOneServiceTerritoryArgs,
  DeleteManyServiceTerritoryArgs,
} from '../generated/prismagraphql/service-territory';


import { AffectedRows } from '../generated/prismagraphql/prisma';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { ServiceTerritoryCrudService } from './service-territory.crud.service';

// import { CognitoAuthGuard } from "src/shared/guards/cognito-auth/cognito-auth.guard";
// import { RolesGuard } from "src/shared/guards/roles/roles.guard";
// import { UseGuards } from "@nestjs/common";

@Resolver(() => ServiceTerritory)
export class ServiceTerritoryResolver {
  constructor(private readonly serviceTerritoryService: ServiceTerritoryCrudService) {}

  @Query(() => ServiceTerritory, { nullable: false })
  findFirstServiceTerritory(@Args() args: FindFirstServiceTerritoryArgs) {
    return this.serviceTerritoryService.findFirst(args);
  }

  @Query(() => ServiceTerritory, { nullable: false })
  findUniqueServiceTerritory(@Args() args: FindUniqueServiceTerritoryArgs) {
    return this.serviceTerritoryService.findUnique(args);
  }

  @Query(() => [ServiceTerritory], { nullable: false })
  listServiceTerritorys(@Args() args: FindManyServiceTerritoryArgs) {
    return this.serviceTerritoryService.findMany(args);
  }

  @Query(() => [ServiceTerritoryGroupBy], { nullable: false })
  groupByServiceTerritory(@Args() args: ServiceTerritoryGroupByArgs) {
    return this.serviceTerritoryService.groupBy(args);
  }

  @Query(() => AggregateServiceTerritory, { nullable: false })
  aggregateServiceTerritory(@Args() args: ServiceTerritoryAggregateArgs) {
    return this.serviceTerritoryService.aggregate(args);
  }

  @Mutation(() => ServiceTerritory, { nullable: true })
  createServiceTerritory(@Args() args: CreateOneServiceTerritoryArgs) {
    return this.serviceTerritoryService.create(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  createManyServiceTerritory(@Args() args: CreateManyServiceTerritoryArgs) {
    return this.serviceTerritoryService.createMany(args);
  }

  @Mutation(() => ServiceTerritory, { nullable: true })
  updateServiceTerritory(@Args() args: UpdateOneServiceTerritoryArgs) {
    return this.serviceTerritoryService.update(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  updateManyServiceTerritory(@Args() args: UpdateManyServiceTerritoryArgs) {
    return this.serviceTerritoryService.updateMany(args);
  }

  @Mutation(() => ServiceTerritory, { nullable: true })
  deleteServiceTerritory(@Args() args: DeleteOneServiceTerritoryArgs) {
    return this.serviceTerritoryService.delete(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  deleteManyServiceTerritory(@Args() args: DeleteManyServiceTerritoryArgs) {
    return this.serviceTerritoryService.deleteMany(args);
  }
}
