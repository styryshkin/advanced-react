const resolvers = {
  Query: {
    async items(parent, args, ctx) {
      const item = await ctx.db.query.items();
      return item;
    },
  },
  Mutation: {
    createItem(parent, args, ctx, info) {
      const item = ctx.db.mutation.createItem(
        {
          data: {
            ...args,
          },
        },
        info,
      );

      console.log(item);
      return item;
    },
  },
};

module.exports = resolvers;
