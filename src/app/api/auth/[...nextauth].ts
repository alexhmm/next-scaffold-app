import NextAuth from 'next-auth';
import type { NextAuthOptions } from 'next-auth';
import SpotifyProvider from 'next-auth/providers/spotify';

export const authOptions: NextAuthOptions = {
  callbacks: {
    async jwt({ token, account }: any) {
      if (account) {
        // Set token callback object
        token.accessToken = account.access_token;
        token.providerAccountId = account.providerAccountId;
        token.refreshToken = account.refresh_token;
        token.tokenType = account.token_type;
      }
      return token;
    },
    async session({ session, token }: any) {
      // Return token inside session
      session.token = token;
      return session;
    },
  },
  providers: [
    SpotifyProvider({
      authorization: {
        params: {
          scope: process.env.SPOTIFY_API_SCOPE!,
        },
      },
      clientId: process.env.CLIENT_ID!,
      clientSecret: process.env.CLIENT_SECRET!,
    }),
  ],
  session: {
    maxAge: 3600,
  },
};

export default NextAuth(authOptions);
