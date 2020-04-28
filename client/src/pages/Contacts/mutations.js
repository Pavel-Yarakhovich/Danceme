import { gql } from "apollo-boost";

export const addRequestMutation = gql`
  mutation(
    $name: String!
    $phone: String!
    $comment: String!
    $connectBy: String!
    $served: Boolean!
  ) {
    addRequest(
      name: $name
      phone: $phone
      comment: $comment
      connectBy: $connectBy
      served: $served
    ) {
      name
      phone
      comment
      connectBy
      served
    }
  }
`;
