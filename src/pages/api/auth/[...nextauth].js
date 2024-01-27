import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaClient } from '../../../../node_modules/@cmru-comsci-66/e-sport-database/client'

const prisma = new PrismaClient()

export default NextAuth({
    providers: [
        GoogleProvider({
            async profile(profile) {
                const user = {
                    id: profile.sub,
                    name: profile.name,
                    emailVerified: undefined,
                    image: profile.picture,
                    email: profile.email,
                    created_at: new Date(),
                    updateAt: new Date(),
                };
                return {
                    ...user,
                };
            },
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    adapter: PrismaAdapter(prisma),
});
