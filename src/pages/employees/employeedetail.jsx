import React, { useState } from "react";

import {
	Breadcrumb,
	Button,
	Checkbox,
	DatePicker,
	Flex,
	Form,
	Input, // Label,
	Modal,
	Select,
	Table,
	TimePicker,
} from "antd";
import moment from "moment";

import { ArrowLeftOutlined, FileOutlined } from "@ant-design/icons";

import img_logo from "../../../public/assets/Notices 1/Rectangle 1570.png";
import arrow_logo from "../../../public/assets/Notices 1/arrow-left.png";
import candle_logo from "../../../public/assets/Notices 1/candles 1.png";
import family_logo from "../../../public/assets/Notices 1/family 1.png";
import brad_logo from "../../../public/assets/Notices 1/home.png";
import pill_logo from "../../../public/assets/Notices 1/pills 1.png";
import BreadcrumbComponent from "../../layout/BreadcrumbComponent";

export default function employeedetail() {
	const { Option } = Select;

	const breadcrumbItems = [
		{ icon: brad_logo },
		{ title: "Employee", href: "" },
		{ title: "Employee Details", href: "" },
	];

	return (
		<>
			<div>
				<BreadcrumbComponent
					breadcrumbItems={breadcrumbItems}
					headerTitle="Employee Details"
				/>
			</div>

			<div className="mt-3 flex flex-col gap-4 md:flex-row">
				{/* Left Section */}
				<div className="flex-1 rounded-lg border-2 border-gray-300 bg-white p-6 shadow-md">
					<h2 className="text-sidebarBgColor text-xl font-bold">
						Muhammad Jahangir{" "}
						<span className="text-customEmpColor">(Manager)</span>{" "}
						<span className="float-right font-semibold">
							<span className="text-green-600">● </span>
							<span className="text-sm text-black">Active</span>
						</span>
					</h2>
					<p className="font-semibold text-black">Personal Information</p>
					<div className="mt-4">
						{/* Personal Information */}
						<img
							src={img_logo}
							alt="Profile"
							className="mb-4 h-24 rounded-lg"
						/>
						<div className="w-[400px] space-y-4">
							<div className="flex justify-between">
								<p className="">Employee ID:</p>
								<p>EMP_1</p>
							</div>
							<div className="flex justify-between">
								<p className="">Contact Number:</p>
								<p>+9238938742</p>
							</div>
							<div className="flex justify-between">
								<p className="">Email:</p>
								<p>abc@gmail.com</p>
							</div>
							<div className="flex justify-between">
								<p className="">DOB:</p>
								<p>12/05/2021</p>
							</div>
							<div className="flex justify-between">
								<p className="">CNIC Number:</p>
								<p>17301-244189-2</p>
							</div>
							<div className="flex justify-between">
								<p className="">CNIC Expiry:</p>
								<p>12/05/2021</p>
							</div>
						</div>

						<h1 className="mt-5 font-semibold text-black">Job Information</h1>

						<div className="mt-5 w-[400px] space-y-4">
							<div className="flex justify-between">
								<p className="">Designation:</p>
								<p>UI UX Designer</p>
							</div>
							<div className="flex justify-between">
								<p className="">Department:</p>
								<p>Design</p>
							</div>
							<div className="flex justify-between">
								<p className="">Joining Date:</p>
								<p>12/05/2021</p>
							</div>
							<div className="flex justify-between">
								<p className="">Employment Level:</p>
								<p>Senior Designer</p>
							</div>
							<div className="flex justify-between">
								<p className="">Employment Type</p>
								<p>Permanent</p>
							</div>
							<div className="flex justify-between">
								<p className="">Shift:</p>
								<p>Morning</p>
							</div>
							<div className="flex justify-between">
								<p className="">Time Off</p>
								<div class="buttons">
									<button className="button mr-2 bg-gray-300">Sunday</button>
									<button class="button bg-gray-300">Saturday</button>
								</div>
							</div>
							<div className="flex justify-between">
								<p className="">Reports to</p>
								<p>Komal Ramzan</p>
							</div>
							<div className="flex justify-between">
								<p className="">Policies</p>
								<div class="buttons">
									<button className="button mr-2 bg-gray-300">
										Sick Leave
									</button>
									<button class="button bg-gray-300">FLMA</button>
								</div>
							</div>
						</div>
						<h1 className="mt-5 font-semibold text-black">
							Bank Account Details
						</h1>
						<div className="mt-5 w-[400px] space-y-4">
							<div className="flex justify-between">
								<p className="">Bank Name:</p>
								<p>Habib Bank Limited</p>
							</div>
							<div className="flex justify-between">
								<p className="">Account Number</p>
								<p>9288238283</p>
							</div>
						</div>

						<h1 className="mt-5 font-semibold text-black">Attachment</h1>
						<div className="mt-5 w-[400px] space-y-4">
							<div className="flex justify-between">
								<div class="buttons">
									<button className="button mr-2 bg-gray-300 p-2">
										<FileOutlined className="text-sidebarBgColor" />
										Passport
									</button>
									<button class="button bg-gray-300 p-2">
										<FileOutlined className="text-sidebarBgColor" />
										Iqama
									</button>
								</div>
							</div>
						</div>

						<h1 className="mt-5 font-semibold text-black">Password</h1>
						<div className="mt-5 w-[400px] space-y-4">
							<div className="flex justify-between">
								<p className="">Password:</p>
								<p>Johndoe123</p>
							</div>
						</div>
					</div>
				</div>

				{/* Right Section */}
				<div className="flex w-full flex-col gap-4 md:w-1/3">
					{/* Salary Information */}
					<div className="rounded-lg border-2 border-gray-300 bg-white p-6 shadow-md">
						<h3 className="text-lg font-bold">Salary Information</h3>
						<div className="text-sidebarBgColor mt-5 flex justify-between font-semibold">
							<h1>Salary:</h1>
							<h1>1,000,000</h1>
						</div>
					</div>

					{/* Leaves */}
					<div className="rounded-lg border-2 border-gray-300 bg-white p-6 shadow-md">
						<h3 className="mt-2 text-lg font-bold">Leaves</h3>
						<div className="grid grid-cols-2 gap-4">
							<div className="border-customBorderColorp-2 flex flex-col items-center justify-center border-2 text-center">
								<h4 className="mb-2 text-lg">Sick Leaves</h4>
								{/* <img src={pill_logo}></img> */}
								<p className="flex items-center">
									<img src={pill_logo} alt="Pill Logo" className="h-6" />
									<span className="text-sidebarBgColor text-3xl">12</span>
								</p>
								<p className="text-[#4d9ea2]">hours available</p>
							</div>

							<div className="border-customBorderColor flex flex-col items-center justify-center border-2 p-5 text-center">
								<h4 className="mb-2 text-lg">Sick Leaves</h4>

								<p className="flex items-center">
									<img src={pill_logo} alt="Pill Logo" className="h-6" />
									<span className="text-sidebarBgColor text-3xl">12</span>
								</p>
								<p className="text-sidebarBgColor">hours available</p>
							</div>
							<div className="border-customBorderColor flex flex-col items-center justify-center border-2 p-5 text-center">
								<h4 className="mb-2 text-lg">Bereavement</h4>
								{/* <img src={pill_logo}></img> */}
								<p className="flex items-center">
									<img src={candle_logo} alt="Pill Logo" className="h-6" />
									<span className="text-sidebarBgColor text-3xl">0</span>
								</p>
								<p className="text-[#4d9ea2]">hours available</p>
							</div>
							<div className="border-customBorderColor flex flex-col items-center justify-center border-2 p-5 text-center">
								<h4 className="mb-2 text-lg">FMLA</h4>
								{/* <img src={pill_logo}></img> */}
								<p className="flex items-center">
									<img src={family_logo} alt="Pill Logo" className="h-6" />
									<span className="text-sidebarBgColor text-3xl">12</span>
								</p>
								<p className="text-[#4d9ea2]">hours available</p>
							</div>
						</div>
					</div>

					<div className="h-screen rounded-lg border-2 border-gray-300 bg-white p-6 shadow-md">
						<h3 className="mt-2 text-lg font-bold">Others</h3>
						<div className="grid grid-cols-2 gap-4">
							<div className="border-customBorderColor flex flex-col items-center justify-center border-2 p-2 text-center">
								<h4 className="text-md mb-2">Total Notices Received</h4>
								{/* <img src={pill_logo}></img> */}
								<p className="flex items-center">
									<p className="text-sidebarBgColor text-3xl">12</p>
								</p>
								<img
									src={arrow_logo}
									alt="Pill Logo"
									className="mt-4 h-2 w-[30px]"
								/>
							</div>

							<div className="border-customBorderColor flex flex-col items-center justify-center border-2 p-5 text-center">
								<h4 className="text-md mb-2">Warning Letters Received</h4>

								<p className="flex items-center">
									<p className="text-sidebarBgColor text-3xl">12</p>
								</p>
								<img
									src={arrow_logo}
									alt="Pill Logo"
									className="mt-4 h-2 w-[30px]"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
