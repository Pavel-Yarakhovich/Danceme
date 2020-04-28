import { gql } from "apollo-boost";

export const feedbacksQuery = gql`
  query feedbacksQuery {
    feedbacks{
      id
      name
      image
      comment
    }
  }
`;