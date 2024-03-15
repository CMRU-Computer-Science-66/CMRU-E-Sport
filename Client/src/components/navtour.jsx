import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import React from "react";

export default function NavTorunaments() {
	const [currentPage, setCurrentPage] = React.useState("music");

	return (
		<Breadcrumbs
			classNames={{
				list: "gap-2",
			}}
			itemClasses={{
				item: [
					"px-5 py-1 border-small border-default-400 rounded-small",
					"data-[current=true]:border-foreground data-[current=true]:bg-foreground data-[current=true]:text-background transition-colors",
					"data-[disabled=true]:border-default-400 data-[disabled=true]:bg-default-100",
				],
				separator: "hidden",
			}}
			onAction={(key) => setCurrentPage(key)}
			size="md"
		>
			<BreadcrumbItem isCurrent={currentPage === "home"} key="home">
				ทั้งหมด
			</BreadcrumbItem>
			<BreadcrumbItem isCurrent={currentPage === "music"} key="music">
				กำลังจะเปิด
			</BreadcrumbItem>
			<BreadcrumbItem isCurrent={currentPage === "artist"} key="artist">
				เปิดรับสมัคร
			</BreadcrumbItem>
			<BreadcrumbItem isCurrent={currentPage === "album"} key="album">
				อยู่ระหว่างการแข่งขัน
			</BreadcrumbItem>
			<BreadcrumbItem isCurrent={currentPage === "song"} key="song">
				จบการแข่งขัน
			</BreadcrumbItem>
		</Breadcrumbs>
	);
}
