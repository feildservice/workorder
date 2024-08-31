import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { BaseCrudService } from './basecrud.service';
import {
  CreateManyContactArgs,
  CreateOneContactArgs,
  DeleteManyContactArgs,
  DeleteOneContactArgs,
  FindFirstContactArgs,
  // FindManyCustomerArgs,
  // FindUniqueContactArgs,
  UpdateManyContactArgs,
  UpdateOneContactArgs,
  Contact,
  ContactAggregateArgs,
  ContactGroupByArgs,
} from '../generated/prismagraphql/contact';
import {
  FindManyContactIncludeArgs,
  FindUniqueContactIncludeArgs,
} from '../types/types';

@Injectable()
export class ContactCrudService extends BaseCrudService<
  Contact,
  FindFirstContactArgs,
  FindUniqueContactIncludeArgs,
  FindManyContactIncludeArgs,
  ContactGroupByArgs,
  ContactAggregateArgs,
  CreateOneContactArgs,
  CreateManyContactArgs,
  UpdateOneContactArgs,
  UpdateManyContactArgs,
  DeleteOneContactArgs,
  DeleteManyContactArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
