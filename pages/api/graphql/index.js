import { ApolloServer } from 'apollo-server-micro'
import resolvers from '../../../graphql/resolvers';
import typeDefs from '../../../graphql/schemas'

const apollo = new ApolloServer({
  typeDefs,
  resolvers
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