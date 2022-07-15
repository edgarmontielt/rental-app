import '../styles/globals.css'
import GlobalStyles from '../theme/global'
import { SessionProvider } from 'next-auth/react'
import MainLayout from '../components/layouts/main'
import { ApolloProvider } from '@apollo/client'
import client from '../graphql/client'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <GlobalStyles />
      <SessionProvider session={session}>
        <ApolloProvider client={client}>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </ApolloProvider>
      </SessionProvider>
    </>
  )
}

export default MyApp
