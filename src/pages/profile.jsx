// Components
import { Avatar, Card } from '@nextui-org/react'
import Head from 'next/head'
import React from 'react'
import { useSession } from "next-auth/react";

// Contents
export default function Profile() {
    const { data: session, status } = useSession();

    return (
        <div>
            <Head>
                <title>Profile E-Sport</title>
                <meta name="description" content="See your profile and edit yoru cmru e-sport club community" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="mx-auto max-w-5xl sm:px-6 sm:py-32 lg:px-8 text-left p-5">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center">Profile</h2>
                <h4 className="text-xl tracking-tight text-gray-600 mb-8 text-center">ข้อมูลส่วนตัว</h4>
                {session ? (
                    <div>
                        <div className="gap-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 mt-5 p-5">
                            <div>
                                <Avatar
                                    isBordered
                                    as="button"
                                    className="transition-transform w-50 h-50 text-large"
                                    name="username"
                                    src={session.user.image}
                                />
                            </div>
                            <div className='md:text-right mt-5'>
                                <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
                                    UserName
                                </h2>
                                <h4 className="text-xl tracking-tight text-gray-600 mb-8">{session.user.name}</h4>
                            </div>
                        </div>
                        <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
                            ทีมของฉัน
                        </h2>
                        <h4 className="text-xl tracking-tight text-gray-600 mb-8">G2 Esport</h4>
                    </div>
                ) : (
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center">No Data</h2>
                )}
            </div>
        </div>
    )
}
