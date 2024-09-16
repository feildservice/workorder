/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any };
};

export type Address = {
  __typename?: "Address";
  city: Scalars["String"]["output"];
  country: Scalars["String"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  customer: Customer;
  customerId: Scalars["Int"]["output"];
  id: Scalars["ID"]["output"];
  isPrimary: Scalars["Boolean"]["output"];
  latitude?: Maybe<Scalars["Float"]["output"]>;
  longitude?: Maybe<Scalars["Float"]["output"]>;
  state: Scalars["String"]["output"];
  street: Scalars["String"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
  zipcode: Scalars["String"]["output"];
};

export type AddressCreateManyCustomerInput = {
  city: Scalars["String"]["input"];
  country: Scalars["String"]["input"];
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  isPrimary: Scalars["Boolean"]["input"];
  latitude?: InputMaybe<Scalars["Float"]["input"]>;
  longitude?: InputMaybe<Scalars["Float"]["input"]>;
  state: Scalars["String"]["input"];
  street: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  zipcode: Scalars["String"]["input"];
};

export type AddressCreateManyCustomerInputEnvelope = {
  data: Array<AddressCreateManyCustomerInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type AddressCreateNestedManyWithoutCustomerInput = {
  connect?: InputMaybe<Array<AddressWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<AddressCreateOrConnectWithoutCustomerInput>
  >;
  create?: InputMaybe<Array<AddressCreateWithoutCustomerInput>>;
  createMany?: InputMaybe<AddressCreateManyCustomerInputEnvelope>;
};

export type AddressCreateOrConnectWithoutCustomerInput = {
  create: AddressCreateWithoutCustomerInput;
  where: AddressWhereUniqueInput;
};

export type AddressCreateWithoutCustomerInput = {
  city: Scalars["String"]["input"];
  country: Scalars["String"]["input"];
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  isPrimary: Scalars["Boolean"]["input"];
  latitude?: InputMaybe<Scalars["Float"]["input"]>;
  longitude?: InputMaybe<Scalars["Float"]["input"]>;
  state: Scalars["String"]["input"];
  street: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  zipcode: Scalars["String"]["input"];
};

export type AddressListRelationFilter = {
  every?: InputMaybe<AddressWhereInput>;
  none?: InputMaybe<AddressWhereInput>;
  some?: InputMaybe<AddressWhereInput>;
};

export type AddressOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AddressScalarWhereInput = {
  AND?: InputMaybe<Array<AddressScalarWhereInput>>;
  NOT?: InputMaybe<Array<AddressScalarWhereInput>>;
  OR?: InputMaybe<Array<AddressScalarWhereInput>>;
  city?: InputMaybe<StringFilter>;
  country?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  customerId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  isPrimary?: InputMaybe<BoolFilter>;
  latitude?: InputMaybe<FloatNullableFilter>;
  longitude?: InputMaybe<FloatNullableFilter>;
  state?: InputMaybe<StringFilter>;
  street?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  zipcode?: InputMaybe<StringFilter>;
};

export type AddressUpdateManyMutationInput = {
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  country?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  isPrimary?: InputMaybe<BoolFieldUpdateOperationsInput>;
  latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  state?: InputMaybe<StringFieldUpdateOperationsInput>;
  street?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  zipcode?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AddressUpdateManyWithWhereWithoutCustomerInput = {
  data: AddressUpdateManyMutationInput;
  where: AddressScalarWhereInput;
};

export type AddressUpdateManyWithoutCustomerNestedInput = {
  connect?: InputMaybe<Array<AddressWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<AddressCreateOrConnectWithoutCustomerInput>
  >;
  create?: InputMaybe<Array<AddressCreateWithoutCustomerInput>>;
  createMany?: InputMaybe<AddressCreateManyCustomerInputEnvelope>;
  delete?: InputMaybe<Array<AddressWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AddressScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AddressWhereUniqueInput>>;
  set?: InputMaybe<Array<AddressWhereUniqueInput>>;
  update?: InputMaybe<Array<AddressUpdateWithWhereUniqueWithoutCustomerInput>>;
  updateMany?: InputMaybe<
    Array<AddressUpdateManyWithWhereWithoutCustomerInput>
  >;
  upsert?: InputMaybe<Array<AddressUpsertWithWhereUniqueWithoutCustomerInput>>;
};

export type AddressUpdateWithWhereUniqueWithoutCustomerInput = {
  data: AddressUpdateWithoutCustomerInput;
  where: AddressWhereUniqueInput;
};

export type AddressUpdateWithoutCustomerInput = {
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  country?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  isPrimary?: InputMaybe<BoolFieldUpdateOperationsInput>;
  latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  state?: InputMaybe<StringFieldUpdateOperationsInput>;
  street?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  zipcode?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AddressUpsertWithWhereUniqueWithoutCustomerInput = {
  create: AddressCreateWithoutCustomerInput;
  update: AddressUpdateWithoutCustomerInput;
  where: AddressWhereUniqueInput;
};

export type AddressWhereInput = {
  AND?: InputMaybe<Array<AddressWhereInput>>;
  NOT?: InputMaybe<Array<AddressWhereInput>>;
  OR?: InputMaybe<Array<AddressWhereInput>>;
  city?: InputMaybe<StringFilter>;
  country?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  customer?: InputMaybe<CustomerRelationFilter>;
  customerId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  isPrimary?: InputMaybe<BoolFilter>;
  latitude?: InputMaybe<FloatNullableFilter>;
  longitude?: InputMaybe<FloatNullableFilter>;
  state?: InputMaybe<StringFilter>;
  street?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  zipcode?: InputMaybe<StringFilter>;
};

export type AddressWhereUniqueInput = {
  AND?: InputMaybe<Array<AddressWhereInput>>;
  NOT?: InputMaybe<Array<AddressWhereInput>>;
  OR?: InputMaybe<Array<AddressWhereInput>>;
  city?: InputMaybe<StringFilter>;
  country?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  customer?: InputMaybe<CustomerRelationFilter>;
  customerId?: InputMaybe<IntFilter>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  isPrimary?: InputMaybe<BoolFilter>;
  latitude?: InputMaybe<FloatNullableFilter>;
  longitude?: InputMaybe<FloatNullableFilter>;
  state?: InputMaybe<StringFilter>;
  street?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  zipcode?: InputMaybe<StringFilter>;
};

export type AffectedRows = {
  __typename?: "AffectedRows";
  count: Scalars["Int"]["output"];
};

export type Agent = {
  __typename?: "Agent";
  _count: AgentCount;
  agentType: AgentType;
  calendars?: Maybe<Array<WorkCalendar>>;
  createdAt: Scalars["DateTime"]["output"];
  designation?: Maybe<Scalars["String"]["output"]>;
  email: Scalars["String"]["output"];
  firstName: Scalars["String"]["output"];
  gender: Gender;
  id: Scalars["ID"]["output"];
  lastName: Scalars["String"]["output"];
  middleName?: Maybe<Scalars["String"]["output"]>;
  phone?: Maybe<Scalars["String"]["output"]>;
  serviceTerritories?: Maybe<Array<AgentTerritory>>;
  title: Scalars["String"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
};

export type AgentCount = {
  __typename?: "AgentCount";
  calendars: Scalars["Int"]["output"];
  serviceTerritories: Scalars["Int"]["output"];
};

export type AgentCreateNestedOneWithoutServiceTerritoriesInput = {
  connect?: InputMaybe<AgentWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AgentCreateOrConnectWithoutServiceTerritoriesInput>;
  create?: InputMaybe<AgentCreateWithoutServiceTerritoriesInput>;
};

export type AgentCreateOrConnectWithoutServiceTerritoriesInput = {
  create: AgentCreateWithoutServiceTerritoriesInput;
  where: AgentWhereUniqueInput;
};

export type AgentCreateWithoutServiceTerritoriesInput = {
  agentType: AgentType;
  calendars?: InputMaybe<WorkCalendarCreateNestedManyWithoutAgentInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  designation?: InputMaybe<Scalars["String"]["input"]>;
  email: Scalars["String"]["input"];
  firstName: Scalars["String"]["input"];
  gender?: InputMaybe<Gender>;
  lastName: Scalars["String"]["input"];
  middleName?: InputMaybe<Scalars["String"]["input"]>;
  phone?: InputMaybe<Scalars["String"]["input"]>;
  title: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type AgentOrderByWithRelationInput = {
  agentType?: InputMaybe<SortOrder>;
  calendars?: InputMaybe<WorkCalendarOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  designation?: InputMaybe<SortOrderInput>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  gender?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  middleName?: InputMaybe<SortOrderInput>;
  phone?: InputMaybe<SortOrderInput>;
  serviceTerritories?: InputMaybe<AgentTerritoryOrderByRelationAggregateInput>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AgentRelationFilter = {
  is?: InputMaybe<AgentWhereInput>;
  isNot?: InputMaybe<AgentWhereInput>;
};

export type AgentTerritory = {
  __typename?: "AgentTerritory";
  agent: Agent;
  agentId: Scalars["Int"]["output"];
  id: Scalars["ID"]["output"];
  subTerritory: SubTerritory;
  subTerritoryId: Scalars["Int"]["output"];
};

export type AgentTerritoryAvgAggregate = {
  __typename?: "AgentTerritoryAvgAggregate";
  agentId?: Maybe<Scalars["Float"]["output"]>;
  id?: Maybe<Scalars["Float"]["output"]>;
  subTerritoryId?: Maybe<Scalars["Float"]["output"]>;
};

export type AgentTerritoryAvgAggregateInput = {
  agentId?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Scalars["Boolean"]["input"]>;
  subTerritoryId?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type AgentTerritoryAvgOrderByAggregateInput = {
  agentId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  subTerritoryId?: InputMaybe<SortOrder>;
};

export type AgentTerritoryCountAggregate = {
  __typename?: "AgentTerritoryCountAggregate";
  _all: Scalars["Int"]["output"];
  agentId: Scalars["Int"]["output"];
  id: Scalars["Int"]["output"];
  subTerritoryId: Scalars["Int"]["output"];
};

export type AgentTerritoryCountAggregateInput = {
  _all?: InputMaybe<Scalars["Boolean"]["input"]>;
  agentId?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Scalars["Boolean"]["input"]>;
  subTerritoryId?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type AgentTerritoryCountOrderByAggregateInput = {
  agentId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  subTerritoryId?: InputMaybe<SortOrder>;
};

export type AgentTerritoryCreateInput = {
  agent: AgentCreateNestedOneWithoutServiceTerritoriesInput;
  subTerritory: SubTerritoryCreateNestedOneWithoutAgentsInput;
};

export type AgentTerritoryCreateManyInput = {
  agentId: Scalars["Int"]["input"];
  id?: InputMaybe<Scalars["Int"]["input"]>;
  subTerritoryId: Scalars["Int"]["input"];
};

export type AgentTerritoryCreateManySubTerritoryInput = {
  agentId: Scalars["Int"]["input"];
  id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type AgentTerritoryCreateManySubTerritoryInputEnvelope = {
  data: Array<AgentTerritoryCreateManySubTerritoryInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type AgentTerritoryCreateNestedManyWithoutSubTerritoryInput = {
  connect?: InputMaybe<Array<AgentTerritoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<AgentTerritoryCreateOrConnectWithoutSubTerritoryInput>
  >;
  create?: InputMaybe<Array<AgentTerritoryCreateWithoutSubTerritoryInput>>;
  createMany?: InputMaybe<AgentTerritoryCreateManySubTerritoryInputEnvelope>;
};

export type AgentTerritoryCreateOrConnectWithoutSubTerritoryInput = {
  create: AgentTerritoryCreateWithoutSubTerritoryInput;
  where: AgentTerritoryWhereUniqueInput;
};

export type AgentTerritoryCreateWithoutSubTerritoryInput = {
  agent: AgentCreateNestedOneWithoutServiceTerritoriesInput;
};

export type AgentTerritoryGroupBy = {
  __typename?: "AgentTerritoryGroupBy";
  _avg?: Maybe<AgentTerritoryAvgAggregate>;
  _count?: Maybe<AgentTerritoryCountAggregate>;
  _max?: Maybe<AgentTerritoryMaxAggregate>;
  _min?: Maybe<AgentTerritoryMinAggregate>;
  _sum?: Maybe<AgentTerritorySumAggregate>;
  agentId: Scalars["Int"]["output"];
  id: Scalars["Int"]["output"];
  subTerritoryId: Scalars["Int"]["output"];
};

export type AgentTerritoryListRelationFilter = {
  every?: InputMaybe<AgentTerritoryWhereInput>;
  none?: InputMaybe<AgentTerritoryWhereInput>;
  some?: InputMaybe<AgentTerritoryWhereInput>;
};

export type AgentTerritoryMaxAggregate = {
  __typename?: "AgentTerritoryMaxAggregate";
  agentId?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  subTerritoryId?: Maybe<Scalars["Int"]["output"]>;
};

export type AgentTerritoryMaxAggregateInput = {
  agentId?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Scalars["Boolean"]["input"]>;
  subTerritoryId?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type AgentTerritoryMaxOrderByAggregateInput = {
  agentId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  subTerritoryId?: InputMaybe<SortOrder>;
};

export type AgentTerritoryMinAggregate = {
  __typename?: "AgentTerritoryMinAggregate";
  agentId?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  subTerritoryId?: Maybe<Scalars["Int"]["output"]>;
};

export type AgentTerritoryMinAggregateInput = {
  agentId?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Scalars["Boolean"]["input"]>;
  subTerritoryId?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type AgentTerritoryMinOrderByAggregateInput = {
  agentId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  subTerritoryId?: InputMaybe<SortOrder>;
};

export type AgentTerritoryOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AgentTerritoryOrderByWithAggregationInput = {
  _avg?: InputMaybe<AgentTerritoryAvgOrderByAggregateInput>;
  _count?: InputMaybe<AgentTerritoryCountOrderByAggregateInput>;
  _max?: InputMaybe<AgentTerritoryMaxOrderByAggregateInput>;
  _min?: InputMaybe<AgentTerritoryMinOrderByAggregateInput>;
  _sum?: InputMaybe<AgentTerritorySumOrderByAggregateInput>;
  agentId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  subTerritoryId?: InputMaybe<SortOrder>;
};

export type AgentTerritoryOrderByWithRelationInput = {
  agent?: InputMaybe<AgentOrderByWithRelationInput>;
  agentId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  subTerritory?: InputMaybe<SubTerritoryOrderByWithRelationInput>;
  subTerritoryId?: InputMaybe<SortOrder>;
};

export enum AgentTerritoryScalarFieldEnum {
  AgentId = "agentId",
  Id = "id",
  SubTerritoryId = "subTerritoryId",
}

export type AgentTerritoryScalarWhereInput = {
  AND?: InputMaybe<Array<AgentTerritoryScalarWhereInput>>;
  NOT?: InputMaybe<Array<AgentTerritoryScalarWhereInput>>;
  OR?: InputMaybe<Array<AgentTerritoryScalarWhereInput>>;
  agentId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  subTerritoryId?: InputMaybe<IntFilter>;
};

export type AgentTerritoryScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<AgentTerritoryScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<AgentTerritoryScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<AgentTerritoryScalarWhereWithAggregatesInput>>;
  agentId?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  subTerritoryId?: InputMaybe<IntWithAggregatesFilter>;
};

export type AgentTerritorySumAggregate = {
  __typename?: "AgentTerritorySumAggregate";
  agentId?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  subTerritoryId?: Maybe<Scalars["Int"]["output"]>;
};

export type AgentTerritorySumAggregateInput = {
  agentId?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Scalars["Boolean"]["input"]>;
  subTerritoryId?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type AgentTerritorySumOrderByAggregateInput = {
  agentId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  subTerritoryId?: InputMaybe<SortOrder>;
};

export type AgentTerritoryUncheckedUpdateManyInput = {
  agentId?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  subTerritoryId?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type AgentTerritoryUncheckedUpdateManyWithoutSubTerritoryInput = {
  agentId?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type AgentTerritoryUpdateInput = {
  agent?: InputMaybe<AgentUpdateOneRequiredWithoutServiceTerritoriesNestedInput>;
  subTerritory?: InputMaybe<SubTerritoryUpdateOneRequiredWithoutAgentsNestedInput>;
};

export type AgentTerritoryUpdateManyWithWhereWithoutSubTerritoryInput = {
  data: AgentTerritoryUncheckedUpdateManyWithoutSubTerritoryInput;
  where: AgentTerritoryScalarWhereInput;
};

export type AgentTerritoryUpdateManyWithoutSubTerritoryNestedInput = {
  connect?: InputMaybe<Array<AgentTerritoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<AgentTerritoryCreateOrConnectWithoutSubTerritoryInput>
  >;
  create?: InputMaybe<Array<AgentTerritoryCreateWithoutSubTerritoryInput>>;
  createMany?: InputMaybe<AgentTerritoryCreateManySubTerritoryInputEnvelope>;
  delete?: InputMaybe<Array<AgentTerritoryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AgentTerritoryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AgentTerritoryWhereUniqueInput>>;
  set?: InputMaybe<Array<AgentTerritoryWhereUniqueInput>>;
  update?: InputMaybe<
    Array<AgentTerritoryUpdateWithWhereUniqueWithoutSubTerritoryInput>
  >;
  updateMany?: InputMaybe<
    Array<AgentTerritoryUpdateManyWithWhereWithoutSubTerritoryInput>
  >;
  upsert?: InputMaybe<
    Array<AgentTerritoryUpsertWithWhereUniqueWithoutSubTerritoryInput>
  >;
};

export type AgentTerritoryUpdateWithWhereUniqueWithoutSubTerritoryInput = {
  data: AgentTerritoryUpdateWithoutSubTerritoryInput;
  where: AgentTerritoryWhereUniqueInput;
};

export type AgentTerritoryUpdateWithoutSubTerritoryInput = {
  agent?: InputMaybe<AgentUpdateOneRequiredWithoutServiceTerritoriesNestedInput>;
};

export type AgentTerritoryUpsertWithWhereUniqueWithoutSubTerritoryInput = {
  create: AgentTerritoryCreateWithoutSubTerritoryInput;
  update: AgentTerritoryUpdateWithoutSubTerritoryInput;
  where: AgentTerritoryWhereUniqueInput;
};

export type AgentTerritoryWhereInput = {
  AND?: InputMaybe<Array<AgentTerritoryWhereInput>>;
  NOT?: InputMaybe<Array<AgentTerritoryWhereInput>>;
  OR?: InputMaybe<Array<AgentTerritoryWhereInput>>;
  agent?: InputMaybe<AgentRelationFilter>;
  agentId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  subTerritory?: InputMaybe<SubTerritoryRelationFilter>;
  subTerritoryId?: InputMaybe<IntFilter>;
};

export type AgentTerritoryWhereUniqueInput = {
  AND?: InputMaybe<Array<AgentTerritoryWhereInput>>;
  NOT?: InputMaybe<Array<AgentTerritoryWhereInput>>;
  OR?: InputMaybe<Array<AgentTerritoryWhereInput>>;
  agent?: InputMaybe<AgentRelationFilter>;
  agentId?: InputMaybe<IntFilter>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  subTerritory?: InputMaybe<SubTerritoryRelationFilter>;
  subTerritoryId?: InputMaybe<IntFilter>;
};

export enum AgentType {
  CustomerAgent = "CUSTOMER_AGENT",
  FieldTechnician = "FIELD_TECHNICIAN",
}

export type AgentUpdateOneRequiredWithoutServiceTerritoriesNestedInput = {
  connect?: InputMaybe<AgentWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AgentCreateOrConnectWithoutServiceTerritoriesInput>;
  create?: InputMaybe<AgentCreateWithoutServiceTerritoriesInput>;
  update?: InputMaybe<AgentUpdateToOneWithWhereWithoutServiceTerritoriesInput>;
  upsert?: InputMaybe<AgentUpsertWithoutServiceTerritoriesInput>;
};

export type AgentUpdateToOneWithWhereWithoutServiceTerritoriesInput = {
  data: AgentUpdateWithoutServiceTerritoriesInput;
  where?: InputMaybe<AgentWhereInput>;
};

export type AgentUpdateWithoutServiceTerritoriesInput = {
  agentType?: InputMaybe<EnumAgentTypeFieldUpdateOperationsInput>;
  calendars?: InputMaybe<WorkCalendarUpdateManyWithoutAgentNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  designation?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  gender?: InputMaybe<EnumGenderFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  middleName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AgentUpsertWithoutServiceTerritoriesInput = {
  create: AgentCreateWithoutServiceTerritoriesInput;
  update: AgentUpdateWithoutServiceTerritoriesInput;
  where?: InputMaybe<AgentWhereInput>;
};

export type AgentWhereInput = {
  AND?: InputMaybe<Array<AgentWhereInput>>;
  NOT?: InputMaybe<Array<AgentWhereInput>>;
  OR?: InputMaybe<Array<AgentWhereInput>>;
  agentType?: InputMaybe<EnumAgentTypeFilter>;
  calendars?: InputMaybe<WorkCalendarListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  designation?: InputMaybe<StringNullableFilter>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  gender?: InputMaybe<EnumGenderFilter>;
  id?: InputMaybe<IntFilter>;
  lastName?: InputMaybe<StringFilter>;
  middleName?: InputMaybe<StringNullableFilter>;
  phone?: InputMaybe<StringNullableFilter>;
  serviceTerritories?: InputMaybe<AgentTerritoryListRelationFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type AgentWhereUniqueInput = {
  AND?: InputMaybe<Array<AgentWhereInput>>;
  NOT?: InputMaybe<Array<AgentWhereInput>>;
  OR?: InputMaybe<Array<AgentWhereInput>>;
  agentType?: InputMaybe<EnumAgentTypeFilter>;
  calendars?: InputMaybe<WorkCalendarListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  designation?: InputMaybe<StringNullableFilter>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  firstName?: InputMaybe<StringFilter>;
  gender?: InputMaybe<EnumGenderFilter>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  lastName?: InputMaybe<StringFilter>;
  middleName?: InputMaybe<StringNullableFilter>;
  phone?: InputMaybe<StringNullableFilter>;
  serviceTerritories?: InputMaybe<AgentTerritoryListRelationFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type AggregateAgentTerritory = {
  __typename?: "AggregateAgentTerritory";
  _avg?: Maybe<AgentTerritoryAvgAggregate>;
  _count?: Maybe<AgentTerritoryCountAggregate>;
  _max?: Maybe<AgentTerritoryMaxAggregate>;
  _min?: Maybe<AgentTerritoryMinAggregate>;
  _sum?: Maybe<AgentTerritorySumAggregate>;
};

export type AggregateContact = {
  __typename?: "AggregateContact";
  _avg?: Maybe<ContactAvgAggregate>;
  _count?: Maybe<ContactCountAggregate>;
  _max?: Maybe<ContactMaxAggregate>;
  _min?: Maybe<ContactMinAggregate>;
  _sum?: Maybe<ContactSumAggregate>;
};

export type AggregateCustomer = {
  __typename?: "AggregateCustomer";
  _avg?: Maybe<CustomerAvgAggregate>;
  _count?: Maybe<CustomerCountAggregate>;
  _max?: Maybe<CustomerMaxAggregate>;
  _min?: Maybe<CustomerMinAggregate>;
  _sum?: Maybe<CustomerSumAggregate>;
};

export type AggregateOrganization = {
  __typename?: "AggregateOrganization";
  _avg?: Maybe<OrganizationAvgAggregate>;
  _count?: Maybe<OrganizationCountAggregate>;
  _max?: Maybe<OrganizationMaxAggregate>;
  _min?: Maybe<OrganizationMinAggregate>;
  _sum?: Maybe<OrganizationSumAggregate>;
};

export type AggregateServiceTerritory = {
  __typename?: "AggregateServiceTerritory";
  _avg?: Maybe<ServiceTerritoryAvgAggregate>;
  _count?: Maybe<ServiceTerritoryCountAggregate>;
  _max?: Maybe<ServiceTerritoryMaxAggregate>;
  _min?: Maybe<ServiceTerritoryMinAggregate>;
  _sum?: Maybe<ServiceTerritorySumAggregate>;
};

export type Agreement = {
  __typename?: "Agreement";
  createdAt: Scalars["DateTime"]["output"];
  customer: Customer;
  customerId: Scalars["Int"]["output"];
  description: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  title: Scalars["String"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
};

export type AgreementCreateManyCustomerInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  description: Scalars["String"]["input"];
  id?: InputMaybe<Scalars["Int"]["input"]>;
  title: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type AgreementCreateManyCustomerInputEnvelope = {
  data: Array<AgreementCreateManyCustomerInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type AgreementCreateNestedManyWithoutCustomerInput = {
  connect?: InputMaybe<Array<AgreementWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<AgreementCreateOrConnectWithoutCustomerInput>
  >;
  create?: InputMaybe<Array<AgreementCreateWithoutCustomerInput>>;
  createMany?: InputMaybe<AgreementCreateManyCustomerInputEnvelope>;
};

export type AgreementCreateOrConnectWithoutCustomerInput = {
  create: AgreementCreateWithoutCustomerInput;
  where: AgreementWhereUniqueInput;
};

export type AgreementCreateWithoutCustomerInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  description: Scalars["String"]["input"];
  title: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type AgreementListRelationFilter = {
  every?: InputMaybe<AgreementWhereInput>;
  none?: InputMaybe<AgreementWhereInput>;
  some?: InputMaybe<AgreementWhereInput>;
};

export type AgreementOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AgreementScalarWhereInput = {
  AND?: InputMaybe<Array<AgreementScalarWhereInput>>;
  NOT?: InputMaybe<Array<AgreementScalarWhereInput>>;
  OR?: InputMaybe<Array<AgreementScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  customerId?: InputMaybe<IntFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type AgreementUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AgreementUpdateManyWithWhereWithoutCustomerInput = {
  data: AgreementUpdateManyMutationInput;
  where: AgreementScalarWhereInput;
};

export type AgreementUpdateManyWithoutCustomerNestedInput = {
  connect?: InputMaybe<Array<AgreementWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<AgreementCreateOrConnectWithoutCustomerInput>
  >;
  create?: InputMaybe<Array<AgreementCreateWithoutCustomerInput>>;
  createMany?: InputMaybe<AgreementCreateManyCustomerInputEnvelope>;
  delete?: InputMaybe<Array<AgreementWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AgreementScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AgreementWhereUniqueInput>>;
  set?: InputMaybe<Array<AgreementWhereUniqueInput>>;
  update?: InputMaybe<
    Array<AgreementUpdateWithWhereUniqueWithoutCustomerInput>
  >;
  updateMany?: InputMaybe<
    Array<AgreementUpdateManyWithWhereWithoutCustomerInput>
  >;
  upsert?: InputMaybe<
    Array<AgreementUpsertWithWhereUniqueWithoutCustomerInput>
  >;
};

export type AgreementUpdateWithWhereUniqueWithoutCustomerInput = {
  data: AgreementUpdateWithoutCustomerInput;
  where: AgreementWhereUniqueInput;
};

export type AgreementUpdateWithoutCustomerInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AgreementUpsertWithWhereUniqueWithoutCustomerInput = {
  create: AgreementCreateWithoutCustomerInput;
  update: AgreementUpdateWithoutCustomerInput;
  where: AgreementWhereUniqueInput;
};

export type AgreementWhereInput = {
  AND?: InputMaybe<Array<AgreementWhereInput>>;
  NOT?: InputMaybe<Array<AgreementWhereInput>>;
  OR?: InputMaybe<Array<AgreementWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  customer?: InputMaybe<CustomerRelationFilter>;
  customerId?: InputMaybe<IntFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type AgreementWhereUniqueInput = {
  AND?: InputMaybe<Array<AgreementWhereInput>>;
  NOT?: InputMaybe<Array<AgreementWhereInput>>;
  OR?: InputMaybe<Array<AgreementWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  customer?: InputMaybe<CustomerRelationFilter>;
  customerId?: InputMaybe<IntFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type Avatar = {
  __typename?: "Avatar";
  contact: Contact;
  contactId: Scalars["Int"]["output"];
  id: Scalars["ID"]["output"];
  src: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
};

export type AvatarCreateNestedOneWithoutContactInput = {
  connect?: InputMaybe<AvatarWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AvatarCreateOrConnectWithoutContactInput>;
  create?: InputMaybe<AvatarCreateWithoutContactInput>;
};

export type AvatarCreateOrConnectWithoutContactInput = {
  create: AvatarCreateWithoutContactInput;
  where: AvatarWhereUniqueInput;
};

export type AvatarCreateWithoutContactInput = {
  src: Scalars["String"]["input"];
  title: Scalars["String"]["input"];
};

export type AvatarNullableRelationFilter = {
  is?: InputMaybe<AvatarWhereInput>;
  isNot?: InputMaybe<AvatarWhereInput>;
};

export type AvatarOrderByWithRelationInput = {
  contact?: InputMaybe<ContactOrderByWithRelationInput>;
  contactId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  src?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type AvatarUpdateOneWithoutContactNestedInput = {
  connect?: InputMaybe<AvatarWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AvatarCreateOrConnectWithoutContactInput>;
  create?: InputMaybe<AvatarCreateWithoutContactInput>;
  delete?: InputMaybe<AvatarWhereInput>;
  disconnect?: InputMaybe<AvatarWhereInput>;
  update?: InputMaybe<AvatarUpdateToOneWithWhereWithoutContactInput>;
  upsert?: InputMaybe<AvatarUpsertWithoutContactInput>;
};

export type AvatarUpdateToOneWithWhereWithoutContactInput = {
  data: AvatarUpdateWithoutContactInput;
  where?: InputMaybe<AvatarWhereInput>;
};

export type AvatarUpdateWithoutContactInput = {
  src?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AvatarUpsertWithoutContactInput = {
  create: AvatarCreateWithoutContactInput;
  update: AvatarUpdateWithoutContactInput;
  where?: InputMaybe<AvatarWhereInput>;
};

export type AvatarWhereInput = {
  AND?: InputMaybe<Array<AvatarWhereInput>>;
  NOT?: InputMaybe<Array<AvatarWhereInput>>;
  OR?: InputMaybe<Array<AvatarWhereInput>>;
  contact?: InputMaybe<ContactRelationFilter>;
  contactId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  src?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type AvatarWhereUniqueInput = {
  AND?: InputMaybe<Array<AvatarWhereInput>>;
  NOT?: InputMaybe<Array<AvatarWhereInput>>;
  OR?: InputMaybe<Array<AvatarWhereInput>>;
  contact?: InputMaybe<ContactRelationFilter>;
  contactId?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  src?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars["Boolean"]["input"]>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars["Boolean"]["input"]>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export enum CompanyStatus {
  Active = "ACTIVE",
  Hold = "HOLD",
  Inactive = "INACTIVE",
  New = "NEW",
  Onboarding = "ONBOARDING",
}

export type Contact = {
  __typename?: "Contact";
  avatar?: Maybe<Avatar>;
  createdAt: Scalars["DateTime"]["output"];
  customer: Customer;
  customerId: Scalars["Int"]["output"];
  designation?: Maybe<Scalars["String"]["output"]>;
  email: Scalars["String"]["output"];
  firstName: Scalars["String"]["output"];
  gender: Gender;
  id: Scalars["ID"]["output"];
  isPrimary: Scalars["Boolean"]["output"];
  lastName: Scalars["String"]["output"];
  middleName?: Maybe<Scalars["String"]["output"]>;
  phone?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
};

export type ContactAvgAggregate = {
  __typename?: "ContactAvgAggregate";
  customerId?: Maybe<Scalars["Float"]["output"]>;
  id?: Maybe<Scalars["Float"]["output"]>;
};

export type ContactAvgAggregateInput = {
  customerId?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ContactAvgOrderByAggregateInput = {
  customerId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type ContactCountAggregate = {
  __typename?: "ContactCountAggregate";
  _all: Scalars["Int"]["output"];
  createdAt: Scalars["Int"]["output"];
  customerId: Scalars["Int"]["output"];
  designation: Scalars["Int"]["output"];
  email: Scalars["Int"]["output"];
  firstName: Scalars["Int"]["output"];
  gender: Scalars["Int"]["output"];
  id: Scalars["Int"]["output"];
  isPrimary: Scalars["Int"]["output"];
  lastName: Scalars["Int"]["output"];
  middleName: Scalars["Int"]["output"];
  phone: Scalars["Int"]["output"];
  title: Scalars["Int"]["output"];
  updatedAt: Scalars["Int"]["output"];
};

export type ContactCountAggregateInput = {
  _all?: InputMaybe<Scalars["Boolean"]["input"]>;
  createdAt?: InputMaybe<Scalars["Boolean"]["input"]>;
  customerId?: InputMaybe<Scalars["Boolean"]["input"]>;
  designation?: InputMaybe<Scalars["Boolean"]["input"]>;
  email?: InputMaybe<Scalars["Boolean"]["input"]>;
  firstName?: InputMaybe<Scalars["Boolean"]["input"]>;
  gender?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Scalars["Boolean"]["input"]>;
  isPrimary?: InputMaybe<Scalars["Boolean"]["input"]>;
  lastName?: InputMaybe<Scalars["Boolean"]["input"]>;
  middleName?: InputMaybe<Scalars["Boolean"]["input"]>;
  phone?: InputMaybe<Scalars["Boolean"]["input"]>;
  title?: InputMaybe<Scalars["Boolean"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ContactCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  customerId?: InputMaybe<SortOrder>;
  designation?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  gender?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isPrimary?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  middleName?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ContactCreateInput = {
  avatar?: InputMaybe<AvatarCreateNestedOneWithoutContactInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  customer: CustomerCreateNestedOneWithoutContactsInput;
  designation?: InputMaybe<Scalars["String"]["input"]>;
  email: Scalars["String"]["input"];
  firstName: Scalars["String"]["input"];
  gender?: InputMaybe<Gender>;
  isPrimary: Scalars["Boolean"]["input"];
  lastName: Scalars["String"]["input"];
  middleName?: InputMaybe<Scalars["String"]["input"]>;
  phone?: InputMaybe<Scalars["String"]["input"]>;
  title: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type ContactCreateManyCustomerInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  designation?: InputMaybe<Scalars["String"]["input"]>;
  email: Scalars["String"]["input"];
  firstName: Scalars["String"]["input"];
  gender?: InputMaybe<Gender>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  isPrimary: Scalars["Boolean"]["input"];
  lastName: Scalars["String"]["input"];
  middleName?: InputMaybe<Scalars["String"]["input"]>;
  phone?: InputMaybe<Scalars["String"]["input"]>;
  title: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type ContactCreateManyCustomerInputEnvelope = {
  data: Array<ContactCreateManyCustomerInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ContactCreateManyInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  customerId: Scalars["Int"]["input"];
  designation?: InputMaybe<Scalars["String"]["input"]>;
  email: Scalars["String"]["input"];
  firstName: Scalars["String"]["input"];
  gender?: InputMaybe<Gender>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  isPrimary: Scalars["Boolean"]["input"];
  lastName: Scalars["String"]["input"];
  middleName?: InputMaybe<Scalars["String"]["input"]>;
  phone?: InputMaybe<Scalars["String"]["input"]>;
  title: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type ContactCreateNestedManyWithoutCustomerInput = {
  connect?: InputMaybe<Array<ContactWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<ContactCreateOrConnectWithoutCustomerInput>
  >;
  create?: InputMaybe<Array<ContactCreateWithoutCustomerInput>>;
  createMany?: InputMaybe<ContactCreateManyCustomerInputEnvelope>;
};

export type ContactCreateOrConnectWithoutCustomerInput = {
  create: ContactCreateWithoutCustomerInput;
  where: ContactWhereUniqueInput;
};

export type ContactCreateWithoutCustomerInput = {
  avatar?: InputMaybe<AvatarCreateNestedOneWithoutContactInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  designation?: InputMaybe<Scalars["String"]["input"]>;
  email: Scalars["String"]["input"];
  firstName: Scalars["String"]["input"];
  gender?: InputMaybe<Gender>;
  isPrimary: Scalars["Boolean"]["input"];
  lastName: Scalars["String"]["input"];
  middleName?: InputMaybe<Scalars["String"]["input"]>;
  phone?: InputMaybe<Scalars["String"]["input"]>;
  title: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type ContactGroupBy = {
  __typename?: "ContactGroupBy";
  _avg?: Maybe<ContactAvgAggregate>;
  _count?: Maybe<ContactCountAggregate>;
  _max?: Maybe<ContactMaxAggregate>;
  _min?: Maybe<ContactMinAggregate>;
  _sum?: Maybe<ContactSumAggregate>;
  createdAt: Scalars["DateTime"]["output"];
  customerId: Scalars["Int"]["output"];
  designation?: Maybe<Scalars["String"]["output"]>;
  email: Scalars["String"]["output"];
  firstName: Scalars["String"]["output"];
  gender: Gender;
  id: Scalars["Int"]["output"];
  isPrimary: Scalars["Boolean"]["output"];
  lastName: Scalars["String"]["output"];
  middleName?: Maybe<Scalars["String"]["output"]>;
  phone?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
};

export type ContactListRelationFilter = {
  every?: InputMaybe<ContactWhereInput>;
  none?: InputMaybe<ContactWhereInput>;
  some?: InputMaybe<ContactWhereInput>;
};

export type ContactMaxAggregate = {
  __typename?: "ContactMaxAggregate";
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  customerId?: Maybe<Scalars["Int"]["output"]>;
  designation?: Maybe<Scalars["String"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  firstName?: Maybe<Scalars["String"]["output"]>;
  gender?: Maybe<Gender>;
  id?: Maybe<Scalars["Int"]["output"]>;
  isPrimary?: Maybe<Scalars["Boolean"]["output"]>;
  lastName?: Maybe<Scalars["String"]["output"]>;
  middleName?: Maybe<Scalars["String"]["output"]>;
  phone?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type ContactMaxAggregateInput = {
  createdAt?: InputMaybe<Scalars["Boolean"]["input"]>;
  customerId?: InputMaybe<Scalars["Boolean"]["input"]>;
  designation?: InputMaybe<Scalars["Boolean"]["input"]>;
  email?: InputMaybe<Scalars["Boolean"]["input"]>;
  firstName?: InputMaybe<Scalars["Boolean"]["input"]>;
  gender?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Scalars["Boolean"]["input"]>;
  isPrimary?: InputMaybe<Scalars["Boolean"]["input"]>;
  lastName?: InputMaybe<Scalars["Boolean"]["input"]>;
  middleName?: InputMaybe<Scalars["Boolean"]["input"]>;
  phone?: InputMaybe<Scalars["Boolean"]["input"]>;
  title?: InputMaybe<Scalars["Boolean"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ContactMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  customerId?: InputMaybe<SortOrder>;
  designation?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  gender?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isPrimary?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  middleName?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ContactMinAggregate = {
  __typename?: "ContactMinAggregate";
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  customerId?: Maybe<Scalars["Int"]["output"]>;
  designation?: Maybe<Scalars["String"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  firstName?: Maybe<Scalars["String"]["output"]>;
  gender?: Maybe<Gender>;
  id?: Maybe<Scalars["Int"]["output"]>;
  isPrimary?: Maybe<Scalars["Boolean"]["output"]>;
  lastName?: Maybe<Scalars["String"]["output"]>;
  middleName?: Maybe<Scalars["String"]["output"]>;
  phone?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type ContactMinAggregateInput = {
  createdAt?: InputMaybe<Scalars["Boolean"]["input"]>;
  customerId?: InputMaybe<Scalars["Boolean"]["input"]>;
  designation?: InputMaybe<Scalars["Boolean"]["input"]>;
  email?: InputMaybe<Scalars["Boolean"]["input"]>;
  firstName?: InputMaybe<Scalars["Boolean"]["input"]>;
  gender?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Scalars["Boolean"]["input"]>;
  isPrimary?: InputMaybe<Scalars["Boolean"]["input"]>;
  lastName?: InputMaybe<Scalars["Boolean"]["input"]>;
  middleName?: InputMaybe<Scalars["Boolean"]["input"]>;
  phone?: InputMaybe<Scalars["Boolean"]["input"]>;
  title?: InputMaybe<Scalars["Boolean"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ContactMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  customerId?: InputMaybe<SortOrder>;
  designation?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  gender?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isPrimary?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  middleName?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ContactOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ContactOrderByWithAggregationInput = {
  _avg?: InputMaybe<ContactAvgOrderByAggregateInput>;
  _count?: InputMaybe<ContactCountOrderByAggregateInput>;
  _max?: InputMaybe<ContactMaxOrderByAggregateInput>;
  _min?: InputMaybe<ContactMinOrderByAggregateInput>;
  _sum?: InputMaybe<ContactSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  customerId?: InputMaybe<SortOrder>;
  designation?: InputMaybe<SortOrderInput>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  gender?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isPrimary?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  middleName?: InputMaybe<SortOrderInput>;
  phone?: InputMaybe<SortOrderInput>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ContactOrderByWithRelationInput = {
  avatar?: InputMaybe<AvatarOrderByWithRelationInput>;
  createdAt?: InputMaybe<SortOrder>;
  customer?: InputMaybe<CustomerOrderByWithRelationInput>;
  customerId?: InputMaybe<SortOrder>;
  designation?: InputMaybe<SortOrderInput>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  gender?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isPrimary?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  middleName?: InputMaybe<SortOrderInput>;
  phone?: InputMaybe<SortOrderInput>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ContactRelationFilter = {
  is?: InputMaybe<ContactWhereInput>;
  isNot?: InputMaybe<ContactWhereInput>;
};

export enum ContactScalarFieldEnum {
  CreatedAt = "createdAt",
  CustomerId = "customerId",
  Designation = "designation",
  Email = "email",
  FirstName = "firstName",
  Gender = "gender",
  Id = "id",
  IsPrimary = "isPrimary",
  LastName = "lastName",
  MiddleName = "middleName",
  Phone = "phone",
  Title = "title",
  UpdatedAt = "updatedAt",
}

export type ContactScalarWhereInput = {
  AND?: InputMaybe<Array<ContactScalarWhereInput>>;
  NOT?: InputMaybe<Array<ContactScalarWhereInput>>;
  OR?: InputMaybe<Array<ContactScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  customerId?: InputMaybe<IntFilter>;
  designation?: InputMaybe<StringNullableFilter>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  gender?: InputMaybe<EnumGenderFilter>;
  id?: InputMaybe<IntFilter>;
  isPrimary?: InputMaybe<BoolFilter>;
  lastName?: InputMaybe<StringFilter>;
  middleName?: InputMaybe<StringNullableFilter>;
  phone?: InputMaybe<StringNullableFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ContactScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ContactScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ContactScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ContactScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  customerId?: InputMaybe<IntWithAggregatesFilter>;
  designation?: InputMaybe<StringNullableWithAggregatesFilter>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  firstName?: InputMaybe<StringWithAggregatesFilter>;
  gender?: InputMaybe<EnumGenderWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  isPrimary?: InputMaybe<BoolWithAggregatesFilter>;
  lastName?: InputMaybe<StringWithAggregatesFilter>;
  middleName?: InputMaybe<StringNullableWithAggregatesFilter>;
  phone?: InputMaybe<StringNullableWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type ContactSumAggregate = {
  __typename?: "ContactSumAggregate";
  customerId?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
};

export type ContactSumAggregateInput = {
  customerId?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ContactSumOrderByAggregateInput = {
  customerId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type ContactUpdateInput = {
  avatar?: InputMaybe<AvatarUpdateOneWithoutContactNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  customer?: InputMaybe<CustomerUpdateOneRequiredWithoutContactsNestedInput>;
  designation?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  gender?: InputMaybe<EnumGenderFieldUpdateOperationsInput>;
  isPrimary?: InputMaybe<BoolFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  middleName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ContactUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  designation?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  gender?: InputMaybe<EnumGenderFieldUpdateOperationsInput>;
  isPrimary?: InputMaybe<BoolFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  middleName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ContactUpdateManyWithWhereWithoutCustomerInput = {
  data: ContactUpdateManyMutationInput;
  where: ContactScalarWhereInput;
};

export type ContactUpdateManyWithoutCustomerNestedInput = {
  connect?: InputMaybe<Array<ContactWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<ContactCreateOrConnectWithoutCustomerInput>
  >;
  create?: InputMaybe<Array<ContactCreateWithoutCustomerInput>>;
  createMany?: InputMaybe<ContactCreateManyCustomerInputEnvelope>;
  delete?: InputMaybe<Array<ContactWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ContactScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ContactWhereUniqueInput>>;
  set?: InputMaybe<Array<ContactWhereUniqueInput>>;
  update?: InputMaybe<Array<ContactUpdateWithWhereUniqueWithoutCustomerInput>>;
  updateMany?: InputMaybe<
    Array<ContactUpdateManyWithWhereWithoutCustomerInput>
  >;
  upsert?: InputMaybe<Array<ContactUpsertWithWhereUniqueWithoutCustomerInput>>;
};

export type ContactUpdateWithWhereUniqueWithoutCustomerInput = {
  data: ContactUpdateWithoutCustomerInput;
  where: ContactWhereUniqueInput;
};

export type ContactUpdateWithoutCustomerInput = {
  avatar?: InputMaybe<AvatarUpdateOneWithoutContactNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  designation?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  gender?: InputMaybe<EnumGenderFieldUpdateOperationsInput>;
  isPrimary?: InputMaybe<BoolFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  middleName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ContactUpsertWithWhereUniqueWithoutCustomerInput = {
  create: ContactCreateWithoutCustomerInput;
  update: ContactUpdateWithoutCustomerInput;
  where: ContactWhereUniqueInput;
};

export type ContactWhereInput = {
  AND?: InputMaybe<Array<ContactWhereInput>>;
  NOT?: InputMaybe<Array<ContactWhereInput>>;
  OR?: InputMaybe<Array<ContactWhereInput>>;
  avatar?: InputMaybe<AvatarNullableRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  customer?: InputMaybe<CustomerRelationFilter>;
  customerId?: InputMaybe<IntFilter>;
  designation?: InputMaybe<StringNullableFilter>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  gender?: InputMaybe<EnumGenderFilter>;
  id?: InputMaybe<IntFilter>;
  isPrimary?: InputMaybe<BoolFilter>;
  lastName?: InputMaybe<StringFilter>;
  middleName?: InputMaybe<StringNullableFilter>;
  phone?: InputMaybe<StringNullableFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ContactWhereUniqueInput = {
  AND?: InputMaybe<Array<ContactWhereInput>>;
  NOT?: InputMaybe<Array<ContactWhereInput>>;
  OR?: InputMaybe<Array<ContactWhereInput>>;
  avatar?: InputMaybe<AvatarNullableRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  customer?: InputMaybe<CustomerRelationFilter>;
  customerId?: InputMaybe<IntFilter>;
  designation?: InputMaybe<StringNullableFilter>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  firstName?: InputMaybe<StringFilter>;
  gender?: InputMaybe<EnumGenderFilter>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  isPrimary?: InputMaybe<BoolFilter>;
  lastName?: InputMaybe<StringFilter>;
  middleName?: InputMaybe<StringNullableFilter>;
  phone?: InputMaybe<StringNullableFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type Customer = {
  __typename?: "Customer";
  _count: CustomerCount;
  address?: Maybe<Scalars["String"]["output"]>;
  addresses?: Maybe<Array<Address>>;
  agreements?: Maybe<Array<Agreement>>;
  city?: Maybe<Scalars["String"]["output"]>;
  company: Scalars["String"]["output"];
  contacts?: Maybe<Array<Contact>>;
  country?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["DateTime"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  domain: Scalars["String"]["output"];
  email: Scalars["String"]["output"];
  founded?: Maybe<Scalars["String"]["output"]>;
  hierarchy?: Maybe<Hierarchy>;
  hierarchyId?: Maybe<Scalars["Int"]["output"]>;
  id: Scalars["ID"]["output"];
  industry?: Maybe<Scalars["String"]["output"]>;
  linkedinUrl: Scalars["String"]["output"];
  logo?: Maybe<Logo>;
  name: Scalars["String"]["output"];
  organization: Organization;
  organizationId: Scalars["Int"]["output"];
  phone?: Maybe<Scalars["String"]["output"]>;
  revenue?: Maybe<Scalars["String"]["output"]>;
  services?: Maybe<Array<Service>>;
  size?: Maybe<Scalars["String"]["output"]>;
  status: CompanyStatus;
  taxIdentifier?: Maybe<Scalars["String"]["output"]>;
  updatedAt: Scalars["DateTime"]["output"];
  website?: Maybe<Scalars["String"]["output"]>;
  zipcode?: Maybe<Scalars["String"]["output"]>;
};

export type CustomerAvgAggregate = {
  __typename?: "CustomerAvgAggregate";
  hierarchyId?: Maybe<Scalars["Float"]["output"]>;
  id?: Maybe<Scalars["Float"]["output"]>;
  organizationId?: Maybe<Scalars["Float"]["output"]>;
};

export type CustomerAvgAggregateInput = {
  hierarchyId?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Scalars["Boolean"]["input"]>;
  organizationId?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type CustomerAvgOrderByAggregateInput = {
  hierarchyId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  organizationId?: InputMaybe<SortOrder>;
};

export type CustomerCount = {
  __typename?: "CustomerCount";
  addresses: Scalars["Int"]["output"];
  agreements: Scalars["Int"]["output"];
  contacts: Scalars["Int"]["output"];
  services: Scalars["Int"]["output"];
};

export type CustomerCountAggregate = {
  __typename?: "CustomerCountAggregate";
  _all: Scalars["Int"]["output"];
  address: Scalars["Int"]["output"];
  city: Scalars["Int"]["output"];
  company: Scalars["Int"]["output"];
  country: Scalars["Int"]["output"];
  createdAt: Scalars["Int"]["output"];
  description: Scalars["Int"]["output"];
  domain: Scalars["Int"]["output"];
  email: Scalars["Int"]["output"];
  founded: Scalars["Int"]["output"];
  hierarchyId: Scalars["Int"]["output"];
  id: Scalars["Int"]["output"];
  industry: Scalars["Int"]["output"];
  linkedinUrl: Scalars["Int"]["output"];
  name: Scalars["Int"]["output"];
  organizationId: Scalars["Int"]["output"];
  phone: Scalars["Int"]["output"];
  revenue: Scalars["Int"]["output"];
  size: Scalars["Int"]["output"];
  status: Scalars["Int"]["output"];
  taxIdentifier: Scalars["Int"]["output"];
  updatedAt: Scalars["Int"]["output"];
  website: Scalars["Int"]["output"];
  zipcode: Scalars["Int"]["output"];
};

export type CustomerCountAggregateInput = {
  _all?: InputMaybe<Scalars["Boolean"]["input"]>;
  address?: InputMaybe<Scalars["Boolean"]["input"]>;
  city?: InputMaybe<Scalars["Boolean"]["input"]>;
  company?: InputMaybe<Scalars["Boolean"]["input"]>;
  country?: InputMaybe<Scalars["Boolean"]["input"]>;
  createdAt?: InputMaybe<Scalars["Boolean"]["input"]>;
  description?: InputMaybe<Scalars["Boolean"]["input"]>;
  domain?: InputMaybe<Scalars["Boolean"]["input"]>;
  email?: InputMaybe<Scalars["Boolean"]["input"]>;
  founded?: InputMaybe<Scalars["Boolean"]["input"]>;
  hierarchyId?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Scalars["Boolean"]["input"]>;
  industry?: InputMaybe<Scalars["Boolean"]["input"]>;
  linkedinUrl?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["Boolean"]["input"]>;
  organizationId?: InputMaybe<Scalars["Boolean"]["input"]>;
  phone?: InputMaybe<Scalars["Boolean"]["input"]>;
  revenue?: InputMaybe<Scalars["Boolean"]["input"]>;
  size?: InputMaybe<Scalars["Boolean"]["input"]>;
  status?: InputMaybe<Scalars["Boolean"]["input"]>;
  taxIdentifier?: InputMaybe<Scalars["Boolean"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Boolean"]["input"]>;
  website?: InputMaybe<Scalars["Boolean"]["input"]>;
  zipcode?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type CustomerCountOrderByAggregateInput = {
  address?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  company?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  domain?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  founded?: InputMaybe<SortOrder>;
  hierarchyId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  industry?: InputMaybe<SortOrder>;
  linkedinUrl?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  organizationId?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  revenue?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  taxIdentifier?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  website?: InputMaybe<SortOrder>;
  zipcode?: InputMaybe<SortOrder>;
};

export type CustomerCreateInput = {
  address?: InputMaybe<Scalars["String"]["input"]>;
  addresses?: InputMaybe<AddressCreateNestedManyWithoutCustomerInput>;
  agreements?: InputMaybe<AgreementCreateNestedManyWithoutCustomerInput>;
  city?: InputMaybe<Scalars["String"]["input"]>;
  company: Scalars["String"]["input"];
  contacts?: InputMaybe<ContactCreateNestedManyWithoutCustomerInput>;
  country?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  domain: Scalars["String"]["input"];
  email: Scalars["String"]["input"];
  founded?: InputMaybe<Scalars["String"]["input"]>;
  hierarchy?: InputMaybe<HierarchyCreateNestedOneWithoutCustomersInput>;
  industry?: InputMaybe<Scalars["String"]["input"]>;
  linkedinUrl: Scalars["String"]["input"];
  logo?: InputMaybe<LogoCreateNestedOneWithoutCustomerInput>;
  name: Scalars["String"]["input"];
  organization: OrganizationCreateNestedOneWithoutCustomersInput;
  phone?: InputMaybe<Scalars["String"]["input"]>;
  revenue?: InputMaybe<Scalars["String"]["input"]>;
  services?: InputMaybe<ServiceCreateNestedManyWithoutCustomerInput>;
  size?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<CompanyStatus>;
  taxIdentifier?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  website?: InputMaybe<Scalars["String"]["input"]>;
  zipcode?: InputMaybe<Scalars["String"]["input"]>;
};

export type CustomerCreateManyHierarchyInput = {
  address?: InputMaybe<Scalars["String"]["input"]>;
  city?: InputMaybe<Scalars["String"]["input"]>;
  company: Scalars["String"]["input"];
  country?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  domain: Scalars["String"]["input"];
  email: Scalars["String"]["input"];
  founded?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  industry?: InputMaybe<Scalars["String"]["input"]>;
  linkedinUrl: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  organizationId: Scalars["Int"]["input"];
  phone?: InputMaybe<Scalars["String"]["input"]>;
  revenue?: InputMaybe<Scalars["String"]["input"]>;
  size?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<CompanyStatus>;
  taxIdentifier?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  website?: InputMaybe<Scalars["String"]["input"]>;
  zipcode?: InputMaybe<Scalars["String"]["input"]>;
};

export type CustomerCreateManyHierarchyInputEnvelope = {
  data: Array<CustomerCreateManyHierarchyInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type CustomerCreateManyInput = {
  address?: InputMaybe<Scalars["String"]["input"]>;
  city?: InputMaybe<Scalars["String"]["input"]>;
  company: Scalars["String"]["input"];
  country?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  domain: Scalars["String"]["input"];
  email: Scalars["String"]["input"];
  founded?: InputMaybe<Scalars["String"]["input"]>;
  hierarchyId?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  industry?: InputMaybe<Scalars["String"]["input"]>;
  linkedinUrl: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  organizationId: Scalars["Int"]["input"];
  phone?: InputMaybe<Scalars["String"]["input"]>;
  revenue?: InputMaybe<Scalars["String"]["input"]>;
  size?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<CompanyStatus>;
  taxIdentifier?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  website?: InputMaybe<Scalars["String"]["input"]>;
  zipcode?: InputMaybe<Scalars["String"]["input"]>;
};

export type CustomerCreateManyOrganizationInput = {
  address?: InputMaybe<Scalars["String"]["input"]>;
  city?: InputMaybe<Scalars["String"]["input"]>;
  company: Scalars["String"]["input"];
  country?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  domain: Scalars["String"]["input"];
  email: Scalars["String"]["input"];
  founded?: InputMaybe<Scalars["String"]["input"]>;
  hierarchyId?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  industry?: InputMaybe<Scalars["String"]["input"]>;
  linkedinUrl: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  phone?: InputMaybe<Scalars["String"]["input"]>;
  revenue?: InputMaybe<Scalars["String"]["input"]>;
  size?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<CompanyStatus>;
  taxIdentifier?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  website?: InputMaybe<Scalars["String"]["input"]>;
  zipcode?: InputMaybe<Scalars["String"]["input"]>;
};

export type CustomerCreateManyOrganizationInputEnvelope = {
  data: Array<CustomerCreateManyOrganizationInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type CustomerCreateNestedManyWithoutHierarchyInput = {
  connect?: InputMaybe<Array<CustomerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<CustomerCreateOrConnectWithoutHierarchyInput>
  >;
  create?: InputMaybe<Array<CustomerCreateWithoutHierarchyInput>>;
  createMany?: InputMaybe<CustomerCreateManyHierarchyInputEnvelope>;
};

export type CustomerCreateNestedManyWithoutOrganizationInput = {
  connect?: InputMaybe<Array<CustomerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<CustomerCreateOrConnectWithoutOrganizationInput>
  >;
  create?: InputMaybe<Array<CustomerCreateWithoutOrganizationInput>>;
  createMany?: InputMaybe<CustomerCreateManyOrganizationInputEnvelope>;
};

export type CustomerCreateNestedOneWithoutContactsInput = {
  connect?: InputMaybe<CustomerWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CustomerCreateOrConnectWithoutContactsInput>;
  create?: InputMaybe<CustomerCreateWithoutContactsInput>;
};

export type CustomerCreateOrConnectWithoutContactsInput = {
  create: CustomerCreateWithoutContactsInput;
  where: CustomerWhereUniqueInput;
};

export type CustomerCreateOrConnectWithoutHierarchyInput = {
  create: CustomerCreateWithoutHierarchyInput;
  where: CustomerWhereUniqueInput;
};

export type CustomerCreateOrConnectWithoutOrganizationInput = {
  create: CustomerCreateWithoutOrganizationInput;
  where: CustomerWhereUniqueInput;
};

export type CustomerCreateWithoutContactsInput = {
  address?: InputMaybe<Scalars["String"]["input"]>;
  addresses?: InputMaybe<AddressCreateNestedManyWithoutCustomerInput>;
  agreements?: InputMaybe<AgreementCreateNestedManyWithoutCustomerInput>;
  city?: InputMaybe<Scalars["String"]["input"]>;
  company: Scalars["String"]["input"];
  country?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  domain: Scalars["String"]["input"];
  email: Scalars["String"]["input"];
  founded?: InputMaybe<Scalars["String"]["input"]>;
  hierarchy?: InputMaybe<HierarchyCreateNestedOneWithoutCustomersInput>;
  industry?: InputMaybe<Scalars["String"]["input"]>;
  linkedinUrl: Scalars["String"]["input"];
  logo?: InputMaybe<LogoCreateNestedOneWithoutCustomerInput>;
  name: Scalars["String"]["input"];
  organization: OrganizationCreateNestedOneWithoutCustomersInput;
  phone?: InputMaybe<Scalars["String"]["input"]>;
  revenue?: InputMaybe<Scalars["String"]["input"]>;
  services?: InputMaybe<ServiceCreateNestedManyWithoutCustomerInput>;
  size?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<CompanyStatus>;
  taxIdentifier?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  website?: InputMaybe<Scalars["String"]["input"]>;
  zipcode?: InputMaybe<Scalars["String"]["input"]>;
};

export type CustomerCreateWithoutHierarchyInput = {
  address?: InputMaybe<Scalars["String"]["input"]>;
  addresses?: InputMaybe<AddressCreateNestedManyWithoutCustomerInput>;
  agreements?: InputMaybe<AgreementCreateNestedManyWithoutCustomerInput>;
  city?: InputMaybe<Scalars["String"]["input"]>;
  company: Scalars["String"]["input"];
  contacts?: InputMaybe<ContactCreateNestedManyWithoutCustomerInput>;
  country?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  domain: Scalars["String"]["input"];
  email: Scalars["String"]["input"];
  founded?: InputMaybe<Scalars["String"]["input"]>;
  industry?: InputMaybe<Scalars["String"]["input"]>;
  linkedinUrl: Scalars["String"]["input"];
  logo?: InputMaybe<LogoCreateNestedOneWithoutCustomerInput>;
  name: Scalars["String"]["input"];
  organization: OrganizationCreateNestedOneWithoutCustomersInput;
  phone?: InputMaybe<Scalars["String"]["input"]>;
  revenue?: InputMaybe<Scalars["String"]["input"]>;
  services?: InputMaybe<ServiceCreateNestedManyWithoutCustomerInput>;
  size?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<CompanyStatus>;
  taxIdentifier?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  website?: InputMaybe<Scalars["String"]["input"]>;
  zipcode?: InputMaybe<Scalars["String"]["input"]>;
};

export type CustomerCreateWithoutOrganizationInput = {
  address?: InputMaybe<Scalars["String"]["input"]>;
  addresses?: InputMaybe<AddressCreateNestedManyWithoutCustomerInput>;
  agreements?: InputMaybe<AgreementCreateNestedManyWithoutCustomerInput>;
  city?: InputMaybe<Scalars["String"]["input"]>;
  company: Scalars["String"]["input"];
  contacts?: InputMaybe<ContactCreateNestedManyWithoutCustomerInput>;
  country?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  domain: Scalars["String"]["input"];
  email: Scalars["String"]["input"];
  founded?: InputMaybe<Scalars["String"]["input"]>;
  hierarchy?: InputMaybe<HierarchyCreateNestedOneWithoutCustomersInput>;
  industry?: InputMaybe<Scalars["String"]["input"]>;
  linkedinUrl: Scalars["String"]["input"];
  logo?: InputMaybe<LogoCreateNestedOneWithoutCustomerInput>;
  name: Scalars["String"]["input"];
  phone?: InputMaybe<Scalars["String"]["input"]>;
  revenue?: InputMaybe<Scalars["String"]["input"]>;
  services?: InputMaybe<ServiceCreateNestedManyWithoutCustomerInput>;
  size?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<CompanyStatus>;
  taxIdentifier?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  website?: InputMaybe<Scalars["String"]["input"]>;
  zipcode?: InputMaybe<Scalars["String"]["input"]>;
};

export type CustomerGroupBy = {
  __typename?: "CustomerGroupBy";
  _avg?: Maybe<CustomerAvgAggregate>;
  _count?: Maybe<CustomerCountAggregate>;
  _max?: Maybe<CustomerMaxAggregate>;
  _min?: Maybe<CustomerMinAggregate>;
  _sum?: Maybe<CustomerSumAggregate>;
  address?: Maybe<Scalars["String"]["output"]>;
  city?: Maybe<Scalars["String"]["output"]>;
  company: Scalars["String"]["output"];
  country?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["DateTime"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  domain: Scalars["String"]["output"];
  email: Scalars["String"]["output"];
  founded?: Maybe<Scalars["String"]["output"]>;
  hierarchyId?: Maybe<Scalars["Int"]["output"]>;
  id: Scalars["Int"]["output"];
  industry?: Maybe<Scalars["String"]["output"]>;
  linkedinUrl: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  organizationId: Scalars["Int"]["output"];
  phone?: Maybe<Scalars["String"]["output"]>;
  revenue?: Maybe<Scalars["String"]["output"]>;
  size?: Maybe<Scalars["String"]["output"]>;
  status: CompanyStatus;
  taxIdentifier?: Maybe<Scalars["String"]["output"]>;
  updatedAt: Scalars["DateTime"]["output"];
  website?: Maybe<Scalars["String"]["output"]>;
  zipcode?: Maybe<Scalars["String"]["output"]>;
};

export type CustomerListRelationFilter = {
  every?: InputMaybe<CustomerWhereInput>;
  none?: InputMaybe<CustomerWhereInput>;
  some?: InputMaybe<CustomerWhereInput>;
};

export type CustomerMaxAggregate = {
  __typename?: "CustomerMaxAggregate";
  address?: Maybe<Scalars["String"]["output"]>;
  city?: Maybe<Scalars["String"]["output"]>;
  company?: Maybe<Scalars["String"]["output"]>;
  country?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  domain?: Maybe<Scalars["String"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  founded?: Maybe<Scalars["String"]["output"]>;
  hierarchyId?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  industry?: Maybe<Scalars["String"]["output"]>;
  linkedinUrl?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  organizationId?: Maybe<Scalars["Int"]["output"]>;
  phone?: Maybe<Scalars["String"]["output"]>;
  revenue?: Maybe<Scalars["String"]["output"]>;
  size?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<CompanyStatus>;
  taxIdentifier?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  website?: Maybe<Scalars["String"]["output"]>;
  zipcode?: Maybe<Scalars["String"]["output"]>;
};

export type CustomerMaxAggregateInput = {
  address?: InputMaybe<Scalars["Boolean"]["input"]>;
  city?: InputMaybe<Scalars["Boolean"]["input"]>;
  company?: InputMaybe<Scalars["Boolean"]["input"]>;
  country?: InputMaybe<Scalars["Boolean"]["input"]>;
  createdAt?: InputMaybe<Scalars["Boolean"]["input"]>;
  description?: InputMaybe<Scalars["Boolean"]["input"]>;
  domain?: InputMaybe<Scalars["Boolean"]["input"]>;
  email?: InputMaybe<Scalars["Boolean"]["input"]>;
  founded?: InputMaybe<Scalars["Boolean"]["input"]>;
  hierarchyId?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Scalars["Boolean"]["input"]>;
  industry?: InputMaybe<Scalars["Boolean"]["input"]>;
  linkedinUrl?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["Boolean"]["input"]>;
  organizationId?: InputMaybe<Scalars["Boolean"]["input"]>;
  phone?: InputMaybe<Scalars["Boolean"]["input"]>;
  revenue?: InputMaybe<Scalars["Boolean"]["input"]>;
  size?: InputMaybe<Scalars["Boolean"]["input"]>;
  status?: InputMaybe<Scalars["Boolean"]["input"]>;
  taxIdentifier?: InputMaybe<Scalars["Boolean"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Boolean"]["input"]>;
  website?: InputMaybe<Scalars["Boolean"]["input"]>;
  zipcode?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type CustomerMaxOrderByAggregateInput = {
  address?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  company?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  domain?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  founded?: InputMaybe<SortOrder>;
  hierarchyId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  industry?: InputMaybe<SortOrder>;
  linkedinUrl?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  organizationId?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  revenue?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  taxIdentifier?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  website?: InputMaybe<SortOrder>;
  zipcode?: InputMaybe<SortOrder>;
};

export type CustomerMinAggregate = {
  __typename?: "CustomerMinAggregate";
  address?: Maybe<Scalars["String"]["output"]>;
  city?: Maybe<Scalars["String"]["output"]>;
  company?: Maybe<Scalars["String"]["output"]>;
  country?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  domain?: Maybe<Scalars["String"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  founded?: Maybe<Scalars["String"]["output"]>;
  hierarchyId?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  industry?: Maybe<Scalars["String"]["output"]>;
  linkedinUrl?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  organizationId?: Maybe<Scalars["Int"]["output"]>;
  phone?: Maybe<Scalars["String"]["output"]>;
  revenue?: Maybe<Scalars["String"]["output"]>;
  size?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<CompanyStatus>;
  taxIdentifier?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  website?: Maybe<Scalars["String"]["output"]>;
  zipcode?: Maybe<Scalars["String"]["output"]>;
};

export type CustomerMinAggregateInput = {
  address?: InputMaybe<Scalars["Boolean"]["input"]>;
  city?: InputMaybe<Scalars["Boolean"]["input"]>;
  company?: InputMaybe<Scalars["Boolean"]["input"]>;
  country?: InputMaybe<Scalars["Boolean"]["input"]>;
  createdAt?: InputMaybe<Scalars["Boolean"]["input"]>;
  description?: InputMaybe<Scalars["Boolean"]["input"]>;
  domain?: InputMaybe<Scalars["Boolean"]["input"]>;
  email?: InputMaybe<Scalars["Boolean"]["input"]>;
  founded?: InputMaybe<Scalars["Boolean"]["input"]>;
  hierarchyId?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Scalars["Boolean"]["input"]>;
  industry?: InputMaybe<Scalars["Boolean"]["input"]>;
  linkedinUrl?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["Boolean"]["input"]>;
  organizationId?: InputMaybe<Scalars["Boolean"]["input"]>;
  phone?: InputMaybe<Scalars["Boolean"]["input"]>;
  revenue?: InputMaybe<Scalars["Boolean"]["input"]>;
  size?: InputMaybe<Scalars["Boolean"]["input"]>;
  status?: InputMaybe<Scalars["Boolean"]["input"]>;
  taxIdentifier?: InputMaybe<Scalars["Boolean"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Boolean"]["input"]>;
  website?: InputMaybe<Scalars["Boolean"]["input"]>;
  zipcode?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type CustomerMinOrderByAggregateInput = {
  address?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  company?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  domain?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  founded?: InputMaybe<SortOrder>;
  hierarchyId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  industry?: InputMaybe<SortOrder>;
  linkedinUrl?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  organizationId?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  revenue?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  taxIdentifier?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  website?: InputMaybe<SortOrder>;
  zipcode?: InputMaybe<SortOrder>;
};

export type CustomerOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CustomerOrderByWithAggregationInput = {
  _avg?: InputMaybe<CustomerAvgOrderByAggregateInput>;
  _count?: InputMaybe<CustomerCountOrderByAggregateInput>;
  _max?: InputMaybe<CustomerMaxOrderByAggregateInput>;
  _min?: InputMaybe<CustomerMinOrderByAggregateInput>;
  _sum?: InputMaybe<CustomerSumOrderByAggregateInput>;
  address?: InputMaybe<SortOrderInput>;
  city?: InputMaybe<SortOrderInput>;
  company?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrderInput>;
  domain?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  founded?: InputMaybe<SortOrderInput>;
  hierarchyId?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  industry?: InputMaybe<SortOrderInput>;
  linkedinUrl?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  organizationId?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrderInput>;
  revenue?: InputMaybe<SortOrderInput>;
  size?: InputMaybe<SortOrderInput>;
  status?: InputMaybe<SortOrder>;
  taxIdentifier?: InputMaybe<SortOrderInput>;
  updatedAt?: InputMaybe<SortOrder>;
  website?: InputMaybe<SortOrderInput>;
  zipcode?: InputMaybe<SortOrderInput>;
};

export type CustomerOrderByWithRelationInput = {
  address?: InputMaybe<SortOrderInput>;
  addresses?: InputMaybe<AddressOrderByRelationAggregateInput>;
  agreements?: InputMaybe<AgreementOrderByRelationAggregateInput>;
  city?: InputMaybe<SortOrderInput>;
  company?: InputMaybe<SortOrder>;
  contacts?: InputMaybe<ContactOrderByRelationAggregateInput>;
  country?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrderInput>;
  domain?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  founded?: InputMaybe<SortOrderInput>;
  hierarchy?: InputMaybe<HierarchyOrderByWithRelationInput>;
  hierarchyId?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  industry?: InputMaybe<SortOrderInput>;
  linkedinUrl?: InputMaybe<SortOrder>;
  logo?: InputMaybe<LogoOrderByWithRelationInput>;
  name?: InputMaybe<SortOrder>;
  organization?: InputMaybe<OrganizationOrderByWithRelationInput>;
  organizationId?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrderInput>;
  revenue?: InputMaybe<SortOrderInput>;
  services?: InputMaybe<ServiceOrderByRelationAggregateInput>;
  size?: InputMaybe<SortOrderInput>;
  status?: InputMaybe<SortOrder>;
  taxIdentifier?: InputMaybe<SortOrderInput>;
  updatedAt?: InputMaybe<SortOrder>;
  website?: InputMaybe<SortOrderInput>;
  zipcode?: InputMaybe<SortOrderInput>;
};

export type CustomerRelationFilter = {
  is?: InputMaybe<CustomerWhereInput>;
  isNot?: InputMaybe<CustomerWhereInput>;
};

export enum CustomerScalarFieldEnum {
  Address = "address",
  City = "city",
  Company = "company",
  Country = "country",
  CreatedAt = "createdAt",
  Description = "description",
  Domain = "domain",
  Email = "email",
  Founded = "founded",
  HierarchyId = "hierarchyId",
  Id = "id",
  Industry = "industry",
  LinkedinUrl = "linkedinUrl",
  Name = "name",
  OrganizationId = "organizationId",
  Phone = "phone",
  Revenue = "revenue",
  Size = "size",
  Status = "status",
  TaxIdentifier = "taxIdentifier",
  UpdatedAt = "updatedAt",
  Website = "website",
  Zipcode = "zipcode",
}

export type CustomerScalarWhereInput = {
  AND?: InputMaybe<Array<CustomerScalarWhereInput>>;
  NOT?: InputMaybe<Array<CustomerScalarWhereInput>>;
  OR?: InputMaybe<Array<CustomerScalarWhereInput>>;
  address?: InputMaybe<StringNullableFilter>;
  city?: InputMaybe<StringNullableFilter>;
  company?: InputMaybe<StringFilter>;
  country?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  domain?: InputMaybe<StringFilter>;
  email?: InputMaybe<StringFilter>;
  founded?: InputMaybe<StringNullableFilter>;
  hierarchyId?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IntFilter>;
  industry?: InputMaybe<StringNullableFilter>;
  linkedinUrl?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  organizationId?: InputMaybe<IntFilter>;
  phone?: InputMaybe<StringNullableFilter>;
  revenue?: InputMaybe<StringNullableFilter>;
  size?: InputMaybe<StringNullableFilter>;
  status?: InputMaybe<EnumCompanyStatusFilter>;
  taxIdentifier?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  website?: InputMaybe<StringNullableFilter>;
  zipcode?: InputMaybe<StringNullableFilter>;
};

export type CustomerScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<CustomerScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<CustomerScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<CustomerScalarWhereWithAggregatesInput>>;
  address?: InputMaybe<StringNullableWithAggregatesFilter>;
  city?: InputMaybe<StringNullableWithAggregatesFilter>;
  company?: InputMaybe<StringWithAggregatesFilter>;
  country?: InputMaybe<StringNullableWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  description?: InputMaybe<StringNullableWithAggregatesFilter>;
  domain?: InputMaybe<StringWithAggregatesFilter>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  founded?: InputMaybe<StringNullableWithAggregatesFilter>;
  hierarchyId?: InputMaybe<IntNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  industry?: InputMaybe<StringNullableWithAggregatesFilter>;
  linkedinUrl?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  organizationId?: InputMaybe<IntWithAggregatesFilter>;
  phone?: InputMaybe<StringNullableWithAggregatesFilter>;
  revenue?: InputMaybe<StringNullableWithAggregatesFilter>;
  size?: InputMaybe<StringNullableWithAggregatesFilter>;
  status?: InputMaybe<EnumCompanyStatusWithAggregatesFilter>;
  taxIdentifier?: InputMaybe<StringNullableWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  website?: InputMaybe<StringNullableWithAggregatesFilter>;
  zipcode?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type CustomerSumAggregate = {
  __typename?: "CustomerSumAggregate";
  hierarchyId?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  organizationId?: Maybe<Scalars["Int"]["output"]>;
};

export type CustomerSumAggregateInput = {
  hierarchyId?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Scalars["Boolean"]["input"]>;
  organizationId?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type CustomerSumOrderByAggregateInput = {
  hierarchyId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  organizationId?: InputMaybe<SortOrder>;
};

export type CustomerUpdateInput = {
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  addresses?: InputMaybe<AddressUpdateManyWithoutCustomerNestedInput>;
  agreements?: InputMaybe<AgreementUpdateManyWithoutCustomerNestedInput>;
  city?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  company?: InputMaybe<StringFieldUpdateOperationsInput>;
  contacts?: InputMaybe<ContactUpdateManyWithoutCustomerNestedInput>;
  country?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  domain?: InputMaybe<StringFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  founded?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  hierarchy?: InputMaybe<HierarchyUpdateOneWithoutCustomersNestedInput>;
  industry?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  linkedinUrl?: InputMaybe<StringFieldUpdateOperationsInput>;
  logo?: InputMaybe<LogoUpdateOneWithoutCustomerNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  organization?: InputMaybe<OrganizationUpdateOneRequiredWithoutCustomersNestedInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  revenue?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  services?: InputMaybe<ServiceUpdateManyWithoutCustomerNestedInput>;
  size?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumCompanyStatusFieldUpdateOperationsInput>;
  taxIdentifier?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  website?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  zipcode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type CustomerUpdateManyMutationInput = {
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  city?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  company?: InputMaybe<StringFieldUpdateOperationsInput>;
  country?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  domain?: InputMaybe<StringFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  founded?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  industry?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  linkedinUrl?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  revenue?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  size?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumCompanyStatusFieldUpdateOperationsInput>;
  taxIdentifier?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  website?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  zipcode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type CustomerUpdateManyWithWhereWithoutHierarchyInput = {
  data: CustomerUpdateManyMutationInput;
  where: CustomerScalarWhereInput;
};

export type CustomerUpdateManyWithWhereWithoutOrganizationInput = {
  data: CustomerUpdateManyMutationInput;
  where: CustomerScalarWhereInput;
};

export type CustomerUpdateManyWithoutHierarchyNestedInput = {
  connect?: InputMaybe<Array<CustomerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<CustomerCreateOrConnectWithoutHierarchyInput>
  >;
  create?: InputMaybe<Array<CustomerCreateWithoutHierarchyInput>>;
  createMany?: InputMaybe<CustomerCreateManyHierarchyInputEnvelope>;
  delete?: InputMaybe<Array<CustomerWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CustomerScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CustomerWhereUniqueInput>>;
  set?: InputMaybe<Array<CustomerWhereUniqueInput>>;
  update?: InputMaybe<
    Array<CustomerUpdateWithWhereUniqueWithoutHierarchyInput>
  >;
  updateMany?: InputMaybe<
    Array<CustomerUpdateManyWithWhereWithoutHierarchyInput>
  >;
  upsert?: InputMaybe<
    Array<CustomerUpsertWithWhereUniqueWithoutHierarchyInput>
  >;
};

export type CustomerUpdateManyWithoutOrganizationNestedInput = {
  connect?: InputMaybe<Array<CustomerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<CustomerCreateOrConnectWithoutOrganizationInput>
  >;
  create?: InputMaybe<Array<CustomerCreateWithoutOrganizationInput>>;
  createMany?: InputMaybe<CustomerCreateManyOrganizationInputEnvelope>;
  delete?: InputMaybe<Array<CustomerWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CustomerScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CustomerWhereUniqueInput>>;
  set?: InputMaybe<Array<CustomerWhereUniqueInput>>;
  update?: InputMaybe<
    Array<CustomerUpdateWithWhereUniqueWithoutOrganizationInput>
  >;
  updateMany?: InputMaybe<
    Array<CustomerUpdateManyWithWhereWithoutOrganizationInput>
  >;
  upsert?: InputMaybe<
    Array<CustomerUpsertWithWhereUniqueWithoutOrganizationInput>
  >;
};

export type CustomerUpdateOneRequiredWithoutContactsNestedInput = {
  connect?: InputMaybe<CustomerWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CustomerCreateOrConnectWithoutContactsInput>;
  create?: InputMaybe<CustomerCreateWithoutContactsInput>;
  update?: InputMaybe<CustomerUpdateToOneWithWhereWithoutContactsInput>;
  upsert?: InputMaybe<CustomerUpsertWithoutContactsInput>;
};

export type CustomerUpdateToOneWithWhereWithoutContactsInput = {
  data: CustomerUpdateWithoutContactsInput;
  where?: InputMaybe<CustomerWhereInput>;
};

export type CustomerUpdateWithWhereUniqueWithoutHierarchyInput = {
  data: CustomerUpdateWithoutHierarchyInput;
  where: CustomerWhereUniqueInput;
};

export type CustomerUpdateWithWhereUniqueWithoutOrganizationInput = {
  data: CustomerUpdateWithoutOrganizationInput;
  where: CustomerWhereUniqueInput;
};

export type CustomerUpdateWithoutContactsInput = {
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  addresses?: InputMaybe<AddressUpdateManyWithoutCustomerNestedInput>;
  agreements?: InputMaybe<AgreementUpdateManyWithoutCustomerNestedInput>;
  city?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  company?: InputMaybe<StringFieldUpdateOperationsInput>;
  country?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  domain?: InputMaybe<StringFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  founded?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  hierarchy?: InputMaybe<HierarchyUpdateOneWithoutCustomersNestedInput>;
  industry?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  linkedinUrl?: InputMaybe<StringFieldUpdateOperationsInput>;
  logo?: InputMaybe<LogoUpdateOneWithoutCustomerNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  organization?: InputMaybe<OrganizationUpdateOneRequiredWithoutCustomersNestedInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  revenue?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  services?: InputMaybe<ServiceUpdateManyWithoutCustomerNestedInput>;
  size?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumCompanyStatusFieldUpdateOperationsInput>;
  taxIdentifier?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  website?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  zipcode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type CustomerUpdateWithoutHierarchyInput = {
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  addresses?: InputMaybe<AddressUpdateManyWithoutCustomerNestedInput>;
  agreements?: InputMaybe<AgreementUpdateManyWithoutCustomerNestedInput>;
  city?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  company?: InputMaybe<StringFieldUpdateOperationsInput>;
  contacts?: InputMaybe<ContactUpdateManyWithoutCustomerNestedInput>;
  country?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  domain?: InputMaybe<StringFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  founded?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  industry?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  linkedinUrl?: InputMaybe<StringFieldUpdateOperationsInput>;
  logo?: InputMaybe<LogoUpdateOneWithoutCustomerNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  organization?: InputMaybe<OrganizationUpdateOneRequiredWithoutCustomersNestedInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  revenue?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  services?: InputMaybe<ServiceUpdateManyWithoutCustomerNestedInput>;
  size?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumCompanyStatusFieldUpdateOperationsInput>;
  taxIdentifier?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  website?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  zipcode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type CustomerUpdateWithoutOrganizationInput = {
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  addresses?: InputMaybe<AddressUpdateManyWithoutCustomerNestedInput>;
  agreements?: InputMaybe<AgreementUpdateManyWithoutCustomerNestedInput>;
  city?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  company?: InputMaybe<StringFieldUpdateOperationsInput>;
  contacts?: InputMaybe<ContactUpdateManyWithoutCustomerNestedInput>;
  country?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  domain?: InputMaybe<StringFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  founded?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  hierarchy?: InputMaybe<HierarchyUpdateOneWithoutCustomersNestedInput>;
  industry?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  linkedinUrl?: InputMaybe<StringFieldUpdateOperationsInput>;
  logo?: InputMaybe<LogoUpdateOneWithoutCustomerNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  revenue?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  services?: InputMaybe<ServiceUpdateManyWithoutCustomerNestedInput>;
  size?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumCompanyStatusFieldUpdateOperationsInput>;
  taxIdentifier?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  website?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  zipcode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type CustomerUpsertWithWhereUniqueWithoutHierarchyInput = {
  create: CustomerCreateWithoutHierarchyInput;
  update: CustomerUpdateWithoutHierarchyInput;
  where: CustomerWhereUniqueInput;
};

export type CustomerUpsertWithWhereUniqueWithoutOrganizationInput = {
  create: CustomerCreateWithoutOrganizationInput;
  update: CustomerUpdateWithoutOrganizationInput;
  where: CustomerWhereUniqueInput;
};

export type CustomerUpsertWithoutContactsInput = {
  create: CustomerCreateWithoutContactsInput;
  update: CustomerUpdateWithoutContactsInput;
  where?: InputMaybe<CustomerWhereInput>;
};

export type CustomerWhereInput = {
  AND?: InputMaybe<Array<CustomerWhereInput>>;
  NOT?: InputMaybe<Array<CustomerWhereInput>>;
  OR?: InputMaybe<Array<CustomerWhereInput>>;
  address?: InputMaybe<StringNullableFilter>;
  addresses?: InputMaybe<AddressListRelationFilter>;
  agreements?: InputMaybe<AgreementListRelationFilter>;
  city?: InputMaybe<StringNullableFilter>;
  company?: InputMaybe<StringFilter>;
  contacts?: InputMaybe<ContactListRelationFilter>;
  country?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  domain?: InputMaybe<StringFilter>;
  email?: InputMaybe<StringFilter>;
  founded?: InputMaybe<StringNullableFilter>;
  hierarchy?: InputMaybe<HierarchyNullableRelationFilter>;
  hierarchyId?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IntFilter>;
  industry?: InputMaybe<StringNullableFilter>;
  linkedinUrl?: InputMaybe<StringFilter>;
  logo?: InputMaybe<LogoNullableRelationFilter>;
  name?: InputMaybe<StringFilter>;
  organization?: InputMaybe<OrganizationRelationFilter>;
  organizationId?: InputMaybe<IntFilter>;
  phone?: InputMaybe<StringNullableFilter>;
  revenue?: InputMaybe<StringNullableFilter>;
  services?: InputMaybe<ServiceListRelationFilter>;
  size?: InputMaybe<StringNullableFilter>;
  status?: InputMaybe<EnumCompanyStatusFilter>;
  taxIdentifier?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  website?: InputMaybe<StringNullableFilter>;
  zipcode?: InputMaybe<StringNullableFilter>;
};

export type CustomerWhereUniqueInput = {
  AND?: InputMaybe<Array<CustomerWhereInput>>;
  NOT?: InputMaybe<Array<CustomerWhereInput>>;
  OR?: InputMaybe<Array<CustomerWhereInput>>;
  address?: InputMaybe<StringNullableFilter>;
  addresses?: InputMaybe<AddressListRelationFilter>;
  agreements?: InputMaybe<AgreementListRelationFilter>;
  city?: InputMaybe<StringNullableFilter>;
  company?: InputMaybe<StringFilter>;
  contacts?: InputMaybe<ContactListRelationFilter>;
  country?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  domain?: InputMaybe<StringFilter>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  founded?: InputMaybe<StringNullableFilter>;
  hierarchy?: InputMaybe<HierarchyNullableRelationFilter>;
  hierarchyId?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  industry?: InputMaybe<StringNullableFilter>;
  linkedinUrl?: InputMaybe<StringFilter>;
  logo?: InputMaybe<LogoNullableRelationFilter>;
  name?: InputMaybe<StringFilter>;
  organization?: InputMaybe<OrganizationRelationFilter>;
  organizationId?: InputMaybe<IntFilter>;
  phone?: InputMaybe<StringNullableFilter>;
  revenue?: InputMaybe<StringNullableFilter>;
  services?: InputMaybe<ServiceListRelationFilter>;
  size?: InputMaybe<StringNullableFilter>;
  status?: InputMaybe<EnumCompanyStatusFilter>;
  taxIdentifier?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  website?: InputMaybe<StringNullableFilter>;
  zipcode?: InputMaybe<StringNullableFilter>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars["DateTime"]["input"]>;
  gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  in?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
  lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars["DateTime"]["input"]>;
  gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  in?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
  lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
};

export type EnumAgentTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<AgentType>;
};

export type EnumAgentTypeFilter = {
  equals?: InputMaybe<AgentType>;
  in?: InputMaybe<Array<AgentType>>;
  not?: InputMaybe<NestedEnumAgentTypeFilter>;
  notIn?: InputMaybe<Array<AgentType>>;
};

export type EnumCompanyStatusFieldUpdateOperationsInput = {
  set?: InputMaybe<CompanyStatus>;
};

export type EnumCompanyStatusFilter = {
  equals?: InputMaybe<CompanyStatus>;
  in?: InputMaybe<Array<CompanyStatus>>;
  not?: InputMaybe<NestedEnumCompanyStatusFilter>;
  notIn?: InputMaybe<Array<CompanyStatus>>;
};

export type EnumCompanyStatusWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumCompanyStatusFilter>;
  _min?: InputMaybe<NestedEnumCompanyStatusFilter>;
  equals?: InputMaybe<CompanyStatus>;
  in?: InputMaybe<Array<CompanyStatus>>;
  not?: InputMaybe<NestedEnumCompanyStatusWithAggregatesFilter>;
  notIn?: InputMaybe<Array<CompanyStatus>>;
};

export type EnumGenderFieldUpdateOperationsInput = {
  set?: InputMaybe<Gender>;
};

export type EnumGenderFilter = {
  equals?: InputMaybe<Gender>;
  in?: InputMaybe<Array<Gender>>;
  not?: InputMaybe<NestedEnumGenderFilter>;
  notIn?: InputMaybe<Array<Gender>>;
};

export type EnumGenderWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumGenderFilter>;
  _min?: InputMaybe<NestedEnumGenderFilter>;
  equals?: InputMaybe<Gender>;
  in?: InputMaybe<Array<Gender>>;
  not?: InputMaybe<NestedEnumGenderWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Gender>>;
};

export type EnumOranizationStatusFieldUpdateOperationsInput = {
  set?: InputMaybe<OranizationStatus>;
};

export type EnumOranizationStatusFilter = {
  equals?: InputMaybe<OranizationStatus>;
  in?: InputMaybe<Array<OranizationStatus>>;
  not?: InputMaybe<NestedEnumOranizationStatusFilter>;
  notIn?: InputMaybe<Array<OranizationStatus>>;
};

export type EnumOranizationStatusWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumOranizationStatusFilter>;
  _min?: InputMaybe<NestedEnumOranizationStatusFilter>;
  equals?: InputMaybe<OranizationStatus>;
  in?: InputMaybe<Array<OranizationStatus>>;
  not?: InputMaybe<NestedEnumOranizationStatusWithAggregatesFilter>;
  notIn?: InputMaybe<Array<OranizationStatus>>;
};

export type FloatFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars["Float"]["input"]>;
  divide?: InputMaybe<Scalars["Float"]["input"]>;
  increment?: InputMaybe<Scalars["Float"]["input"]>;
  multiply?: InputMaybe<Scalars["Float"]["input"]>;
  set?: InputMaybe<Scalars["Float"]["input"]>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars["Float"]["input"]>;
  gt?: InputMaybe<Scalars["Float"]["input"]>;
  gte?: InputMaybe<Scalars["Float"]["input"]>;
  in?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  lt?: InputMaybe<Scalars["Float"]["input"]>;
  lte?: InputMaybe<Scalars["Float"]["input"]>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars["Float"]["input"]>>;
};

export type FloatNullableFilter = {
  equals?: InputMaybe<Scalars["Float"]["input"]>;
  gt?: InputMaybe<Scalars["Float"]["input"]>;
  gte?: InputMaybe<Scalars["Float"]["input"]>;
  in?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  lt?: InputMaybe<Scalars["Float"]["input"]>;
  lte?: InputMaybe<Scalars["Float"]["input"]>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["Float"]["input"]>>;
};

export type FloatWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedFloatFilter>;
  _min?: InputMaybe<NestedFloatFilter>;
  _sum?: InputMaybe<NestedFloatFilter>;
  equals?: InputMaybe<Scalars["Float"]["input"]>;
  gt?: InputMaybe<Scalars["Float"]["input"]>;
  gte?: InputMaybe<Scalars["Float"]["input"]>;
  in?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  lt?: InputMaybe<Scalars["Float"]["input"]>;
  lte?: InputMaybe<Scalars["Float"]["input"]>;
  not?: InputMaybe<NestedFloatWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars["Float"]["input"]>>;
};

export enum Gender {
  Female = "FEMALE",
  Male = "MALE",
  Notmentioned = "NOTMENTIONED",
}

export type Hierarchy = {
  __typename?: "Hierarchy";
  _count: HierarchyCount;
  children?: Maybe<Array<Hierarchy>>;
  createdAt: Scalars["DateTime"]["output"];
  customers?: Maybe<Array<Customer>>;
  id: Scalars["ID"]["output"];
  level: Scalars["String"]["output"];
  parent?: Maybe<Hierarchy>;
  parentId?: Maybe<Scalars["Int"]["output"]>;
  updatedAt: Scalars["DateTime"]["output"];
};

export type HierarchyCount = {
  __typename?: "HierarchyCount";
  children: Scalars["Int"]["output"];
  customers: Scalars["Int"]["output"];
};

export type HierarchyCreateManyParentInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  level: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type HierarchyCreateManyParentInputEnvelope = {
  data: Array<HierarchyCreateManyParentInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type HierarchyCreateNestedManyWithoutParentInput = {
  connect?: InputMaybe<Array<HierarchyWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<HierarchyCreateOrConnectWithoutParentInput>
  >;
  create?: InputMaybe<Array<HierarchyCreateWithoutParentInput>>;
  createMany?: InputMaybe<HierarchyCreateManyParentInputEnvelope>;
};

export type HierarchyCreateNestedOneWithoutChildrenInput = {
  connect?: InputMaybe<HierarchyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<HierarchyCreateOrConnectWithoutChildrenInput>;
  create?: InputMaybe<HierarchyCreateWithoutChildrenInput>;
};

export type HierarchyCreateNestedOneWithoutCustomersInput = {
  connect?: InputMaybe<HierarchyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<HierarchyCreateOrConnectWithoutCustomersInput>;
  create?: InputMaybe<HierarchyCreateWithoutCustomersInput>;
};

export type HierarchyCreateOrConnectWithoutChildrenInput = {
  create: HierarchyCreateWithoutChildrenInput;
  where: HierarchyWhereUniqueInput;
};

export type HierarchyCreateOrConnectWithoutCustomersInput = {
  create: HierarchyCreateWithoutCustomersInput;
  where: HierarchyWhereUniqueInput;
};

export type HierarchyCreateOrConnectWithoutParentInput = {
  create: HierarchyCreateWithoutParentInput;
  where: HierarchyWhereUniqueInput;
};

export type HierarchyCreateWithoutChildrenInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  customers?: InputMaybe<CustomerCreateNestedManyWithoutHierarchyInput>;
  level: Scalars["String"]["input"];
  parent?: InputMaybe<HierarchyCreateNestedOneWithoutChildrenInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type HierarchyCreateWithoutCustomersInput = {
  children?: InputMaybe<HierarchyCreateNestedManyWithoutParentInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  level: Scalars["String"]["input"];
  parent?: InputMaybe<HierarchyCreateNestedOneWithoutChildrenInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type HierarchyCreateWithoutParentInput = {
  children?: InputMaybe<HierarchyCreateNestedManyWithoutParentInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  customers?: InputMaybe<CustomerCreateNestedManyWithoutHierarchyInput>;
  level: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type HierarchyListRelationFilter = {
  every?: InputMaybe<HierarchyWhereInput>;
  none?: InputMaybe<HierarchyWhereInput>;
  some?: InputMaybe<HierarchyWhereInput>;
};

export type HierarchyNullableRelationFilter = {
  is?: InputMaybe<HierarchyWhereInput>;
  isNot?: InputMaybe<HierarchyWhereInput>;
};

export type HierarchyOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type HierarchyOrderByWithRelationInput = {
  children?: InputMaybe<HierarchyOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  customers?: InputMaybe<CustomerOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  level?: InputMaybe<SortOrder>;
  parent?: InputMaybe<HierarchyOrderByWithRelationInput>;
  parentId?: InputMaybe<SortOrderInput>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type HierarchyScalarWhereInput = {
  AND?: InputMaybe<Array<HierarchyScalarWhereInput>>;
  NOT?: InputMaybe<Array<HierarchyScalarWhereInput>>;
  OR?: InputMaybe<Array<HierarchyScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  level?: InputMaybe<StringFilter>;
  parentId?: InputMaybe<IntNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type HierarchyUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  level?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type HierarchyUpdateManyWithWhereWithoutParentInput = {
  data: HierarchyUpdateManyMutationInput;
  where: HierarchyScalarWhereInput;
};

export type HierarchyUpdateManyWithoutParentNestedInput = {
  connect?: InputMaybe<Array<HierarchyWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<HierarchyCreateOrConnectWithoutParentInput>
  >;
  create?: InputMaybe<Array<HierarchyCreateWithoutParentInput>>;
  createMany?: InputMaybe<HierarchyCreateManyParentInputEnvelope>;
  delete?: InputMaybe<Array<HierarchyWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<HierarchyScalarWhereInput>>;
  disconnect?: InputMaybe<Array<HierarchyWhereUniqueInput>>;
  set?: InputMaybe<Array<HierarchyWhereUniqueInput>>;
  update?: InputMaybe<Array<HierarchyUpdateWithWhereUniqueWithoutParentInput>>;
  updateMany?: InputMaybe<
    Array<HierarchyUpdateManyWithWhereWithoutParentInput>
  >;
  upsert?: InputMaybe<Array<HierarchyUpsertWithWhereUniqueWithoutParentInput>>;
};

export type HierarchyUpdateOneWithoutChildrenNestedInput = {
  connect?: InputMaybe<HierarchyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<HierarchyCreateOrConnectWithoutChildrenInput>;
  create?: InputMaybe<HierarchyCreateWithoutChildrenInput>;
  delete?: InputMaybe<HierarchyWhereInput>;
  disconnect?: InputMaybe<HierarchyWhereInput>;
  update?: InputMaybe<HierarchyUpdateToOneWithWhereWithoutChildrenInput>;
  upsert?: InputMaybe<HierarchyUpsertWithoutChildrenInput>;
};

export type HierarchyUpdateOneWithoutCustomersNestedInput = {
  connect?: InputMaybe<HierarchyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<HierarchyCreateOrConnectWithoutCustomersInput>;
  create?: InputMaybe<HierarchyCreateWithoutCustomersInput>;
  delete?: InputMaybe<HierarchyWhereInput>;
  disconnect?: InputMaybe<HierarchyWhereInput>;
  update?: InputMaybe<HierarchyUpdateToOneWithWhereWithoutCustomersInput>;
  upsert?: InputMaybe<HierarchyUpsertWithoutCustomersInput>;
};

export type HierarchyUpdateToOneWithWhereWithoutChildrenInput = {
  data: HierarchyUpdateWithoutChildrenInput;
  where?: InputMaybe<HierarchyWhereInput>;
};

export type HierarchyUpdateToOneWithWhereWithoutCustomersInput = {
  data: HierarchyUpdateWithoutCustomersInput;
  where?: InputMaybe<HierarchyWhereInput>;
};

export type HierarchyUpdateWithWhereUniqueWithoutParentInput = {
  data: HierarchyUpdateWithoutParentInput;
  where: HierarchyWhereUniqueInput;
};

export type HierarchyUpdateWithoutChildrenInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  customers?: InputMaybe<CustomerUpdateManyWithoutHierarchyNestedInput>;
  level?: InputMaybe<StringFieldUpdateOperationsInput>;
  parent?: InputMaybe<HierarchyUpdateOneWithoutChildrenNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type HierarchyUpdateWithoutCustomersInput = {
  children?: InputMaybe<HierarchyUpdateManyWithoutParentNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  level?: InputMaybe<StringFieldUpdateOperationsInput>;
  parent?: InputMaybe<HierarchyUpdateOneWithoutChildrenNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type HierarchyUpdateWithoutParentInput = {
  children?: InputMaybe<HierarchyUpdateManyWithoutParentNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  customers?: InputMaybe<CustomerUpdateManyWithoutHierarchyNestedInput>;
  level?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type HierarchyUpsertWithWhereUniqueWithoutParentInput = {
  create: HierarchyCreateWithoutParentInput;
  update: HierarchyUpdateWithoutParentInput;
  where: HierarchyWhereUniqueInput;
};

export type HierarchyUpsertWithoutChildrenInput = {
  create: HierarchyCreateWithoutChildrenInput;
  update: HierarchyUpdateWithoutChildrenInput;
  where?: InputMaybe<HierarchyWhereInput>;
};

export type HierarchyUpsertWithoutCustomersInput = {
  create: HierarchyCreateWithoutCustomersInput;
  update: HierarchyUpdateWithoutCustomersInput;
  where?: InputMaybe<HierarchyWhereInput>;
};

export type HierarchyWhereInput = {
  AND?: InputMaybe<Array<HierarchyWhereInput>>;
  NOT?: InputMaybe<Array<HierarchyWhereInput>>;
  OR?: InputMaybe<Array<HierarchyWhereInput>>;
  children?: InputMaybe<HierarchyListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  customers?: InputMaybe<CustomerListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  level?: InputMaybe<StringFilter>;
  parent?: InputMaybe<HierarchyNullableRelationFilter>;
  parentId?: InputMaybe<IntNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type HierarchyWhereUniqueInput = {
  AND?: InputMaybe<Array<HierarchyWhereInput>>;
  NOT?: InputMaybe<Array<HierarchyWhereInput>>;
  OR?: InputMaybe<Array<HierarchyWhereInput>>;
  children?: InputMaybe<HierarchyListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  customers?: InputMaybe<CustomerListRelationFilter>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  level?: InputMaybe<StringFilter>;
  parent?: InputMaybe<HierarchyNullableRelationFilter>;
  parentId?: InputMaybe<IntNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type IncludeContactInput = {
  avatar?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type IncludeCustomerInput = {
  addresses?: InputMaybe<Scalars["Boolean"]["input"]>;
  contacts?: InputMaybe<Scalars["Boolean"]["input"]>;
  logo?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars["Int"]["input"]>;
  divide?: InputMaybe<Scalars["Int"]["input"]>;
  increment?: InputMaybe<Scalars["Int"]["input"]>;
  multiply?: InputMaybe<Scalars["Int"]["input"]>;
  set?: InputMaybe<Scalars["Int"]["input"]>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars["Int"]["input"]>;
  gt?: InputMaybe<Scalars["Int"]["input"]>;
  gte?: InputMaybe<Scalars["Int"]["input"]>;
  in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  lt?: InputMaybe<Scalars["Int"]["input"]>;
  lte?: InputMaybe<Scalars["Int"]["input"]>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars["Int"]["input"]>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars["Int"]["input"]>;
  gt?: InputMaybe<Scalars["Int"]["input"]>;
  gte?: InputMaybe<Scalars["Int"]["input"]>;
  in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  lt?: InputMaybe<Scalars["Int"]["input"]>;
  lte?: InputMaybe<Scalars["Int"]["input"]>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["Int"]["input"]>>;
};

export type IntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars["Int"]["input"]>;
  gt?: InputMaybe<Scalars["Int"]["input"]>;
  gte?: InputMaybe<Scalars["Int"]["input"]>;
  in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  lt?: InputMaybe<Scalars["Int"]["input"]>;
  lte?: InputMaybe<Scalars["Int"]["input"]>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars["Int"]["input"]>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars["Int"]["input"]>;
  gt?: InputMaybe<Scalars["Int"]["input"]>;
  gte?: InputMaybe<Scalars["Int"]["input"]>;
  in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  lt?: InputMaybe<Scalars["Int"]["input"]>;
  lte?: InputMaybe<Scalars["Int"]["input"]>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars["Int"]["input"]>>;
};

export type Logo = {
  __typename?: "Logo";
  customer: Customer;
  customerId: Scalars["Int"]["output"];
  id: Scalars["ID"]["output"];
  src: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
};

export type LogoCreateNestedOneWithoutCustomerInput = {
  connect?: InputMaybe<LogoWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LogoCreateOrConnectWithoutCustomerInput>;
  create?: InputMaybe<LogoCreateWithoutCustomerInput>;
};

export type LogoCreateOrConnectWithoutCustomerInput = {
  create: LogoCreateWithoutCustomerInput;
  where: LogoWhereUniqueInput;
};

export type LogoCreateWithoutCustomerInput = {
  src: Scalars["String"]["input"];
  title: Scalars["String"]["input"];
};

export type LogoNullableRelationFilter = {
  is?: InputMaybe<LogoWhereInput>;
  isNot?: InputMaybe<LogoWhereInput>;
};

export type LogoOrderByWithRelationInput = {
  customer?: InputMaybe<CustomerOrderByWithRelationInput>;
  customerId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  src?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type LogoUpdateOneWithoutCustomerNestedInput = {
  connect?: InputMaybe<LogoWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LogoCreateOrConnectWithoutCustomerInput>;
  create?: InputMaybe<LogoCreateWithoutCustomerInput>;
  delete?: InputMaybe<LogoWhereInput>;
  disconnect?: InputMaybe<LogoWhereInput>;
  update?: InputMaybe<LogoUpdateToOneWithWhereWithoutCustomerInput>;
  upsert?: InputMaybe<LogoUpsertWithoutCustomerInput>;
};

export type LogoUpdateToOneWithWhereWithoutCustomerInput = {
  data: LogoUpdateWithoutCustomerInput;
  where?: InputMaybe<LogoWhereInput>;
};

export type LogoUpdateWithoutCustomerInput = {
  src?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type LogoUpsertWithoutCustomerInput = {
  create: LogoCreateWithoutCustomerInput;
  update: LogoUpdateWithoutCustomerInput;
  where?: InputMaybe<LogoWhereInput>;
};

export type LogoWhereInput = {
  AND?: InputMaybe<Array<LogoWhereInput>>;
  NOT?: InputMaybe<Array<LogoWhereInput>>;
  OR?: InputMaybe<Array<LogoWhereInput>>;
  customer?: InputMaybe<CustomerRelationFilter>;
  customerId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  src?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type LogoWhereUniqueInput = {
  AND?: InputMaybe<Array<LogoWhereInput>>;
  NOT?: InputMaybe<Array<LogoWhereInput>>;
  OR?: InputMaybe<Array<LogoWhereInput>>;
  customer?: InputMaybe<CustomerRelationFilter>;
  customerId?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  src?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type Mutation = {
  __typename?: "Mutation";
  createAgentTerritory?: Maybe<AgentTerritory>;
  createContact?: Maybe<Contact>;
  createCustomer?: Maybe<Customer>;
  createManyAgentTerritory?: Maybe<AffectedRows>;
  createManyContact?: Maybe<AffectedRows>;
  createManyCustomer?: Maybe<AffectedRows>;
  createManyOrganization?: Maybe<AffectedRows>;
  createManyServiceTerritory?: Maybe<AffectedRows>;
  createOrganization?: Maybe<Organization>;
  createServiceTerritory?: Maybe<ServiceTerritory>;
  deleteAgentTerritory?: Maybe<AgentTerritory>;
  deleteContact?: Maybe<Contact>;
  deleteCustomer?: Maybe<Customer>;
  deleteManyAgentTerritory?: Maybe<AffectedRows>;
  deleteManyContact?: Maybe<AffectedRows>;
  deleteManyCustomer?: Maybe<AffectedRows>;
  deleteManyOrganization?: Maybe<AffectedRows>;
  deleteManyServiceTerritory?: Maybe<AffectedRows>;
  deleteOrganization?: Maybe<Organization>;
  deleteServiceTerritory?: Maybe<ServiceTerritory>;
  updateAgentTerritory?: Maybe<AgentTerritory>;
  updateContact?: Maybe<Contact>;
  updateCustomer?: Maybe<Customer>;
  updateManyAgentTerritory?: Maybe<AffectedRows>;
  updateManyContact?: Maybe<AffectedRows>;
  updateManyCustomer?: Maybe<AffectedRows>;
  updateManyOrganization?: Maybe<AffectedRows>;
  updateManyServiceTerritory?: Maybe<AffectedRows>;
  updateOrganization?: Maybe<Organization>;
  updateServiceTerritory?: Maybe<ServiceTerritory>;
};

export type MutationCreateAgentTerritoryArgs = {
  data: AgentTerritoryCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};

export type MutationCreateContactArgs = {
  data: ContactCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};

export type MutationCreateCustomerArgs = {
  data: CustomerCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};

export type MutationCreateManyAgentTerritoryArgs = {
  data: Array<AgentTerritoryCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationCreateManyContactArgs = {
  data: Array<ContactCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationCreateManyCustomerArgs = {
  data: Array<CustomerCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationCreateManyOrganizationArgs = {
  data: Array<OrganizationCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationCreateManyServiceTerritoryArgs = {
  data: Array<ServiceTerritoryCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationCreateOrganizationArgs = {
  data: OrganizationCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};

export type MutationCreateServiceTerritoryArgs = {
  data: ServiceTerritoryCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};

export type MutationDeleteAgentTerritoryArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: AgentTerritoryWhereUniqueInput;
};

export type MutationDeleteContactArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: ContactWhereUniqueInput;
};

export type MutationDeleteCustomerArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: CustomerWhereUniqueInput;
};

export type MutationDeleteManyAgentTerritoryArgs = {
  where?: InputMaybe<AgentTerritoryWhereInput>;
};

export type MutationDeleteManyContactArgs = {
  where?: InputMaybe<ContactWhereInput>;
};

export type MutationDeleteManyCustomerArgs = {
  where?: InputMaybe<CustomerWhereInput>;
};

export type MutationDeleteManyOrganizationArgs = {
  where?: InputMaybe<OrganizationWhereInput>;
};

export type MutationDeleteManyServiceTerritoryArgs = {
  where?: InputMaybe<ServiceTerritoryWhereInput>;
};

export type MutationDeleteOrganizationArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: OrganizationWhereUniqueInput;
};

export type MutationDeleteServiceTerritoryArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: ServiceTerritoryWhereUniqueInput;
};

export type MutationUpdateAgentTerritoryArgs = {
  data: AgentTerritoryUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: AgentTerritoryWhereUniqueInput;
};

export type MutationUpdateContactArgs = {
  data: ContactUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: ContactWhereUniqueInput;
};

export type MutationUpdateCustomerArgs = {
  data: CustomerUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: CustomerWhereUniqueInput;
};

export type MutationUpdateManyAgentTerritoryArgs = {
  data: AgentTerritoryUncheckedUpdateManyInput;
  where?: InputMaybe<AgentTerritoryWhereInput>;
};

export type MutationUpdateManyContactArgs = {
  data: ContactUpdateManyMutationInput;
  where?: InputMaybe<ContactWhereInput>;
};

export type MutationUpdateManyCustomerArgs = {
  data: CustomerUpdateManyMutationInput;
  where?: InputMaybe<CustomerWhereInput>;
};

export type MutationUpdateManyOrganizationArgs = {
  data: OrganizationUpdateManyMutationInput;
  where?: InputMaybe<OrganizationWhereInput>;
};

export type MutationUpdateManyServiceTerritoryArgs = {
  data: ServiceTerritoryUpdateManyMutationInput;
  where?: InputMaybe<ServiceTerritoryWhereInput>;
};

export type MutationUpdateOrganizationArgs = {
  data: OrganizationUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: OrganizationWhereUniqueInput;
};

export type MutationUpdateServiceTerritoryArgs = {
  data: ServiceTerritoryUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: ServiceTerritoryWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars["Boolean"]["input"]>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars["Boolean"]["input"]>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars["DateTime"]["input"]>;
  gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  in?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
  lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars["DateTime"]["input"]>;
  gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  in?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
  lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
};

export type NestedEnumAgentTypeFilter = {
  equals?: InputMaybe<AgentType>;
  in?: InputMaybe<Array<AgentType>>;
  not?: InputMaybe<NestedEnumAgentTypeFilter>;
  notIn?: InputMaybe<Array<AgentType>>;
};

export type NestedEnumCompanyStatusFilter = {
  equals?: InputMaybe<CompanyStatus>;
  in?: InputMaybe<Array<CompanyStatus>>;
  not?: InputMaybe<NestedEnumCompanyStatusFilter>;
  notIn?: InputMaybe<Array<CompanyStatus>>;
};

export type NestedEnumCompanyStatusWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumCompanyStatusFilter>;
  _min?: InputMaybe<NestedEnumCompanyStatusFilter>;
  equals?: InputMaybe<CompanyStatus>;
  in?: InputMaybe<Array<CompanyStatus>>;
  not?: InputMaybe<NestedEnumCompanyStatusWithAggregatesFilter>;
  notIn?: InputMaybe<Array<CompanyStatus>>;
};

export type NestedEnumGenderFilter = {
  equals?: InputMaybe<Gender>;
  in?: InputMaybe<Array<Gender>>;
  not?: InputMaybe<NestedEnumGenderFilter>;
  notIn?: InputMaybe<Array<Gender>>;
};

export type NestedEnumGenderWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumGenderFilter>;
  _min?: InputMaybe<NestedEnumGenderFilter>;
  equals?: InputMaybe<Gender>;
  in?: InputMaybe<Array<Gender>>;
  not?: InputMaybe<NestedEnumGenderWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Gender>>;
};

export type NestedEnumOranizationStatusFilter = {
  equals?: InputMaybe<OranizationStatus>;
  in?: InputMaybe<Array<OranizationStatus>>;
  not?: InputMaybe<NestedEnumOranizationStatusFilter>;
  notIn?: InputMaybe<Array<OranizationStatus>>;
};

export type NestedEnumOranizationStatusWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumOranizationStatusFilter>;
  _min?: InputMaybe<NestedEnumOranizationStatusFilter>;
  equals?: InputMaybe<OranizationStatus>;
  in?: InputMaybe<Array<OranizationStatus>>;
  not?: InputMaybe<NestedEnumOranizationStatusWithAggregatesFilter>;
  notIn?: InputMaybe<Array<OranizationStatus>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars["Float"]["input"]>;
  gt?: InputMaybe<Scalars["Float"]["input"]>;
  gte?: InputMaybe<Scalars["Float"]["input"]>;
  in?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  lt?: InputMaybe<Scalars["Float"]["input"]>;
  lte?: InputMaybe<Scalars["Float"]["input"]>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars["Float"]["input"]>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars["Float"]["input"]>;
  gt?: InputMaybe<Scalars["Float"]["input"]>;
  gte?: InputMaybe<Scalars["Float"]["input"]>;
  in?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  lt?: InputMaybe<Scalars["Float"]["input"]>;
  lte?: InputMaybe<Scalars["Float"]["input"]>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["Float"]["input"]>>;
};

export type NestedFloatWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedFloatFilter>;
  _min?: InputMaybe<NestedFloatFilter>;
  _sum?: InputMaybe<NestedFloatFilter>;
  equals?: InputMaybe<Scalars["Float"]["input"]>;
  gt?: InputMaybe<Scalars["Float"]["input"]>;
  gte?: InputMaybe<Scalars["Float"]["input"]>;
  in?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  lt?: InputMaybe<Scalars["Float"]["input"]>;
  lte?: InputMaybe<Scalars["Float"]["input"]>;
  not?: InputMaybe<NestedFloatWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars["Float"]["input"]>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars["Int"]["input"]>;
  gt?: InputMaybe<Scalars["Int"]["input"]>;
  gte?: InputMaybe<Scalars["Int"]["input"]>;
  in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  lt?: InputMaybe<Scalars["Int"]["input"]>;
  lte?: InputMaybe<Scalars["Int"]["input"]>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars["Int"]["input"]>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars["Int"]["input"]>;
  gt?: InputMaybe<Scalars["Int"]["input"]>;
  gte?: InputMaybe<Scalars["Int"]["input"]>;
  in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  lt?: InputMaybe<Scalars["Int"]["input"]>;
  lte?: InputMaybe<Scalars["Int"]["input"]>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["Int"]["input"]>>;
};

export type NestedIntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars["Int"]["input"]>;
  gt?: InputMaybe<Scalars["Int"]["input"]>;
  gte?: InputMaybe<Scalars["Int"]["input"]>;
  in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  lt?: InputMaybe<Scalars["Int"]["input"]>;
  lte?: InputMaybe<Scalars["Int"]["input"]>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars["Int"]["input"]>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars["Int"]["input"]>;
  gt?: InputMaybe<Scalars["Int"]["input"]>;
  gte?: InputMaybe<Scalars["Int"]["input"]>;
  in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  lt?: InputMaybe<Scalars["Int"]["input"]>;
  lte?: InputMaybe<Scalars["Int"]["input"]>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars["Int"]["input"]>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars["String"]["input"]>;
  endsWith?: InputMaybe<Scalars["String"]["input"]>;
  equals?: InputMaybe<Scalars["String"]["input"]>;
  gt?: InputMaybe<Scalars["String"]["input"]>;
  gte?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  lt?: InputMaybe<Scalars["String"]["input"]>;
  lte?: InputMaybe<Scalars["String"]["input"]>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
  startsWith?: InputMaybe<Scalars["String"]["input"]>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars["String"]["input"]>;
  endsWith?: InputMaybe<Scalars["String"]["input"]>;
  equals?: InputMaybe<Scalars["String"]["input"]>;
  gt?: InputMaybe<Scalars["String"]["input"]>;
  gte?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  lt?: InputMaybe<Scalars["String"]["input"]>;
  lte?: InputMaybe<Scalars["String"]["input"]>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
  startsWith?: InputMaybe<Scalars["String"]["input"]>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars["String"]["input"]>;
  endsWith?: InputMaybe<Scalars["String"]["input"]>;
  equals?: InputMaybe<Scalars["String"]["input"]>;
  gt?: InputMaybe<Scalars["String"]["input"]>;
  gte?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  lt?: InputMaybe<Scalars["String"]["input"]>;
  lte?: InputMaybe<Scalars["String"]["input"]>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
  startsWith?: InputMaybe<Scalars["String"]["input"]>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars["String"]["input"]>;
  endsWith?: InputMaybe<Scalars["String"]["input"]>;
  equals?: InputMaybe<Scalars["String"]["input"]>;
  gt?: InputMaybe<Scalars["String"]["input"]>;
  gte?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  lt?: InputMaybe<Scalars["String"]["input"]>;
  lte?: InputMaybe<Scalars["String"]["input"]>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
  startsWith?: InputMaybe<Scalars["String"]["input"]>;
};

export type NullableFloatFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars["Float"]["input"]>;
  divide?: InputMaybe<Scalars["Float"]["input"]>;
  increment?: InputMaybe<Scalars["Float"]["input"]>;
  multiply?: InputMaybe<Scalars["Float"]["input"]>;
  set?: InputMaybe<Scalars["Float"]["input"]>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars["String"]["input"]>;
};

export enum NullsOrder {
  First = "first",
  Last = "last",
}

export enum OranizationStatus {
  Active = "ACTIVE",
  Hold = "HOLD",
  Inactive = "INACTIVE",
  New = "NEW",
  Onboarding = "ONBOARDING",
}

export type Organization = {
  __typename?: "Organization";
  _count: OrganizationCount;
  address?: Maybe<Scalars["String"]["output"]>;
  city?: Maybe<Scalars["String"]["output"]>;
  company: Scalars["String"]["output"];
  country?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["DateTime"]["output"];
  customers?: Maybe<Array<Customer>>;
  description?: Maybe<Scalars["String"]["output"]>;
  domain: Scalars["String"]["output"];
  email: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  linkedinUrl: Scalars["String"]["output"];
  logo?: Maybe<OrganizationLogo>;
  name: Scalars["String"]["output"];
  phone?: Maybe<Scalars["String"]["output"]>;
  status: OranizationStatus;
  taxIdentifier?: Maybe<Scalars["String"]["output"]>;
  updatedAt: Scalars["DateTime"]["output"];
  website?: Maybe<Scalars["String"]["output"]>;
  zipcode?: Maybe<Scalars["String"]["output"]>;
};

export type OrganizationAvgAggregate = {
  __typename?: "OrganizationAvgAggregate";
  id?: Maybe<Scalars["Float"]["output"]>;
};

export type OrganizationAvgAggregateInput = {
  id?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type OrganizationAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type OrganizationCount = {
  __typename?: "OrganizationCount";
  customers: Scalars["Int"]["output"];
};

export type OrganizationCountAggregate = {
  __typename?: "OrganizationCountAggregate";
  _all: Scalars["Int"]["output"];
  address: Scalars["Int"]["output"];
  city: Scalars["Int"]["output"];
  company: Scalars["Int"]["output"];
  country: Scalars["Int"]["output"];
  createdAt: Scalars["Int"]["output"];
  description: Scalars["Int"]["output"];
  domain: Scalars["Int"]["output"];
  email: Scalars["Int"]["output"];
  id: Scalars["Int"]["output"];
  linkedinUrl: Scalars["Int"]["output"];
  name: Scalars["Int"]["output"];
  phone: Scalars["Int"]["output"];
  status: Scalars["Int"]["output"];
  taxIdentifier: Scalars["Int"]["output"];
  updatedAt: Scalars["Int"]["output"];
  website: Scalars["Int"]["output"];
  zipcode: Scalars["Int"]["output"];
};

export type OrganizationCountAggregateInput = {
  _all?: InputMaybe<Scalars["Boolean"]["input"]>;
  address?: InputMaybe<Scalars["Boolean"]["input"]>;
  city?: InputMaybe<Scalars["Boolean"]["input"]>;
  company?: InputMaybe<Scalars["Boolean"]["input"]>;
  country?: InputMaybe<Scalars["Boolean"]["input"]>;
  createdAt?: InputMaybe<Scalars["Boolean"]["input"]>;
  description?: InputMaybe<Scalars["Boolean"]["input"]>;
  domain?: InputMaybe<Scalars["Boolean"]["input"]>;
  email?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Scalars["Boolean"]["input"]>;
  linkedinUrl?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["Boolean"]["input"]>;
  phone?: InputMaybe<Scalars["Boolean"]["input"]>;
  status?: InputMaybe<Scalars["Boolean"]["input"]>;
  taxIdentifier?: InputMaybe<Scalars["Boolean"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Boolean"]["input"]>;
  website?: InputMaybe<Scalars["Boolean"]["input"]>;
  zipcode?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type OrganizationCountOrderByAggregateInput = {
  address?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  company?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  domain?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  linkedinUrl?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  taxIdentifier?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  website?: InputMaybe<SortOrder>;
  zipcode?: InputMaybe<SortOrder>;
};

export type OrganizationCreateInput = {
  address?: InputMaybe<Scalars["String"]["input"]>;
  city?: InputMaybe<Scalars["String"]["input"]>;
  company: Scalars["String"]["input"];
  country?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  customers?: InputMaybe<CustomerCreateNestedManyWithoutOrganizationInput>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  domain: Scalars["String"]["input"];
  email: Scalars["String"]["input"];
  linkedinUrl: Scalars["String"]["input"];
  logo?: InputMaybe<OrganizationLogoCreateNestedOneWithoutOrganizationInput>;
  name: Scalars["String"]["input"];
  phone?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<OranizationStatus>;
  taxIdentifier?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  website?: InputMaybe<Scalars["String"]["input"]>;
  zipcode?: InputMaybe<Scalars["String"]["input"]>;
};

export type OrganizationCreateManyInput = {
  address?: InputMaybe<Scalars["String"]["input"]>;
  city?: InputMaybe<Scalars["String"]["input"]>;
  company: Scalars["String"]["input"];
  country?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  domain: Scalars["String"]["input"];
  email: Scalars["String"]["input"];
  id?: InputMaybe<Scalars["Int"]["input"]>;
  linkedinUrl: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  phone?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<OranizationStatus>;
  taxIdentifier?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  website?: InputMaybe<Scalars["String"]["input"]>;
  zipcode?: InputMaybe<Scalars["String"]["input"]>;
};

export type OrganizationCreateNestedOneWithoutCustomersInput = {
  connect?: InputMaybe<OrganizationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<OrganizationCreateOrConnectWithoutCustomersInput>;
  create?: InputMaybe<OrganizationCreateWithoutCustomersInput>;
};

export type OrganizationCreateOrConnectWithoutCustomersInput = {
  create: OrganizationCreateWithoutCustomersInput;
  where: OrganizationWhereUniqueInput;
};

export type OrganizationCreateWithoutCustomersInput = {
  address?: InputMaybe<Scalars["String"]["input"]>;
  city?: InputMaybe<Scalars["String"]["input"]>;
  company: Scalars["String"]["input"];
  country?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  domain: Scalars["String"]["input"];
  email: Scalars["String"]["input"];
  linkedinUrl: Scalars["String"]["input"];
  logo?: InputMaybe<OrganizationLogoCreateNestedOneWithoutOrganizationInput>;
  name: Scalars["String"]["input"];
  phone?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<OranizationStatus>;
  taxIdentifier?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  website?: InputMaybe<Scalars["String"]["input"]>;
  zipcode?: InputMaybe<Scalars["String"]["input"]>;
};

export type OrganizationGroupBy = {
  __typename?: "OrganizationGroupBy";
  _avg?: Maybe<OrganizationAvgAggregate>;
  _count?: Maybe<OrganizationCountAggregate>;
  _max?: Maybe<OrganizationMaxAggregate>;
  _min?: Maybe<OrganizationMinAggregate>;
  _sum?: Maybe<OrganizationSumAggregate>;
  address?: Maybe<Scalars["String"]["output"]>;
  city?: Maybe<Scalars["String"]["output"]>;
  company: Scalars["String"]["output"];
  country?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["DateTime"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  domain: Scalars["String"]["output"];
  email: Scalars["String"]["output"];
  id: Scalars["Int"]["output"];
  linkedinUrl: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  phone?: Maybe<Scalars["String"]["output"]>;
  status: OranizationStatus;
  taxIdentifier?: Maybe<Scalars["String"]["output"]>;
  updatedAt: Scalars["DateTime"]["output"];
  website?: Maybe<Scalars["String"]["output"]>;
  zipcode?: Maybe<Scalars["String"]["output"]>;
};

export type OrganizationLogo = {
  __typename?: "OrganizationLogo";
  id: Scalars["ID"]["output"];
  organization: Organization;
  organizationId: Scalars["Int"]["output"];
  src: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
};

export type OrganizationLogoCreateNestedOneWithoutOrganizationInput = {
  connect?: InputMaybe<OrganizationLogoWhereUniqueInput>;
  connectOrCreate?: InputMaybe<OrganizationLogoCreateOrConnectWithoutOrganizationInput>;
  create?: InputMaybe<OrganizationLogoCreateWithoutOrganizationInput>;
};

export type OrganizationLogoCreateOrConnectWithoutOrganizationInput = {
  create: OrganizationLogoCreateWithoutOrganizationInput;
  where: OrganizationLogoWhereUniqueInput;
};

export type OrganizationLogoCreateWithoutOrganizationInput = {
  src: Scalars["String"]["input"];
  title: Scalars["String"]["input"];
};

export type OrganizationLogoNullableRelationFilter = {
  is?: InputMaybe<OrganizationLogoWhereInput>;
  isNot?: InputMaybe<OrganizationLogoWhereInput>;
};

export type OrganizationLogoOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  organization?: InputMaybe<OrganizationOrderByWithRelationInput>;
  organizationId?: InputMaybe<SortOrder>;
  src?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type OrganizationLogoUpdateOneWithoutOrganizationNestedInput = {
  connect?: InputMaybe<OrganizationLogoWhereUniqueInput>;
  connectOrCreate?: InputMaybe<OrganizationLogoCreateOrConnectWithoutOrganizationInput>;
  create?: InputMaybe<OrganizationLogoCreateWithoutOrganizationInput>;
  delete?: InputMaybe<OrganizationLogoWhereInput>;
  disconnect?: InputMaybe<OrganizationLogoWhereInput>;
  update?: InputMaybe<OrganizationLogoUpdateToOneWithWhereWithoutOrganizationInput>;
  upsert?: InputMaybe<OrganizationLogoUpsertWithoutOrganizationInput>;
};

export type OrganizationLogoUpdateToOneWithWhereWithoutOrganizationInput = {
  data: OrganizationLogoUpdateWithoutOrganizationInput;
  where?: InputMaybe<OrganizationLogoWhereInput>;
};

export type OrganizationLogoUpdateWithoutOrganizationInput = {
  src?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type OrganizationLogoUpsertWithoutOrganizationInput = {
  create: OrganizationLogoCreateWithoutOrganizationInput;
  update: OrganizationLogoUpdateWithoutOrganizationInput;
  where?: InputMaybe<OrganizationLogoWhereInput>;
};

export type OrganizationLogoWhereInput = {
  AND?: InputMaybe<Array<OrganizationLogoWhereInput>>;
  NOT?: InputMaybe<Array<OrganizationLogoWhereInput>>;
  OR?: InputMaybe<Array<OrganizationLogoWhereInput>>;
  id?: InputMaybe<IntFilter>;
  organization?: InputMaybe<OrganizationRelationFilter>;
  organizationId?: InputMaybe<IntFilter>;
  src?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type OrganizationLogoWhereUniqueInput = {
  AND?: InputMaybe<Array<OrganizationLogoWhereInput>>;
  NOT?: InputMaybe<Array<OrganizationLogoWhereInput>>;
  OR?: InputMaybe<Array<OrganizationLogoWhereInput>>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  organization?: InputMaybe<OrganizationRelationFilter>;
  organizationId?: InputMaybe<Scalars["Int"]["input"]>;
  src?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type OrganizationMaxAggregate = {
  __typename?: "OrganizationMaxAggregate";
  address?: Maybe<Scalars["String"]["output"]>;
  city?: Maybe<Scalars["String"]["output"]>;
  company?: Maybe<Scalars["String"]["output"]>;
  country?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  domain?: Maybe<Scalars["String"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  linkedinUrl?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  phone?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<OranizationStatus>;
  taxIdentifier?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  website?: Maybe<Scalars["String"]["output"]>;
  zipcode?: Maybe<Scalars["String"]["output"]>;
};

export type OrganizationMaxAggregateInput = {
  address?: InputMaybe<Scalars["Boolean"]["input"]>;
  city?: InputMaybe<Scalars["Boolean"]["input"]>;
  company?: InputMaybe<Scalars["Boolean"]["input"]>;
  country?: InputMaybe<Scalars["Boolean"]["input"]>;
  createdAt?: InputMaybe<Scalars["Boolean"]["input"]>;
  description?: InputMaybe<Scalars["Boolean"]["input"]>;
  domain?: InputMaybe<Scalars["Boolean"]["input"]>;
  email?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Scalars["Boolean"]["input"]>;
  linkedinUrl?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["Boolean"]["input"]>;
  phone?: InputMaybe<Scalars["Boolean"]["input"]>;
  status?: InputMaybe<Scalars["Boolean"]["input"]>;
  taxIdentifier?: InputMaybe<Scalars["Boolean"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Boolean"]["input"]>;
  website?: InputMaybe<Scalars["Boolean"]["input"]>;
  zipcode?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type OrganizationMaxOrderByAggregateInput = {
  address?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  company?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  domain?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  linkedinUrl?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  taxIdentifier?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  website?: InputMaybe<SortOrder>;
  zipcode?: InputMaybe<SortOrder>;
};

export type OrganizationMinAggregate = {
  __typename?: "OrganizationMinAggregate";
  address?: Maybe<Scalars["String"]["output"]>;
  city?: Maybe<Scalars["String"]["output"]>;
  company?: Maybe<Scalars["String"]["output"]>;
  country?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  domain?: Maybe<Scalars["String"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  linkedinUrl?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  phone?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<OranizationStatus>;
  taxIdentifier?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  website?: Maybe<Scalars["String"]["output"]>;
  zipcode?: Maybe<Scalars["String"]["output"]>;
};

export type OrganizationMinAggregateInput = {
  address?: InputMaybe<Scalars["Boolean"]["input"]>;
  city?: InputMaybe<Scalars["Boolean"]["input"]>;
  company?: InputMaybe<Scalars["Boolean"]["input"]>;
  country?: InputMaybe<Scalars["Boolean"]["input"]>;
  createdAt?: InputMaybe<Scalars["Boolean"]["input"]>;
  description?: InputMaybe<Scalars["Boolean"]["input"]>;
  domain?: InputMaybe<Scalars["Boolean"]["input"]>;
  email?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Scalars["Boolean"]["input"]>;
  linkedinUrl?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["Boolean"]["input"]>;
  phone?: InputMaybe<Scalars["Boolean"]["input"]>;
  status?: InputMaybe<Scalars["Boolean"]["input"]>;
  taxIdentifier?: InputMaybe<Scalars["Boolean"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Boolean"]["input"]>;
  website?: InputMaybe<Scalars["Boolean"]["input"]>;
  zipcode?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type OrganizationMinOrderByAggregateInput = {
  address?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  company?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  domain?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  linkedinUrl?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  taxIdentifier?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  website?: InputMaybe<SortOrder>;
  zipcode?: InputMaybe<SortOrder>;
};

export type OrganizationOrderByWithAggregationInput = {
  _avg?: InputMaybe<OrganizationAvgOrderByAggregateInput>;
  _count?: InputMaybe<OrganizationCountOrderByAggregateInput>;
  _max?: InputMaybe<OrganizationMaxOrderByAggregateInput>;
  _min?: InputMaybe<OrganizationMinOrderByAggregateInput>;
  _sum?: InputMaybe<OrganizationSumOrderByAggregateInput>;
  address?: InputMaybe<SortOrderInput>;
  city?: InputMaybe<SortOrderInput>;
  company?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrderInput>;
  domain?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  linkedinUrl?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrderInput>;
  status?: InputMaybe<SortOrder>;
  taxIdentifier?: InputMaybe<SortOrderInput>;
  updatedAt?: InputMaybe<SortOrder>;
  website?: InputMaybe<SortOrderInput>;
  zipcode?: InputMaybe<SortOrderInput>;
};

export type OrganizationOrderByWithRelationInput = {
  address?: InputMaybe<SortOrderInput>;
  city?: InputMaybe<SortOrderInput>;
  company?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  customers?: InputMaybe<CustomerOrderByRelationAggregateInput>;
  description?: InputMaybe<SortOrderInput>;
  domain?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  linkedinUrl?: InputMaybe<SortOrder>;
  logo?: InputMaybe<OrganizationLogoOrderByWithRelationInput>;
  name?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrderInput>;
  status?: InputMaybe<SortOrder>;
  taxIdentifier?: InputMaybe<SortOrderInput>;
  updatedAt?: InputMaybe<SortOrder>;
  website?: InputMaybe<SortOrderInput>;
  zipcode?: InputMaybe<SortOrderInput>;
};

export type OrganizationRelationFilter = {
  is?: InputMaybe<OrganizationWhereInput>;
  isNot?: InputMaybe<OrganizationWhereInput>;
};

export enum OrganizationScalarFieldEnum {
  Address = "address",
  City = "city",
  Company = "company",
  Country = "country",
  CreatedAt = "createdAt",
  Description = "description",
  Domain = "domain",
  Email = "email",
  Id = "id",
  LinkedinUrl = "linkedinUrl",
  Name = "name",
  Phone = "phone",
  Status = "status",
  TaxIdentifier = "taxIdentifier",
  UpdatedAt = "updatedAt",
  Website = "website",
  Zipcode = "zipcode",
}

export type OrganizationScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<OrganizationScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<OrganizationScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<OrganizationScalarWhereWithAggregatesInput>>;
  address?: InputMaybe<StringNullableWithAggregatesFilter>;
  city?: InputMaybe<StringNullableWithAggregatesFilter>;
  company?: InputMaybe<StringWithAggregatesFilter>;
  country?: InputMaybe<StringNullableWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  description?: InputMaybe<StringNullableWithAggregatesFilter>;
  domain?: InputMaybe<StringWithAggregatesFilter>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  linkedinUrl?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  phone?: InputMaybe<StringNullableWithAggregatesFilter>;
  status?: InputMaybe<EnumOranizationStatusWithAggregatesFilter>;
  taxIdentifier?: InputMaybe<StringNullableWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  website?: InputMaybe<StringNullableWithAggregatesFilter>;
  zipcode?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type OrganizationSumAggregate = {
  __typename?: "OrganizationSumAggregate";
  id?: Maybe<Scalars["Int"]["output"]>;
};

export type OrganizationSumAggregateInput = {
  id?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type OrganizationSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type OrganizationUpdateInput = {
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  city?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  company?: InputMaybe<StringFieldUpdateOperationsInput>;
  country?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  customers?: InputMaybe<CustomerUpdateManyWithoutOrganizationNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  domain?: InputMaybe<StringFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  linkedinUrl?: InputMaybe<StringFieldUpdateOperationsInput>;
  logo?: InputMaybe<OrganizationLogoUpdateOneWithoutOrganizationNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumOranizationStatusFieldUpdateOperationsInput>;
  taxIdentifier?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  website?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  zipcode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type OrganizationUpdateManyMutationInput = {
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  city?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  company?: InputMaybe<StringFieldUpdateOperationsInput>;
  country?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  domain?: InputMaybe<StringFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  linkedinUrl?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumOranizationStatusFieldUpdateOperationsInput>;
  taxIdentifier?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  website?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  zipcode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type OrganizationUpdateOneRequiredWithoutCustomersNestedInput = {
  connect?: InputMaybe<OrganizationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<OrganizationCreateOrConnectWithoutCustomersInput>;
  create?: InputMaybe<OrganizationCreateWithoutCustomersInput>;
  update?: InputMaybe<OrganizationUpdateToOneWithWhereWithoutCustomersInput>;
  upsert?: InputMaybe<OrganizationUpsertWithoutCustomersInput>;
};

export type OrganizationUpdateToOneWithWhereWithoutCustomersInput = {
  data: OrganizationUpdateWithoutCustomersInput;
  where?: InputMaybe<OrganizationWhereInput>;
};

export type OrganizationUpdateWithoutCustomersInput = {
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  city?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  company?: InputMaybe<StringFieldUpdateOperationsInput>;
  country?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  domain?: InputMaybe<StringFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  linkedinUrl?: InputMaybe<StringFieldUpdateOperationsInput>;
  logo?: InputMaybe<OrganizationLogoUpdateOneWithoutOrganizationNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumOranizationStatusFieldUpdateOperationsInput>;
  taxIdentifier?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  website?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  zipcode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type OrganizationUpsertWithoutCustomersInput = {
  create: OrganizationCreateWithoutCustomersInput;
  update: OrganizationUpdateWithoutCustomersInput;
  where?: InputMaybe<OrganizationWhereInput>;
};

export type OrganizationWhereInput = {
  AND?: InputMaybe<Array<OrganizationWhereInput>>;
  NOT?: InputMaybe<Array<OrganizationWhereInput>>;
  OR?: InputMaybe<Array<OrganizationWhereInput>>;
  address?: InputMaybe<StringNullableFilter>;
  city?: InputMaybe<StringNullableFilter>;
  company?: InputMaybe<StringFilter>;
  country?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  customers?: InputMaybe<CustomerListRelationFilter>;
  description?: InputMaybe<StringNullableFilter>;
  domain?: InputMaybe<StringFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  linkedinUrl?: InputMaybe<StringFilter>;
  logo?: InputMaybe<OrganizationLogoNullableRelationFilter>;
  name?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringNullableFilter>;
  status?: InputMaybe<EnumOranizationStatusFilter>;
  taxIdentifier?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  website?: InputMaybe<StringNullableFilter>;
  zipcode?: InputMaybe<StringNullableFilter>;
};

export type OrganizationWhereUniqueInput = {
  AND?: InputMaybe<Array<OrganizationWhereInput>>;
  NOT?: InputMaybe<Array<OrganizationWhereInput>>;
  OR?: InputMaybe<Array<OrganizationWhereInput>>;
  address?: InputMaybe<StringNullableFilter>;
  city?: InputMaybe<StringNullableFilter>;
  company?: InputMaybe<StringFilter>;
  country?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  customers?: InputMaybe<CustomerListRelationFilter>;
  description?: InputMaybe<StringNullableFilter>;
  domain?: InputMaybe<StringFilter>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  linkedinUrl?: InputMaybe<StringFilter>;
  logo?: InputMaybe<OrganizationLogoNullableRelationFilter>;
  name?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringNullableFilter>;
  status?: InputMaybe<EnumOranizationStatusFilter>;
  taxIdentifier?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  website?: InputMaybe<StringNullableFilter>;
  zipcode?: InputMaybe<StringNullableFilter>;
};

export type Query = {
  __typename?: "Query";
  aggregateAgentTerritory: AggregateAgentTerritory;
  aggregateContact: AggregateContact;
  aggregateCustomer: AggregateCustomer;
  aggregateOrganization: AggregateOrganization;
  aggregateServiceTerritory: AggregateServiceTerritory;
  findFirstAgentTerritory: AgentTerritory;
  findFirstContact: Contact;
  findFirstCustomer: Customer;
  findFirstOrganization: Organization;
  findFirstServiceTerritory: ServiceTerritory;
  findUniqueAgentTerritory: AgentTerritory;
  findUniqueContact: Contact;
  findUniqueCustomer: Customer;
  findUniqueOrganization: Organization;
  findUniqueServiceTerritory: ServiceTerritory;
  groupByAgentTerritory: Array<AgentTerritoryGroupBy>;
  groupByContact: Array<ContactGroupBy>;
  groupByCustomer: Array<CustomerGroupBy>;
  groupByOrganization: Array<OrganizationGroupBy>;
  groupByServiceTerritory: Array<ServiceTerritoryGroupBy>;
  listAgentTerritorys: Array<AgentTerritory>;
  listContacts: Array<Contact>;
  listCustomers: Array<Customer>;
  listOrganizations: Array<Organization>;
  listServiceTerritorys: Array<ServiceTerritory>;
};

export type QueryAggregateAgentTerritoryArgs = {
  _avg?: InputMaybe<AgentTerritoryAvgAggregateInput>;
  _count?: InputMaybe<AgentTerritoryCountAggregateInput>;
  _max?: InputMaybe<AgentTerritoryMaxAggregateInput>;
  _min?: InputMaybe<AgentTerritoryMinAggregateInput>;
  _sum?: InputMaybe<AgentTerritorySumAggregateInput>;
  cursor?: InputMaybe<AgentTerritoryWhereUniqueInput>;
  orderBy?: InputMaybe<Array<AgentTerritoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<AgentTerritoryWhereInput>;
};

export type QueryAggregateContactArgs = {
  _avg?: InputMaybe<ContactAvgAggregateInput>;
  _count?: InputMaybe<ContactCountAggregateInput>;
  _max?: InputMaybe<ContactMaxAggregateInput>;
  _min?: InputMaybe<ContactMinAggregateInput>;
  _sum?: InputMaybe<ContactSumAggregateInput>;
  cursor?: InputMaybe<ContactWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ContactOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ContactWhereInput>;
};

export type QueryAggregateCustomerArgs = {
  _avg?: InputMaybe<CustomerAvgAggregateInput>;
  _count?: InputMaybe<CustomerCountAggregateInput>;
  _max?: InputMaybe<CustomerMaxAggregateInput>;
  _min?: InputMaybe<CustomerMinAggregateInput>;
  _sum?: InputMaybe<CustomerSumAggregateInput>;
  cursor?: InputMaybe<CustomerWhereUniqueInput>;
  orderBy?: InputMaybe<Array<CustomerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<CustomerWhereInput>;
};

export type QueryAggregateOrganizationArgs = {
  _avg?: InputMaybe<OrganizationAvgAggregateInput>;
  _count?: InputMaybe<OrganizationCountAggregateInput>;
  _max?: InputMaybe<OrganizationMaxAggregateInput>;
  _min?: InputMaybe<OrganizationMinAggregateInput>;
  _sum?: InputMaybe<OrganizationSumAggregateInput>;
  cursor?: InputMaybe<OrganizationWhereUniqueInput>;
  orderBy?: InputMaybe<Array<OrganizationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<OrganizationWhereInput>;
};

export type QueryAggregateServiceTerritoryArgs = {
  _avg?: InputMaybe<ServiceTerritoryAvgAggregateInput>;
  _count?: InputMaybe<ServiceTerritoryCountAggregateInput>;
  _max?: InputMaybe<ServiceTerritoryMaxAggregateInput>;
  _min?: InputMaybe<ServiceTerritoryMinAggregateInput>;
  _sum?: InputMaybe<ServiceTerritorySumAggregateInput>;
  cursor?: InputMaybe<ServiceTerritoryWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ServiceTerritoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ServiceTerritoryWhereInput>;
};

export type QueryFindFirstAgentTerritoryArgs = {
  cursor?: InputMaybe<AgentTerritoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<AgentTerritoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AgentTerritoryOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<AgentTerritoryWhereInput>;
};

export type QueryFindFirstContactArgs = {
  cursor?: InputMaybe<ContactWhereUniqueInput>;
  distinct?: InputMaybe<Array<ContactScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ContactOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ContactWhereInput>;
};

export type QueryFindFirstCustomerArgs = {
  cursor?: InputMaybe<CustomerWhereUniqueInput>;
  distinct?: InputMaybe<Array<CustomerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CustomerOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<CustomerWhereInput>;
};

export type QueryFindFirstOrganizationArgs = {
  cursor?: InputMaybe<OrganizationWhereUniqueInput>;
  distinct?: InputMaybe<Array<OrganizationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OrganizationOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<OrganizationWhereInput>;
};

export type QueryFindFirstServiceTerritoryArgs = {
  cursor?: InputMaybe<ServiceTerritoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<ServiceTerritoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ServiceTerritoryOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ServiceTerritoryWhereInput>;
};

export type QueryFindUniqueAgentTerritoryArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: AgentTerritoryWhereUniqueInput;
};

export type QueryFindUniqueContactArgs = {
  include?: InputMaybe<IncludeContactInput>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: ContactWhereUniqueInput;
};

export type QueryFindUniqueCustomerArgs = {
  include?: InputMaybe<IncludeCustomerInput>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: CustomerWhereUniqueInput;
};

export type QueryFindUniqueOrganizationArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: OrganizationWhereUniqueInput;
};

export type QueryFindUniqueServiceTerritoryArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: ServiceTerritoryWhereUniqueInput;
};

export type QueryGroupByAgentTerritoryArgs = {
  _avg?: InputMaybe<AgentTerritoryAvgAggregateInput>;
  _count?: InputMaybe<AgentTerritoryCountAggregateInput>;
  _max?: InputMaybe<AgentTerritoryMaxAggregateInput>;
  _min?: InputMaybe<AgentTerritoryMinAggregateInput>;
  _sum?: InputMaybe<AgentTerritorySumAggregateInput>;
  by: Array<AgentTerritoryScalarFieldEnum>;
  having?: InputMaybe<AgentTerritoryScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<AgentTerritoryOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<AgentTerritoryWhereInput>;
};

export type QueryGroupByContactArgs = {
  _avg?: InputMaybe<ContactAvgAggregateInput>;
  _count?: InputMaybe<ContactCountAggregateInput>;
  _max?: InputMaybe<ContactMaxAggregateInput>;
  _min?: InputMaybe<ContactMinAggregateInput>;
  _sum?: InputMaybe<ContactSumAggregateInput>;
  by: Array<ContactScalarFieldEnum>;
  having?: InputMaybe<ContactScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ContactOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ContactWhereInput>;
};

export type QueryGroupByCustomerArgs = {
  _avg?: InputMaybe<CustomerAvgAggregateInput>;
  _count?: InputMaybe<CustomerCountAggregateInput>;
  _max?: InputMaybe<CustomerMaxAggregateInput>;
  _min?: InputMaybe<CustomerMinAggregateInput>;
  _sum?: InputMaybe<CustomerSumAggregateInput>;
  by: Array<CustomerScalarFieldEnum>;
  having?: InputMaybe<CustomerScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<CustomerOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<CustomerWhereInput>;
};

export type QueryGroupByOrganizationArgs = {
  _avg?: InputMaybe<OrganizationAvgAggregateInput>;
  _count?: InputMaybe<OrganizationCountAggregateInput>;
  _max?: InputMaybe<OrganizationMaxAggregateInput>;
  _min?: InputMaybe<OrganizationMinAggregateInput>;
  _sum?: InputMaybe<OrganizationSumAggregateInput>;
  by: Array<OrganizationScalarFieldEnum>;
  having?: InputMaybe<OrganizationScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<OrganizationOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<OrganizationWhereInput>;
};

export type QueryGroupByServiceTerritoryArgs = {
  _avg?: InputMaybe<ServiceTerritoryAvgAggregateInput>;
  _count?: InputMaybe<ServiceTerritoryCountAggregateInput>;
  _max?: InputMaybe<ServiceTerritoryMaxAggregateInput>;
  _min?: InputMaybe<ServiceTerritoryMinAggregateInput>;
  _sum?: InputMaybe<ServiceTerritorySumAggregateInput>;
  by: Array<ServiceTerritoryScalarFieldEnum>;
  having?: InputMaybe<ServiceTerritoryScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ServiceTerritoryOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ServiceTerritoryWhereInput>;
};

export type QueryListAgentTerritorysArgs = {
  cursor?: InputMaybe<AgentTerritoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<AgentTerritoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AgentTerritoryOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<AgentTerritoryWhereInput>;
};

export type QueryListContactsArgs = {
  cursor?: InputMaybe<ContactWhereUniqueInput>;
  distinct?: InputMaybe<Array<ContactScalarFieldEnum>>;
  include?: InputMaybe<IncludeContactInput>;
  orderBy?: InputMaybe<Array<ContactOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ContactWhereInput>;
};

export type QueryListCustomersArgs = {
  cursor?: InputMaybe<CustomerWhereUniqueInput>;
  distinct?: InputMaybe<Array<CustomerScalarFieldEnum>>;
  include?: InputMaybe<IncludeCustomerInput>;
  orderBy?: InputMaybe<Array<CustomerOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<CustomerWhereInput>;
};

export type QueryListOrganizationsArgs = {
  cursor?: InputMaybe<OrganizationWhereUniqueInput>;
  distinct?: InputMaybe<Array<OrganizationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OrganizationOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<OrganizationWhereInput>;
};

export type QueryListServiceTerritorysArgs = {
  cursor?: InputMaybe<ServiceTerritoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<ServiceTerritoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ServiceTerritoryOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ServiceTerritoryWhereInput>;
};

export enum QueryMode {
  Default = "default",
  Insensitive = "insensitive",
}

export enum RelationLoadStrategy {
  Join = "join",
  Query = "query",
}

export type Sla = {
  __typename?: "SLA";
  createdAt: Scalars["DateTime"]["output"];
  id: Scalars["ID"]["output"];
  parameter: Scalars["String"]["output"];
  service: Service;
  serviceId: Scalars["Int"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
  value: Scalars["String"]["output"];
};

export type SlaCreateManyServiceInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  parameter: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  value: Scalars["String"]["input"];
};

export type SlaCreateManyServiceInputEnvelope = {
  data: Array<SlaCreateManyServiceInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type SlaCreateNestedManyWithoutServiceInput = {
  connect?: InputMaybe<Array<SlaWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SlaCreateOrConnectWithoutServiceInput>>;
  create?: InputMaybe<Array<SlaCreateWithoutServiceInput>>;
  createMany?: InputMaybe<SlaCreateManyServiceInputEnvelope>;
};

export type SlaCreateOrConnectWithoutServiceInput = {
  create: SlaCreateWithoutServiceInput;
  where: SlaWhereUniqueInput;
};

export type SlaCreateWithoutServiceInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  parameter: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  value: Scalars["String"]["input"];
};

export type SlaListRelationFilter = {
  every?: InputMaybe<SlaWhereInput>;
  none?: InputMaybe<SlaWhereInput>;
  some?: InputMaybe<SlaWhereInput>;
};

export type SlaScalarWhereInput = {
  AND?: InputMaybe<Array<SlaScalarWhereInput>>;
  NOT?: InputMaybe<Array<SlaScalarWhereInput>>;
  OR?: InputMaybe<Array<SlaScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  parameter?: InputMaybe<StringFilter>;
  serviceId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  value?: InputMaybe<StringFilter>;
};

export type SlaUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  parameter?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  value?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SlaUpdateManyWithWhereWithoutServiceInput = {
  data: SlaUpdateManyMutationInput;
  where: SlaScalarWhereInput;
};

export type SlaUpdateManyWithoutServiceNestedInput = {
  connect?: InputMaybe<Array<SlaWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SlaCreateOrConnectWithoutServiceInput>>;
  create?: InputMaybe<Array<SlaCreateWithoutServiceInput>>;
  createMany?: InputMaybe<SlaCreateManyServiceInputEnvelope>;
  delete?: InputMaybe<Array<SlaWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SlaScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SlaWhereUniqueInput>>;
  set?: InputMaybe<Array<SlaWhereUniqueInput>>;
  update?: InputMaybe<Array<SlaUpdateWithWhereUniqueWithoutServiceInput>>;
  updateMany?: InputMaybe<Array<SlaUpdateManyWithWhereWithoutServiceInput>>;
  upsert?: InputMaybe<Array<SlaUpsertWithWhereUniqueWithoutServiceInput>>;
};

export type SlaUpdateWithWhereUniqueWithoutServiceInput = {
  data: SlaUpdateWithoutServiceInput;
  where: SlaWhereUniqueInput;
};

export type SlaUpdateWithoutServiceInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  parameter?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  value?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SlaUpsertWithWhereUniqueWithoutServiceInput = {
  create: SlaCreateWithoutServiceInput;
  update: SlaUpdateWithoutServiceInput;
  where: SlaWhereUniqueInput;
};

export type SlaWhereInput = {
  AND?: InputMaybe<Array<SlaWhereInput>>;
  NOT?: InputMaybe<Array<SlaWhereInput>>;
  OR?: InputMaybe<Array<SlaWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  parameter?: InputMaybe<StringFilter>;
  service?: InputMaybe<ServiceRelationFilter>;
  serviceId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  value?: InputMaybe<StringFilter>;
};

export type SlaWhereUniqueInput = {
  AND?: InputMaybe<Array<SlaWhereInput>>;
  NOT?: InputMaybe<Array<SlaWhereInput>>;
  OR?: InputMaybe<Array<SlaWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  parameter?: InputMaybe<StringFilter>;
  service?: InputMaybe<ServiceRelationFilter>;
  serviceId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  value?: InputMaybe<StringFilter>;
};

export type Service = {
  __typename?: "Service";
  _count: ServiceCount;
  createdAt: Scalars["DateTime"]["output"];
  customer: Customer;
  customerId: Scalars["Int"]["output"];
  description: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  sla?: Maybe<Array<Sla>>;
  updatedAt: Scalars["DateTime"]["output"];
};

export type ServiceCount = {
  __typename?: "ServiceCount";
  sla: Scalars["Int"]["output"];
};

export type ServiceCreateManyCustomerInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  description: Scalars["String"]["input"];
  id?: InputMaybe<Scalars["Int"]["input"]>;
  name: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type ServiceCreateManyCustomerInputEnvelope = {
  data: Array<ServiceCreateManyCustomerInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ServiceCreateNestedManyWithoutCustomerInput = {
  connect?: InputMaybe<Array<ServiceWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<ServiceCreateOrConnectWithoutCustomerInput>
  >;
  create?: InputMaybe<Array<ServiceCreateWithoutCustomerInput>>;
  createMany?: InputMaybe<ServiceCreateManyCustomerInputEnvelope>;
};

export type ServiceCreateOrConnectWithoutCustomerInput = {
  create: ServiceCreateWithoutCustomerInput;
  where: ServiceWhereUniqueInput;
};

export type ServiceCreateWithoutCustomerInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  description: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  sla?: InputMaybe<SlaCreateNestedManyWithoutServiceInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type ServiceListRelationFilter = {
  every?: InputMaybe<ServiceWhereInput>;
  none?: InputMaybe<ServiceWhereInput>;
  some?: InputMaybe<ServiceWhereInput>;
};

export type ServiceOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ServiceRelationFilter = {
  is?: InputMaybe<ServiceWhereInput>;
  isNot?: InputMaybe<ServiceWhereInput>;
};

export type ServiceScalarWhereInput = {
  AND?: InputMaybe<Array<ServiceScalarWhereInput>>;
  NOT?: InputMaybe<Array<ServiceScalarWhereInput>>;
  OR?: InputMaybe<Array<ServiceScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  customerId?: InputMaybe<IntFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ServiceTerritory = {
  __typename?: "ServiceTerritory";
  _count: ServiceTerritoryCount;
  city: Scalars["String"]["output"];
  country: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  isocode: Scalars["String"]["output"];
  latitude: Scalars["Float"]["output"];
  locality: Scalars["String"]["output"];
  longitude: Scalars["Float"]["output"];
  name: Scalars["String"]["output"];
  state: Scalars["String"]["output"];
  subTerritories?: Maybe<Array<SubTerritory>>;
};

export type ServiceTerritoryAvgAggregate = {
  __typename?: "ServiceTerritoryAvgAggregate";
  id?: Maybe<Scalars["Float"]["output"]>;
  latitude?: Maybe<Scalars["Float"]["output"]>;
  longitude?: Maybe<Scalars["Float"]["output"]>;
};

export type ServiceTerritoryAvgAggregateInput = {
  id?: InputMaybe<Scalars["Boolean"]["input"]>;
  latitude?: InputMaybe<Scalars["Boolean"]["input"]>;
  longitude?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ServiceTerritoryAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  latitude?: InputMaybe<SortOrder>;
  longitude?: InputMaybe<SortOrder>;
};

export type ServiceTerritoryCount = {
  __typename?: "ServiceTerritoryCount";
  subTerritories: Scalars["Int"]["output"];
};

export type ServiceTerritoryCountAggregate = {
  __typename?: "ServiceTerritoryCountAggregate";
  _all: Scalars["Int"]["output"];
  city: Scalars["Int"]["output"];
  country: Scalars["Int"]["output"];
  id: Scalars["Int"]["output"];
  isocode: Scalars["Int"]["output"];
  latitude: Scalars["Int"]["output"];
  locality: Scalars["Int"]["output"];
  longitude: Scalars["Int"]["output"];
  name: Scalars["Int"]["output"];
  state: Scalars["Int"]["output"];
};

export type ServiceTerritoryCountAggregateInput = {
  _all?: InputMaybe<Scalars["Boolean"]["input"]>;
  city?: InputMaybe<Scalars["Boolean"]["input"]>;
  country?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Scalars["Boolean"]["input"]>;
  isocode?: InputMaybe<Scalars["Boolean"]["input"]>;
  latitude?: InputMaybe<Scalars["Boolean"]["input"]>;
  locality?: InputMaybe<Scalars["Boolean"]["input"]>;
  longitude?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["Boolean"]["input"]>;
  state?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ServiceTerritoryCountOrderByAggregateInput = {
  city?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isocode?: InputMaybe<SortOrder>;
  latitude?: InputMaybe<SortOrder>;
  locality?: InputMaybe<SortOrder>;
  longitude?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
};

export type ServiceTerritoryCreateInput = {
  city: Scalars["String"]["input"];
  country: Scalars["String"]["input"];
  isocode: Scalars["String"]["input"];
  latitude: Scalars["Float"]["input"];
  locality: Scalars["String"]["input"];
  longitude: Scalars["Float"]["input"];
  name: Scalars["String"]["input"];
  state: Scalars["String"]["input"];
  subTerritories?: InputMaybe<SubTerritoryCreateNestedManyWithoutParentTerritoryInput>;
};

export type ServiceTerritoryCreateManyInput = {
  city: Scalars["String"]["input"];
  country: Scalars["String"]["input"];
  id?: InputMaybe<Scalars["Int"]["input"]>;
  isocode: Scalars["String"]["input"];
  latitude: Scalars["Float"]["input"];
  locality: Scalars["String"]["input"];
  longitude: Scalars["Float"]["input"];
  name: Scalars["String"]["input"];
  state: Scalars["String"]["input"];
};

export type ServiceTerritoryCreateNestedOneWithoutSubTerritoriesInput = {
  connect?: InputMaybe<ServiceTerritoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ServiceTerritoryCreateOrConnectWithoutSubTerritoriesInput>;
  create?: InputMaybe<ServiceTerritoryCreateWithoutSubTerritoriesInput>;
};

export type ServiceTerritoryCreateOrConnectWithoutSubTerritoriesInput = {
  create: ServiceTerritoryCreateWithoutSubTerritoriesInput;
  where: ServiceTerritoryWhereUniqueInput;
};

export type ServiceTerritoryCreateWithoutSubTerritoriesInput = {
  city: Scalars["String"]["input"];
  country: Scalars["String"]["input"];
  isocode: Scalars["String"]["input"];
  latitude: Scalars["Float"]["input"];
  locality: Scalars["String"]["input"];
  longitude: Scalars["Float"]["input"];
  name: Scalars["String"]["input"];
  state: Scalars["String"]["input"];
};

export type ServiceTerritoryGroupBy = {
  __typename?: "ServiceTerritoryGroupBy";
  _avg?: Maybe<ServiceTerritoryAvgAggregate>;
  _count?: Maybe<ServiceTerritoryCountAggregate>;
  _max?: Maybe<ServiceTerritoryMaxAggregate>;
  _min?: Maybe<ServiceTerritoryMinAggregate>;
  _sum?: Maybe<ServiceTerritorySumAggregate>;
  city: Scalars["String"]["output"];
  country: Scalars["String"]["output"];
  id: Scalars["Int"]["output"];
  isocode: Scalars["String"]["output"];
  latitude: Scalars["Float"]["output"];
  locality: Scalars["String"]["output"];
  longitude: Scalars["Float"]["output"];
  name: Scalars["String"]["output"];
  state: Scalars["String"]["output"];
};

export type ServiceTerritoryMaxAggregate = {
  __typename?: "ServiceTerritoryMaxAggregate";
  city?: Maybe<Scalars["String"]["output"]>;
  country?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  isocode?: Maybe<Scalars["String"]["output"]>;
  latitude?: Maybe<Scalars["Float"]["output"]>;
  locality?: Maybe<Scalars["String"]["output"]>;
  longitude?: Maybe<Scalars["Float"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  state?: Maybe<Scalars["String"]["output"]>;
};

export type ServiceTerritoryMaxAggregateInput = {
  city?: InputMaybe<Scalars["Boolean"]["input"]>;
  country?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Scalars["Boolean"]["input"]>;
  isocode?: InputMaybe<Scalars["Boolean"]["input"]>;
  latitude?: InputMaybe<Scalars["Boolean"]["input"]>;
  locality?: InputMaybe<Scalars["Boolean"]["input"]>;
  longitude?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["Boolean"]["input"]>;
  state?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ServiceTerritoryMaxOrderByAggregateInput = {
  city?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isocode?: InputMaybe<SortOrder>;
  latitude?: InputMaybe<SortOrder>;
  locality?: InputMaybe<SortOrder>;
  longitude?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
};

export type ServiceTerritoryMinAggregate = {
  __typename?: "ServiceTerritoryMinAggregate";
  city?: Maybe<Scalars["String"]["output"]>;
  country?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  isocode?: Maybe<Scalars["String"]["output"]>;
  latitude?: Maybe<Scalars["Float"]["output"]>;
  locality?: Maybe<Scalars["String"]["output"]>;
  longitude?: Maybe<Scalars["Float"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  state?: Maybe<Scalars["String"]["output"]>;
};

export type ServiceTerritoryMinAggregateInput = {
  city?: InputMaybe<Scalars["Boolean"]["input"]>;
  country?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Scalars["Boolean"]["input"]>;
  isocode?: InputMaybe<Scalars["Boolean"]["input"]>;
  latitude?: InputMaybe<Scalars["Boolean"]["input"]>;
  locality?: InputMaybe<Scalars["Boolean"]["input"]>;
  longitude?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["Boolean"]["input"]>;
  state?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ServiceTerritoryMinOrderByAggregateInput = {
  city?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isocode?: InputMaybe<SortOrder>;
  latitude?: InputMaybe<SortOrder>;
  locality?: InputMaybe<SortOrder>;
  longitude?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
};

export type ServiceTerritoryOrderByWithAggregationInput = {
  _avg?: InputMaybe<ServiceTerritoryAvgOrderByAggregateInput>;
  _count?: InputMaybe<ServiceTerritoryCountOrderByAggregateInput>;
  _max?: InputMaybe<ServiceTerritoryMaxOrderByAggregateInput>;
  _min?: InputMaybe<ServiceTerritoryMinOrderByAggregateInput>;
  _sum?: InputMaybe<ServiceTerritorySumOrderByAggregateInput>;
  city?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isocode?: InputMaybe<SortOrder>;
  latitude?: InputMaybe<SortOrder>;
  locality?: InputMaybe<SortOrder>;
  longitude?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
};

export type ServiceTerritoryOrderByWithRelationInput = {
  city?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isocode?: InputMaybe<SortOrder>;
  latitude?: InputMaybe<SortOrder>;
  locality?: InputMaybe<SortOrder>;
  longitude?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  subTerritories?: InputMaybe<SubTerritoryOrderByRelationAggregateInput>;
};

export type ServiceTerritoryRelationFilter = {
  is?: InputMaybe<ServiceTerritoryWhereInput>;
  isNot?: InputMaybe<ServiceTerritoryWhereInput>;
};

export enum ServiceTerritoryScalarFieldEnum {
  City = "city",
  Country = "country",
  Id = "id",
  Isocode = "isocode",
  Latitude = "latitude",
  Locality = "locality",
  Longitude = "longitude",
  Name = "name",
  State = "state",
}

export type ServiceTerritoryScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ServiceTerritoryScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ServiceTerritoryScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ServiceTerritoryScalarWhereWithAggregatesInput>>;
  city?: InputMaybe<StringWithAggregatesFilter>;
  country?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  isocode?: InputMaybe<StringWithAggregatesFilter>;
  latitude?: InputMaybe<FloatWithAggregatesFilter>;
  locality?: InputMaybe<StringWithAggregatesFilter>;
  longitude?: InputMaybe<FloatWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  state?: InputMaybe<StringWithAggregatesFilter>;
};

export type ServiceTerritorySumAggregate = {
  __typename?: "ServiceTerritorySumAggregate";
  id?: Maybe<Scalars["Int"]["output"]>;
  latitude?: Maybe<Scalars["Float"]["output"]>;
  longitude?: Maybe<Scalars["Float"]["output"]>;
};

export type ServiceTerritorySumAggregateInput = {
  id?: InputMaybe<Scalars["Boolean"]["input"]>;
  latitude?: InputMaybe<Scalars["Boolean"]["input"]>;
  longitude?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ServiceTerritorySumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  latitude?: InputMaybe<SortOrder>;
  longitude?: InputMaybe<SortOrder>;
};

export type ServiceTerritoryUpdateInput = {
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  country?: InputMaybe<StringFieldUpdateOperationsInput>;
  isocode?: InputMaybe<StringFieldUpdateOperationsInput>;
  latitude?: InputMaybe<FloatFieldUpdateOperationsInput>;
  locality?: InputMaybe<StringFieldUpdateOperationsInput>;
  longitude?: InputMaybe<FloatFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  state?: InputMaybe<StringFieldUpdateOperationsInput>;
  subTerritories?: InputMaybe<SubTerritoryUpdateManyWithoutParentTerritoryNestedInput>;
};

export type ServiceTerritoryUpdateManyMutationInput = {
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  country?: InputMaybe<StringFieldUpdateOperationsInput>;
  isocode?: InputMaybe<StringFieldUpdateOperationsInput>;
  latitude?: InputMaybe<FloatFieldUpdateOperationsInput>;
  locality?: InputMaybe<StringFieldUpdateOperationsInput>;
  longitude?: InputMaybe<FloatFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  state?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ServiceTerritoryUpdateOneRequiredWithoutSubTerritoriesNestedInput =
  {
    connect?: InputMaybe<ServiceTerritoryWhereUniqueInput>;
    connectOrCreate?: InputMaybe<ServiceTerritoryCreateOrConnectWithoutSubTerritoriesInput>;
    create?: InputMaybe<ServiceTerritoryCreateWithoutSubTerritoriesInput>;
    update?: InputMaybe<ServiceTerritoryUpdateToOneWithWhereWithoutSubTerritoriesInput>;
    upsert?: InputMaybe<ServiceTerritoryUpsertWithoutSubTerritoriesInput>;
  };

export type ServiceTerritoryUpdateToOneWithWhereWithoutSubTerritoriesInput = {
  data: ServiceTerritoryUpdateWithoutSubTerritoriesInput;
  where?: InputMaybe<ServiceTerritoryWhereInput>;
};

export type ServiceTerritoryUpdateWithoutSubTerritoriesInput = {
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  country?: InputMaybe<StringFieldUpdateOperationsInput>;
  isocode?: InputMaybe<StringFieldUpdateOperationsInput>;
  latitude?: InputMaybe<FloatFieldUpdateOperationsInput>;
  locality?: InputMaybe<StringFieldUpdateOperationsInput>;
  longitude?: InputMaybe<FloatFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  state?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ServiceTerritoryUpsertWithoutSubTerritoriesInput = {
  create: ServiceTerritoryCreateWithoutSubTerritoriesInput;
  update: ServiceTerritoryUpdateWithoutSubTerritoriesInput;
  where?: InputMaybe<ServiceTerritoryWhereInput>;
};

export type ServiceTerritoryWhereInput = {
  AND?: InputMaybe<Array<ServiceTerritoryWhereInput>>;
  NOT?: InputMaybe<Array<ServiceTerritoryWhereInput>>;
  OR?: InputMaybe<Array<ServiceTerritoryWhereInput>>;
  city?: InputMaybe<StringFilter>;
  country?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  isocode?: InputMaybe<StringFilter>;
  latitude?: InputMaybe<FloatFilter>;
  locality?: InputMaybe<StringFilter>;
  longitude?: InputMaybe<FloatFilter>;
  name?: InputMaybe<StringFilter>;
  state?: InputMaybe<StringFilter>;
  subTerritories?: InputMaybe<SubTerritoryListRelationFilter>;
};

export type ServiceTerritoryWhereUniqueInput = {
  AND?: InputMaybe<Array<ServiceTerritoryWhereInput>>;
  NOT?: InputMaybe<Array<ServiceTerritoryWhereInput>>;
  OR?: InputMaybe<Array<ServiceTerritoryWhereInput>>;
  city?: InputMaybe<StringFilter>;
  country?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  isocode?: InputMaybe<StringFilter>;
  latitude?: InputMaybe<FloatFilter>;
  locality?: InputMaybe<StringFilter>;
  longitude?: InputMaybe<FloatFilter>;
  name?: InputMaybe<StringFilter>;
  state?: InputMaybe<StringFilter>;
  subTerritories?: InputMaybe<SubTerritoryListRelationFilter>;
};

export type ServiceUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ServiceUpdateManyWithWhereWithoutCustomerInput = {
  data: ServiceUpdateManyMutationInput;
  where: ServiceScalarWhereInput;
};

export type ServiceUpdateManyWithoutCustomerNestedInput = {
  connect?: InputMaybe<Array<ServiceWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<ServiceCreateOrConnectWithoutCustomerInput>
  >;
  create?: InputMaybe<Array<ServiceCreateWithoutCustomerInput>>;
  createMany?: InputMaybe<ServiceCreateManyCustomerInputEnvelope>;
  delete?: InputMaybe<Array<ServiceWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ServiceScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ServiceWhereUniqueInput>>;
  set?: InputMaybe<Array<ServiceWhereUniqueInput>>;
  update?: InputMaybe<Array<ServiceUpdateWithWhereUniqueWithoutCustomerInput>>;
  updateMany?: InputMaybe<
    Array<ServiceUpdateManyWithWhereWithoutCustomerInput>
  >;
  upsert?: InputMaybe<Array<ServiceUpsertWithWhereUniqueWithoutCustomerInput>>;
};

export type ServiceUpdateWithWhereUniqueWithoutCustomerInput = {
  data: ServiceUpdateWithoutCustomerInput;
  where: ServiceWhereUniqueInput;
};

export type ServiceUpdateWithoutCustomerInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  sla?: InputMaybe<SlaUpdateManyWithoutServiceNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ServiceUpsertWithWhereUniqueWithoutCustomerInput = {
  create: ServiceCreateWithoutCustomerInput;
  update: ServiceUpdateWithoutCustomerInput;
  where: ServiceWhereUniqueInput;
};

export type ServiceWhereInput = {
  AND?: InputMaybe<Array<ServiceWhereInput>>;
  NOT?: InputMaybe<Array<ServiceWhereInput>>;
  OR?: InputMaybe<Array<ServiceWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  customer?: InputMaybe<CustomerRelationFilter>;
  customerId?: InputMaybe<IntFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  sla?: InputMaybe<SlaListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ServiceWhereUniqueInput = {
  AND?: InputMaybe<Array<ServiceWhereInput>>;
  NOT?: InputMaybe<Array<ServiceWhereInput>>;
  OR?: InputMaybe<Array<ServiceWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  customer?: InputMaybe<CustomerRelationFilter>;
  customerId?: InputMaybe<IntFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<StringFilter>;
  sla?: InputMaybe<SlaListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export enum SortOrder {
  Asc = "asc",
  Desc = "desc",
}

export type SortOrderInput = {
  nulls?: InputMaybe<NullsOrder>;
  sort: SortOrder;
};

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars["String"]["input"]>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars["String"]["input"]>;
  endsWith?: InputMaybe<Scalars["String"]["input"]>;
  equals?: InputMaybe<Scalars["String"]["input"]>;
  gt?: InputMaybe<Scalars["String"]["input"]>;
  gte?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  lt?: InputMaybe<Scalars["String"]["input"]>;
  lte?: InputMaybe<Scalars["String"]["input"]>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
  startsWith?: InputMaybe<Scalars["String"]["input"]>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars["String"]["input"]>;
  endsWith?: InputMaybe<Scalars["String"]["input"]>;
  equals?: InputMaybe<Scalars["String"]["input"]>;
  gt?: InputMaybe<Scalars["String"]["input"]>;
  gte?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  lt?: InputMaybe<Scalars["String"]["input"]>;
  lte?: InputMaybe<Scalars["String"]["input"]>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
  startsWith?: InputMaybe<Scalars["String"]["input"]>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars["String"]["input"]>;
  endsWith?: InputMaybe<Scalars["String"]["input"]>;
  equals?: InputMaybe<Scalars["String"]["input"]>;
  gt?: InputMaybe<Scalars["String"]["input"]>;
  gte?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  lt?: InputMaybe<Scalars["String"]["input"]>;
  lte?: InputMaybe<Scalars["String"]["input"]>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
  startsWith?: InputMaybe<Scalars["String"]["input"]>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars["String"]["input"]>;
  endsWith?: InputMaybe<Scalars["String"]["input"]>;
  equals?: InputMaybe<Scalars["String"]["input"]>;
  gt?: InputMaybe<Scalars["String"]["input"]>;
  gte?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  lt?: InputMaybe<Scalars["String"]["input"]>;
  lte?: InputMaybe<Scalars["String"]["input"]>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
  startsWith?: InputMaybe<Scalars["String"]["input"]>;
};

export type SubTerritory = {
  __typename?: "SubTerritory";
  _count: SubTerritoryCount;
  agents?: Maybe<Array<AgentTerritory>>;
  id: Scalars["ID"]["output"];
  latitude: Scalars["Float"]["output"];
  locality: Scalars["String"]["output"];
  longitude: Scalars["Float"]["output"];
  name: Scalars["String"]["output"];
  parentTerritory: ServiceTerritory;
  parentTerritoryId: Scalars["Int"]["output"];
};

export type SubTerritoryCount = {
  __typename?: "SubTerritoryCount";
  agents: Scalars["Int"]["output"];
};

export type SubTerritoryCreateManyParentTerritoryInput = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
  latitude: Scalars["Float"]["input"];
  locality: Scalars["String"]["input"];
  longitude: Scalars["Float"]["input"];
  name: Scalars["String"]["input"];
};

export type SubTerritoryCreateManyParentTerritoryInputEnvelope = {
  data: Array<SubTerritoryCreateManyParentTerritoryInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type SubTerritoryCreateNestedManyWithoutParentTerritoryInput = {
  connect?: InputMaybe<Array<SubTerritoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<SubTerritoryCreateOrConnectWithoutParentTerritoryInput>
  >;
  create?: InputMaybe<Array<SubTerritoryCreateWithoutParentTerritoryInput>>;
  createMany?: InputMaybe<SubTerritoryCreateManyParentTerritoryInputEnvelope>;
};

export type SubTerritoryCreateNestedOneWithoutAgentsInput = {
  connect?: InputMaybe<SubTerritoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SubTerritoryCreateOrConnectWithoutAgentsInput>;
  create?: InputMaybe<SubTerritoryCreateWithoutAgentsInput>;
};

export type SubTerritoryCreateOrConnectWithoutAgentsInput = {
  create: SubTerritoryCreateWithoutAgentsInput;
  where: SubTerritoryWhereUniqueInput;
};

export type SubTerritoryCreateOrConnectWithoutParentTerritoryInput = {
  create: SubTerritoryCreateWithoutParentTerritoryInput;
  where: SubTerritoryWhereUniqueInput;
};

export type SubTerritoryCreateWithoutAgentsInput = {
  latitude: Scalars["Float"]["input"];
  locality: Scalars["String"]["input"];
  longitude: Scalars["Float"]["input"];
  name: Scalars["String"]["input"];
  parentTerritory: ServiceTerritoryCreateNestedOneWithoutSubTerritoriesInput;
};

export type SubTerritoryCreateWithoutParentTerritoryInput = {
  agents?: InputMaybe<AgentTerritoryCreateNestedManyWithoutSubTerritoryInput>;
  latitude: Scalars["Float"]["input"];
  locality: Scalars["String"]["input"];
  longitude: Scalars["Float"]["input"];
  name: Scalars["String"]["input"];
};

export type SubTerritoryListRelationFilter = {
  every?: InputMaybe<SubTerritoryWhereInput>;
  none?: InputMaybe<SubTerritoryWhereInput>;
  some?: InputMaybe<SubTerritoryWhereInput>;
};

export type SubTerritoryOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type SubTerritoryOrderByWithRelationInput = {
  agents?: InputMaybe<AgentTerritoryOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  latitude?: InputMaybe<SortOrder>;
  locality?: InputMaybe<SortOrder>;
  longitude?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  parentTerritory?: InputMaybe<ServiceTerritoryOrderByWithRelationInput>;
  parentTerritoryId?: InputMaybe<SortOrder>;
};

export type SubTerritoryRelationFilter = {
  is?: InputMaybe<SubTerritoryWhereInput>;
  isNot?: InputMaybe<SubTerritoryWhereInput>;
};

export type SubTerritoryScalarWhereInput = {
  AND?: InputMaybe<Array<SubTerritoryScalarWhereInput>>;
  NOT?: InputMaybe<Array<SubTerritoryScalarWhereInput>>;
  OR?: InputMaybe<Array<SubTerritoryScalarWhereInput>>;
  id?: InputMaybe<IntFilter>;
  latitude?: InputMaybe<FloatFilter>;
  locality?: InputMaybe<StringFilter>;
  longitude?: InputMaybe<FloatFilter>;
  name?: InputMaybe<StringFilter>;
  parentTerritoryId?: InputMaybe<IntFilter>;
};

export type SubTerritoryUpdateManyMutationInput = {
  latitude?: InputMaybe<FloatFieldUpdateOperationsInput>;
  locality?: InputMaybe<StringFieldUpdateOperationsInput>;
  longitude?: InputMaybe<FloatFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SubTerritoryUpdateManyWithWhereWithoutParentTerritoryInput = {
  data: SubTerritoryUpdateManyMutationInput;
  where: SubTerritoryScalarWhereInput;
};

export type SubTerritoryUpdateManyWithoutParentTerritoryNestedInput = {
  connect?: InputMaybe<Array<SubTerritoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<SubTerritoryCreateOrConnectWithoutParentTerritoryInput>
  >;
  create?: InputMaybe<Array<SubTerritoryCreateWithoutParentTerritoryInput>>;
  createMany?: InputMaybe<SubTerritoryCreateManyParentTerritoryInputEnvelope>;
  delete?: InputMaybe<Array<SubTerritoryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SubTerritoryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SubTerritoryWhereUniqueInput>>;
  set?: InputMaybe<Array<SubTerritoryWhereUniqueInput>>;
  update?: InputMaybe<
    Array<SubTerritoryUpdateWithWhereUniqueWithoutParentTerritoryInput>
  >;
  updateMany?: InputMaybe<
    Array<SubTerritoryUpdateManyWithWhereWithoutParentTerritoryInput>
  >;
  upsert?: InputMaybe<
    Array<SubTerritoryUpsertWithWhereUniqueWithoutParentTerritoryInput>
  >;
};

export type SubTerritoryUpdateOneRequiredWithoutAgentsNestedInput = {
  connect?: InputMaybe<SubTerritoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SubTerritoryCreateOrConnectWithoutAgentsInput>;
  create?: InputMaybe<SubTerritoryCreateWithoutAgentsInput>;
  update?: InputMaybe<SubTerritoryUpdateToOneWithWhereWithoutAgentsInput>;
  upsert?: InputMaybe<SubTerritoryUpsertWithoutAgentsInput>;
};

export type SubTerritoryUpdateToOneWithWhereWithoutAgentsInput = {
  data: SubTerritoryUpdateWithoutAgentsInput;
  where?: InputMaybe<SubTerritoryWhereInput>;
};

export type SubTerritoryUpdateWithWhereUniqueWithoutParentTerritoryInput = {
  data: SubTerritoryUpdateWithoutParentTerritoryInput;
  where: SubTerritoryWhereUniqueInput;
};

export type SubTerritoryUpdateWithoutAgentsInput = {
  latitude?: InputMaybe<FloatFieldUpdateOperationsInput>;
  locality?: InputMaybe<StringFieldUpdateOperationsInput>;
  longitude?: InputMaybe<FloatFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  parentTerritory?: InputMaybe<ServiceTerritoryUpdateOneRequiredWithoutSubTerritoriesNestedInput>;
};

export type SubTerritoryUpdateWithoutParentTerritoryInput = {
  agents?: InputMaybe<AgentTerritoryUpdateManyWithoutSubTerritoryNestedInput>;
  latitude?: InputMaybe<FloatFieldUpdateOperationsInput>;
  locality?: InputMaybe<StringFieldUpdateOperationsInput>;
  longitude?: InputMaybe<FloatFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SubTerritoryUpsertWithWhereUniqueWithoutParentTerritoryInput = {
  create: SubTerritoryCreateWithoutParentTerritoryInput;
  update: SubTerritoryUpdateWithoutParentTerritoryInput;
  where: SubTerritoryWhereUniqueInput;
};

export type SubTerritoryUpsertWithoutAgentsInput = {
  create: SubTerritoryCreateWithoutAgentsInput;
  update: SubTerritoryUpdateWithoutAgentsInput;
  where?: InputMaybe<SubTerritoryWhereInput>;
};

export type SubTerritoryWhereInput = {
  AND?: InputMaybe<Array<SubTerritoryWhereInput>>;
  NOT?: InputMaybe<Array<SubTerritoryWhereInput>>;
  OR?: InputMaybe<Array<SubTerritoryWhereInput>>;
  agents?: InputMaybe<AgentTerritoryListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  latitude?: InputMaybe<FloatFilter>;
  locality?: InputMaybe<StringFilter>;
  longitude?: InputMaybe<FloatFilter>;
  name?: InputMaybe<StringFilter>;
  parentTerritory?: InputMaybe<ServiceTerritoryRelationFilter>;
  parentTerritoryId?: InputMaybe<IntFilter>;
};

export type SubTerritoryWhereUniqueInput = {
  AND?: InputMaybe<Array<SubTerritoryWhereInput>>;
  NOT?: InputMaybe<Array<SubTerritoryWhereInput>>;
  OR?: InputMaybe<Array<SubTerritoryWhereInput>>;
  agents?: InputMaybe<AgentTerritoryListRelationFilter>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  latitude?: InputMaybe<FloatFilter>;
  locality?: InputMaybe<StringFilter>;
  longitude?: InputMaybe<FloatFilter>;
  name?: InputMaybe<StringFilter>;
  parentTerritory?: InputMaybe<ServiceTerritoryRelationFilter>;
  parentTerritoryId?: InputMaybe<IntFilter>;
};

export type WorkCalendar = {
  __typename?: "WorkCalendar";
  agent: Agent;
  agentId: Scalars["Int"]["output"];
  available: Scalars["Boolean"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  day: Scalars["Int"]["output"];
  endTime: Scalars["DateTime"]["output"];
  id: Scalars["ID"]["output"];
  month: Scalars["Int"]["output"];
  startTime: Scalars["DateTime"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
  year: Scalars["Int"]["output"];
};

export type WorkCalendarCreateManyAgentInput = {
  available: Scalars["Boolean"]["input"];
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  day: Scalars["Int"]["input"];
  endTime: Scalars["DateTime"]["input"];
  id?: InputMaybe<Scalars["Int"]["input"]>;
  month: Scalars["Int"]["input"];
  startTime: Scalars["DateTime"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  year: Scalars["Int"]["input"];
};

export type WorkCalendarCreateManyAgentInputEnvelope = {
  data: Array<WorkCalendarCreateManyAgentInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type WorkCalendarCreateNestedManyWithoutAgentInput = {
  connect?: InputMaybe<Array<WorkCalendarWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<WorkCalendarCreateOrConnectWithoutAgentInput>
  >;
  create?: InputMaybe<Array<WorkCalendarCreateWithoutAgentInput>>;
  createMany?: InputMaybe<WorkCalendarCreateManyAgentInputEnvelope>;
};

export type WorkCalendarCreateOrConnectWithoutAgentInput = {
  create: WorkCalendarCreateWithoutAgentInput;
  where: WorkCalendarWhereUniqueInput;
};

export type WorkCalendarCreateWithoutAgentInput = {
  available: Scalars["Boolean"]["input"];
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  day: Scalars["Int"]["input"];
  endTime: Scalars["DateTime"]["input"];
  month: Scalars["Int"]["input"];
  startTime: Scalars["DateTime"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  year: Scalars["Int"]["input"];
};

export type WorkCalendarListRelationFilter = {
  every?: InputMaybe<WorkCalendarWhereInput>;
  none?: InputMaybe<WorkCalendarWhereInput>;
  some?: InputMaybe<WorkCalendarWhereInput>;
};

export type WorkCalendarOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type WorkCalendarScalarWhereInput = {
  AND?: InputMaybe<Array<WorkCalendarScalarWhereInput>>;
  NOT?: InputMaybe<Array<WorkCalendarScalarWhereInput>>;
  OR?: InputMaybe<Array<WorkCalendarScalarWhereInput>>;
  agentId?: InputMaybe<IntFilter>;
  available?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  day?: InputMaybe<IntFilter>;
  endTime?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  month?: InputMaybe<IntFilter>;
  startTime?: InputMaybe<DateTimeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  year?: InputMaybe<IntFilter>;
};

export type WorkCalendarUpdateManyMutationInput = {
  available?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  day?: InputMaybe<IntFieldUpdateOperationsInput>;
  endTime?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  month?: InputMaybe<IntFieldUpdateOperationsInput>;
  startTime?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  year?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type WorkCalendarUpdateManyWithWhereWithoutAgentInput = {
  data: WorkCalendarUpdateManyMutationInput;
  where: WorkCalendarScalarWhereInput;
};

export type WorkCalendarUpdateManyWithoutAgentNestedInput = {
  connect?: InputMaybe<Array<WorkCalendarWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<WorkCalendarCreateOrConnectWithoutAgentInput>
  >;
  create?: InputMaybe<Array<WorkCalendarCreateWithoutAgentInput>>;
  createMany?: InputMaybe<WorkCalendarCreateManyAgentInputEnvelope>;
  delete?: InputMaybe<Array<WorkCalendarWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<WorkCalendarScalarWhereInput>>;
  disconnect?: InputMaybe<Array<WorkCalendarWhereUniqueInput>>;
  set?: InputMaybe<Array<WorkCalendarWhereUniqueInput>>;
  update?: InputMaybe<
    Array<WorkCalendarUpdateWithWhereUniqueWithoutAgentInput>
  >;
  updateMany?: InputMaybe<
    Array<WorkCalendarUpdateManyWithWhereWithoutAgentInput>
  >;
  upsert?: InputMaybe<
    Array<WorkCalendarUpsertWithWhereUniqueWithoutAgentInput>
  >;
};

export type WorkCalendarUpdateWithWhereUniqueWithoutAgentInput = {
  data: WorkCalendarUpdateWithoutAgentInput;
  where: WorkCalendarWhereUniqueInput;
};

export type WorkCalendarUpdateWithoutAgentInput = {
  available?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  day?: InputMaybe<IntFieldUpdateOperationsInput>;
  endTime?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  month?: InputMaybe<IntFieldUpdateOperationsInput>;
  startTime?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  year?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type WorkCalendarUpsertWithWhereUniqueWithoutAgentInput = {
  create: WorkCalendarCreateWithoutAgentInput;
  update: WorkCalendarUpdateWithoutAgentInput;
  where: WorkCalendarWhereUniqueInput;
};

export type WorkCalendarWhereInput = {
  AND?: InputMaybe<Array<WorkCalendarWhereInput>>;
  NOT?: InputMaybe<Array<WorkCalendarWhereInput>>;
  OR?: InputMaybe<Array<WorkCalendarWhereInput>>;
  agent?: InputMaybe<AgentRelationFilter>;
  agentId?: InputMaybe<IntFilter>;
  available?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  day?: InputMaybe<IntFilter>;
  endTime?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  month?: InputMaybe<IntFilter>;
  startTime?: InputMaybe<DateTimeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  year?: InputMaybe<IntFilter>;
};

export type WorkCalendarWhereUniqueInput = {
  AND?: InputMaybe<Array<WorkCalendarWhereInput>>;
  NOT?: InputMaybe<Array<WorkCalendarWhereInput>>;
  OR?: InputMaybe<Array<WorkCalendarWhereInput>>;
  agent?: InputMaybe<AgentRelationFilter>;
  agentId?: InputMaybe<IntFilter>;
  available?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  day?: InputMaybe<IntFilter>;
  endTime?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  month?: InputMaybe<IntFilter>;
  startTime?: InputMaybe<DateTimeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  year?: InputMaybe<IntFilter>;
};
