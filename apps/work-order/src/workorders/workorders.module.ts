import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';

// import { Sampletable1 } from '#entity/sampledb1';
// import { Sampletable2 } from '#entity/sampledb2';
import * as controllers from './controllers';
import * as providers from './providers';
// import { FoobarModule } from '../shared/foobar';

@Module({
  imports: [
    // FoobarModule, // Shared Module
  ],
  controllers: Object.values(controllers),
  providers: Object.values(providers),
})
export class WorkOrdersModule {}