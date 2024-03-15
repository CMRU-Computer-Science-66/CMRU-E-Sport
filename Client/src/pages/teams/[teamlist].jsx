// Components
// Data
import { TeamData } from "@/data/team";
import { Card, CardBody } from "@nextui-org/react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

export default function TeamPage() {
	const router = useRouter();
	const { teamlist } = router.query;
	const team = TeamData.find((item) => item.title === teamlist);

	return (
		<div>
			<Head>
				<title>{team ? `${team.title} - CMRU E-Sport` : "CMRU E-Sport"}</title>
				<meta content="Generated by create next app" name="description" />
				<meta content="width=device-width, initial-scale=1" name="viewport" />
				<link href="/logo.ico" rel="icon" />
			</Head>
			<div className="mx-auto max-w-7xl p-5 text-center sm:px-6 lg:px-8">
				{team ? (
					<div>
						<h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
							{team.title}
						</h1>
						<div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
							<div>
								<Image
									alt={team.title}
									className="rounded-lg"
									height={200}
									src={team.teamImage}
									width={200}
								/>
							</div>
							<div className="text-left">
								<h2 className="mt-2 text-2xl font-bold">Team Details</h2>
								<p className="mt-3">{team.contents}</p>
								<p className="mt-3">{team.under}</p>
								<div className="mt-8">
									<h3 className="text-xl font-bold">Coaching Staff</h3>
									<p className="mt-2">
										Head Coach: {team.coachingStaff.headCoach || "N/A"}
										<br />
										Assistant Coaches:{" "}
										{team.coachingStaff.assistantCoaches
											? team.coachingStaff.assistantCoaches.join(", ")
											: "N/A"}
									</p>
								</div>
							</div>
						</div>

						<h2 className="mt-8 text-left text-2xl font-bold">Player</h2>
						<div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
							{team.members.map((member, index) => (
								<Card
									className="group relative items-center justify-center overflow-hidden p-5 shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
									key={index}
								>
									<div className="aspect-w-3 aspect-h-2">
										<Image
											alt={`${member.name}'s Photo`}
											className="object-cover"
											height={250}
											src={member.playerimg}
											width={200}
										/>
									</div>
									<CardBody>
										<div className="text-center">
											<h3 className="mb-2 text-lg font-bold">{member.name}</h3>
											<p className="text-gray-600">
												Nationality: {member.nationality}
											</p>
											<p className="text-gray-600">
												Real Name: {member.realName}
											</p>
										</div>
									</CardBody>
								</Card>
							))}
						</div>
					</div>
				) : (
					<h4 className="mt-1 text-3xl sm:text-2xl">Team not found</h4>
				)}
			</div>
		</div>
	);
}
