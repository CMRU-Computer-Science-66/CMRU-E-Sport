import "@/styles/globals.css";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import Providers from "@/pages/providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import React, { useState, useEffect } from "react";
import { SessionProvider } from "next-auth/react";

export const metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}) {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	const Main = (
		<SessionProvider session={session}>
			<Providers themeProps={{ attribute: "class", defaultTheme: "system" }}>
				<div className="relative flex h-screen flex-col">
					<Navbar />
					<main className="container mx-auto max-w-7xl flex-grow px-6 pt-16">
						<Component {...pageProps} />
					</main>
					<footer className="flex w-full select-none items-center justify-center py-3">
						<Link isExternal className="flex items-center gap-1">
							<span className="text-default-600">จัดทำโดย</span>
							<p>CMRU E Sport</p>
						</Link>
					</footer>
				</div>
			</Providers>
		</SessionProvider>
	);

	if (!isClient) {
		return Main;
	} else {
		return (
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable,
				)}
			>
				{Main}
			</body>
		);
	}
}
