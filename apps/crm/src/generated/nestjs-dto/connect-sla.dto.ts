
// @@generated by @carlundmahren/prisma-generator-nestjs-dto@1.17.511. 2024-08-14
// modification to this file may be overwritten when regenerating.
import {IsInt,IsNotEmpty} from 'class-validator'
import {ApiProperty} from '@nestjs/swagger'




export class ConnectSlaDto {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
required: false,
})
@IsNotEmpty()
@IsInt()
id?: number ;

}
