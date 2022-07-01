import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'
// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()

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
      // console.log(token, account)
      
      return token
    },
    async session({ session, user, token }) {
      console.log({ session, user, token })
      session.user.id = token.sub
      return session
    }
  }
})