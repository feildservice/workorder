import { ApolloQueryResult,gql } from '@apollo/client';
import buildApolloClient, {
    buildQuery as buildQueryFactory,
} from 'ra-data-graphql-simple';
import { BuildQueryFactory } from 'ra-data-graphql';
import { CREATE, DataProvider, DELETE, GET_LIST, GET_MANY } from 'react-admin';
// import gql from 'graphql-tag';
import { IntrospectionType } from 'graphql';
import { graphql } from '../../graphql/gql'; // Import the useQuery function

const getGqlResource = (resource: string) => {
    switch (resource) {
        case 'customers':
            return 'Customer';

        // case 'categories':
        //     return 'Category';

        // case 'orders':
        //     return 'Order';

        // case 'products':
        //     return 'Product';

        // case 'reviews':
        //     return 'Review';

        // case 'invoices':
        //     return 'Invoice';

        default:
            throw new Error(`Unknown resource ${resource}`);
    }
};

const customBuildQuery: BuildQueryFactory = introspectionResults => {
    const buildQuery = buildQueryFactory(introspectionResults);

    return (type, resource, params) => {
        // debugger;
        if (type === DELETE) {
            return {
                query: gql`mutation remove${resource}($id: ID!) {
                    remove${resource}(id: $id) {
                        id
                    }
                }`,
                variables: { id: params.id },
                parseResponse: ({ data }: ApolloQueryResult<any>) => {
                    if (data[`remove${resource}`]) {
                        return { data: { id: params.id } };
                    }

                    throw new Error(`Could not delete ${resource}`);
                },
            };
        }

        if (resource === 'Customer' && type === CREATE) {
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
        if (resource === 'Customer' && type === GET_LIST) {
            return {
                query: gql`
                    query CustomerListQuery($first: Int!) {
                        listCustomers(take: $first, relationLoadStrategy: join, include: { logo: true, contacts: true}) {
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
                            revenue                            
                            hierarchyId
                            status
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

        return buildQuery(type, resource, params);
    };
};

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    // debugger;
    const dataProvider = buildApolloClient({
        clientOptions: {
            uri: 'http://localhost:3001/graphql',
        },
        introspection: {
            operationNames: {
                [DELETE]: (resource: IntrospectionType) =>
                    `remove${resource.name}`,
            },
        },
        buildQuery: customBuildQuery,
    });

    return new Proxy<DataProvider>(defaultDataProvider, {
        get: (target, name) => {
            if (typeof name === 'symbol' || name === 'then') {
                return;
            }
            return async (resource: string, params: any) => {
                return dataProvider[name](getGqlResource(resource), params);
            };
        },
    });
};
// Only used to initialize proxy
const defaultDataProvider: DataProvider = {
    create: () => Promise.reject({ data: null }), // avoids adding a context in tests
    delete: () => Promise.reject({ data: null }), // avoids adding a context in tests
    deleteMany: () => Promise.resolve({ data: [] }), // avoids adding a context in tests
    getList: () => Promise.resolve({ data: [], total: 0 }), // avoids adding a context in tests
    getMany: () => Promise.resolve({ data: [] }), // avoids adding a context in tests
    getManyReference: () => Promise.resolve({ data: [], total: 0 }), // avoids adding a context in tests
    getOne: () => Promise.reject({ data: null }), // avoids adding a context in tests
    update: () => Promise.reject({ data: null }), // avoids adding a context in tests
    updateMany: () => Promise.resolve({ data: [] }), // avoids adding a context in tests
};
