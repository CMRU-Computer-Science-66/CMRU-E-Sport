import React from 'react';
import Head from 'next/head';
import Navadmin from '@/components/admin/navadmin';

export default function DashboardPage() {
  return (
    <div className='flex h-screen'>
      <Head>
        <title>ScoreBoard E-Sport</title>
        <meta
          name='description'
          content='Overview of admin form CMRU E-Sport club'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/logo.ico' />
      </Head>
      <Navadmin />
      <main className='flex-1 p-5'>
        <div className='mx-auto max-w-7xl p-5 text-center sm:px-6 sm:py-32 lg:px-8'>
          <h1 className='text-4xl font-extrabold text-gray-900 sm:text-5xl'>
            Welcome to the Admin Dashboard
          </h1>
          <p className='mx-auto mt-3 max-w-3xl text-xl text-gray-500 sm:mt-4'>
            Overview and manage the activities of CMRU E-Sport Club.
          </p>
          {/* Add more content as needed */}
        </div>
      </main>
    </div>
  );
}
