import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { WorkOrder, Location, Prisma } from '@prisma/client';

@Injectable()
export class WorkOrderService {
  constructor(private prisma: PrismaService) {}

  async WorkOrder(
    workOrderWhereUniqueInput: Prisma.WorkOrderWhereUniqueInput,
  ): Promise<WorkOrder | null> {
    return this.prisma.workOrder.findUnique({
      where: workOrderWhereUniqueInput,
    });
  }

  async WorkOrders(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.WorkOrderWhereUniqueInput;
    where?: Prisma.WorkOrderWhereInput;
    orderBy?: Prisma.WorkOrderOrderByWithRelationInput;
  }): Promise<WorkOrder[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.workOrder.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }
  
  async createWorkOrder(data: Prisma.WorkOrderCreateInput): Promise<WorkOrder> {
    return this.prisma.workOrder.create({
      data,
    });
  }

  async updateWorkOrder(params: {
    where: Prisma.WorkOrderWhereUniqueInput;
    data: Prisma.WorkOrderUpdateInput;
  }): Promise<WorkOrder> {
    const { where, data } = params;
    return this.prisma.workOrder.update({
      data,
      where,
    });
  }

  async deleteWorkOrder(where: Prisma.WorkOrderWhereUniqueInput): Promise<WorkOrder> {
    return this.prisma.workOrder.delete({
      where,
    });
  }
}