import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth";
import prisma from '@cmru-comsci-66/e-sport-database'
import { NextAuthOptions } from '@cmru-comsci-66/e-sport-nextjs-server';

export default NextAuth(NextAuthOptions(PrismaAdapter(prisma), {
      GoogleProvider: {
         clientId: process.env.GOOGLE_CLIENT_ID,
         clientSecret: process.env.GOOGLE_CLIENT_SECRET
      }
   },
));

