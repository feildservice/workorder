import {
  Organization,
  FindFirstOrganizationArgs,
  FindUniqueOrganizationArgs,
  FindManyOrganizationArgs,
  OrganizationGroupBy,
  OrganizationGroupByArgs,
  AggregateOrganization,
  OrganizationAggregateArgs,
  CreateOneOrganizationArgs,
  CreateManyOrganizationArgs,
  UpdateOneOrganizationArgs,
  UpdateManyOrganizationArgs,
  DeleteOneOrganizationArgs,
  DeleteManyOrganizationArgs,
} from '../generated/prismagraphql/organization';

import { AffectedRows } from '../generated/prismagraphql/prisma';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { OrganizationCrudService } from './organization.crud.service';

// import { CognitoAuthGuard } from "src/shared/guards/cognito-auth/cognito-auth.guard";
// import { RolesGuard } from "src/shared/guards/roles/roles.guard";
// import { UseGuards } from "@nestjs/common";

@Resolver(() => Organization)
export class OrganizationResolver {
  constructor(private readonly organizationService: OrganizationCrudService) {}

  @Query(() => Organization, { nullable: false })
  findFirstOrganization(@Args() args: FindFirstOrganizationArgs) {
    return this.organizationService.findFirst(args);
  }

  @Query(() => Organization, { nullable: false })
  findUniqueOrganization(@Args() args: FindUniqueOrganizationArgs) {
    return this.organizationService.findUnique(args);
  }

  @Query(() => [Organization], { nullable: false })
  listOrganizations(@Args() args: FindManyOrganizationArgs) {
    return this.organizationService.findMany(args);
  }

  @Query(() => [OrganizationGroupBy], { nullable: false })
  groupByOrganization(@Args() args: OrganizationGroupByArgs) {
    return this.organizationService.groupBy(args);
  }

  @Query(() => AggregateOrganization, { nullable: false })
  aggregateOrganization(@Args() args: OrganizationAggregateArgs) {
    return this.organizationService.aggregate(args);
  }

  @Mutation(() => Organization, { nullable: true })
  createOrganization(@Args() args: CreateOneOrganizationArgs) {
    return this.organizationService.create(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  createManyOrganization(@Args() args: CreateManyOrganizationArgs) {
    return this.organizationService.createMany(args);
  }

  @Mutation(() => Organization, { nullable: true })
  updateOrganization(@Args() args: UpdateOneOrganizationArgs) {
    return this.organizationService.update(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  updateManyOrganization(@Args() args: UpdateManyOrganizationArgs) {
    return this.organizationService.updateMany(args);
  }

  @Mutation(() => Organization, { nullable: true })
  deleteOrganization(@Args() args: DeleteOneOrganizationArgs) {
    return this.organizationService.delete(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  deleteManyOrganization(@Args() args: DeleteManyOrganizationArgs) {
    return this.organizationService.deleteMany(args);
  }
}
