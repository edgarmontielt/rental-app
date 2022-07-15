import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import MainLayout from '../components/layouts/main'
import GlobalStyles from '../theme/global'
import { ApolloProvider } from '@apollo/client'
import client from '../graphql/client'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <ApolloProvider client={client}>
      <GlobalStyles />
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ApolloProvider>
    </SessionProvider>
  )
}

export default MyApp
