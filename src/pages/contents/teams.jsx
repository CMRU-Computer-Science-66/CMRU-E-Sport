// Components
import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card } from '@nextui-org/react';

// Data
import { TeamData } from '@/data/team';

// Contents
export default function Team() {
  return (
    <div>
      <Head>
        <title>Team E-Sport</title>
        <meta name='description' content='Cmru E-sport Teams Proleague' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/logo.ico' />
      </Head>
      <div className='mx-auto max-w-7xl p-5 text-center sm:px-6 sm:py-32 lg:px-8'>
        <h2 className='mb-2 text-3xl font-bold tracking-tight sm:text-4xl'>
          Team List
        </h2>
        <h4 className='mb-8 text-xl tracking-tight text-gray-600'>
          รายชื่อทีมที่เข้าร่วมการแข่งขัน
        </h4>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {TeamData.map((item, index) => (
            <Link key={index} href={`/teams/${encodeURIComponent(item.title)}`}>
              <Card className='group relative block flex transform items-center justify-center overflow-hidden bg-transparent p-5 shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl'>
                <div className='aspect-w-3 aspect-h-2'>
                  <Image
                    alt={item.title}
                    src={item.img}
                    width={200}
                    height={250}
                    className='object-cover'
                  />
                </div>
                <div className='p-4'>
                  <h3 className='mb-2 text-lg font-bold'>{item.title}</h3>
                  <p className='text-gray-600'>{item.contents}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
