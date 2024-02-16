// Components
import React, { useState } from 'react';
import Head from 'next/head';
import { Input, Button, Link } from '@nextui-org/react';
import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

// Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

// Contents
export default function Login() {
  const { data: session } = useSession();
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function login() {
    signIn('login-username', { username, password }).then(() =>
      router.push('/')
    );
  }

  return (
    <div>
      <Head>
        <title>CMRU E-Sport</title>
        <meta name='description' content='Login For member cmru e-sport club' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/logo.ico' />
      </Head>
      <div className='mx-auto flex min-h-screen max-w-7xl items-center justify-center sm:px-6 sm:py-32 lg:px-8'>
        <div className='w-full max-w-md rounded-md bg-white p-8 shadow-md'>
          <h1 className='mb-6 text-center text-3xl font-bold'>เข้าสู่ระบบ</h1>
          <div className='mb-4'>
            <Input
              name='username'
              type='text'
              label='Username'
              placeholder='Enter your Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className='mb-6'>
            <Input
              name='password'
              type='password'
              label='Password'
              placeholder='Enter your Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='p-2'>
            <Button
              onClick={() => login()}
              radius='full'
              className='w-full bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg'
            >
              เข้าสู่ระบบ
            </Button>
          </div>
          <div className='p-2'>
            <Button
              onClick={() =>
                signIn('google', { redirect: false }).then(() =>
                  router.push('/')
                )
              }
              radius='full'
              className='w-full bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg'
              startContent={
                <FontAwesomeIcon className='h-4 w-4' icon={faGoogle} />
              }
            >
              Google
            </Button>
          </div>
          <div className='p-2'>
            <Button
              onClick={() =>
                signIn('discord', { redirect: false }).then(() =>
                  router.push('/')
                )
              }
              radius='full'
              className='w-full bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg'
              startContent={
                <FontAwesomeIcon className='h-4 w-4' icon={faDiscord} />
              }
            >
              Discord
            </Button>
          </div>
          <div className='mt-4 text-center'>
            <Link href='/register' color='foreground'>
              สมัครสมาชิก
            </Link>
          </div>
          <div className='mt-2 text-center'>
            {/* <Link href="/forgot" color="foreground">
               ลืมรหัสผ่าน?
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
