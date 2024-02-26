import { ScoreListData } from "@/data/score";
import {
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
} from "@nextui-org/react";
import Head from "next/head";
import Image from "next/image";
import React from "react";

export default function Scoreboard() {
	const sortedTeams = ScoreListData[0].teams.sort(
		(a, b) => b.totalPoints - a.totalPoints,
	);

	const columns = [
		{
			key: "team",
			label: "Team",
			render: (team) => (
				<div className="flex items-center">
					<Image
						alt={team.name}
						className="mr-2 size-8 rounded-full"
						src={team.teamImage}
					/>

					<span>{team.name}</span>
				</div>
			),
		},
		{
			key: "matchesPlayed",
			label: "Matches Played",
		},
		{
			key: "wins",
			label: "Wins",
		},
		{
			key: "losses",
			label: "Losses",
		},
		{
			key: "draws",
			label: "Draws",
		},
		{
			key: "totalPoints",
			label: "Total Points",
		},
	];

	return (
		<div>
			<Head>
				<title>ScoreBoard E-Sport</title>
				<meta content="Cmru E-Sport Scoreboard" name="description" />
				<meta content="width=device-width, initial-scale=1" name="viewport" />
				<link href="/logo.ico" rel="icon" />
			</Head>
			<div className="mx-auto max-w-7xl p-5 text-center md:py-10 lg:px-8">
				<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
					ตารางคะแนน
				</h2>
				<div className="mt-10 text-left">
					<Table aria-label="Example table with dynamic content">
						<TableHeader columns={columns}>
							{(column) => (
								<TableColumn className="border-gray-300" key={column.key}>
									{column.label}
								</TableColumn>
							)}
						</TableHeader>
						<TableBody items={sortedTeams}>
							{(team) => (
								<TableRow className="border-gray-300" key={team.name}>
									{columns.map((column) => (
										<TableCell className="border-gray-300" key={column.key}>
											{column.render ? column.render(team) : team[column.key]}
										</TableCell>
									))}
								</TableRow>
							)}
						</TableBody>
					</Table>
				</div>
			</div>
		</div>
	);
}
