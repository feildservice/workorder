// in src/components/AdminApp.tsx
"use client"; // remove this line if you choose Pages Router
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import React from 'react';
// import jsonServerProvider from "ra-data-json-server";
// import { dataProvider } from "ra-data-simple-prisma";
import buildGraphQLProvider from 'ra-data-graphql';
// import { __schema as schema } from '../schema.json';
import { ApolloClient, InMemoryCache, ApolloProvider  } from '@apollo/client';
import buildApolloClient, {
    buildQuery as buildQueryFactory,
} from 'ra-data-graphql-simple';
import CApp from "./capp";

// import { createNetworkInterface } from 'react-apollo';

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
});


// const dataProvider = buildApolloClient({
//     clientOptions: {
//         uri: 'http://localhost:3001/graphql',
//     },
    
//     buildQuery: customBuildQuery,
// });




// const dataProvider = buildGraphQLProvider({
//     introspection: { schema },
//     client: {

//     }
// });

// const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
//import buildQuery from './buildQuery'; // see Specify your queries and mutations section below
//import { PostCreate, PostEdit, PostList } from '../components/admin/posts';

// const dataProvider = buildGraphQLProvider({ buildQuery });

{/* <Admin dataProvider={dataProvider}>
<Resource
  name="Customer"
  list={ListGuesser}
  edit={EditGuesser}
  recordRepresentation="name"
/>
<Resource
  name="posts"
  list={ListGuesser}
  edit={EditGuesser}
  recordRepresentation="title"
/>
<Resource name="comments" list={ListGuesser} edit={EditGuesser} />
</Admin> */}


const AdminApp = () => (
  <React.StrictMode>
    <ApolloProvider client={client}>
      <CApp />
    </ApolloProvider>
  </React.StrictMode>
);

export default AdminApp;