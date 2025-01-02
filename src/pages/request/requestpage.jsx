import React, { useState } from "react";

import { Button, Select } from "antd";

import { ArrowLeftOutlined, FileOutlined } from "@ant-design/icons";

import brad_logo from "../../../public/assets/Notices 1/home.png";
import BreadcrumbComponent from "../../layout/BreadcrumbComponent";

export default function requestpage() {
	const { Option } = Select;

	const breadcrumbItems = [
		{ icon: brad_logo },
		{ title: "Request", href: "" },
		{ title: "Request Details", href: "" },
	];

	return (
		<>
			<div>
				<BreadcrumbComponent
					breadcrumbItems={breadcrumbItems}
					headerTitle="Request Details"
				/>
			</div>

			<section className="mt-5">
				<div class="rounded-lg border-2 border-gray-300 bg-white p-6 shadow-md">
					<div class="flex items-center justify-between">
						<div>
							<h1 className="text-sidebarBgColor text-xl font-bold">
								John Doe
							</h1>
							<p className="text-[16px] text-gray-500">
								Request Date 12/05/2021
							</p>
						</div>
						<span class="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
							Approved
						</span>
					</div>

					<div className="mt-6 grid grid-cols-2 gap-6">
						<div>
							<h2 class="mb-2 text-[18px] font-semibold text-gray-800">
								Other Details
							</h2>
							<div className="w-[400px] space-y-2 text-[16px]">
								<p className="flex justify-between text-gray-600">
									<span className="">Designation:</span> UI UX Designer
								</p>
								<p className="flex justify-between text-gray-600">
									<span className="">Leave Type:</span> Sick Leave
								</p>
								<p className="flex justify-between text-gray-600">
									<span className="">Total Leave Days:</span> 4 days
								</p>
								<p className="flex justify-between text-gray-600">
									<span className="">Duration:</span> 02/05/2024 - 6/05/2024
								</p>
							</div>
							<div class="mt-4">
								<h3 className="text-[18px] font-semibold text-gray-800">
									Description
								</h3>
								<p className="text-[16px] text-gray-600">I am having fever.</p>
							</div>
							<div className="mt-4">
								<h3 className="text-[18px] font-semibold text-gray-800">
									Attachments
								</h3>
								<Button
									style={{ background: "#f0f2f2", color: "black" }}
									icon={<FileOutlined className="text-sidebarBgColor" />}
								>
									Doctor Instructions
								</Button>
							</div>
						</div>

						<div>
							<div className="border-gray-2 w-[400px] rounded-lg border">
								<h2 className="bg-customRequestBgColor mb-2 text-[18px] font-semibold text-black">
									Leaves Record
								</h2>

								<div className="border-gray-2 border">
									<p className="text-[16px] text-gray-600">
										<span class="">Total Hours Available:</span> 20
									</p>
									<p className="text-[16px] text-gray-600">
										<span class="">Total Leaves Available:</span> 2
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
