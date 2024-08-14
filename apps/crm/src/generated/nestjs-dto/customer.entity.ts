
// @@generated by @carlundmahren/prisma-generator-nestjs-dto@1.17.511. 2024-08-14
// modification to this file may be overwritten when regenerating.
import {ApiProperty} from '@nestjs/swagger'
import {Contact} from './contact.entity'
import {Address} from './address.entity'
import {Hierarchy} from './hierarchy.entity'
import {Service} from './service.entity'
import {Agreement} from './agreement.entity'


export class Customer {
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
name!: string ;

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
company!: string ;

@ApiProperty({
  isArray: true,
  required: false,
})
contacts?: Contact[] ;

@ApiProperty({
  isArray: true,
  required: false,
})
addresses?: Address[] ;

@ApiProperty({
  required: false,
  nullable: true,
})
hierarchy?: Hierarchy  | null;

@ApiProperty({
  type: 'integer',
  format: 'int32',
  required: false,
  nullable: true,
})
hierarchyId!: number  | null;

@ApiProperty({
  isArray: true,
  required: false,
})
services?: Service[] ;

@ApiProperty({
  isArray: true,
  required: false,
})
agreements?: Agreement[] ;

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
