import React from 'react';
import Head from 'next/head';
import UsageComp from '@/components/admin/usage';
import Navadmin from '@/components/admin/navadmin';

export default function Recruiting() {
  return (
    <div className='flex h-screen'>
      <Head>
        <title>Recruiting E-Sport</title>
        <meta
          name='description'
          content='Recruiting CMRU E-Sport club community'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/logo.ico' />
      </Head>
      <Navadmin />
      <main className='flex-1 p-5'>
        <div className='mx-auto max-w-7xl p-5 text-center sm:px-6 sm:py-32 lg:px-8'>
          <h1 className='text-4xl font-extrabold text-gray-900 sm:text-5xl'>
            CMRU E-Sport Recruiting
          </h1>
          <p className='mt-3 max-w-3xl mx-auto text-xl text-gray-500 sm:mt-4'>
            Join our E-Sport club community! We are currently recruiting new members.
          </p>
          <UsageComp />
          {/* Add more content as needed */}
        </div>
      </main>
    </div>
  );
}
