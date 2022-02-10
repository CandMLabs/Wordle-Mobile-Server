const resolvers = {
  Query: {
    user: (_, args) => {
      return {
        id: args.id,
        name: args.id
      }
    }
  }
};
module.exports = resolvers;