import NextAuth from "next-auth";
import GithubProvider, { GithubProfile } from "next-auth/providers/github";
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",

      // ? Esse é o responsável para poder gravar os dados no banco (com auxilio do adapter)
      profile(profile: GithubProfile) {
        return {
          id: profile.id.toString(),
          name: profile.name || "",
          email: profile.email || "",
          avatar_url: profile.avatar_url,
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
      profile(profile: GoogleProfile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          avatar_url: profile.picture,
        };
      },
    }),
  ],

  callbacks: {
    async session({ session, user }) {
      return {
        ...session,
        user,
      };
    },
  },
});
