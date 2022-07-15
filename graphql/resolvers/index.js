import { deleteOne, getAll, getOne } from "../../features/homes";

const resolvers = {
  Query: {
    homes: async (parent, args, context, info) => await getAll(args.filter),
    home: async (parent, args) => await getOne(args.id)
  },
  Mutation: {
    deleteHome: async (parent, args, context, info) => await deleteOne(args.id)
  }
}

export default resolvers