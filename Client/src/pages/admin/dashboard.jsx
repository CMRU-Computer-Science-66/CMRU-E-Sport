import Head from "next/head";
import React from "react";

export default function DashboardPage() {
	return (
		<div className="flex h-screen">
			<Head>
				<title>ScoreBoard E-Sport</title>
				<meta
					content="Overview of admin form CMRU E-Sport club"
					name="description"
				/>
				<meta content="width=device-width, initial-scale=1" name="viewport" />
				<link href="/logo.ico" rel="icon" />
			</Head>
			<main className="flex-1 p-5">
				<div className="mx-auto max-w-7xl p-5 text-center sm:px-6 lg:px-8">
					<h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
						Welcome to the Admin Dashboard
					</h1>
					<p className="mx-auto mt-3 max-w-3xl text-xl text-gray-500 sm:mt-4">
						Overview and manage the activities of CMRU E-Sport Club.
					</p>
					{/* Add more content as needed */}
				</div>
			</main>
		</div>
	);
}
