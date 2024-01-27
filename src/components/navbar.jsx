// Components
import React, { useState, useEffect } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    DropdownMenu,
    NavbarMenuToggle,
    Dropdown,
    DropdownTrigger,
    DropdownItem,
    Button,
    Avatar,
    Link
} from "@nextui-org/react";
import { AcmeLogo } from "./acmelogo.jsx";
import { useSession, signIn, signOut } from "next-auth/react"

// Contents
export default function NavbarComp() {
    const { data: session } = useSession()
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        { label: "Tournaments", url: "/contents/tournaments" },
        { label: "TeamList", url: "/contents/teams" },
        { label: "Staff", url: "/contents/staffs" },
        { label: "AboutUs", url: "/contents/about" },
    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <Link href="/" color="foreground">
                    <NavbarBrand>
                        <AcmeLogo />
                        <p className="font-bold text-inherit">CMRU E-Sport</p>
                    </NavbarBrand>
                </Link>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem isActive>
                    <Link href="/contents/tournaments" aria-current="page" color="danger">
                        Tournaments
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/contents/scoreboard">
                        ScoreBoard
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/contents/teams">
                        TeamList
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/contents/staffs">
                        Staff
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/contents/about">
                        AboutUs
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent as="div" justify="end">
                <Dropdown placement="bottom-end">
                    <DropdownTrigger>
                        <Avatar
                            isBordered
                            as="button"
                            className="transition-transform"
                            color="secondary"
                            name="username"
                            size="sm"
                            src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
                        />
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Profile Actions" variant="flat">
                        <DropdownItem className="h-14 gap-2" href="/profile">
                            <p className="font-semibold">บัญชีผู้ใช้</p>
                            <p className="font-semibold">username</p>
                        </DropdownItem>
                        <DropdownItem href="/admin/dashboard">เมนูแอดมิน</DropdownItem>
                        <DropdownItem key="payment">จ่ายเงิน</DropdownItem>
                        <DropdownItem href="/contents/manageteam">จัดการทีม</DropdownItem>
                        <DropdownItem key="logout" color="danger">
                            ออกจากระบบ
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <Button
                    radius="full"
                    className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                >
                    <Link href="/login" color="foreground">
                        เข้าสู่ระบบ
                    </Link>
                </Button>
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item.label}-${index}`}>
                        <Link color="foreground" className="w-full" href={item.url}>
                            {item.label}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>

        </Navbar>
    );
}
