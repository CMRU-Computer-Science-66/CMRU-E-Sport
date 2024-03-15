import { Link } from "@nextui-org/link";
import {
	Avatar,
	Button,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
} from "@nextui-org/react";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

import SkeletonComponent from "./skeleton";

export const NavbarProfile = () => {
	const { data: session, status } = useSession();
	const [loading, setLoading] = useState(true);
	const isLogin = status === "authenticated" || status === "loading";
	const router = useRouter();
	const openURL = (url) => {
		router.push(url);
	};

	function Actions(key) {
		switch (key) {
			case "logout":
				signOut();
				break;
			default:
				break;
		}
	}

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setLoading(false);
		}, 2000);

		return () => clearTimeout(timeoutId);
	}, []);

	if (!session?.user) {
		return (
			<Button
				color="primary"
				disabled={isLogin}
				onClick={() => openURL("/account/login")}
			>
				เข้าสู่ระบบ
			</Button>
		);
	} else {
		return (
			<Dropdown placement="bottom-end">
				<DropdownTrigger>
					{loading ? (
						<SkeletonComponent />
					) : (
						<Avatar
							as="button"
							className="transition-transform"
							color="default"
							isBordered
							name={session.user?.name}
							size="sm"
							src={session.user?.image}
						/>
					)}
				</DropdownTrigger>
				<DropdownMenu
					aria-label="Profile Actions"
					onAction={(key) => Actions(key)}
					variant="flat"
				>
					<DropdownItem
						className="h-14 gap-2"
						key="profile"
					>
						<p className="font-semibold">ลงชื่อเข้าใช้เป็น</p>
						<p className="font-semibold">
							{session.user?.email || session?.user?.name}
						</p>
					</DropdownItem>
					{session &&
						(session.user.role === "admin" ||
							session.user.role === "developer") ? (
						<DropdownItem>
							<Link href="/admin/dashboard">เมนูแอดมิน</Link>
						</DropdownItem>
					) : null}
					<DropdownItem href="/contents/profile">โปรไฟล์</DropdownItem>
					<DropdownItem href="/contents/seting">ตั้งค่า</DropdownItem>
					<DropdownItem className="text-danger" color="danger" key="logout">
						ออกจากระบบ
					</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		);
	}
};
