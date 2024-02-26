import { Navbar } from "@/components/navbar";
import { siteConfig } from "@/config/site";
import Providers from "@/pages/providers";
import "@/styles/globals.css";
import { Link } from "@nextui-org/link";
import { Noto_Sans_Thai } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import React from "react";

const fonts = Noto_Sans_Thai({
	subsets: ["thai"],
	weight: "400",
});

export const metadata = {
	description: siteConfig.description,
	icons: {
		apple: "/apple-touch-icon.png",
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
	},
	themeColor: [
		{ color: "white", media: "(prefers-color-scheme: light)" },
		{ color: "black", media: "(prefers-color-scheme: dark)" },
	],
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
};

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}) {
	return (
		<SessionProvider session={session}>
			<Providers themeProps={{ attribute: "class", defaultTheme: "system" }}>
				<div className={`${fonts.className} relative flex h-screen flex-col`}>
					<Navbar />
					<main className="container mx-auto max-w-7xl grow px-6 pt-16">
						<Component {...pageProps} />
					</main>
					<footer className="flex w-full select-none items-center justify-center py-3">
						<Link className="flex items-center gap-1" isExternal>
							<span className="text-default-600">จัดทำโดย</span>
							<p>CMRU E Sport</p>
						</Link>
					</footer>
				</div>
			</Providers>
		</SessionProvider>
	);
}
