import { Avatar, Card } from "@nextui-org/react";
import Head from "next/head";
import { useSession } from "next-auth/react";
import React from "react";

export default function Profile() {
	const { data: session, status } = useSession();

	return (
		<div>
			<Head>
				<title>Profile E-Sport</title>
				<meta
					content="See your profile and edit yoru cmru e-sport club community"
					name="description"
				/>
				<meta content="width=device-width, initial-scale=1" name="viewport" />
				<link href="/logo.ico" rel="icon" />
			</Head>
			<div className="mx-auto max-w-7xl p-5 text-left sm:px-6 lg:px-8">
				<h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
					Profile
				</h2>
				<h4 className="mb-8 text-center text-xl tracking-tight text-gray-600">
					ข้อมูลส่วนตัว
				</h4>
				{session ? (
					<div>
						<Card className="p-4 text-center mt-8">
							<div className="mt-5 grid grid-cols-1 gap-4 p-5 sm:grid-cols-1 md:grid-cols-2">
								<div>
									<Avatar
										as="button"
										className="w-50 h-50 text-large transition-transform"
										isBordered
										name={session.user.name}
										src={session.user.image}
									/>
								</div>
								<div className="mt-3 md:text-right">
									<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
										Welcome Back
									</h2>
									<h4 className="mb-8 text-xl tracking-tight text-gray-600">
										{session.user.name}
									</h4>
								</div>
							</div>
							<h2 className="text-left text-2xl font-bold tracking-tight sm:text-1xl">
								อีเมล
							</h2>
							<h4 className="text-left mb-8 text-xl tracking-tight text-gray-600">
								{session.user.email}
							</h4>
							<h2 className="text-left text-2xl font-bold tracking-tight sm:text-1xl">
								Bio
							</h2>
							<h4 className="text-left mb-8 text-xl tracking-tight text-gray-600">
								Bio
							</h4>
							<h2 className="text-left text-2xl font-bold tracking-tight sm:text-1xl">
								คณะ
							</h2>
							<h4 className="text-left mb-8 text-xl tracking-tight text-gray-600">
								คณะ
							</h4>
							<h2 className="text-left text-2xl font-bold tracking-tight sm:text-1xl">
								สาขา
							</h2>
							<h4 className="text-left mb-8 text-xl tracking-tight text-gray-600">
								สาขา
							</h4>
							<h2 className="text-left text-2xl font-bold tracking-tight sm:text-1xl">
								ทีมของฉัน
							</h2>
							<h4 className="text-left mb-8 text-xl tracking-tight text-gray-600">
								-
							</h4>
						</Card>
					</div>
				) : (
					<h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
						No Data
					</h2>
				)}
			</div>
		</div>
	);
}
