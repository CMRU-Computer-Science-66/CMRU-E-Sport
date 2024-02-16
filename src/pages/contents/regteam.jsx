// Components
import React, { useState } from 'react';
import Head from 'next/head';
import { Button, Input } from '@nextui-org/react';

// Contents
export default function RegisterTeam() {
  return (
    <div>
      <Head>
        <title>Apply To Compete E-Sport</title>
        <meta name='description' content='Apply To Compete E-Sport' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/logo.ico' />
      </Head>
      <div className='mx-auto flex min-h-screen max-w-7xl items-center justify-center sm:px-6 sm:py-32 lg:px-8'>
        <div className='w-full max-w-md rounded-md bg-white p-8 shadow-md'>
          <h2 className='text-3xl font-bold tracking-tight sm:text-4xl '>
            Apply To Compete
          </h2>
          <h4 className='mb-8 text-xl tracking-tight text-gray-600'>
            สมัครแข่งขัน
          </h4>
          <div className='mb-4'>
            <Input
              name='teamname'
              type='text'
              label='Team Name'
              placeholder='ใส่ชื่อทีมของคุณ'
            />
          </div>
          <div className='mb-4'>
            <Input
              name='headcoach'
              type='text'
              label='Head coach'
              placeholder='โค้ช'
            />
          </div>
          <div className='mb-4'>
            <Input
              name='assiscoaches'
              type='text'
              label='Assistant Coaches'
              placeholder='ผู้ช่วยโค้ช'
            />
          </div>
          <div className='mb-4'>
            <Input
              name='member1'
              type='text'
              label='Member 1'
              placeholder='สมชิกทีมคนที่ 1'
            />
          </div>
          <div className='mb-4'>
            <Input
              name='member2'
              type='text'
              label='Member 2'
              placeholder='สมชิกทีมคนที่ 2'
            />
          </div>
          <div className='mb-4'>
            <Input
              name='member3'
              type='text'
              label='Member 3'
              placeholder='สมชิกทีมคนที่ 3'
            />
          </div>
          <div className='mb-4'>
            <Input
              name='member4'
              type='text'
              label='Member 4'
              placeholder='สมชิกทีมคนที่ 4'
            />
          </div>
          <div className='mb-4'>
            <Input
              name='member5'
              type='text'
              label='Member 5'
              placeholder='สมชิกทีมคนที่ 5'
            />
          </div>
          <Button
            radius='full'
            className='w-full bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg'
          >
            ส่งข้อมูล
          </Button>
        </div>
      </div>
    </div>
  );
}
