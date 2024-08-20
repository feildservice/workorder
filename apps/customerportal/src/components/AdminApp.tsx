// in src/components/AdminApp.tsx
"use client"; // remove this line if you choose Pages Router
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
// import jsonServerProvider from "ra-data-json-server";
// import { dataProvider } from "ra-data-simple-prisma";
import buildGraphQLProvider from 'ra-data-graphql';
import { __schema as schema } from '../schema.json';
import { ApolloQueryResult } from '@apollo/client';
import buildApolloClient, {
    buildQuery as buildQueryFactory,
} from 'ra-data-graphql-simple';

// import { createNetworkInterface } from 'react-apollo';

const dataProvider = buildApolloClient({
    clientOptions: {
        uri: 'http://localhost:3001/graphql',
    },
    introspection: {
        schema
    },
    // buildQuery: customBuildQuery,
});

// const dataProvider = buildGraphQLProvider({
//     introspection: { schema },
//     client: {

//     }
// });

// const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
//import buildQuery from './buildQuery'; // see Specify your queries and mutations section below
//import { PostCreate, PostEdit, PostList } from '../components/admin/posts';

// const dataProvider = buildGraphQLProvider({ buildQuery });


const AdminApp = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="Customer"
      list={ListGuesser}
      edit={EditGuesser}
      recordRepresentation="name"
    />
    {/* <Resource
      name="posts"
      list={ListGuesser}
      edit={EditGuesser}
      recordRepresentation="title"
    />
    <Resource name="comments" list={ListGuesser} edit={EditGuesser} /> */}
  </Admin>
);

export default AdminApp;