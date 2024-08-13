import { Test, TestingModule } from '@nestjs/testing';
import { WorkOrderController } from './cutomer.controller';
import { WorkOrderService } from '../providers';

describe('AppController', () => {
  let workOrderController: WorkOrderController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [WorkOrderController],
      providers: [WorkOrderService],
    }).compile();

    workOrderController = app.get<WorkOrderController>(WorkOrderController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(workOrderController.getWorkOrders()).toBe('Hello World!');
    });
  });
});
