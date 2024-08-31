import { ApolloQueryResult, gql } from "@apollo/client";
import { BuildQueryFactory } from "ra-data-graphql";
import {
  CREATE,
  DataProvider,
  DELETE,
  GET_LIST,
  GET_MANY,
  GET_ONE,
  GET_MANY_REFERENCE,
  TopToolbar,
} from "react-admin";
import {
  CompanyFragment,
  ContactFragment,
  LogoFragment,
  AvatarFragment,
  AddressFragment,
} from "./queryfragments";

// TODO: Create and Update Queries for the contact.

export const contactQueries = (type: string, params: any) => {
  if (type === CREATE) {
    return {
      query: gql`
        mutation createCustomer(
          $first_name: String!
          $last_name: String!
          $email: String!
          $address: String
          $zipcode: String
          $city: String
          $stateAbbr: String
          $birthday: Date
          $first_seen: Date!
          $last_seen: Date!
          $has_ordered: Boolean!
          $latest_purchase: Date
          $has_newsletter: Boolean!
          $groups: [String]!
          $nb_orders: Int!
          $total_spent: Float!
        ) {
          createCustomer(
            first_name: $first_name
            last_name: $last_name
            email: $email
            address: $address
            zipcode: $zipcode
            city: $city
            stateAbbr: $stateAbbr
            birthday: $birthday
            first_seen: $first_seen
            last_seen: $last_seen
            has_ordered: $has_ordered
            latest_purchase: $latest_purchase
            has_newsletter: $has_newsletter
            groups: $groups
            nb_orders: $nb_orders
            total_spent: $total_spent
          ) {
            id
          }
        }
      `,
      variables: params.data,
      parseResponse: ({ data }: ApolloQueryResult<any>) => {
        if (data.createCustomer) {
          return { data: { id: data.createCustomer.id } };
        }

        throw new Error(`Could not create Customer`);
      },
    };
  }

  if (type === GET_MANY_REFERENCE) {
    return {
      query: gql`
        query GetContactListOfCustomerQuery($customerId: Int!) {
          listContacts(
            where: { customerId: { equals: $customerId } }
            take: 25
            relationLoadStrategy: join
            include: { avatar: true }
          ) {
            ...ContactFragment
          }
        }
        ${ContactFragment}
        ${AvatarFragment}
      `,
      variables: { customerId: Number(params.id) },
      parseResponse: ({ data }: ApolloQueryResult<any>) => {
        if (data.listContacts) {
          return { data: data.listContacts, total: data.listContacts.length };
        }

        throw new Error(`Could not create Customer`);
      },
    };
  }

  if (type === GET_LIST) {
    return {
      query: gql`
        query ContactListQuery($first: Int!) {
          listContacts(
            where: { customerId: { equals: 379 } }
            take: 25
            relationLoadStrategy: join
            include: { avatar: true }
          ) {
            ...ContactFragment
          }
        }
        ${ContactFragment}
        ${AvatarFragment}
      `,
      // variables: params.data,
      variables: { first: 10 },
      parseResponse: ({ data }: ApolloQueryResult<any>) => {
        if (data.listCustomers) {
          return { data: data.listCustomers, total: 10 };
        }
        throw new Error(`Could not create Customer`);
      },
    };
  }

  if (type === GET_ONE) {
    return {
      query: gql`
        query ContactFindQuery($id: Int!) {
          findUniqueContact(
            where: { id: $id }
            relationLoadStrategy: join
            include: { avatar: true }
          ) {
            ...ContactFragment
          }
        }
        ${ContactFragment}
        ${AvatarFragment}
      `,
      variables: { id: Number(params.id) },
      parseResponse: ({ data }: ApolloQueryResult<any>) => {
        if (data.findUniqueContact) {
          return { data: data.findUniqueContact };
        }
        throw new Error(`Could not fetch the Contact`);
      },
    };
  }

  throw new Error(`Contact Query Not Found`);
};
