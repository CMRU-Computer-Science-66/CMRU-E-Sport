// Components
import React from 'react';
import Head from 'next/head';
import { Card } from '@nextui-org/react';

// Contents
export default function Staff() {
    return (
        <div>
            <Head>
                <title>Staff E-Sport</title>
                <meta name="description" content="Staff Cmru E-sport" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="mx-auto max-w-7xl sm:px-6 sm:py-32 lg:px-8 text-center p-5">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl ">About Us</h2>
                <h4 className="text-xl tracking-tight text-gray-600 mb-8">
                    เกี่ยวกับเรา
                </h4>
                <p className="text-left text-3xl tracking-tight text-sm 2xl:text-md xl:text-lg lg:text-xl md:text-2xl sm:text-3xl mt-3">
                    ยินดีต้อนรับทุกท่านที่เข้ามาที่ CMRU E-Sport เราคือทีมที่มีความหลงไหลในการสนับสนุนและสร้างสรรค์ สังคมที่ทุกคนมีโอกาสที่จะตื่นตาตื่นใจด้วยทักษะและประสบการณ์ในโลก E-sport
                </p>
                <Card className="p-5 mt-3">
                    <h4 className="text-left text-3xl tracking-tight text-sm 2xl:text-md xl:text-lg lg:text-xl md:text-2xl sm:text-3xl mt-1">
                        ทำไมเราถึงหลงไหลใน E-sport?
                    </h4>
                    <p className="text-left text-3xl tracking-tight text-sm 2xl:text-md xl:text-lg lg:text-xl md:text-2xl sm:text-3xl mt-3">
                        กีฬา E-sport ไม่เพียงเป็นแค่การนำเสนอความสนุกและความรื่นเริงในการเล่นเกม แต่ยังเป็นพื้นที่ที่ท้าทายที่สร้างสรรค์ความได้เปรียบ ความท้าทาย และความประทับใจ เราเห็นคุณค่าที่มีในการที่ทีมและผู้เล่นสามารถพัฒนาทักษะ ยกระดับตนเอง และสร้างชุมชนที่แข็งแกร่ง
                    </p>
                </Card>
                <Card className="p-5 mt-3">
                    <h4 className="text-left text-3xl tracking-tight text-sm 2xl:text-md xl:text-lg lg:text-xl md:text-2xl sm:text-3xl mt-1">
                        ทำไมเราต้องการแบ่งปันความท้าทายและความสนุกนี้?
                    </h4>
                    <p className="text-left text-3xl tracking-tight text-sm 2xl:text-md xl:text-lg lg:text-xl md:text-2xl sm:text-3xl mt-3">
                        ที่ชมรม CMRU E-Sport เราเชื่อว่า E-sport เป็นเครื่องมือที่ให้โอกาสในการเชื่อมโยงกับผู้คนที่มีความสนใจที่คล้ายคลึงกัน เราต้องการสร้างพื้นที่ที่สามารถให้นักเล่นทุกคนมีโอกาสที่จะตั้งความฝันของพวกคุณในโลก E-sport
                    </p>
                </Card>
                <Card className="p-5 mt-3">
                    <h4 className="text-left text-3xl tracking-tight text-sm 2xl:text-md xl:text-lg lg:text-xl md:text-2xl sm:text-3xl mt-1">
                        ทีมของเรา
                    </h4>
                    <p className="text-left text-3xl tracking-tight text-sm 2xl:text-md xl:text-lg lg:text-xl md:text-2xl sm:text-3xl mt-3">
                        ทีมของเราประกอบไปด้วยนักพัฒนา นักออกแบบ และนักกีฬา E-sport ที่มีประสบการณ์และความคิดสร้างสรรค์ เรามุ่งมั่นที่จะสร้างประสบการณ์ที่ทันสมัยและน่าจดจำให้กับทุกคนที่มีความสนใจใน E-sport
                    </p>
                </Card>
                <Card className="p-5 mt-3">
                    <h4 className="text-left text-3xl tracking-tight text-sm 2xl:text-md xl:text-lg lg:text-xl md:text-2xl sm:text-3xl mt-1">
                        เข้าร่วมเรา!
                    </h4>
                    <p className="text-left text-3xl tracking-tight text-sm 2xl:text-md xl:text-lg lg:text-xl md:text-2xl sm:text-3xl mt-3">
                        ไม่ว่าคุณจะเป็นนักกีฬา, นักพัฒนา, หรือแค่คนที่รักในการติดตามแข่งขัน เรายินดีต้อนรับคุณมาร่วมเป็นส่วนหนึ่งของ CMRU E-Sport มาร่วมเรียนรู้ สร้างสรรค์ และประสบการณ์ความสนุกของ E-sport กับเราทุกวัน
                    </p>
                </Card>
                <h4 className="text-left text-3xl tracking-tight text-sm 2xl:text-md xl:text-lg lg:text-xl md:text-2xl sm:text-3xl mt-1">
                    เข้าร่วมเราและมีส่วนร่วมในการสร้างประวัติศาสตร์ E-sport ไปพร้อมกัน!
                </h4>
            </div>
        </div>
    );
}
