import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    Put,
    Delete,
  } from '@nestjs/common';
  import { CustomerService } from '../providers';
  import { Customer as CustomerModel, Location as LocationModel } from '@prisma/client';
  
  @Controller()
  export class CustomerController {
    constructor(
      private readonly customerService: CustomerService
    ) {}
  
    @Get('customer/:id')
    async getCustomerById(@Param('id') id: string): Promise<CustomerModel> {
      return this.customerService.Customer({ id: String(id) });
    }
  
    @Get('customers')
    async getCustomers(): Promise<CustomerModel[]> {
      // return this.workOrderService.WorkOrders({
      //   where: { published: true },
      // });
      return this.customerService.Customers({
          
      });
    }
  
    @Get('filtered-customers/:searchString')
    async getFilteredCustomers(
      @Param('searchString') searchString: string,
    ): Promise<CustomerModel[]> {
      return this.customerService.Customers({
        where: {
          OR: [
            {
              title: { contains: searchString },
            }
          ],
        },
      });
    }
  
    @Post('customer')
    async createCustomer(
      @Body() CustomerData: { title: string; description?: string },
    ): Promise<CustomerModel> {
      const { title, description } = CustomerData;
      return this.customerService.createCustomer({
        title,
        description
      });
    }
    
    @Delete('customer/:id')
    async deleteCustomer(@Param('id') id: string): Promise<CustomerModel> {
      return this.customerService.deleteCustomer({ id: String(id) });
    }
  }