import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    Put,
    Delete,
  } from '@nestjs/common';
  import { WorkOrderService } from '../providers';
  import { WorkOrder as WorkOrderModel, Location as LocationModel } from '@prisma/client';
  
  @Controller()
  export class WorkOrderController {
    constructor(
      private readonly workOrderService: WorkOrderService
    ) {}
  
    @Get('workorder/:id')
    async getWorkOrderById(@Param('id') id: string): Promise<WorkOrderModel> {
      return this.workOrderService.WorkOrder({ id: String(id) });
    }
  
    @Get('workorders')
    async getWorkOrders(): Promise<WorkOrderModel[]> {
      // return this.workOrderService.WorkOrders({
      //   where: { published: true },
      // });
      return this.workOrderService.WorkOrders({
          
      });
    }
  
    @Get('filtered-workorders/:searchString')
    async getFilteredWorkorders(
      @Param('searchString') searchString: string,
    ): Promise<WorkOrderModel[]> {
      return this.workOrderService.WorkOrders({
        where: {
          OR: [
            {
              title: { contains: searchString },
            }
          ],
        },
      });
    }
  
    @Post('workorder')
    async createWorkOrder(
      @Body() WorkOrderData: { title: string; description?: string },
    ): Promise<WorkOrderModel> {
      const { title, description } = WorkOrderData;
      return this.workOrderService.createWorkOrder({
        title,
        description
      });
    }
  
    // @Put('publish/:id')
    // async publishPost(@Param('id') id: string): Promise<WorkOrderModel> {
    //   return this.workOrderService.updateWorkOrder({
    //     where: { id: String(id) },
    //     data: { published: true },
    //   });
    // }
  
    @Delete('workorder/:id')
    async deleteWorkOrder(@Param('id') id: string): Promise<WorkOrderModel> {
      return this.workOrderService.deleteWorkOrder({ id: String(id) });
    }
  }