export const resolvers = {
  Query: {
    hello: () => {
      return "Hello World con Graphql";
    },
    greet: (root, args) => {
        console.log(args.name);
        return `Hello ${args.name}!`
    }
  },
};
