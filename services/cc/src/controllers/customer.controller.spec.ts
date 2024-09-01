import { Test, TestingModule } from '@nestjs/testing';
import { CustomerController } from './cutomer.controller';
import { CustomerService } from '../providers';

describe('AppController', () => {
  let customerController: CustomerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CustomerController],
      providers: [CustomerService],
    }).compile();

    customerController = app.get<CustomerController>(CustomerController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(customerController.getCustomers()).toBe('Hello World!');
    });
  });
});
