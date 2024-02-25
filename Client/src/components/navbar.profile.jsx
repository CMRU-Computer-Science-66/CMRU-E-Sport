import React, { useState, useEffect } from 'react';
import {
	Avatar,
	DropdownTrigger,
	Dropdown,
	DropdownMenu,
	DropdownItem,
	Button,
} from "@nextui-org/react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { Link } from "@nextui-org/link";
import SkeletonComponent from './skeleton';

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
				disabled={isLogin}
				color="primary"
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
							isBordered
							as="button"
							className="transition-transform"
							color="default"
							name={session.user?.name}
							size="sm"
							src={session.user?.image}
						/>
					)}
				</DropdownTrigger>
				<DropdownMenu
					aria-label="Profile Actions"
					variant="flat"
					onAction={(key) => Actions(key)}
				>
					<DropdownItem key="profile" className="h-14 gap-2" href='/contents/profile'>
						<p className="font-semibold">ลงชื่อเข้าใช้เป็น</p>
						<p className="font-semibold">
							{session.user?.email || session?.user?.name}
						</p>
					</DropdownItem>
					{session &&
						(session.user.role === 'admin' ||
							session.user.role === 'developer') ? (
						<DropdownItem>
							<Link href='/admin/dashboard'>เมนูแอดมิน</Link>
						</DropdownItem>
					) : null}
					<DropdownItem key='payment'>จ่ายเงิน</DropdownItem>
					<DropdownItem href='/contents/manageteam'>จัดการทีม</DropdownItem>
					<DropdownItem key="logout" color="danger" className="text-danger">
						ออกจากระบบ
					</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		);
	}
};
