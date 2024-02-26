import Head from "next/head";
import React from "react";
// import UsageComp from "@/components/admin/usage";

export default function Recruiting() {
	return (
		<div className="flex h-screen">
			<Head>
				<title>Recruiting E-Sport</title>
				<meta
					content="Recruiting CMRU E-Sport club community"
					name="description"
				/>
				<meta content="width=device-width, initial-scale=1" name="viewport" />
				<link href="/logo.ico" rel="icon" />
			</Head>
			<main className="flex-1 p-5">
				<div className="mx-auto max-w-7xl p-5 text-center sm:px-6 sm:py-32 lg:px-8">
					<h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
						CMRU E-Sport Recruiting
					</h1>
					<p className="mx-auto mt-3 max-w-3xl text-xl text-gray-500 sm:mt-4">
						Join our E-Sport club community! We are currently recruiting new
						members.
					</p>
					{/* <UsageComp /> */}
				</div>
			</main>
		</div>
	);
}
