import { ApolloServer } from 'apollo-server-micro'
import { getAll } from '../../../features/homes'
import typeDefs from '../../../graphql/schema'

const apollo = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      homes: () => getAll
    }
  }
})

const server = apollo.start()

export default async function graphQL(req, res) {
  res.setHeader('Access-Control-Allow-Headers', 'true')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )

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