
// @@generated by @carlundmahren/prisma-generator-nestjs-dto@1.17.511. 2024-08-14
// modification to this file may be overwritten when regenerating.
import {IsNotEmpty,IsString} from 'class-validator'
import {ApiProperty} from '@nestjs/swagger'




export class CreateHierarchyDto {
  @ApiProperty({
required: true,
})
@IsNotEmpty()
@IsString()
level!: string ;

}
