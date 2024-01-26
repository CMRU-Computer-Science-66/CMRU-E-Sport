// Components
import React from 'react'
import Head from 'next/head'
import { Table, TableHeader, TableBody, TableRow, TableCell, TableColumn } from '@nextui-org/react'

// Data
import { ScoreListData } from '@/data/score';

// Contents
export default function Scoreboard() {
    const sortedTeams = ScoreListData[0].teams.sort((a, b) => b.totalPoints - a.totalPoints);

    const columns = [
        {
            key: "name",
            label: "Team",
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
                <meta name="description" content="Cmru E-Sport Scoreboard" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="mx-auto max-w-7xl sm:px-6 sm:py-32 lg:px-8 text-center p-5">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Score Board</h2>
                <h4 className="text-xl text-gray-600 mt-2">ตารางคะแนน</h4>
                <div className='text-left mt-10'>
                    <Table aria-label="Example table with dynamic content">
                        <TableHeader columns={columns}>
                            {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                        </TableHeader>
                        <TableBody items={ScoreListData[0].teams}>
                            {(item) => (
                                <TableRow key={item.name}>
                                    {columns.map((column) => (
                                        <TableCell key={column.key}>{item[column.key]}</TableCell>
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
