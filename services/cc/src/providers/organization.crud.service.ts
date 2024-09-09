import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { BaseCrudService } from './basecrud.service';
import {
  CreateManyOrganizationArgs,
  CreateOneOrganizationArgs,
  DeleteManyOrganizationArgs,
  DeleteOneOrganizationArgs,
  FindFirstOrganizationArgs,
  FindManyOrganizationArgs,
  FindUniqueOrganizationArgs,
  UpdateManyOrganizationArgs,
  UpdateOneOrganizationArgs,
  Organization,
  OrganizationAggregateArgs,
  OrganizationGroupByArgs,
} from '../generated/prismagraphql/organization';


@Injectable()
export class OrganizationCrudService extends BaseCrudService<
  Organization,
  FindFirstOrganizationArgs,
  FindUniqueOrganizationArgs,
  FindManyOrganizationArgs,
  OrganizationGroupByArgs,
  OrganizationAggregateArgs,
  CreateOneOrganizationArgs,
  CreateManyOrganizationArgs,
  UpdateOneOrganizationArgs,
  UpdateManyOrganizationArgs,
  DeleteOneOrganizationArgs,
  DeleteManyOrganizationArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
