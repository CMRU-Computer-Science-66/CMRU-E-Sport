// Components
import Head from 'next/head'
import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
import { useRouter } from 'next/router';
import { Card } from '@nextui-org/react'

// Data
import { StaffData, Staff2Data, DevData } from '@/data/staff'

// Contents
export default function Staff() {
    return (
        <div>
            <Head>
                <title>Staff E-Sport</title>
                <meta name="description" content="Staff E-Sport" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="mx-auto max-w-7xl sm:px-6 sm:py-32 lg:px-8 text-center p-5">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Staff List</h2>
                <h4 className="text-xl text-gray-600 mt-2">รายชื่อทีมงาน</h4>

                <h2 className="text-left text-3xl font-bold tracking-tight sm:text-4xl">แกนนำ</h2>
                <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {StaffData.map((item, index) => (
                        <Link key={index} href={`/staffs/${encodeURIComponent(item.title)}`}>
                            <Card key={index} shadow="sm" isPressable={false} className="text-center p-4">
                                <div className="flex flex-col items-center">
                                    <Image src={item.img} alt={item.title} width={100} height={100} className="rounded-full" />
                                    <h4 className="text-lg font-semibold mt-4">{item.title}</h4>
                                    <h4 className="text-sm text-gray-500">{item.staffrole}</h4>
                                    <h4 className="text-sm text-gray-500">{item.faculty}</h4>
                                    <h4 className="text-sm text-sm text-gray-500">{item.major}</h4>
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>

                <h2 className="text-left text-3xl font-bold tracking-tight sm:text-4xl mt-10">Staff</h2>
                <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {Staff2Data.map((item, index) => (
                        <Link key={index} href={`/staffs/${encodeURIComponent(item.title)}`}>
                            <Card key={index} shadow="sm" isPressable={false} className="text-center p-4">
                                <div className="flex flex-col items-center">
                                    <Image src={item.img} alt={item.title} width={100} height={100} className="rounded-full" />
                                    <h4 className="text-lg font-semibold mt-4">{item.title}</h4>
                                    <h4 className="text-sm text-gray-500">{item.staffrole}</h4>
                                    <h4 className="text-sm text-gray-500">{item.faculty}</h4>
                                    <h4 className="text-sm text-sm text-gray-500">{item.major}</h4>
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>

                <h2 className="text-left text-3xl font-bold tracking-tight sm:text-4xl mt-10">Web Developer</h2>
                <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {DevData.map((item, index) => (
                        <Link key={index} href={`/staffs/${encodeURIComponent(item.title)}`}>
                            <Card key={index} shadow="sm" isPressable={false} className="text-center p-4">
                                <div className="flex flex-col items-center">
                                    <Image src={item.img} alt={item.title} width={100} height={100} className="rounded-full" />
                                    <h4 className="text-lg font-semibold mt-4">{item.title}</h4>
                                    <h4 className="text-sm text-gray-500">{item.staffrole}</h4>
                                    <h4 className="text-sm text-gray-500">{item.faculty}</h4>
                                    <h4 className="text-sm text-sm text-gray-500">{item.major}</h4>
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>

            </div>
        </div>
    )
}
