
// @@generated by @carlundmahren/prisma-generator-nestjs-dto@1.17.511. 2024-08-14
// modification to this file may be overwritten when regenerating.
import {ApiProperty} from '@nestjs/swagger'
import {Customer} from './customer.entity'


export class Contact {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
  required: false,
  nullable: true,
})
id!: number  | null;

@ApiProperty({
  required: false,
})
firstName!: string ;

@ApiProperty({
  required: false,
})
lastName!: string ;

@ApiProperty({
  required: false,
  nullable: true,
})
email!: string  | null;

@ApiProperty({
  required: false,
  nullable: true,
})
phone!: string  | null;

@ApiProperty({
  required: false,
})
customer?: Customer ;

@ApiProperty({
  type: 'integer',
  format: 'int32',
  required: false,
})
customerId!: number ;

@ApiProperty({
  required: false,
})
isPrimary!: boolean ;

@ApiProperty({
  type: 'string',
  format: 'date-time',
  required: false,
})
createdAt!: Date ;

@ApiProperty({
  type: 'string',
  format: 'date-time',
  required: false,
})
updatedAt!: Date ;

}
