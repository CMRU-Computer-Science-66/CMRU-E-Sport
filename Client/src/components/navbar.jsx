import { ThemeSwitch } from "@/components/theme-switch";
import { siteConfig } from "@/config/site";
import { Link } from "@nextui-org/link";
import {
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
	Navbar as NextUINavbar,
} from "@nextui-org/navbar";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";
import NextLink from "next/link";
// import { Logo } from "./icons";
import React from "react";

import { DiscordIcon, GithubIcon } from "./icons";
import { NavbarProfile } from "./navbar.profile";

export const Navbar = () => {
	return (
		<NextUINavbar maxWidth="xl" position="sticky">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="max-w-fit gap-3">
					<NextLink className="flex items-center justify-start gap-1" href="/">
						{/* <Logo width={undefined} height={undefined} /> */}
						<p className="font-bold text-inherit">CMRU E Sport</p>
					</NextLink>
				</NavbarBrand>

				<NavbarContent className="ml-2 hidden justify-start gap-4 sm:flex">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<NextLink
								className={clsx(
									linkStyles({ color: "foreground" }),
									"data-[active=true]:font-medium data-[active=true]:text-primary",
								)}
								color="foreground"
								href={item.href}
							>
								{item.label}
							</NextLink>
						</NavbarItem>
					))}
				</NavbarContent>
			</NavbarContent>

			<NavbarContent
				className="hidden basis-1/5 sm:flex sm:basis-full"
				justify="end"
			>
				<NavbarItem className="hidden gap-2 sm:flex">
					{/* <Link isExternal href={siteConfig.links.discord} aria-label="Discord">
						<DiscordIcon className="text-default-500" />
					</Link> */}
					{/* <Link isExternal href={siteConfig.links.github} aria-label="Github">
						<GithubIcon className="text-default-500" />
					</Link> */}
					<ThemeSwitch />
					<NavbarProfile />
				</NavbarItem>
				<NavbarItem className="hidden lg:flex"></NavbarItem>
			</NavbarContent>

			<NavbarContent className="basis-1 pl-4 sm:hidden" justify="end">
				<ThemeSwitch />
				<NavbarMenuToggle />
				<NavbarProfile />
			</NavbarContent>

			<NavbarMenu>
				<div className="mx-4 mt-2 flex flex-col gap-2">
					{siteConfig.navMenuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link color="foreground" href={item.href} size="lg">
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
