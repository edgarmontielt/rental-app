import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import MainLayout from '../components/layouts/main'
import GlobalStyles from '../global'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <GlobalStyles />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </SessionProvider>
  )
}

export default MyApp
