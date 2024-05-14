import { DevData, Staff2Data, StaffData, lecturerData } from "@/data/staff";
import { Card, CardBody } from "@nextui-org/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Staff() {
	return (
		<div>
			<Head>
				<title>Staff E-Sport</title>
				<meta content="Staff Cmru E-sport" name="description" />
				<meta content="width=device-width, initial-scale=1" name="viewport" />
				<link href="/logo.ico" rel="icon" />
			</Head>
			<div className="mx-auto max-w-7xl p-5 text-center sm:px-6 lg:px-8">
				<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
					เกี่ยวกับเรา
				</h2>
				<p className="2xl:text-md mt-3 text-left tracking-tight sm:text-3xl md:text-2xl lg:text-xl xl:text-lg">
					ยินดีต้อนรับทุกท่านที่เข้ามาที่ CMRU E-Sport
					เราคือทีมที่มีความหลงไหลในการสนับสนุนและสร้างสรรค์
					สังคมที่ทุกคนมีโอกาสที่จะตื่นตาตื่นใจด้วยทักษะและประสบการณ์ในโลก
					E-sport
				</p>
				<Card className="mt-3 p-5">
					<h4 className="2xl:text-md mt-1 text-left tracking-tight sm:text-3xl md:text-2xl lg:text-xl xl:text-lg">
						ทำไมเราถึงหลงไหลใน E-sport?
					</h4>
					<p className="2xl:text-md mt-3 text-left tracking-tight sm:text-3xl md:text-2xl lg:text-xl xl:text-lg">
						กีฬา E-sport
						ไม่เพียงเป็นแค่การนำเสนอความสนุกและความรื่นเริงในการเล่นเกม
						แต่ยังเป็นพื้นที่ที่ท้าทายที่สร้างสรรค์ความได้เปรียบ ความท้าทาย
						และความประทับใจ
						เราเห็นคุณค่าที่มีในการที่ทีมและผู้เล่นสามารถพัฒนาทักษะ ยกระดับตนเอง
						และสร้างชุมชนที่แข็งแกร่ง
					</p>
				</Card>
				<Card className="mt-3 p-5">
					<h4 className="2xl:text-md mt-1 text-left tracking-tight sm:text-3xl md:text-2xl lg:text-xl xl:text-lg">
						ทำไมเราต้องการแบ่งปันความท้าทายและความสนุกนี้?
					</h4>
					<p className="2xl:text-md mt-3 text-left tracking-tight sm:text-3xl md:text-2xl lg:text-xl xl:text-lg">
						ที่ชมรม CMRU E-Sport เราเชื่อว่า E-sport
						เป็นเครื่องมือที่ให้โอกาสในการเชื่อมโยงกับผู้คนที่มีความสนใจที่คล้ายคลึงกัน
						เราต้องการสร้างพื้นที่ที่สามารถให้นักเล่นทุกคนมีโอกาสที่จะตั้งความฝันของพวกคุณในโลก
						E-sport
					</p>
				</Card>
				<Card className="mt-3 p-5">
					<h4 className="2xl:text-md mt-1 text-left tracking-tight sm:text-3xl md:text-2xl lg:text-xl xl:text-lg">
						ทีมของเรา
					</h4>
					<p className="2xl:text-md mt-3 text-left tracking-tight sm:text-3xl md:text-2xl lg:text-xl xl:text-lg">
						ทีมของเราประกอบไปด้วยนักพัฒนา นักออกแบบ และนักกีฬา E-sport
						ที่มีประสบการณ์และความคิดสร้างสรรค์
						เรามุ่งมั่นที่จะสร้างประสบการณ์ที่ทันสมัยและน่าจดจำให้กับทุกคนที่มีความสนใจใน
						E-sport
					</p>
				</Card>
				<Card className="mt-3 p-5">
					<h4 className="2xl:text-md mt-1 text-left tracking-tight sm:text-3xl md:text-2xl lg:text-xl xl:text-lg">
						เข้าร่วมเรา!
					</h4>
					<p className="2xl:text-md mt-3 text-left tracking-tight sm:text-3xl md:text-2xl lg:text-xl xl:text-lg">
						ไม่ว่าคุณจะเป็นนักกีฬา, นักพัฒนา, หรือแค่คนที่รักในการติดตามแข่งขัน
						เรายินดีต้อนรับคุณมาร่วมเป็นส่วนหนึ่งของ CMRU E-Sport มาร่วมเรียนรู้
						สร้างสรรค์ และประสบการณ์ความสนุกของ E-sport กับเราทุกวัน
					</p>
				</Card>

				<div className="md:py-10lg:px-8 mx-auto mt-10 max-w-7xl p-5 text-center">
					<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
						รายชื่อทีมงาน
					</h2>

					<h2 className="mt-5 text-left text-xl font-bold tracking-tight sm:text-4xl">
						อาจารย์ที่ปรึกษาชมรม
					</h2>

					<div className="mx-auto mt-8 grid gap-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
						{lecturerData.map((item, index) => (
							<Card className="p-4 text-center" key={index}>
								<div className="flex flex-col items-center">
									<Image
										alt={item.title}
										className="rounded-full"
										height={100}
										src={item.img}
										width={100}
									/>
								</div>
								<CardBody className="gap-3">
									<div className="text-center">
										<h4 className="mt-4 text-lg font-semibold">{item.title}</h4>
										<h4 className="text-sm text-gray-500">{item.staffrole}</h4>
										<h4 className="text-sm text-gray-500">{item.faculty}</h4>
										<h4 className="text-sm text-gray-500">{item.major}</h4>
									</div>
								</CardBody>
							</Card>
						))}
					</div>

					<h2 className="mt-5 text-left text-3xl font-bold tracking-tight sm:text-4xl">
						กรรมการบริหารชมรม
					</h2>
					<div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
						{StaffData.map((item, index) => (
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
									</div>
									<CardBody className="gap-3">
										<div className="text-center">
											<h4 className="mt-4 text-lg font-semibold">
												{item.title}
											</h4>
											<h4 className="text-sm text-gray-500">
												{item.staffrole}
											</h4>
											<h4 className="text-sm text-gray-500">{item.faculty}</h4>
											<h4 className="text-sm text-gray-500">{item.major}</h4>
										</div>
									</CardBody>
								</Card>
							</Link>
						))}
					</div>

					<h2 className="mt-10 text-left text-3xl font-bold tracking-tight sm:text-4xl">
						ทีมนักพัฒนาเว็บไซต์
					</h2>

					<div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
						{DevData.map((item, index) => (
							<Link
								href={`/developers/${encodeURIComponent(item.title)}`}
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
				<h4 className="2xl:text-md mt-1 text-left tracking-tight sm:text-3xl md:text-2xl lg:text-xl xl:text-lg">
					เข้าร่วมเราและมีส่วนร่วมในการสร้างประวัติศาสตร์ E-sport ไปพร้อมกัน!
				</h4>
			</div>
		</div>
	);
}
