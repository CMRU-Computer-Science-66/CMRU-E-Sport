import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { signIn as NextAuthSignIn } from "next-auth/react";
import React, { useState } from "react";

export default function Login() {
	const router = useRouter();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	async function signIn(provider) {
		if (["discord", "github", "google"].includes(provider)) {
			NextAuthSignIn(provider, {
				callbackUrl: "/",
				redirect: false,
			});
		} else {
			NextAuthSignIn(provider, {
				password,
				redirect: false,
				username,
			}).then(({ error, ok }) => {
				if (ok) {
					router.push("/");
				} else {
					console.warn(error);
				}
			});
		}
	}

	return (
		<>
			<div className="flex flex-1 select-none flex-col justify-center px-6 py-12 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<h1 className="text-center text-4xl font-bold leading-9 tracking-tight">
						ลงชื่อเข้าใช้งาน
					</h1>
				</div>
				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<div className="space-y-6">
						<div>
							<div className="mb-4">
								<Input
									label="ชื่อผู้ใช้"
									name="username"
									onChange={(e) => setUsername(e.target.value)}
									type="text"
									value={username}
								/>
							</div>
						</div>
						<div>
							<div className="mb-4">
								<Input
									label="รหัสผ่าน"
									name="password"
									onChange={(e) => setPassword(e.target.value)}
									type="password"
									value={password}
								/>
							</div>
						</div>
						<dev>
							<Button
								className="w-full flex-row justify-center rounded-md bg-blue-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm"
								onClick={() => signIn("login-username")}
							>
								เข้าสู่ระบบ
							</Button>
						</dev>
						<p className="mt-10 text-center text-sm">
							<a className="font-medium leading-6">หรือ</a>
						</p>
						<div style={{ display: "flex", justifyContent: "stretch" }}>
							<Button
								className="w-full rounded-md bg-[#4285F4] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm"
								onClick={() => signIn("google")}
								startContent={
									<FontAwesomeIcon className="size-4" icon={faGoogle} />
								}
							>
								Google
							</Button>
							<span style={{ width: "1rem" }}></span> {}
							<Button
								className="w-full rounded-md bg-[#424549] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm"
								onClick={() => signIn("discord")}
								startContent={
									<FontAwesomeIcon className="size-4" icon={faDiscord} />
								}
							>
								Discord
							</Button>
						</div>
					</div>
					<p className="mt-10 text-center text-sm text-gray-500">
						<a
							className="cursor-pointer font-medium leading-6 text-blue-400 hover:text-blue-400"
							onClick={() => router.push("/account/register")}
						>
							สมัครสมาชิก
						</a>
					</p>
				</div>
			</div>
		</>
	);
}
