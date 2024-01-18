import React, { useState } from 'react';
import Head from 'next/head';
import { Input, Button, Link } from '@nextui-org/react';

// Contents
export default function Login() {
    return (
        <div>
            <Head>
                <title>CMRU E-Sport</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="mx-auto max-w-7xl sm:px-6 sm:py-32 lg:px-8 min-h-screen flex justify-center items-center">
                <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
                    <h1 className="text-3xl font-bold mb-6 text-center">Sing In</h1>
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
                    <Button
                        radius="full"
                        className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg w-full"
                    >
                        Sign In
                    </Button>

                    <div className="mt-4 text-center">
                        <Link href="/register" color="foreground">
                            Register
                        </Link>
                    </div>

                    <div className="mt-2 text-center">
                        <Link href="/forgot" color="foreground">
                            Forgot Password ?
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}