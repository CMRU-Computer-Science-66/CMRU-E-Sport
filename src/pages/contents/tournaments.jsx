// Components
import Head from 'next/head'
import React from 'react'

// Contents
export default function Tournaments() {
    return (
        <div>
            <Head>
                <title>TournaMemts E-Sport</title>
                <meta name="description" content="Tournaments of cmru e-sport" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo.ico" />
            </Head>
            <div className="mx-auto max-w-7xl sm:px-6 sm:py-32 lg:px-8 text-center p-5">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl ">Tournaments</h2>
                <h4 className="text-xl tracking-tight text-gray-600 mb-8">รายการแข่งขัน</h4>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <h2
                    className="mt-3 p-5 text-center text-3xl font-bold tracking-tight sm:text-4xl"
                    style={{ color: "red" }}
                >
                    Coming soon
                </h2>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        </div>
    )
}
