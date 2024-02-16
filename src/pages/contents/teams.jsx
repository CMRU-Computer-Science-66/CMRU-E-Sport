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
                <meta name="description" content="Cmru E-sport Teams Proleague" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo.ico" />
            </Head>
            <div className="mx-auto max-w-7xl sm:px-6 sm:py-32 lg:px-8 text-center p-5">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">Team List</h2>
                <h4 className="text-xl tracking-tight text-gray-600 mb-8">รายชื่อทีมที่เข้าร่วมการแข่งขัน</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {TeamData.map((item, index) => (
                        <Link key={index} href={`/teams/${encodeURIComponent(item.title)}`}>
                            <Card className="group block relative overflow-hidden shadow-md hover:shadow-xl transition-transform transform duration-300 ease-in-out hover:scale-105 flex justify-center items-center p-5 bg-transparent">
                                <div className="aspect-w-3 aspect-h-2">
                                    <Image
                                        alt={item.title}
                                        src={item.img}
                                        width={200}
                                        height={250}
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                                    <p className="text-gray-600">{item.contents}</p>
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
