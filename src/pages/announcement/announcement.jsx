import React, { useState,useEffect } from "react";

import { Flex, Form, Input, Modal, Radio, Select, Table } from "antd";
import moment from "moment";
import { Link } from "react-router-dom";



import edit_icon from "../../../public/assets/Employees 1/pencil (1).png";
import delete_icon from "../../../public/assets/Employees 1/trash (1).png";
import brad_logo from "../../../public/assets/Notices 1/home.png";
import BreadcrumbComponent from "../../layout/BreadcrumbComponent";
import SearchComponent from "../../layout/SearchComponent";
import tableData from "../../pages/datatable/tableData.json";


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
	
	const [data, setData] = useState([]);
	useEffect(() => {
		setData(
			tableData.map((item) => ({
				...item,
				an_id : (
					<Link to="/announcements-details" className="text-sidebarBgColor underline">
						{item.an_id}
					</Link>
				),
			}))
		);
	}, []);

	

	const columns = [
		{
			title: "S.No",
			dataIndex: "key",
			key: "s_no",
			sorter: (a, b) => a.s_no.localeCompare(b.s_no),
		},
		{
			title: "Id",
			dataIndex: "an_id",
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

	const [selectedOption, setSelectedOption] = useState("");

	const handleRadioChange = (e) => {
		setSelectedOption(e.target.value);
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

				<Table columns={columns} dataSource={data} pagination={true} />
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
						label={<span className="text-customCategoryColor">Set To</span>}
						name="set"
					>
						<Radio.Group onChange={handleRadioChange} value={selectedOption}>
						<Radio value="department">Department</Radio>
						<Radio value="employee">Employee Type</Radio>
						<Radio value="all">All Employees</Radio>
						</Radio.Group>
					</Form.Item>

						{(selectedOption === "department" || selectedOption === "all") && (
						<Form.Item
						label={<span className="text-customCategoryColor">Department</span>}
						name="Department"
						>
						<Select className="h-[40px] w-[80px]">
							<Select.Option value="sick">Sick Leave</Select.Option>
							<Select.Option value="urgent">Urgent Leave</Select.Option>
							<Select.Option value="fmla">FMLA</Select.Option>
							<Select.Option value="half">Half Leave</Select.Option>
						</Select>
						</Form.Item>
      					)}

				{(selectedOption === "employee" || selectedOption === "all") && (
					<Form.Item
					label={<span className="text-customCategoryColor">Employee</span>}
					name="Employee"
					>
					<Select className="h-[40px] w-[80px]">
						<Select.Option value="joy">Joy</Select.Option>
						<Select.Option value="Trump">Trump</Select.Option>
						<Select.Option value="Root">Root</Select.Option>
						<Select.Option value="Micheal">Micheal</Select.Option>
					</Select>
					</Form.Item>
				)}


					</Form>
				</Modal>
			</section>
		</>
	);
}
