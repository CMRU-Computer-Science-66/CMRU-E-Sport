import React, { useState } from "react";
import { Input, Button } from "@nextui-org/react";
import { signIn as NextAuthSignIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {
	const router = useRouter();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	async function register(provider) {
		await NextAuthSignIn(provider, {
			username,
			password,
			confirmPassword,
			callbackUrl: "/",
			redirect: false,
		}).then(({ ok, error }) => {
			if (ok) {
				router.push("/");
			} else {
				console.warn(error);
			}
		});
	}

	return (
		<>
			<div className="flex  flex-1 flex-col justify-center px-6 py-12 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<h1 className="text-center text-4xl font-bold leading-9 tracking-tight">
						สมัครสมาชิก
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
						<div className="mb-4">
							<Input
								name="confirmPassword"
								type="password"
								label="ยืนยันรหัสผ่าน"
								onChange={(e) => setConfirmPassword(e.target.value)}
							/>
						</div>
					</div>
					<div>
						<Button
							onClick={() => register("register-username")}
							className="mt-4 w-full flex-row justify-center rounded-md bg-blue-400 px-5 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm"
						>
							เข้าสู่ระบบ
						</Button>
					</div>
					<p className="mt-10 text-center text-sm text-gray-500">
						<a
							className="cursor-pointer font-medium leading-6 text-blue-400 hover:text-blue-400"
							onClick={() => router.replace("/account/login")}
						>
							ลงชื่อเข้าใช้งาน
						</a>
					</p>
				</div>
			</div>
		</>
	);
}
