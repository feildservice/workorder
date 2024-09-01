import { gql } from '@apollo/client';

export const CompanyFragment = gql`
  fragment CompanyFragment on Customer {
    id
    name
    description
    domain
    industry
    founded
    address
    city
    country
    zipcode
    email
    phone
    company
    website
    linkedinUrl
    taxIdentifier
    size
    revenue
    logo {
      ...LogoFragment
    }
    contacts {
      ...ContactFragment
    }
    addresses {
      ...AddressFragment
    }
    status
    createdAt
    updatedAt
  }
`;

export const ContactFragment = gql`
    fragment ContactFragment on Contact {
        id
        firstName
        middleName
        lastName
        title
        gender
        email
        phone
        designation
        avatar {
            ...AvatarFragment
        }
        isPrimary
        createdAt
        updatedAt
    }
`;

export const AddressFragment = gql`
    fragment AddressFragment on Address {
        id
        street
        city
        state
        zipcode
        country
        latitude
        longitude
        isPrimary
        createdAt
        updatedAt
    }
`;

export const LogoFragment = gql`
    fragment LogoFragment on Logo {
        title
        src
    }
`;

export const AvatarFragment = gql`
    fragment AvatarFragment on Avatar {
        title
        src
    }
`;