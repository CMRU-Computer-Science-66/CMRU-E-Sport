import React from 'react'
import Head from 'next/head'
import Navadmin from "@/components/admin/navadmin";
import UsageComp from '@/components/admin/usage'

export default function DashboardPage() {
    return (
        <div className="flex h-screen">
            <Head>
                <title>ScoreBoard E-Sport</title>
                <meta name="description" content="overviwe of admin form cmru e-sport club" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navadmin />
            <main className="flex-1 p-5">
                <div className="mx-auto max-w-7xl sm:px-6 sm:py-32 lg:px-8 text-center p-5">
                    <UsageComp />
                </div>
            </main>
        </div>
    );
};


