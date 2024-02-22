import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import React from "react";

export default function Home() {
	return (
		<section className="flex select-none flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg justify-center text-center">
				<h1 className={title({ class: "inline" })}>ชมรม&nbsp;</h1>
				<h1 className={title({ color: "yellow" })}>E Sport &nbsp;</h1>
				<br />
				<h1 className={title()}>มหาวิทยาลัยราชภัฏเชียงใหม่</h1>
				<h2 className={subtitle({ class: "mt-4" })}>
					ความสำเร็จในเกมไม่ได้มาจากการเล่นเกมเพียงอย่างเดียว
					<br />
					แต่ยังมาจากการเรียนรู้และพัฒนาตัวเอง
				</h2>
			</div>

			{/* <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} width={undefined} height={undefined} />
          สมัคร
        </Link>
      </div> */}
		</section>
	);
}
