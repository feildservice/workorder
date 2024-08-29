import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { InputType } from '@nestjs/graphql';
import { FindManyCustomerArgs } from '../generated/prismagraphql/customer';

@InputType()
export class IncludeCustomerInput {
  @Field(() => Boolean, { nullable: true })
  logo?: false;

  @Field(() => Boolean, { nullable: true })
  addresses?: false;

  @Field(() => Boolean, { nullable: true })
  contacts?: false;
}

@ArgsType()
export class FindManyCustomerIncludeArgs extends FindManyCustomerArgs {
  @Field(() => IncludeCustomerInput, { nullable: true })
  @Type(() => IncludeCustomerInput)
  include?: IncludeCustomerInput;
}
