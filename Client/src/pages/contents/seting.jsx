import { Button, Card, Input } from "@nextui-org/react";
import React from "react";

export default function SetingPage() {
	return (
		<div className="mx-auto max-w-7xl p-5 text-center sm:px-6 lg:px-8">
			<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">ตั้งค่า</h2>
			<Card className="mt-8 p-4 text-center">
				<h2 className="mt-10 text-left text-3xl font-bold tracking-tight sm:text-4xl">
					โปรไฟล์
				</h2>
				<h2 className="sm:text-1xl mt-10 text-left text-2xl font-bold tracking-tight">
					ชื่อผู้ใช้งาน
				</h2>
				<Input
					className="max-w-x5 my-3 mt-5"
					isRequired
					label="Username"
					type="Username"
				/>
				<h2 className="sm:text-1xl text-left text-2xl font-bold tracking-tight">
					อีเมล
				</h2>
				<Input
					className="max-w-x5 my-3 mt-5"
					isRequired
					label="Email"
					type="Email"
				/>
				<h2 className="sm:text-1xl text-left text-2xl font-bold tracking-tight">
					Bio
				</h2>
				<Input className="max-w-x5 my-3 mt-5" label="Bio" type="Bio" />
				<h2 className="sm:text-1xl text-left text-2xl font-bold tracking-tight">
					คณะ
				</h2>
				<Input className="max-w-x5 my-3 mt-5" label="Faculty" type="Faculty" />
				<h2 className="sm:text-1xl text-left text-2xl font-bold tracking-tight">
					สาขา
				</h2>
				<Input className="max-w-x5 my-3 mt-5" label="Major" type="Major" />
				<Button color="success">บันทึก</Button>
			</Card>
		</div>
	);
}
