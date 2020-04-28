import { gql } from "apollo-boost";

export const productsQuery = gql`
  query productsQuery {
    items {
      id
      image
      description
      size
      manufacturer
      hit
      kind
    }
  }
`;