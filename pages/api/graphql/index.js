import { ApolloServer } from 'apollo-server-micro'
import { getAll, getOne } from '../../../features/homes'
import typeDefs from '../../../graphql/schema'

const apollo = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      homes: async (parent, args, context, info) => await getAll(args.filter),
      home: async (parent, args) => await getOne(args.id)
    }
  }
})

const server = apollo.start()

export default async function graphQL(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader(
    'Access-Control-Allow-Origin',
    'https://studio.apollographql.com'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );

  if (req.method == 'OPTIONS') return res.end()

  await server
  await apollo.createHandler({
    path: '/api/graphql'
  })(req, res)
}

export const config = {
  api: {
    bodyParser: false
  }
}