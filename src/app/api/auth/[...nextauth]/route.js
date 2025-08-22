import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "@/lib/mongodb";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        name: { label: "Name", type: "text" },
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const client = await clientPromise;
        const db = client.db("techNova");
        const users = db.collection("users");

        // check if user exists
        const user = await users.findOne({ email: credentials.email });

        if (!user) {
          // signup flow → create new user
          const hashedPassword = await bcrypt.hash(credentials.password, 10);
          const newUser = {
            name: credentials.name,
            email: credentials.email,
            password: hashedPassword,
          };
          await users.insertOne(newUser);
          return { id: newUser._id, name: newUser.name, email: newUser.email };
        }

        // login flow → verify password
        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!isValid) {
          throw new Error("Invalid email or password");
        }

        return { id: user._id, name: user.name, email: user.email };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.email = token.email;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
