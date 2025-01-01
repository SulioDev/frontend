import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";

const authOptions = {
  providers: [
    FacebookProvider({
      clientId: "1075064627580974",
      clientSecret: "bb349a53fe5cde999fce55c14df7959e",
      authorization: {
        params: {
          scope: 'email,public_profile', // Add any additional permissions needed
        },
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin', // Optional custom sign-in page
  },
};

// Export named functions for each HTTP method
export const GET = (req, res) => NextAuth(req, res, authOptions);
export const POST = (req, res) => NextAuth(req, res, authOptions);
