import React, { useState ,useEffect} from "react";

import { Flex, Form, Input, Modal, Select, Table } from "antd";
import moment from "moment";
import { Link } from "react-router-dom";


import edit_icon from "../../../public/assets/Employees 1/pencil (1).png";
import delete_icon from "../../../public/assets/Employees 1/trash (1).png";
import brad_logo from "../../../public/assets/Notices 1/home.png";
import BreadcrumbComponent from "../../layout/BreadcrumbComponent";
import SearchComponent from "../../layout/SearchComponent";
import tableData from "../../pages/datatable/tableData.json";


export default function notice() {
	const { Option } = Select;


	const [data, setData] = useState([]);


	useEffect(() => {
		setData(
			tableData.map((item) => ({
				...item,
				notice_id : (
					<Link to="/notices-detail" className="text-sidebarBgColor underline">
						{item.notice_id}
					</Link>
				),
			}))
		);
	}, []);

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


	const columns = [
		{
			title: "S.No",
			dataIndex: "key",
			key: "s_no",
			sorter: (a, b) => a.s_no.localeCompare(b.s_no),
		},
		{
			title: "Id",
			dataIndex: "notice_id",
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
			title: "Full Name",
			dataIndex: "name",
			key: "name",
			sorter: (a, b) => a.name.localeCompare(b.name),
		},

		{
			title: "Acknowledged",
			dataIndex: "aknowledged",
			key: "aknowledged",
			sorter: (a, b) => a.aknowledged.localeCompare(b.aknowledged),
			render: (text) => (
				<span
					style={{
						color:
							text === "Yes" ? "#57b81b" : text === "No" ? "#e62e53" : "#000",
						background: "#e9f9e8",padding:"5px",borderRadius:"10px",
					}}
				>
					{text}
				</span>
			),
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

	const breadcrumbItems = [{ icon: brad_logo }, { title: "Notices", href: "" }];

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
							className="bg-sidebarBgColor rounded-md p-3 text-white"
						>
							Send a Notices
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
							<h1 className="text-gray-400">aknowledged</h1>
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

				<Table columns={columns} dataSource={data} pagination={true} />
			</section>

			<section>
				<Modal
					title="Send a Notice"
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
						<Flex className="space-x-4">
							<Form.Item
								label={<span className="text-customCategoryColor">Notice</span>}
								name="notice"
							>
								<Input
									placeholder="Title of Notice"
									className="h-[40px] w-[207px]"
								/>
							</Form.Item>
							<Form.Item
								className="w-[280px]"
								label={
									<span className="text-customCategoryColor">Employee</span>
								}
								name="employee"
							>
								<Select className="h-[40px] w-[207]">
									<Select.Option value="sick">Sick Leave</Select.Option>
									<Select.Option value="urgent">Urgent Leave</Select.Option>
									<Select.Option value="fmla">FMLA</Select.Option>
									<Select.Option value="half">Half Leave</Select.Option>
								</Select>
							</Form.Item>
						</Flex>

						<Form.Item
							label={
								<span className="text-customCategoryColor">Description</span>
							}
							name="description"
						>
							<Input.TextArea className="h-[78px]" />
						</Form.Item>
					</Form>
				</Modal>
			</section>
		</>
	);
}
