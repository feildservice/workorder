import { ApolloQueryResult, gql } from '@apollo/client';
import { BuildQueryFactory } from 'ra-data-graphql';
import { CREATE, DataProvider, DELETE, GET_LIST, GET_MANY, GET_ONE } from 'react-admin';

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
    debugger;
    if (type === GET_LIST) {
        return {
            query: gql`
                query ContactListQuery($first: Int!) {
                    listContacts(
                        where: {
                            customerId:{
                                equals : 379
                            }
                        },
                        take:25,
                        relationLoadStrategy: join,
                        include : {
                            avatar: true
                        }
                    ){
                        id
                        firstName
                        middleName
                        lastName
                        title
                        gender
                        email
                        phone
                        designation
                        customerId
                        isPrimary
                        avatar {
                            src
                        title
                        }
                        createdAt
                        updatedAt    
                    }
                }
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
        debugger;
        return {
            query: gql`
                query CustomerFindQuery($id: Int!) {
                    findUniqueCustomer(
                        where: {
                            id: $id
                        }, 
                        relationLoadStrategy: join, 
                        include: { logo: true, contacts: true}
                    ) 
                    {
                        id
                        name
                        description
                        domain
                        industry
                        founded
                        country
                        city
                        zipcode
                        email
                        phone
                        company
                        website
                        linkedinUrl
                        taxIdentifier
                        size
                        logo{
                            title
                            src
                        }
                        contacts {
                            customerId
                            firstName
                            lastName
                            phone
                            email
                        }
                        revenue                            
                        hierarchyId
                        status
                        createdAt
                        updatedAt
                    }
                }
            `,
            variables: {id: Number(params.id)},
            parseResponse: ({ data }: ApolloQueryResult<any>) => {
                if (data.findUniqueCustomer) {
                    return {data: data.findUniqueCustomer};
                }
                throw new Error(`Could not fetch the Customer`);
            },
        };
    }
    throw new Error(`Customer Query Not Found`);
}