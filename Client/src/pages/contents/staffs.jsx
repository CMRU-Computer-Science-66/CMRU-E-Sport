import { DevData, Staff2Data, StaffData } from "@/data/staff";
import { Card } from "@nextui-org/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function Staff() {
	return (
		<div>
			<Head>
				<title>Staff E-Sport</title>
				<meta content="Staff E-Sport" name="description" />
				<meta content="width=device-width, initial-scale=1" name="viewport" />
				<link href="/logo.ico" rel="icon" />
			</Head>
			<div className="mx-auto max-w-7xl p-5 text-center sm:px-6 lg:px-8">
				<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
					รายชื่อทีมงาน
				</h2>

				<h2 className="mt-5 text-center text-xl font-bold tracking-tight sm:text-4xl">
					อาจารย์ที่ปรึกษาชมรม
				</h2>
				<div className="mx-auto mt-8 grid gap-6 md:grid-cols-1">
					<div className="p-4 text-center" key={0}>
						<div className="flex flex-col items-center">
							<Image
								alt={StaffData[0].title}
								height={100}
								src={StaffData[0].img}
								width={250}
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
								href={`/staffs/${encodeURIComponent(item.title)}`}
								key={index}
							>
								<Card className="p-4 text-center hover:scale-105" key={index}>
									<div className="flex flex-col items-center">
										<Image
											alt={item.title}
											className="rounded-full"
											height={100}
											src={item.img}
											width={100}
										/>
										<h4 className="mt-4 text-lg font-semibold">{item.title}</h4>
										<h4 className="text-sm text-gray-500">{item.staffrole}</h4>
										<h4 className="text-sm text-gray-500">{item.faculty}</h4>
										<h4 className="text-sm text-gray-500">{item.major}</h4>
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
							href={`/staffs/${encodeURIComponent(item.title)}`}
							key={index}
						>
							<Card className="p-4 text-center hover:scale-105" key={index}>
								<div className="flex flex-col items-center">
									<Image
										alt={item.title}
										className="rounded-full"
										height={100}
										src={item.img}
										width={100}
									/>
									<h4 className="mt-4 text-lg font-semibold">{item.title}</h4>
									<h4 className="text-sm text-gray-500">{item.staffrole}</h4>
									<h4 className="text-sm text-gray-500">{item.faculty}</h4>
									<h4 className="text-sm text-gray-500">{item.major}</h4>
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
							href={`/staffs/${encodeURIComponent(item.title)}`}
							key={index}
						>
							<Card className="p-4 text-center hover:scale-105" key={index}>
								<div className="flex flex-col items-center">
									<Image
										alt={item.title}
										className="rounded-full"
										height={100}
										src={item.img}
										width={100}
									/>
									<h4 className="mt-4 text-lg font-semibold">{item.title}</h4>
									<h4 className="text-sm text-gray-500">{item.staffrole}</h4>
									<h4 className="text-sm text-gray-500">{item.faculty}</h4>
									<h4 className="text-sm text-gray-500">{item.major}</h4>
								</div>
							</Card>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
