// Components
import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
    Link
} from "@nextui-org/react";
import { AcmeLogo } from "./acmeLogo.jsx";

// Contents
export default function NavbarComp() {
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

            <NavbarContent justify="end">
                {/* <NavbarItem className="hidden lg:flex">
                    <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem> */}
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
