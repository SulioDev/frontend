import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";

const authOptions = {
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
      authorization: {
        params: {
          scope: 'email,public_profile',
        },
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin', // Optional custom sign-in page
  },
  secret: process.env.NEXTAUTH_SECRET, // Add this line for security
};

// Export API route handler
export default (req, res) => NextAuth(req, res, authOptions);
