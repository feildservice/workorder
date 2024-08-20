import {
    Customer,
    FindFirstCustomerArgs,
    FindUniqueCustomerArgs,
    FindManyCustomerArgs,
    CustomerGroupBy,
    CustomerGroupByArgs,
    AggregateCustomer,
    CustomerAggregateArgs,
    CreateOneCustomerArgs,
    CreateManyCustomerArgs,
    UpdateOneCustomerArgs,
    UpdateManyCustomerArgs,
    DeleteOneCustomerArgs,
    DeleteManyCustomerArgs,
} from "../generated/prismagraphql/customer";
import { AffectedRows } from "../generated/prismagraphql/prisma";
import { Resolver, Query, Args, Mutation, ResolveReference } from "@nestjs/graphql";
import { CustomerCrudService } from "./customer.crud.service";
// import { CognitoAuthGuard } from "src/shared/guards/cognito-auth/cognito-auth.guard";
// import { RolesGuard } from "src/shared/guards/roles/roles.guard";
// import { UseGuards } from "@nestjs/common";


@Resolver((of) => Customer)
export class CustomerResolver {
    constructor(private readonly customerService: CustomerCrudService) { }

    @Query(() => Customer, { nullable: false })
    findFirstCustomer(@Args() args: FindFirstCustomerArgs) {
        return this.customerService.findFirst(args);
    }

    @Query(() => Customer, { nullable: false })
    findUniqueCustomer(@Args() args: FindUniqueCustomerArgs) {
      return this.customerService.findUnique(args);
    }

    @Query(() => [Customer], { nullable: false })
    listCustomers(@Args() args: FindManyCustomerArgs) {
      return this.customerService.findMany(args);
    }

    @Query(() => [CustomerGroupBy], { nullable: false })
    groupByCustomer(@Args() args: CustomerGroupByArgs) {
      return this.customerService.groupBy(args);
    }

    @Query(() => AggregateCustomer, { nullable: false })
    aggregateCustomer(@Args() args: CustomerAggregateArgs) {
      return this.customerService.aggregate(args);
    }

    @Mutation(() => Customer, { nullable: true })
    createCustomer(@Args() args: CreateOneCustomerArgs) {
      return this.customerService.create(args);
    }

    @Mutation(() => AffectedRows, { nullable: true })
    createManyCustomer(@Args() args: CreateManyCustomerArgs) {
      return this.customerService.createMany(args);
    }

    @Mutation(() => Customer, { nullable: true })
    updateCustomer(@Args() args: UpdateOneCustomerArgs) {
      return this.customerService.update(args);
    }

    @Mutation(() => AffectedRows, { nullable: true })
    updateManyCustomer(@Args() args: UpdateManyCustomerArgs) {
      return this.customerService.updateMany(args);
    }

    @Mutation(() => Customer, { nullable: true })
    deleteCustomer(@Args() args: DeleteOneCustomerArgs) {
      return this.customerService.delete(args);
    }

    @Mutation(() => AffectedRows, { nullable: true })
    deleteManyCustomer(@Args() args: DeleteManyCustomerArgs) {
      return this.customerService.deleteMany(args);
    }
}