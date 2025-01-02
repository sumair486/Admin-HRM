import React, { useState } from "react";

import {
	Breadcrumb,
	Button,
	Checkbox,
	DatePicker,
	Flex,
	Form,
	Input,
	Modal,
	Popconfirm,
	Select,
	Table,
	TimePicker,
} from "antd";
import moment from "moment";
import { Link } from "react-router-dom";

import { SearchOutlined } from "@ant-design/icons";

import edit_icon from "../../../public/assets/Employees 1/pencil (1).png";
import delete_icon from "../../../public/assets/Employees 1/trash (1).png";
import brad_logo from "../../../public/assets/Notices 1/home.png";
import BreadcrumbComponent from "../../layout/BreadcrumbComponent";
import SearchComponent from "../../layout/SearchComponent";

export default function employees() {
	const { Option } = Select;

	const [data, setData] = useState([
		{
			s_no: "1",
			key: "1",
			id: (
				<Link to="/employees-detail" className="text-sidebarBgColor underline">
					EMP_01
				</Link>
			),
			name: "John Doe",
			number: "+03440948044",
			designation: "Supervisor",
			request: "Sick Leave",
			date: "12/05/2021",
			status: "New",
		},
		{
			s_no: "2",
			key: "2",
			id: <h1 className="text-sidebarBgColor underline">EMP_02</h1>,
			name: "Jane Smith",
			number: "+03440948044",
			designation: "Manager",
			request: "Advanced Cash",
			date: "12/05/2021",
			status: "Approved",
		},
		{
			s_no: "3",
			key: "3",
			id: <h1 className="text-sidebarBgColor underline">EMP_03</h1>,
			name: "Sam Wilson",
			number: "+03440948044",
			designation: "Engineer",
			request: "Loan Request",
			date: "12/05/2021",
			status: "Rejected",
		},
		{
			s_no: "4",
			key: "4",
			id: <h1 className="text-sidebarBgColor underline">EMP_04</h1>,
			name: "Emily Davis",
			number: "+03440948044",
			designation: "Designer",
			request: "Sick Leave",
			date: "12/05/2021",
			status: "New",
		},
		{
			s_no: "5",
			key: "5",
			id: <h1 className="text-sidebarBgColor underline">EMP_05</h1>,
			name: "Michael Brown",
			number: "+03440948044",
			designation: "Technician",
			request: "Sick Leave",
			date: "12/05/2021",
			status: "Rejected",
		},
		{
			s_no: "6",

			key: "6",
			id: <h1 className="text-sidebarBgColor underline">EMP_06</h1>,
			name: "Sophia Green",
			number: "+03440948044",
			designation: "HR",
			request: "Sick Leave",
			date: "12/05/2021",
			status: "Approved",
		},
		{
			s_no: "7",
			key: "7",
			id: <h1 className="text-sidebarBgColor underline">EMP_07</h1>,
			name: "James Taylor",
			number: "+03440948044",
			designation: "Accountant",
			request: "Sick Leave",
			date: "12/05/2021",
			status: "New",
		},
		{
			s_no: "8",
			key: "8",
			id: <h1 className="text-sidebarBgColor underline">EMP_08</h1>,
			name: "Olivia White",
			number: "+03440948044",
			designation: "Supervisor",
			request: "Sick Leave",
			date: "12/05/2021",
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
			title: "Full Name",
			dataIndex: "name",
			key: "name",
			sorter: (a, b) => a.name.localeCompare(b.name),
		},
		{
			title: "Phone Number",
			dataIndex: "number",
			key: "number",
			sorter: (a, b) => a.number.localeCompare(b.number),
		},
		{
			title: "Designation",
			dataIndex: "designation",
			key: "designation",
			sorter: (a, b) => a.designation.localeCompare(b.designation),
		},

		{
			title: "Department",
			dataIndex: "request",
			key: "request",
			sorter: (a, b) => a.request.localeCompare(b.request),
		},
		{
			title: "Date",
			dataIndex: "date",
			key: "date",
			sorter: (a, b) =>
				moment(a.date, "DD/MM/YYYY") - moment(b.date, "DD/MM/YYYY"),
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
		{ title: "Employees", href: "" },
	];

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
							to="/add-employees"
							className="bg-sidebarBgColor rounded-md px-2 py-2 text-white"
						>
							+ Add Employees
						</Link>
					</div>
				</div>
			</section>

			<section className="mt-5 rounded-lg border border-gray-300">
				<div className="flex items-center justify-between px-5 py-3">
					<div>
						<h1 className="text-sidebarBgColor text-2xl font-semibold">
							Total(23)
						</h1>
					</div>
					<div className="flex items-center">
						<div>
							<h1 className="text-gray-400">Department</h1>
						</div>
						<div className="px-2">
							<Select
								style={{
									width: 239,
									height: 40,
								}}
							>
								<Option value="select">Select 1</Option>
								<Option>Select 2</Option>
								<Option>Select 3</Option>
							</Select>
						</div>
						<div>
							<h1 className="text-gray-400">Designation</h1>
						</div>
						<div className="px-2">
							<Select
								style={{
									width: 239,
									height: 40,
								}}
							>
								<Option value="select">Select 1</Option>
								<Option>Select 2</Option>
								<Option>Select 3</Option>
							</Select>
						</div>
						<div>
							<h1 className="text-gray-400">Employment</h1>
						</div>
						<div className="px-2">
							<Select
								style={{
									width: 239,
									height: 40,
								}}
							>
								<Option value="select">Select 1</Option>
								<Option>Select 2</Option>
								<Option>Select 3</Option>
							</Select>
						</div>
					</div>
				</div>

				<Table columns={columns} dataSource={data} pagination={false} />
			</section>
		</>
	);
}
