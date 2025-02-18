// typeDefs.js is a file that contains the GraphQL
// schema definition language (SDL) that defines the types,
// queries, and mutations that the GraphQL server supports.
// The schema is defined using the GraphQL schema definition
// language (SDL).
const typeDefs = `#graphql
  type Contact {
    id: ID!
    contactId: String!
    name: String!
    email: String!
    phone: String!
    address: String!
  }

  type Query {
    contacts: [Contact]
    contact(id: ID!): Contact
  }

  type Mutation {
  
    createContact(
      contactId: String!
      name: String!
      email: String!
      phone: String!
      address: String!
    ): Contact
    
    updateContact(
      id: ID!
      contactId: String!
      name: String!
      email: String!
      phone: String!
      address: String!
    ): Contact
    
    deleteContact(id: ID!): Contact
    
    deleteContactByEmail(email: String!): Contact
  }
`;

module.exports = typeDefs;
