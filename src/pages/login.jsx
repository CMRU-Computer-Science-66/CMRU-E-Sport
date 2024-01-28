// Components
import React, { useState } from 'react';
import Head from 'next/head';
import { Input, Button, Link } from '@nextui-org/react';
import { useSession, signIn } from "next-auth/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// Contents
export default function Login() {
    const { data: session } = useSession()

    return (
        <div>
            <Head>
                <title>CMRU E-Sport</title>
                <meta name="description" content="Login For member cmru e-sport club" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="mx-auto max-w-7xl sm:px-6 sm:py-32 lg:px-8 min-h-screen flex justify-center items-center">
                <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
                    <h1 className="text-3xl font-bold mb-6 text-center">เข้าสู่ระบบ</h1>
                    <div className="mb-4">
                        <Input
                            name="username"
                            type="text"
                            label="Username"
                            placeholder="Enter your Username"
                        />
                    </div>
                    <div className="mb-6">
                        <Input
                            name="password"
                            type="password"
                            label="Password"
                            placeholder="Enter your Password"
                        />
                    </div>
                    <div className='p-2'>
                        <Button
                            onClick={() => signIn("github", { redirect: false })}
                            radius="full"
                            className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg w-full"
                        >
                            เข้าสู่ระบบ
                        </Button>
                    </div>
                    <div className='p-2'>
                        <Button
                            onClick={() => signIn("google", { redirect: false })}
                            radius="full"
                            className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg w-full"
                            startContent={
                                <FontAwesomeIcon className="h-4 w-4" icon={faGoogle} />
                            }
                        >Google
                        </Button>
                    </div>
                    <div className='p-2'>
                        <Button
                            onClick={() => signIn("github", { redirect: false })}
                            radius="full"
                            className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg w-full"
                            startContent={
                                <FontAwesomeIcon className="h-4 w-4" icon={faGithub} />
                            }
                        >
                            Github
                        </Button>
                    </div>

                    <div className="mt-4 text-center">
                        <Link href="/register" color="foreground">
                            สมัครสมาชิก
                        </Link>
                    </div>

                    <div className="mt-2 text-center">
                        {/* <Link href="/forgot" color="foreground">
                           ลืมรหัสผ่าน?
                        </Link> */}
                    </div>

                </div>
            </div>
        </div>
    );
}