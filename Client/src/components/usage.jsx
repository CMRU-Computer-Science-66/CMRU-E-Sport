import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

export default function Usage() {
	return (
		<div className="flex w-full flex-col">
			<Tabs aria-label="Options">
				<Tab key="all" title="ทั้งหมด">
					<Card>
						<CardBody>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						</CardBody>
					</Card>
				</Tab>
				<Tab key="coming" title="กำลังจะเปิด">
					<Card>
						<CardBody>
							Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
						</CardBody>
					</Card>
				</Tab>
				<Tab key="opentoru" title="เปิดรับสมัคร">
					<Card>
						<CardBody>
							Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</CardBody>
					</Card>
				</Tab>
				<Tab key="intoru" title="อยู่ระหว่างการแข่งขัน">
					<Card>
						<CardBody>
							Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</CardBody>
					</Card>
				</Tab>
				<Tab key="endtoru" title="จบการแข่งขัน">
					<Card>
						<CardBody>
							Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</CardBody>
					</Card>
				</Tab>
			</Tabs>
		</div>
	);
}
