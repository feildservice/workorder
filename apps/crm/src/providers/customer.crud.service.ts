import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { BaseCrudService } from './basecrud.service';
import {
  CreateManyCustomerArgs,
  CreateOneCustomerArgs,
  DeleteManyCustomerArgs,
  DeleteOneCustomerArgs,
  FindFirstCustomerArgs,
  FindManyCustomerArgs,
  FindUniqueCustomerArgs,
  UpdateManyCustomerArgs,
  UpdateOneCustomerArgs,
  Customer,
  CustomerAggregateArgs,
  CustomerGroupByArgs,
} from '../generated/prismagraphql/customer';

@Injectable()
export class CustomerCrudService extends BaseCrudService<
  Customer,
  FindFirstCustomerArgs,
  FindUniqueCustomerArgs,
  FindManyCustomerArgs,
  CustomerGroupByArgs,
  CustomerAggregateArgs,
  CreateOneCustomerArgs,
  CreateManyCustomerArgs,
  UpdateOneCustomerArgs,
  UpdateManyCustomerArgs,
  DeleteOneCustomerArgs,
  DeleteManyCustomerArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
