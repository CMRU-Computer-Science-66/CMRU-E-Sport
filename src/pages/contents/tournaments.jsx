// Components
import Head from 'next/head'
import React from 'react'

// Contents
export default function Tournaments() {
    return (
        <div>
            <Head>
                <title>TournaMemts E-Sport</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="mx-auto max-w-7xl sm:px-6 sm:py-32 lg:px-8 text-center p-5">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl ">Tournaments</h2>
                <h4 className="text-3xl tracking-tight text-sm 2xl:text-md xl:text-lg lg:text-xl md:text-2xl sm:text-3xl mt-1">รายการแข่งขัน</h4>
            </div>
        </div>
    )
}
