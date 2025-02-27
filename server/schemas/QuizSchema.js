import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type QuizQuestion {
    id: ID!
    question: String!
    options: [String!]!
    answer: String!
  }

  type Query {
    getQuizQuestions: [QuizQuestion!]!
  }
`;

export default typeDefs;
