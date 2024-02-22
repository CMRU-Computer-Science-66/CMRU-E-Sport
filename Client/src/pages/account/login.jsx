import React, { useState } from "react";
import { Input, Button } from "@nextui-org/react";
import { signIn as NextAuthSignIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

export default function Login() {
	const router = useRouter();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	async function signIn(provider) {
		if (["google", "discord", "github"].includes(provider)) {
			NextAuthSignIn(provider, {
				redirect: false,
				callbackUrl: "/",
			});
		} else {
			NextAuthSignIn(provider, {
				username,
				password,
				redirect: false,
			}).then(({ ok, error }) => {
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
			<div className="flex  flex-1 flex-col justify-center px-6 py-12 lg:px-8">
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
									name="username"
									type="text"
									label="ชื่อผู้ใช้"
									value={username}
									onChange={(e) => setUsername(e.target.value)}
								/>
							</div>
						</div>
						<div>
							<div className="mb-4">
								<Input
									name="password"
									type="password"
									label="รหัสผ่าน"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>
						</div>
						<dev>
							<Button
								onClick={() => signIn("login-username")}
								className="w-full flex-row justify-center rounded-md bg-blue-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm"
							>
								เข้าสู่ระบบ
							</Button>
						</dev>
						<p className="mt-10 text-center text-sm">
							<a className="font-medium leading-6">หรือ</a>
						</p>
						<div style={{ display: "flex", justifyContent: "stretch" }}>
							<Button
								onClick={() => signIn("google")}
								startContent={
									<FontAwesomeIcon className="h-4 w-4" icon={faGoogle} />
								}
								className="w-full rounded-md bg-[#4285F4] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm"
							>
								Google
							</Button>
							<span style={{ width: "1rem" }}></span> {}
							<Button
								onClick={() => signIn("discord")}
								startContent={
									<FontAwesomeIcon className="h-4 w-4" icon={faDiscord} />
								}
								className="w-full rounded-md bg-[#424549] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm"
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
