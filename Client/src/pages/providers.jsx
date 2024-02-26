import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/router";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import * as React from "react";

export default function Providers({ children, themeProps }) {
	const router = useRouter();

	return (
		<NextUIProvider navigate={router.push}>
			<NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
		</NextUIProvider>
	);
}
