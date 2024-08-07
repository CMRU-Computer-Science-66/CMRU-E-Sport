import Usage from "@/components/usage";
import Head from "next/head";
import React from "react";

export default function Tournaments() {
	return (
		<div>
			<Head>
				<title>Tournaments E-Sport</title>
				<meta content="Tournaments of cmru e-sport" name="description" />
				<meta content="width=device-width, initial-scale=1" name="viewport" />
				<link href="/logo.ico" rel="icon" />
			</Head>
			<div className="mx-auto max-w-7xl text-center sm:px-6 lg:px-8">
				<h2 className="tracking-tig ht py-5 text-3xl font-bold sm:text-4xl">
					รายการแข่งขัน
				</h2>
				<Usage />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<h2
					className="mt-3 p-5 text-center text-3xl font-bold tracking-tight sm:text-4xl"
					style={{ color: "red" }}
				>
					Coming soon
				</h2>
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
			</div>
		</div>
	);
}
