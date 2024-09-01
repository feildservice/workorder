import {
  Contact,
  FindFirstContactArgs,
  //FindUniqueContactArgs,
  // FindManyContactArgs,
  ContactGroupBy,
  ContactGroupByArgs,
  AggregateContact,
  ContactAggregateArgs,
  CreateOneContactArgs,
  CreateManyContactArgs,
  UpdateOneContactArgs,
  UpdateManyContactArgs,
  DeleteOneContactArgs,
  DeleteManyContactArgs,
} from '../generated/prismagraphql/contact';
import {
  FindManyContactIncludeArgs,
  FindUniqueContactIncludeArgs,
} from '../types/types';
import { AffectedRows } from '../generated/prismagraphql/prisma';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { ContactCrudService } from './contact.crud.service';

// import { CognitoAuthGuard } from "src/shared/guards/cognito-auth/cognito-auth.guard";
// import { RolesGuard } from "src/shared/guards/roles/roles.guard";
// import { UseGuards } from "@nestjs/common";

@Resolver(() => Contact)
export class ContactResolver {
  constructor(private readonly contactService: ContactCrudService) {}

  @Query(() => Contact, { nullable: false })
  findFirstContact(@Args() args: FindFirstContactArgs) {
    return this.contactService.findFirst(args);
  }

  @Query(() => Contact, { nullable: false })
  findUniqueContact(@Args() args: FindUniqueContactIncludeArgs) {
    return this.contactService.findUnique(args);
  }

  @Query(() => [Contact], { nullable: false })
  listContacts(@Args() args: FindManyContactIncludeArgs) {
    return this.contactService.findMany(args);
  }

  @Query(() => [ContactGroupBy], { nullable: false })
  groupByContact(@Args() args: ContactGroupByArgs) {
    return this.contactService.groupBy(args);
  }

  @Query(() => AggregateContact, { nullable: false })
  aggregateContact(@Args() args: ContactAggregateArgs) {
    return this.contactService.aggregate(args);
  }

  @Mutation(() => Contact, { nullable: true })
  createContact(@Args() args: CreateOneContactArgs) {
    return this.contactService.create(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  createManyContact(@Args() args: CreateManyContactArgs) {
    return this.contactService.createMany(args);
  }

  @Mutation(() => Contact, { nullable: true })
  updateContact(@Args() args: UpdateOneContactArgs) {
    return this.contactService.update(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  updateManyContact(@Args() args: UpdateManyContactArgs) {
    return this.contactService.updateMany(args);
  }

  @Mutation(() => Contact, { nullable: true })
  deleteContact(@Args() args: DeleteOneContactArgs) {
    return this.contactService.delete(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  deleteManyContact(@Args() args: DeleteManyContactArgs) {
    return this.contactService.deleteMany(args);
  }
}
