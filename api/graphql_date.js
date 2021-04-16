const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');

const GraphQLDate = new GraphQLScalarType({
  name: 'GraphQLDate',
  description: 'A Date() type in GraphQL as a scalar',

  // for sending data
  serialize(value) {
    return value.toISOString();
  },

  // for receiving data
  // this is used when variable is used in query
  parseValue(value) {
    const dateValue = new Date(value);
    return Number.isNaN(dateValue) ? undefined : dateValue;
  },

  parseLiteral(ast) {
    // the kind property indicates the type of the token
    // that the parser found
    if (ast.kind === Kind.STRING) {
      const value = new Date(ast.value);
      return Number.isNaN(value) ? undefined : value;
    }
    return undefined;
  },
});

module.exports = GraphQLDate;
