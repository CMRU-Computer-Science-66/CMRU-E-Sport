"use client";

import { MoonFilledIcon, SunFilledIcon } from "@/components/icons";
import { useSwitch } from "@nextui-org/switch";
import { useIsSSR } from "@react-aria/ssr";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import clsx from "clsx";
import { useTheme } from "next-themes";

export const ThemeSwitch = ({ className, classNames }) => {
	const { setTheme, theme } = useTheme();
	const isSSR = useIsSSR();

	const onChange = () => {
		theme === "light" ? setTheme("dark") : setTheme("light");
	};

	const {
		Component,
		getBaseProps,
		getInputProps,
		getWrapperProps,
		isSelected,
		slots,
	} = useSwitch({
		"aria-label": `Switch to ${theme === "light" || isSSR ? "dark" : "light"} mode`,
		isSelected: theme === "light" || isSSR,
		onChange,
	});

	return (
		<Component
			{...getBaseProps({
				className: clsx(
					"cursor-pointer px-px transition-opacity hover:opacity-80",
					className,
					classNames?.base,
				),
			})}
		>
			<VisuallyHidden>
				<input {...getInputProps()} />
			</VisuallyHidden>
			<div
				{...getWrapperProps()}
				className={slots.wrapper({
					class: clsx(
						[
							"size-auto",
							"bg-transparent",
							"rounded-lg",
							"flex items-center justify-center",
							"group-data-[selected=true]:bg-transparent",
							"!text-default-500",
							"pt-px",
							"px-0",
							"mx-0",
						],
						classNames?.wrapper,
					),
				})}
			>
				{!isSelected || isSSR ? (
					<SunFilledIcon size={22} />
				) : (
					<MoonFilledIcon size={22} />
				)}
			</div>
		</Component>
	);
};
