import { Module } from '@nestjs/common';

import { SampleModule } from './sample';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
