import React, { useState } from "react";

import { Breadcrumb, Button, Input, Select, Table, TimePicker } from "antd";
import moment from "moment";
import { Link } from "react-router-dom";



import brad_logo from "../../../public/assets/Notices 1/home.png";
import BreadcrumbComponent from "../../layout/BreadcrumbComponent";
import SearchComponent from "../../layout/SearchComponent";
import tableData from "../../pages/datatable/tableData.json";

export default function Attendance() {
	const { Option } = Select;

	const statusColors = {
		Present: "#52c41a",
		Absent: "#ff4d4f",
		Late: "#faad14",
		"Time Off": "#d9d9d9",
		Leave: "#40a9ff",
	};

	const [selectedRowKeys, setSelectedRowKeys] = useState([]);
	const [data, setData] = useState(tableData);

	
	const columns = [
		{
			title: "Id",
			dataIndex: "id",
			key: "id",
			sorter: (a, b) => a.id.localeCompare(b.id),
		},
		{
			title: "Employee Name",
			dataIndex: "name",
			key: "name",
			sorter: (a, b) => a.name.localeCompare(b.name),
		},
		{
			title: "Designation",
			dataIndex: "designation",
			key: "designation",
			sorter: (a, b) => a.designation.localeCompare(b.designation),
		},
		{
			title: "Date",
			dataIndex: "date",
			key: "date",
			sorter: (a, b) =>
				moment(a.date, "DD/MM/YYYY") - moment(b.date, "DD/MM/YYYY"),
		},
		{
			title: "Time In",
			dataIndex: "timeIn",
			key: "timeIn",
			render: (_, record) => (
				<TimePicker
					use12Hours
					format="h:mm A"
					defaultValue={moment(record.timeIn, "h:mm A")}
					onChange={(time, timeString) =>
						handleTimeChange(record.key, "timeIn", timeString)
					}
				/>
			),
			sorter: (a, b) => moment(a.timeIn, "h:mm A") - moment(b.timeIn, "h:mm A"),
		},
		{
			title: "Time Out",
			dataIndex: "timeOut",
			key: "timeOut",
			render: (_, record) => (
				<TimePicker
					use12Hours
					format="h:mm A"
					defaultValue={moment(record.timeOut, "h:mm A")}
					onChange={(time, timeString) =>
						handleTimeChange(record.key, "timeOut", timeString)
					}
				/>
			),
			sorter: (a, b) =>
				moment(a.timeOut, "h:mm A") - moment(b.timeOut, "h:mm A"),
		},
		{
			title: "Status",
			dataIndex: "status",
			key: "status",
			render: (_, record) => (
				<Select
					defaultValue={record.status}
					value={record.status}
					onChange={(value) => handleStatusChange(record.key, value)}
					style={{
						width: 120,
						backgroundColor: statusColors[record.status],
						color: "white",
						fontWeight: "bold",
					}}
				>
					{Object.entries(statusColors).map(([status, color]) => (
						<Option key={status} value={status}>
							<span style={{ color }}>{status}</span>
						</Option>
					))}
				</Select>
			),
		},
	];

	const handleStatusChange = (key, value) => {
		const newData = data.map((item) =>
			item.key === key ? { ...item, status: value } : item,
		);
		setData(newData);
	};

	const handleTimeChange = (key, field, value) => {
		const newData = data.map((item) =>
			item.key === key ? { ...item, [field]: value || item[field] } : item,
		);
		setData(newData);
	};

	const rowSelection = {
		selectedRowKeys,
		onChange: (keys) => setSelectedRowKeys(keys),
	};
	const breadcrumbItems = [
		{ icon: brad_logo },
		{ title: "Attendance", href: "" },
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
							className="bg-sidebarBgColor p-2 text-white"
							onClick={() => setSelectedRowKeys(data.map((item) => item.key))}
						>
							Present All
						</Link>
					</div>
				</div>
			</section>{" "}
			<section className="mt-5 rounded-lg border border-gray-300">
				<div className="flex justify-between px-5 py-3">
					<div>
						<h1 className="text-sidebarBgColor text-2xl font-semibold">
							Total(23)
						</h1>
					</div>
					<div className="flex items-center">
						<div>
							<h1 className="text-gray-400">Category</h1>
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

				<Table
					rowSelection={{
						type: "checkbox",
						...rowSelection,
					}}
					columns={columns}
					dataSource={data}
					pagination={true}
				/>
			</section>
		</>
	);
}
