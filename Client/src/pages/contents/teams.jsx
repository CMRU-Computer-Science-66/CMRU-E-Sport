import { TeamData } from "@/data/team";
import { Card } from "@nextui-org/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Team() {
	return (
		<div>
			<Head>
				<title>Team E-Sport</title>
				<meta content="Cmru E-sport Teams Proleague" name="description" />
				<meta content="width=device-width, initial-scale=1" name="viewport" />
				<link href="/logo.ico" rel="icon" />
			</Head>
			<div className="mx-auto max-w-7xl p-5 text-center md:py-10 lg:px-8">
				<h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">
					รายชื่อทีมที่เข้าร่วมการแข่งขัน
				</h2>

				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					{TeamData.map((item, index) => (
						<Link href={`/teams/${encodeURIComponent(item.title)}`} key={index}>
							<Card className="group relative items-center justify-center overflow-hidden bg-transparent p-5 shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
								<div className="aspect-w-3 aspect-h-2">
									<Image
										alt={item.title}
										className="object-cover"
										height={250}
										src={item.teamImage}
										width={200}
									/>
								</div>
								<div className="p-4">
									<h3 className="mb-2 text-lg font-bold">{item.title}</h3>
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
