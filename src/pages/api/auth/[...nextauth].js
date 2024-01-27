import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import prisma from '@cmru-comsci-66/e-sport-database'
import { google } from '@cmru-comsci-66/e-sport-nextjs-server/NextAuth';

export default NextAuth({
    providers: [
        GoogleProvider({
            async profile(profile) {
                return google.profile(profile);
            },
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    adapter: PrismaAdapter(prisma),
});
