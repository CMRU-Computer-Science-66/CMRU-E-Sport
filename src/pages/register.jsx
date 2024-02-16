// Components
import React, { useState } from 'react';
import Head from 'next/head';
import { Input, Button, Link, Checkbox } from '@nextui-org/react';
import {  signIn } from 'next-auth/react';

// Contents
export default function SignUp() {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');

   function register() {
      signIn("register-username", { username, password, confirmPassword },)
   }

    return (
        <div>
            <Head>
                <title>CMRU E-Sport</title>
                <meta name="description" content="register and come to cmru e-sport proleagus community" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo.ico" />
            </Head>
            <div className="mx-auto max-w-7xl sm:px-6 sm:py-32 lg:px-8 min-h-screen flex justify-center items-center">
                <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
                    <h1 className="text-3xl font-bold mb-6 text-center">Sign Up</h1>
                    {/* <div className="mb-4">
                        <Input
                            name="fullname"
                            type="text"
                            label="Name"
                            placeholder="Enter your Name"
                        />
                    </div>
                    <div className="mb-4">
                        <Input
                            name="lastname"
                            type="text"
                            label="Lastname"
                            placeholder="Enter your LastName"
                        />
                    </div>
                    <div className="mb-4">
                        <Input
                            name="email"
                            type="text"
                            label="Email"
                            placeholder="Enter your Email"
                        />
                    </div> */}
                    <div className="mb-4">
                        <Input
                            name="username"
                            type="text"
                            label="Username"
                            placeholder="Enter your Username"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <Input
                            name="password"
                            type="password"
                            label="Password"
                            placeholder="Enter your Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <Input
                            name="confirmPassword"
                            type="password"
                            label="Confirm Password"
                            placeholder="Confirm Password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <Checkbox
                        >
                            I accept the <Link href='/contents/requirements'>Requirements</Link>
                        </Checkbox>
                    </div>
                <Button
                     onClick={() => register()}
                        radius="full"
                        className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg w-full"
                    >
                        Sign Up
                        
                    </Button>
                    <div className="mt-4 text-center">
                        <Link href="/login" color="foreground">
                            Sing In
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
