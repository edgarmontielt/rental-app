import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'
import { getUserByIdProvider, createUser } from '../../../features/auth'

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET
    })
  ],
  callbacks: {
    async jwt({ token, account }) {  // account is available when signIn
      if (account) {
        let user = await getUserByIdProvider(account.providerAccountId)
        if (!user) {
          user = await createUser({
            name: token.name,
            email: token.email,
            photoURL: token.picture
          }, account.providerAccountId, account.provider)
        }
        token.role = user.role 
      }
      return token
    },
    async session({ session, user, token }) {
      session.user.id = token.sub
      session.user.role = token.role
      return session
    }
  }
})