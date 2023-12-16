import connectDB from "@/utils/connectDB";
import StoreDashboardUser from "@/utils/models/user";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  session: { strategy: "jwt", maxAge: 30 * 24 * 60 * 60 },
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        await connectDB();
        const { username, password } = credentials;
        const isUser = await StoreDashboardUser.findOne({ username });

        if (!isUser) {
          throw new Error("User not found");
        } else if (isUser.password !== password) {
          throw new Error("Username or password is incorrect!");
        } else {
          const user = {
            email: username,
            name: isUser.displayName,
            image: isUser.avatar,
            roll: isUser.roll,
          };
          return user;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token }) {
      await connectDB();
      const isUser = await StoreDashboardUser.findOne({
        username: token.email,
      });
      if (isUser) {
        token.username = isUser.username;
        token.roll = isUser.roll;
        token.picture = isUser.avatar;
        delete token.email;
      }
      return token;
    },
    async session({ session, token }) {
      try {
        const newSession = {
          ...session,
          user: {
            name: token.name,
            username: token.username,
            image: token.picture,
            roll: token.roll,
          },
        };
        return newSession;
      } catch (error) {
        return session;
      }
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
