import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { InputType } from '@nestjs/graphql';
import {
  FindManyCustomerArgs,
  FindUniqueCustomerArgs
} from '../generated/prismagraphql/customer';

import {
  FindManyContactArgs,
  FindUniqueContactArgs
} from '../generated/prismagraphql/contact';


@InputType()
export class IncludeCustomerInput {
  @Field(() => Boolean, { nullable: true })
  logo?: false;

  @Field(() => Boolean, { nullable: true })
  addresses?: false;

  @Field(() => Boolean, { nullable: true })
  contacts?: false;
}

@InputType()
export class IncludeContactInput {
  @Field(() => Boolean, { nullable: true })
  avatar?: false
}

@ArgsType()
export class FindManyCustomerIncludeArgs extends FindManyCustomerArgs {
  @Field(() => IncludeCustomerInput, { nullable: true })
  @Type(() => IncludeCustomerInput)
  include?: IncludeCustomerInput;
}

@ArgsType()
export class FindUniqueCustomerIncludeArgs extends FindUniqueCustomerArgs {
  @Field(() => IncludeCustomerInput, { nullable: true })
  @Type(() => IncludeCustomerInput)
  include?: IncludeCustomerInput;
}

@ArgsType()
export class FindManyContactIncludeArgs extends FindManyContactArgs {
  @Field(() => IncludeContactInput, { nullable: true })
  @Type(() => IncludeContactInput)
  include?: IncludeContactInput;
}

@ArgsType()
export class FindUniqueContactIncludeArgs extends FindUniqueContactArgs {
  @Field(() => IncludeContactInput, { nullable: true })
  @Type(() => IncludeContactInput)
  include?: IncludeContactInput;
}
