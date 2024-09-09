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
  import { Customer as CustomerModel } from '@prisma/client';
  import { CreateCustomerDto } from '../generated/nestjs-dto/create-customer.dto';
import { Address } from 'src/generated/nestjs-dto/address.entity';
  
  @Controller()
  export class CustomerController {
    constructor(
      private readonly customerService: CustomerService
    ) {}
  
    @Get('customer/:id')
    async getCustomerById(@Param('id') id: number): Promise<CustomerModel> {
      return this.customerService.Customer({ id: id });
    }
  
    @Get('customers')
    async getCustomers(): Promise<CustomerModel[]> {
      return this.customerService.Customers({        
        where:{}        
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
              name: { contains: searchString },
            }
          ],
        },
      });
    }
  
    // @Post('customer')
    // async createCustomer(
    //   @Body() customerData: CreateCustomerDto,
    // ): Promise<CustomerModel> {
    //   return this.customerService.createCustomer(
    //     customerData as CustomerModel
    //   );
    // }
    
    // @Delete('customer/:id')
    // async deleteCustomer(@Param('id') id: number): Promise<CustomerModel> {
    //   return this.customerService.deleteCustomer({ id: id });
    // }
  }