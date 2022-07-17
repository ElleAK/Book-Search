const { User, Book } = require('../models');

const resolvers = {
    Query: {
      me: async (parent, { username}) => {
        const params = username ? { username } : {};
        return User.find(params).sort({ username });
      }
    },
 
    
  };
  
  module.exports = resolvers;