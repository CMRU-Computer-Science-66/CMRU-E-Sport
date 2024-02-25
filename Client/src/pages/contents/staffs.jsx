// Components
import Head from "next/head";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Card } from "@nextui-org/react";

// Data
import { StaffData, Staff2Data, DevData } from "@/data/staff";

// Contents
export default function Staff() {
	return (
		<div>
			<Head>
				<title>Staff E-Sport</title>
				<meta name="description" content="Staff E-Sport" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/logo.ico" />
			</Head>
			<div className="mx-auto max-w-7xl p-5 text-center sm:px-6 sm:py-32 lg:px-8">
				<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
					Staff List
				</h2>
				<h4 className="mt-2 text-xl text-gray-600">รายชื่อทีมงาน</h4>

				<h2 className="mt-5 text-center text-xl font-bold tracking-tight sm:text-4xl">
					อาจารย์ที่ปรึกษาชมรม
				</h2>
				<div className="mx-auto mt-8 grid gap-6 md:grid-cols-1">
					<div
						key={0}
						shadow="sm"
						isPressable={false}
						className="p-4 text-center"
					>
						<div className="flex flex-col items-center">
							<Image
								src={StaffData[0].img}
								alt={StaffData[0].title}
								width={250}
								height={100}
							/>
							<h4 className="mt-4 text-lg font-semibold">
								{StaffData[0].title}
							</h4>
							<h4 className="text-sm text-gray-500">
								{StaffData[0].staffrole}
							</h4>
						</div>
					</div>
				</div>

				<h2 className="mt-5 text-left text-3xl font-bold tracking-tight sm:text-4xl">
					Club Leader
				</h2>
				<h4 className="text-left text-xl text-gray-600">กรรมการบริหารชมรม</h4>
				<div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{StaffData.slice(1).map(
						(
							item,
							index, // เริ่มต้นที่ index 1
						) => (
							<Link
								key={index}
								href={`/staffs/${encodeURIComponent(item.title)}`}
							>
								<Card
									key={index}
									shadow="sm"
									isPressable={false}
									className="p-4 text-center hover:scale-105"
								>
									<div className="flex flex-col items-center">
										<Image
											src={item.img}
											alt={item.title}
											width={100}
											height={100}
											className="rounded-full"
										/>
										<h4 className="mt-4 text-lg font-semibold">{item.title}</h4>
										<h4 className="text-sm text-gray-500">{item.staffrole}</h4>
										<h4 className="text-sm text-gray-500">{item.faculty}</h4>
										<h4 className="text-sm text-sm text-gray-500">
											{item.major}
										</h4>
									</div>
								</Card>
							</Link>
						),
					)}
				</div>

				<h2 className="mt-10 text-left text-3xl font-bold tracking-tight sm:text-4xl">
					Staff
				</h2>
				<h4 className="text-left text-xl text-gray-600">ทีมงาน</h4>
				<div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{Staff2Data.map((item, index) => (
						<Link
							key={index}
							href={`/staffs/${encodeURIComponent(item.title)}`}
						>
							<Card
								key={index}
								shadow="sm"
								isPressable={false}
								className="p-4 text-center hover:scale-105"
							>
								<div className="flex flex-col items-center">
									<Image
										src={item.img}
										alt={item.title}
										width={100}
										height={100}
										className="rounded-full"
									/>
									<h4 className="mt-4 text-lg font-semibold">{item.title}</h4>
									<h4 className="text-sm text-gray-500">{item.staffrole}</h4>
									<h4 className="text-sm text-gray-500">{item.faculty}</h4>
									<h4 className="text-sm text-sm text-gray-500">
										{item.major}
									</h4>
								</div>
							</Card>
						</Link>
					))}
				</div>

				<h2 className="mt-10 text-left text-3xl font-bold tracking-tight sm:text-4xl">
					Web Developer
				</h2>
				<h4 className="text-left text-xl text-gray-600">ทีมนักพัฒนาเว็บไซต์</h4>
				<div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{DevData.map((item, index) => (
						<Link
							key={index}
							href={`/staffs/${encodeURIComponent(item.title)}`}
						>
							<Card
								key={index}
								shadow="sm"
								isPressable={false}
								className="p-4 text-center hover:scale-105"
							>
								<div className="flex flex-col items-center">
									<Image
										src={item.img}
										alt={item.title}
										width={100}
										height={100}
										className="rounded-full"
									/>
									<h4 className="mt-4 text-lg font-semibold">{item.title}</h4>
									<h4 className="text-sm text-gray-500">{item.staffrole}</h4>
									<h4 className="text-sm text-gray-500">{item.faculty}</h4>
									<h4 className="text-sm text-sm text-gray-500">
										{item.major}
									</h4>
								</div>
							</Card>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
