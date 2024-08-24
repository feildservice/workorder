import React from 'react';
import { graphql } from '../graphql/gql'; // Import the useQuery function
import { useQuery } from '@apollo/client';
// import { Customer } from '@/graphql/graphql';



const CustomerListQueryDocument = graphql(/* GraphQL */ `
  query CustomerListQuery($first: Int!) {
    listCustomers(take: $first) {
      name
      phone
    }
  }
`);

function CApp() {
  const { data } = useQuery(CustomerListQueryDocument, { variables: { first: 10 } });
  return (
    <div className="App">
      {data && <ul>{data.listCustomers?.map((e, i) => <li key={i}>{e.name}</li>)}</ul>}
    </div>
  );
}

export default CApp;