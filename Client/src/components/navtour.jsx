import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";

export default function NavTorunaments() {
    const [currentPage, setCurrentPage] = React.useState("music");

    return (
        <Breadcrumbs
            size="md"
            onAction={(key) => setCurrentPage(key)}
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
        >
            <BreadcrumbItem key="home" isCurrent={currentPage === "home"}>
                ทั้งหมด
            </BreadcrumbItem>
            <BreadcrumbItem key="music" isCurrent={currentPage === "music"}>
                กำลังจะเปิด
            </BreadcrumbItem>
            <BreadcrumbItem key="artist" isCurrent={currentPage === "artist"}>
                เปิดรับสมัคร
            </BreadcrumbItem>
            <BreadcrumbItem key="album" isCurrent={currentPage === "album"}>
                อยู่ระหว่างการแข่งขัน
            </BreadcrumbItem>
            <BreadcrumbItem key="song" isCurrent={currentPage === "song"}>
                จบการแข่งขัน
            </BreadcrumbItem>
        </Breadcrumbs>
    );
}
