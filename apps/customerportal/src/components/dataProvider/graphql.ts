import { ApolloQueryResult, gql } from '@apollo/client';
import buildApolloClient, {
    buildQuery as buildQueryFactory,
} from 'ra-data-graphql-simple';
import { BuildQueryFactory } from 'ra-data-graphql';
import { CREATE, DataProvider, DELETE, GET_LIST, GET_MANY, GET_ONE } from 'react-admin';
// import gql from 'graphql-tag';
import { IntrospectionType } from 'graphql';
import { graphql } from '../../graphql/gql'; // Import the useQuery function
import { customerQueries } from './customerprovider'
import { contactQueries } from './contactprovider'

const getGqlResource = (resource: string) => {
    switch (resource) {
        case 'customers':
            return 'Customer';

        case 'contacts':
            return 'Contact';

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

        if (resource === 'Customer') {
            return customerQueries(type, params)
        }
        if (resource === 'Contact') {
            return customerQueries(type, params)
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
