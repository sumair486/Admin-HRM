import React, { useState } from "react";

import { Flex, Form, Input, Modal, Radio, Select, Table } from "antd";
import moment from "moment";
import { Link } from "react-router-dom";

import { SearchOutlined } from "@ant-design/icons";

import edit_icon from "../../../public/assets/Employees 1/pencil (1).png";
import delete_icon from "../../../public/assets/Employees 1/trash (1).png";
import brad_logo from "../../../public/assets/Notices 1/home.png";
import BreadcrumbComponent from "../../layout/BreadcrumbComponent";
import SearchComponent from "../../layout/SearchComponent";

export default function announcement() {
	const { Option } = Select;

	const [isModalOpen, setIsModalOpen] = useState(false);
	const showModal = () => {
		setIsModalOpen(true);
	};
	const handleOk = () => {
		setIsModalOpen(false);
	};
	const handleCancel = () => {
		setIsModalOpen(false);
	};

	const onFinish = (values) => {
		console.log("Success:", values);
	};
	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	const [data, setData] = useState([
		{
			s_no: "1",
			key: "1",
			id: (
				<Link
					to="/announcements-details"
					className="text-sidebarBgColor underline"
				>
					AN_01
				</Link>
			),
			date: "12/05/2021",

			holiday: "HR International Day",
			subject: "Poor Performance",
		},
		{
			s_no: "2",
			key: "2",
			id: <h1 className="text-sidebarBgColor underline">AN_02</h1>,
			date: "12/05/2021",
			holiday: "HR International Day",

			status: "Approved",
		},
		{
			s_no: "3",
			key: "3",
			id: <h1 className="text-sidebarBgColor underline">AN_03</h1>,
			date: "12/05/2021",
			holiday: "HR International Day",

			status: "Rejected",
		},
		{
			s_no: "4",
			key: "4",
			id: <h1 className="text-sidebarBgColor underline">AN_04</h1>,
			date: "12/05/2021",
			holiday: "HR International Day",

			status: "New",
		},
		{
			s_no: "5",
			key: "5",
			id: <h1 className="text-sidebarBgColor underline">AN_05</h1>,
			date: "12/05/2021",
			holiday: "HR International Day",

			status: "Rejected",
		},
		{
			s_no: "6",

			key: "6",
			id: <h1 className="text-sidebarBgColor underline">AN_06</h1>,
			date: "12/05/2021",
			holiday: "HR International Day",

			status: "Approved",
		},
		{
			s_no: "7",
			key: "7",
			id: <h1 className="text-sidebarBgColor underline">AN_07</h1>,
			date: "12/05/2021",
			holiday: "HR International Day",

			status: "New",
		},
		{
			s_no: "8",
			key: "8",
			id: <h1 className="text-sidebarBgColor underline">AN_08</h1>,
			date: "12/05/2021",
			holiday: "HR International Day",

			status: "New",
		},
	]);

	const columns = [
		{
			title: "S.No",
			dataIndex: "s_no",
			key: "s_no",
			sorter: (a, b) => a.s_no.localeCompare(b.s_no),
		},
		{
			title: "Id",
			dataIndex: "id",
			key: "id",
			sorter: (a, b) => a.id.localeCompare(b.id),
		},
		{
			title: "Date",
			dataIndex: "date",
			key: "date",
			sorter: (a, b) =>
				moment(a.date, "DD/MM/YYYY") - moment(b.date, "DD/MM/YYYY"),
		},
		{
			title: "Holiday",
			dataIndex: "holiday",
			key: "holiday",
			sorter: (a, b) => a.holiday.localeCompare(b.holiday),
		},

		{
			title: "Action",
			dataIndex: "status",
			key: "status",
			render: (_, record) =>
				data.length >= 1 ? (
					<div style={{ display: "flex", gap: "10px" }}>
						<a>
							<img src={edit_icon}></img>
						</a>

						<a onClick={() => handleDelete(record.key)}>
							<img src={delete_icon}></img>
						</a>
					</div>
				) : null,
		},
	];

	const handleDelete = (key) => {
		const newData = data.filter((item) => item.key !== key);
		setData(newData);
	};

	const breadcrumbItems = [
		{ icon: brad_logo },
		{ title: "Announcement", href: "" },
	];

	const [value, setValue] = useState(1);
	const onChange = (e) => {
		console.log("radio checked", e.target.value);
		setValue(e.target.value);
	};

	return (
		<>
			<div>
				<BreadcrumbComponent breadcrumbItems={breadcrumbItems} />
			</div>

			<section className="mt-3">
				<div className="flex flex-row justify-between">
					<SearchComponent />
					<div>
						<Link
							onClick={showModal}
							className="rounded-md bg-sidebarBgColor p-3 text-white"
						>
							+ Add Announcement
						</Link>
					</div>
				</div>
			</section>

			<section className="mt-5 rounded-lg border border-gray-300">
				<div className="flex items-center justify-between px-5 py-3">
					<div>
						<h1 className="text-2xl font-semibold text-sidebarBgColor">
							Total(10)
						</h1>
					</div>
				</div>

				<Table columns={columns} dataSource={data} pagination={false} />
			</section>

			<section>
				<Modal
					title="Add Announcement"
					open={isModalOpen}
					onOk={handleOk}
					style={{ maxWidth: 775 }}
					onCancel={handleCancel}
				>
					<Form
						name="basic"
						labelCol={{ span: 8 }}
						wrapperCol={{ span: 24 }}
						style={{ maxWidth: 775 }}
						initialValues={{ remember: true }}
						layout="vertical"
						// item="center"
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
						autoComplete="off"
					>
						<Form.Item
							className="w-[470px]"
							label={
								<span className="text-customCategoryColor">
									Announcement Name
								</span>
							}
							name="employee"
						>
							<Select className="h-[40px] w-[80px]">
								<Select.Option value="sick">Sick Leave</Select.Option>
								<Select.Option value="urgent">Urgent Leave</Select.Option>
								<Select.Option value="fmla">FMLA</Select.Option>
								<Select.Option value="half">Half Leave</Select.Option>
							</Select>
						</Form.Item>

						<Form.Item
							label={
								<span className="text-customCategoryColor">Description</span>
							}
							name="notice"
						>
							<Input placeholder="Subject" className="h-[40px] w-[470px]" />
						</Form.Item>

						<Form.Item
							label={
								<span className="text-customCategoryColor">Department</span>
							}
							name="Department"
						>
							<Select className="h-[40px] w-[80px]">
								<Select.Option value="sick">Sick Leave</Select.Option>
								<Select.Option value="urgent">Urgent Leave</Select.Option>
								<Select.Option value="fmla">FMLA</Select.Option>
								<Select.Option value="half">Half Leave</Select.Option>
							</Select>
						</Form.Item>

						<Form.Item
							label={<span className="text-customCategoryColor">Set To</span>}
							name="set"
						>
							<Radio.Group onChange={onChange} value={value}>
								<Radio value="3">Department</Radio>
								<Radio value="2">Employee Type</Radio>
								<Radio value="1">All Employees</Radio>
							</Radio.Group>
						</Form.Item>

						<Form.Item
							label={
								<span className="text-customCategoryColor">Department</span>
							}
							name="Department"
						>
							<Select className="h-[40px] w-[80px]">
								<Select.Option value="sick">Sick Leave</Select.Option>
								<Select.Option value="urgent">Urgent Leave</Select.Option>
								<Select.Option value="fmla">FMLA</Select.Option>
								<Select.Option value="half">Half Leave</Select.Option>
							</Select>
						</Form.Item>
					</Form>
				</Modal>
			</section>
		</>
	);
}