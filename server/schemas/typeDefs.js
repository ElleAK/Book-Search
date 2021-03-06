// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }
    type Book {
        bookId: ID
        authors: [String]
        description: String
        title: String!
        image: String
        link: String
    }
    type Query {
        me: User
    }
    type Auth {
        token: ID!
        user: User
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(input: savedBook!): User
        removeBook(bookId: ID!): User
    }
    input savedBook {
        description: String
        title: String
        bookId: String
        image: String
        link: String
        authors: [String]
      }
    `;

// export the typeDefs
module.exports = typeDefs;