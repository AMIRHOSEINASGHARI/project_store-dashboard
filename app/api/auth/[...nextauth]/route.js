import connectDB from "@/utils/connectDB";
import StoreDashboardUser from "@/utils/models/user";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  session: { strategy: "jwt" },
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
          };
          return user;
        }
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
