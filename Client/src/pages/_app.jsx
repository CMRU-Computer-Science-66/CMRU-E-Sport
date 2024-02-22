import "../styles/globals.css";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import Providers from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import React from "react";
import { useState, useEffect } from "react";
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

	if (!isClient) {
		return null;
	}

	return (
		<body
			className={clsx(
				"min-h-screen bg-background font-sans antialiased",
				fontSans.variable,
			)}
		>
			<SessionProvider session={session}>
				<Providers themeProps={{ attribute: "class", defaultTheme: "system" }}>
					<div className="relative flex h-screen flex-col">
						<Navbar />
						<main className="container mx-auto max-w-7xl flex-grow px-6 pt-16">
							<Component {...pageProps} />
						</main>
						<footer className="flex w-full items-center justify-center py-3">
							<Link
								isExternal
								className="flex items-center gap-1 text-current"
								href=""
							>
								<span className="text-default-600">จัดทำโดย</span>
								<p className="text-primary">CMRU E Sport</p>
							</Link>
						</footer>
					</div>
				</Providers>
			</SessionProvider>
		</body>
	);
}
