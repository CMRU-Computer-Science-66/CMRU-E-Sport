// Components
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardBody } from '@nextui-org/react';
import { useRouter } from 'next/router';

// Data
import { GameListData } from '@/data/game';

// Contents
export default function Home() {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>CMRU E-Sport</title>
        <meta
          name='description'
          content='this web site for cmru e-sport club community'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/logo.ico' />
      </Head>
      <div className='mx-auto max-w-7xl p-5 text-center sm:px-6 sm:py-32 lg:px-8'>
        <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
          {' '}
          CMRU E-Sport
        </h2>
        <h4 className='mt-2 text-xl text-gray-600'>
          ชมรม E-Spout มหาวิทยาลัยราชภัฏเชียงใหม่
        </h4>
        <div className='mt-5 text-left'>
          <h2 className='mt-2 text-xl text-gray-600'>
            สวัสดีทุกคนในชุมชน CMRU เหนื่อยจากการต่อสู้ในโลกธรรมดาแล้วหรือยัง?
            ไม่เป็นไร! เพราะเราขอเชิญทุกท่านมาร่วมเป็นส่วนหนึ่งของครอบครัว CMRU
            E-Sport กัน! สิ่งที่คุณจะได้
          </h2>
          <ul className='list-disc pl-5 text-xl text-gray-600'>
            <li>โอกาสเล่นเกมกับนักกีฬา E-Sport ที่มีฝีมือ</li>
            <li>แบ่งปันประสบการณ์และเรื่องราวที่น่าสนใจในโลก E-Sport</li>
            <li>ร่วมสร้างความสนุกและความท้าทายในแข่งขัน E-Sport ต่าง ๆ</li>
          </ul>
          <h2 className='mt-2 text-xl text-gray-600'>
            มาร่วมสร้างสรรค์ประสบการณ์ที่น่าจดจำและเพิ่มพูนความสามารถในการแข่งขันของคุณ
          </h2>
          <h2 className='mt-2 text-xl text-gray-600'>
            เรารอคอยทุกคนมาเป็นส่วนหนึ่งของชุมชน CMRU E-Sport
            และเตรียมพบกันในวันงาน! #CMRUESport #GamingCommunity #สนุกสนาน
            #ร่วมสนุกกับเกม
          </h2>
        </div>

        <h2 className='mt-10 text-3xl font-bold tracking-tight sm:text-4xl'>
          Competitive Atmosphere
        </h2>
        <h4 className='text-xl text-gray-600'>บรรยากาศการแข่งขัน</h4>
        <div className='mt-5 grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2'>
          <div className='mt-5 text-left'>
            <p className='mt-2 text-xl text-gray-600'>
              ภาพบรรยากาศกิจกรรมแข่งขันเกม Rov ที่สุดของเวียงพิงค์เกม ครั้งที่
              33 ที่จัดขึ้นที่ตึก 90 มหาวิทยาลัยราชภัฏเชียงใหม่
              การแข่งขันนี้มีความสนุกสนานและความเป็นมืออาชีพในการแข่งขัน E-Sport
              จากนักกีฬาจากมหาวิทยาลัยราชภัฏกลุ่มภาคเหนือ
              ที่มาเข้าร่วมการแข่งขันกีฬา E-Sport
              เพื่อแสดงฝีมือและเทคนิคในการเล่นเกมของพวกเขา
            </p>
            <p className='mt-2 text-xl text-gray-600'>
              ค้นพบรอบการแข่งขันที่น่าตื่นเต้นและสุดมันส์
              ทั้งการประลองทักษะทางเทคนิคและการต่อสู้ที่คับคั่ง
              ร่วมสัมผัสบรรยากาศที่เต็มไปด้วยความสนุกและความท้าทาย
              ทั้งจากทีมทีมงานและผู้ชมทุกคน
            </p>
          </div>
          <div>
            <iframe
              width='100%'
              height='315'
              src='https://www.youtube.com/embed/12VmXrFQTPk'
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <h2 className='mt-10 text-3xl font-bold tracking-tight sm:text-4xl'>
          Competition game
        </h2>
        <h4 className='text-xl text-gray-600'>เกมการแข่งขัน</h4>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-3'>
          {GameListData.map((item, index) => (
            <Link key={index} href={`/games/${encodeURIComponent(item.title)}`}>
              <Card className='group transform bg-transparent shadow-sm transition-transform duration-300 ease-in-out hover:scale-105'>
                <CardBody className='justify-between overflow-visible p-5'>
                  <Image
                    shadow='sm'
                    radius='lg'
                    width='100%'
                    height='auto'
                    alt={item.title}
                    className='h-[260px] w-full object-cover'
                    src={item.img}
                  />
                  <h1 className='2xl:text-md mt-1 text-left text-sm font-bold tracking-tight sm:text-3xl md:text-2xl lg:text-xl xl:text-lg'>
                    {item.title}
                  </h1>
                  <p>{item.contents}</p>
                </CardBody>
              </Card>
            </Link>
          ))}
        </div>

        <div className='mt-10 text-left'>
          <h2 className='text-center text-3xl font-bold tracking-tight sm:text-4xl'>
            Team Building Agreement
          </h2>
          <h4 className='mt-2 text-center text-xl text-gray-600'>
            ข้อตกลงการสร้างทีม
          </h4>
          <ul className='mt-2 list-disc pl-5 text-xl text-gray-600'>
            <li>
              การสร้างทีมนั้นจะสามารถสร้างได้ก่อนเปิดเปิดฤดูการและหลังจบฤดูการเท่านั้น
            </li>
            <li>โค้ชและผู้ช่วยโค้ชมีหรือไม่มีก็ได้</li>
            <li>สามารถเพิ่มนักแข่งได้ 5 คน ตัวสำรอง 3 คน</li>
            <li>
              หากเจอการใช้โปรแกรมโกงไม่ว่ากรณีใดๆ
              ปรับแพ้ทันทีและแบนการแข่งขันทันที
            </li>
            <li>ห้ามการ Toxic ทุกรูปแบบพบเจอแบบการแข่ง 2 Match</li>
            <li>
              ทาง CMRU E-Sprot ขอเก็บเงินสมาชิกคนละ 20 บาท ต่ออาทิตย์
              เพื่อนำเงินจำนวนนี้ไปเป็นเงินรางวัล
            </li>
          </ul>
          <h2 className='mt-2 text-xl text-gray-600'>
            สามารถ <Link href='/contents/regteam'>สมัครแข่งขัน</Link> ตรงนี้ !!!
          </h2>
        </div>
      </div>
    </div>
  );
}
