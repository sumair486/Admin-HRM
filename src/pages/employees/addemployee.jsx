import React, { useState } from "react";

import {
	Breadcrumb,
	Button,
	Checkbox,
	Col,
	DatePicker,
	Flex,
	Form,
	Input,
	Modal,
	Row,
	Select,
	Space,
	Switch,
	Table,
	Tag,
	TimePicker,
	Upload,
} from "antd";

import { FileOutlined } from "@ant-design/icons";

import brad_logo from "../../../public/assets/Notices 1/home.png";
import BreadcrumbComponent from "../../layout/BreadcrumbComponent";

export default function requestpage() {
	const [form] = Form.useForm();
	const { Option } = Select;
	const { Dragger } = Upload;

	const breadcrumbItems = [
		{ icon: brad_logo },
		{ title: "Employee", href: "" },
		{ title: "Add New Employee", href: "" },
	];
	return (
		<>
			<div>
				<BreadcrumbComponent
					breadcrumbItems={breadcrumbItems}
					headerTitle="Add New Employee"
				/>
			</div>

			<div
				className="mt-4 border-2 border-gray-300"
				style={{
					padding: "24px",
					background: "#fff",
					// borderRadius: "8px",
					maxWidth: "1200px",
					// margin: "auto",
				}}
			>
				<div className="flex justify-between">
					<div>
						<h2
							style={{
								fontSize: "18px",
								fontWeight: "600",
								marginBottom: "24px",
							}}
						>
							Personal Information
						</h2>
					</div>
					<div>
						<h1 className="text-[16px] font-semibold">
							This Employee is a Manager
						</h1>
						<Switch />
					</div>
				</div>
				<Form form={form} layout="vertical">
					<Row gutter={24} align="middle">
						<Col span={8}>
							<Upload.Dragger
								name="file"
								multiple={false}
								style={{
									border: "1px dashed #3B9EA2",
									borderRadius: "8px",
									padding: "26px",
									width: "150px",
									height: "150px",
								}}
							>
								<p className="text-customAddEmpColor text-[12px]">
									<span className="text-customDragColor">
										Drag drop or Browse
									</span>
								</p>
								<p className="text-customAddEmpColor text-[10px]">
									150x150 Recommended
								</p>
							</Upload.Dragger>
						</Col>
					</Row>

					<Row gutter={24} style={{ marginTop: "24px" }}>
						<Col span={8}>
							<Form.Item
								label={
									<span className="text-customCategoryColor">Full Name</span>
								}
								name="fullName"
								rules={[
									{ required: true, message: "Please enter the full name" },
								]}
							>
								<Input placeholder="i-e Ali Ahmad" className="h-[40px]" />
							</Form.Item>
						</Col>
						<Col span={8}>
							<Form.Item
								label={
									<span className="text-customCategoryColor">
										Contact Number
									</span>
								}
								name="contactNumber"
								rules={[
									{
										required: true,
										message: "Please enter the contact number",
									},
								]}
							>
								<Input placeholder="i-e +93284284923" className="h-[40px]" />
							</Form.Item>
						</Col>
						<Col span={8}>
							<Form.Item
								label={<span className="text-customCategoryColor">Email</span>}
								name="email"
								rules={[
									{ type: "email", message: "Please enter a valid email" },
								]}
							>
								<Input placeholder="i-e abc@gmail.com" className="h-[40px]" />
							</Form.Item>
						</Col>
					</Row>

					<Row gutter={24}>
						<Col span={8}>
							<Form.Item
								label={<span className="text-customCategoryColor">DOB</span>}
								name="dob"
							>
								<DatePicker
									style={{ width: "100%" }}
									format="DD/MM/YYYY"
									placeholder="dd/mm/yyyy"
									className="h-[40px]"
								/>
							</Form.Item>
						</Col>
						<Col span={8}>
							<Form.Item
								label={
									<span className="text-customCategoryColor">Iqama Number</span>
								}
								name="iqamaNumber"
							>
								<Input placeholder="i-e HJH34358" className="h-[40px]" />
							</Form.Item>
						</Col>
						<Col span={8}>
							<Form.Item
								label={
									<span className="text-customCategoryColor">
										Iqama Number Expiry Date
									</span>
								}
								name="iqamaExpiryDate"
							>
								<DatePicker
									style={{ width: "100%" }}
									format="DD/MM/YYYY"
									placeholder="dd/mm/yyyy"
									className="h-[40px]"
								/>
							</Form.Item>
						</Col>
					</Row>

					<h1 className="font-semibold text-black">Job Information</h1>

					<Row gutter={24} style={{ marginTop: "24px" }}>
						<Col span={8}>
							<Form.Item
								label={
									<span className="text-customCategoryColor">Designation</span>
								}
								name="designation"
							>
								<Select placeholder="Select Designation" className="h-[40px]">
									<Option value="1">Designation 1</Option>
									<Option value="2">Designation 2</Option>
									<Option value="3">Designation 3</Option>
								</Select>
							</Form.Item>
						</Col>
						<Col span={8}>
							<Form.Item
								label={
									<span className="text-customCategoryColor">Department</span>
								}
								name="department"
							>
								<Select placeholder="Select Department" className="h-[40px]">
									<Option value="1">Department 1</Option>
									<Option value="2">Department 2</Option>
									<Option value="3">Department 3</Option>
								</Select>
							</Form.Item>
						</Col>
						<Col span={8}>
							<Form.Item
								label={
									<span className="text-customCategoryColor">Joining Date</span>
								}
								name="joining"
							>
								<DatePicker
									style={{ width: "100%" }}
									format="DD/MM/YYYY"
									placeholder="dd/mm/yyyy"
									className="h-[40px]"
								/>
							</Form.Item>
						</Col>
					</Row>

					<Row gutter={24} style={{ marginTop: "24px" }}>
						<Col span={8}>
							<Form.Item
								label={
									<span className="text-customCategoryColor">
										Employment Type
									</span>
								}
								name="emptype"
							>
								<Select
									placeholder="Select Employment Type"
									className="h-[40px]"
								>
									<Option value="full-time">Full-Time</Option>
									<Option value="part-time">Part-Time</Option>
									<Option value="contract">Contract</Option>
								</Select>
							</Form.Item>
						</Col>
						<Col span={8}>
							<Form.Item
								label={
									<span className="text-customCategoryColor">
										Employment Level
									</span>
								}
								name="emplevel"
							>
								<Select
									placeholder="Select Employment Level"
									className="h-[40px]"
								>
									<Option value="junior">Junior</Option>
									<Option value="mid">Mid</Option>
									<Option value="senior">Senior</Option>
								</Select>
							</Form.Item>
						</Col>
						<Col span={8}>
							<Form.Item
								label={<span className="text-customCategoryColor">Shift</span>}
								name="shift"
							>
								<Select placeholder="Select Shift" className="h-[40px]">
									<Option value="morning">Morning</Option>
									<Option value="evening">Evening</Option>
									<Option value="night">Night</Option>
								</Select>
							</Form.Item>
						</Col>
					</Row>

					<Row gutter={24} style={{ marginTop: "24px" }}>
						<Col span={8}>
							<Form.Item
								label={
									<span className="text-customCategoryColor">Time Off</span>
								}
								name="time"
							>
								<Select placeholder="Select Time Off Type" className="h-[40px]">
									<Option value="sick">Sick Leave</Option>
									<Option value="vacation">Vacation</Option>
									<Option value="personal">Personal Leave</Option>
								</Select>
							</Form.Item>
						</Col>
					</Row>

					<h1 className="font-semibold text-black">Salary</h1>

					<Row gutter={24} style={{ marginTop: "24px" }}>
						<Col span={8}>
							<Form.Item
								label={<span className="text-customCategoryColor">Salary</span>}
								name="sal"
							>
								<Input
									placeholder="Enter Salary (e.g., 5000 PKR)"
									className="h-[40px]"
								/>
							</Form.Item>
						</Col>
					</Row>

					<h1 className="font-semibold text-black">Reports to</h1>

					<Row gutter={24} style={{ marginTop: "24px" }}>
						<Col span={8}>
							<Form.Item
								label={
									<span className="text-customCategoryColor">
										Manager / Lead
									</span>
								}
								name="managerlead"
							>
								<Select
									placeholder="Select Manager or Lead"
									className="h-[40px]"
								>
									<Option value="manager1">John Doe</Option>
									<Option value="manager2">Jane Smith</Option>
									<Option value="lead1">Michael Brown</Option>
								</Select>
							</Form.Item>
						</Col>
					</Row>

					<h1 className="font-semibold text-black">Policies</h1>

					<Row gutter={24} style={{ marginTop: "24px" }}>
						<Col span={8}>
							<Form.Item
								label={
									<span className="text-customCategoryColor">
										Policy Category
									</span>
								}
								name="policy"
							>
								<Select
									placeholder="Select Policy Category"
									className="h-[40px]"
								>
									<Option value="health">Health Policy</Option>
									<Option value="retirement">Retirement Policy</Option>
									<Option value="leave">Leave Policy</Option>
								</Select>
							</Form.Item>
						</Col>
					</Row>

					<h1 className="text-[16px] font-semibold text-black">
						Bank Account Details
					</h1>

					<Row gutter={24} style={{ marginTop: "24px" }}>
						<Col span={8}>
							<Form.Item
								label={
									<span className="text-customCategoryColor">Bank Name</span>
								}
								name="bank"
							>
								<Input
									placeholder="Enter Bank Name (e.g., Ali Ahmed Bank)"
									className="h-[40px]"
								/>
							</Form.Item>
						</Col>
						<Col span={8}>
							<Form.Item
								label={
									<span className="text-customCategoryColor">
										Account Number
									</span>
								}
								name="account"
							>
								<Input
									placeholder="Enter Account Number (e.g., 293293933)"
									className="h-[40px]"
								/>
							</Form.Item>
						</Col>
					</Row>

					<h1 className="text-[16px] font-semibold text-black">Password</h1>

					<Row gutter={24} style={{ marginTop: "24px" }}>
						<Col span={8}>
							<Form.Item
								label={
									<span className="text-customCategoryColor">Password</span>
								}
								name="password"
								rules={[
									{ required: true, message: "Please enter your password" },
									{ min: 6, message: "Password must be at least 6 characters" },
								]}
							>
								<Input.Password
									placeholder="Enter Password"
									className="h-[40px]"
								/>
							</Form.Item>
						</Col>
						<Col span={8}>
							<Form.Item
								label={
									<span className="text-customCategoryColor">
										Confirm Password
									</span>
								}
								name="confpassword"
								dependencies={["password"]}
							>
								<Input.Password
									placeholder="Confirm Password"
									className="h-[40px]"
								/>
							</Form.Item>
						</Col>
					</Row>

					<div className="w-[385px]">
						<div className="rounded-lg bg-white">
							<h2 className="mb-4 text-lg font-semibold">Attachments</h2>

							<Dragger
								multiple
								className="flex cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-blue-500 p-6"
							>
								<p className="ant-upload-text">
									<FileOutlined className="text-sidebarBgColor text-2xl" /> Drag
									and drop or{" "}
									<span className="cursor-pointer text-blue-500 underline">
										Browse
									</span>
								</p>
							</Dragger>
						</div>
					</div>
					<div className="mt-6 flex justify-end">
						<Button className="text-sidebarBgColor mr-2 p-4" type="default">
							Cancel
						</Button>
						<Button className="bg-sidebarBgColor p-4 text-white">
							Add Employee
						</Button>
					</div>
				</Form>
			</div>
		</>
	);
}
