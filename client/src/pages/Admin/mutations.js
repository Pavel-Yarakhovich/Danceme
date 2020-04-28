import { gql } from "apollo-boost";

export const addItemMutation = gql`
  mutation(
    $image: String!
    $description: String!
    $size: String!
    $manufacturer: String!
    $hit: Boolean!
    $kind: String!
  ) {
    addItem(
      image: $image
      description: $description
      size: $size
      manufacturer: $manufacturer
      hit: $hit
      kind: $kind
    ) {
      image
      description
      size
      manufacturer
      hit
      kind
    }
  }
`;
