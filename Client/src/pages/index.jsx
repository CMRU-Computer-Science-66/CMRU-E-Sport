// Test
import ROV from "@/assets/game/rov.jpg";
import { subtitle, title } from "@/components/primitives";
import { GameListData } from "@/data/game";
import { Link } from "@nextui-org/link";
import { Card, CardBody } from "@nextui-org/react";
import Head from "next/head";
import Image from "next/image";
import React from "react";

export default function Home() {
	return (
		<div>
			<Head>
				<title>CMRU E-Sport</title>
				<meta
					content="this web site for cmru e-sport club community"
					name="description"
				/>
				<meta content="width=device-width, initial-scale=1" name="viewport" />
				<link href="/logo.ico" rel="icon" />
			</Head>
			<section className="flex select-none flex-col items-center justify-center gap-4 py-8">
				<div className="inline-block max-w-lg justify-center text-center">
					<h1 className={title({ class: "inline" })}>ชมรม&nbsp;</h1>
					<h1 className={title({ color: "yellow" })}>E Sport &nbsp;</h1>
					<br />
					<h1 className={title()}>มหาวิทยาลัยราชภัฏเชียงใหม่</h1>
					<h2 className={subtitle({ class: "mt-4" })}>
						เกม ไม่ได้เป็นเพียงแค่เกม
						<br />
						แต่คือกีฬา ที่สามารถพัฒนาศักยภาพ ของเราได้
					</h2>
				</div>

				<div className="mt-9 text-left">
					<h2 className="mt-2 text-xl">
						สวัสดีทุกคนในชุมชน CMRU เหนื่อยจากการต่อสู้ในโลกธรรมดาแล้วหรือยัง?
						ไม่เป็นไร! เพราะเราขอเชิญทุกท่านมาร่วมเป็นส่วนหนึ่งของครอบครัว{" "}
						<br />
						CMRU eSport กัน! สิ่งที่คุณจะได้
					</h2>
					<ul className="mt-3 list-disc pl-5 text-xl">
						<li>โอกาสเล่นเกมกับนักกีฬา eSport ที่มีฝีมือ</li>
						<li>แบ่งปันประสบการณ์และเรื่องราวที่น่าสนใจในโลก eSport</li>
						<li>ร่วมสร้างความสนุกและความท้าทายในแข่งขัน eSport ต่างๆ</li>
					</ul>
					<h2 className="mt-4 text-xl">
						มาร่วมสร้างสรรค์ประสบการณ์ที่น่าจดจำและเพิ่มพูนความสามารถในการแข่งขันของคุณ
					</h2>
					<h2 className="text-xl">
						เรารอคอยทุกคนมาเป็นส่วนหนึ่งของชุมชน CMRU eSport
						และเตรียมพบกันในวันงาน!! <Link>#CMRUESport</Link>{" "}
						<Link>#GamingCommunity</Link> <Link>#สนุกสนาน</Link>{" "}
						<Link>ร่วมสนุกกับเกม</Link>
					</h2>
				</div>

				<h2 className="mt-10 text-3xl font-bold tracking-tight sm:text-4xl">
					Competitive Atmosphere
				</h2>
				<h4 className="text-xl">บรรยากาศการแข่งขัน</h4>
				<div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2">
					<div className="mt-5 text-left">
						<p className="mt-2 text-xl">
							ภาพบรรยากาศกิจกรรมแข่งขันเกม Rov ที่สุดของเวียงพิงค์เกม ครั้งที่
							33 ที่จัดขึ้นที่ตึก 90 มหาวิทยาลัยราชภัฏเชียงใหม่
							การแข่งขันนี้มีความสนุกสนานและความเป็นมืออาชีพในการแข่งขัน eSport
							จากนักกีฬาจากมหาวิทยาลัยราชภัฏกลุ่มภาคเหนือ
							ที่มาเข้าร่วมการแข่งขันกีฬา eSport
							เพื่อแสดงฝีมือและเทคนิคในการเล่นเกมของพวกเขา
						</p>
						<p className="mt-2 text-xl">
							ค้นพบรอบการแข่งขันที่น่าตื่นเต้นและสุดมันส์
							ทั้งการประลองทักษะทางเทคนิคและการต่อสู้ที่คับคั่ง
							ร่วมสัมผัสบรรยากาศที่เต็มไปด้วยความสนุกและความท้าทาย
							ทั้งจากทีมทีมงานและผู้ชมทุกคน
						</p>
					</div>
					<div>
						<iframe
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
							allowFullScreen
							className="rounded-3xl"
							height="315"
							src="https://www.youtube.com/embed/12VmXrFQTPk?autoplay=1&mute=1"
							title="YouTube video player"
							width="100%"
						></iframe>
					</div>
				</div>

				<h2 className="mt-10 text-3xl font-bold tracking-tight sm:text-4xl">
					Competition game
				</h2>
				<h4 className="text-xl">เกมการแข่งขัน</h4>
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-3">
					{GameListData.map((item, index) => (
						<Link href={`/games/${encodeURIComponent(item.title)}`} key={index}>
							<Card className="group bg-transparent shadow-sm transition-transform duration-300 ease-in-out hover:scale-105">
								<CardBody className="justify-between overflow-visible p-5">
									<Image
										alt={item.title}
										className="h-[260px] w-full rounded-lg object-cover"
										height="auto"
										radius="lg"
										src={item.img}
										width="100%"
									/>
									<h1 className="text-center text-medium font-semibold">
										{item.title}
									</h1>
									<p>{item.contents}</p>
								</CardBody>
							</Card>
						</Link>
					))}
				</div>

				<div className="mt-10 text-left">
					<h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
						Team Building Agreement
					</h2>
					<h4 className="mt-2 text-center text-xl">ข้อตกลงการสร้างทีม</h4>
					<ul className="mt-2 list-disc pl-5 text-xl">
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
						{/* <li>
							ทาง CMRU E-Sprot ขอเก็บเงินสมาชิกคนละ 20 บาท ต่ออาทิตย์
							เพื่อนำเงินจำนวนนี้ไปเป็นเงินรางวัล
						</li> */}
					</ul>
					<h2 className="mt-2 text-xl">
						สามารถ <Link href="/contents/regteam">สมัครแข่งขัน</Link> ตรงนี้ !!!
					</h2>
				</div>
			</section>
		</div>
	);
}
