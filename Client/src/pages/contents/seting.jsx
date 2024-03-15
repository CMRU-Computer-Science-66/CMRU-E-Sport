import React from 'react'
import { Card, Input, Button } from "@nextui-org/react";

export default function SetingPage() {
    return (
        <div className="mx-auto max-w-7xl p-5 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                ตั้งค่า
            </h2>
            <Card className="p-4 text-center mt-8">
                <h2 className="mt-10 text-left text-3xl font-bold tracking-tight sm:text-4xl">
                    โปรไฟล์
                </h2>
                <h2 className="mt-10 text-left text-2xl font-bold tracking-tight sm:text-1xl">
                    ชื่อผู้ใช้งาน
                </h2>
                <Input
                    isRequired
                    type="Username"
                    label="Username"
                    className="max-w-x5 mt-5 my-3"
                />
                <h2 className="text-left text-2xl font-bold tracking-tight sm:text-1xl">
                    อีเมล
                </h2>
                <Input
                    isRequired
                    type="Email"
                    label="Email"
                    className="max-w-x5 mt-5 my-3"
                />
                <h2 className="text-left text-2xl font-bold tracking-tight sm:text-1xl">
                    Bio
                </h2>
                <Input
                    type="Bio"
                    label="Bio"
                    className="max-w-x5 mt-5 my-3"
                />
                <h2 className="text-left text-2xl font-bold tracking-tight sm:text-1xl">
                    คณะ
                </h2>
                <Input
                    type="Faculty"
                    label="Faculty"
                    className="max-w-x5 mt-5 my-3"
                />
                <h2 className="text-left text-2xl font-bold tracking-tight sm:text-1xl">
                    สาขา
                </h2>
                <Input
                    type="Major"
                    label="Major"
                    className="max-w-x5 mt-5 my-3"
                />
                <Button color="success">
                    บันทึก
                </Button>
            </Card>
        </div>
    )
}
