// Components
import React from 'react';
import Head from 'next/head';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableColumn,
} from '@nextui-org/react';
import Image from 'next/image';
import { ScoreListData } from '@/data/score';

export default function Scoreboard() {
  const sortedTeams = ScoreListData[0].teams.sort(
    (a, b) => b.totalPoints - a.totalPoints
  );

  const columns = [
    {
      key: 'team',
      label: 'Team',
      render: (team) => (
        <div className='flex items-center'>
          <Image
            src={team.teamImage}
            alt={team.name}
            className='mr-2 h-8 w-8 rounded-full'
          />

          <span>{team.name}</span>
        </div>
      ),
    },
    {
      key: 'matchesPlayed',
      label: 'Matches Played',
    },
    {
      key: 'wins',
      label: 'Wins',
    },
    {
      key: 'losses',
      label: 'Losses',
    },
    {
      key: 'draws',
      label: 'Draws',
    },
    {
      key: 'totalPoints',
      label: 'Total Points',
    },
  ];

  return (
    <div>
      <Head>
        <title>ScoreBoard E-Sport</title>
        <meta name='description' content='Cmru E-Sport Scoreboard' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/logo.ico' />
      </Head>
      <div className='mx-auto max-w-7xl p-5 text-center sm:px-6 sm:py-32 lg:px-8'>
        <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
          Score Board
        </h2>
        <h4 className='mt-2 text-xl text-gray-600'>ตารางคะแนน</h4>
        <div className='mt-10 text-left'>
          <Table aria-label='Example table with dynamic content'>
            <TableHeader columns={columns}>
              {(column) => (
                <TableColumn key={column.key} className='border-gray-300'>
                  {column.label}
                </TableColumn>
              )}
            </TableHeader>
            <TableBody items={sortedTeams}>
              {(team) => (
                <TableRow key={team.name} className='border-gray-300'>
                  {columns.map((column) => (
                    <TableCell key={column.key} className='border-gray-300'>
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
