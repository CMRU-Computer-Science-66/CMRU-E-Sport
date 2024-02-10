import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth";
import prisma from '@cmru-comsci-66/e-sport-database'
import { nextAuthOptions } from '@cmru-comsci-66/e-sport-nextjs-server';

export default NextAuth(await nextAuthOptions(PrismaAdapter(prisma), {
      NextAuth: {
         Secret: process.env.NEXTAUTH_SECRET
      },
      DiscordProvider: {
         clientId: process.env.DISCORD_ID,
         clientSecret: process.env.DISCORD_SECRET
     },
      GitHubProvider: {
         clientId: process.env.GITHUB_ID,
         clientSecret: process.env.GITHUB_SECRET
      },
      GoogleProvider: {
         clientId: process.env.GOOGLE_CLIENT_ID,
         clientSecret: process.env.GOOGLE_CLIENT_SECRET
      }
   },
));

