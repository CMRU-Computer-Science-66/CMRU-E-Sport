// pages/updateScore.js
import React from 'react';
import Head from 'next/head';
import UsageComp from '@/components/admin/usage';
import Navadmin from '@/components/admin/navadmin';

export default function UpdateScore() {
  return (
    <div className='flex h-screen'>
      <Head>
        <title>UpdateScore E-Sport</title>
        <meta
          name='description'
          content='Update score for members of CMRU E-Sport club community'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/logo.ico' />
      </Head>
      <Navadmin />
      <main className='flex-1 p-5'>
        <div className='mx-auto max-w-7xl p-5 text-center sm:px-6 sm:py-32 lg:px-8'>
          <h1 className='text-4xl font-extrabold text-gray-900 sm:text-5xl'>
            Update Score for Members
          </h1>
          <p className='mx-auto mt-3 max-w-3xl text-xl text-gray-500 sm:mt-4'>
            Update the scores of members in the CMRU E-Sport club community.
          </p>
          <UsageComp />
          {/* Add more content as needed */}
        </div>
      </main>
    </div>
  );
}
