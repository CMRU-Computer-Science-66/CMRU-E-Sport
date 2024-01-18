// Components
import React from 'react'
import Head from 'next/head'
import UsageComp from '@/components/admin/usage'
import TestNav from '@/components/admin/test'

// Contents
export default function Dashboard() {
    return (
        <div>
            <Head>
                <title>ScoreBoard E-Sport</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="mx-auto max-w-7xl sm:px-6 sm:py-32 lg:px-8 text-center p-5">
                <TestNav />
                <UsageComp />
            </div>
        </div>
    )
}
