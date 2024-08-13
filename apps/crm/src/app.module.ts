import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';
import * as controllers from './controllers';
import * as providers from './providers';

@Module({
  imports: [
    LoggerModule.forRoot()
  ],
  controllers: [
    controllers.CustomerController
  ],
  providers: [
    providers.CustomerService, 
    providers.PrismaService
  ],
})
export class AppModule {}
