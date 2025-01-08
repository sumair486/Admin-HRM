import React, { useState, useEffect } from "react";

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

import brad_logo from "../../../public/assets/Notices 1/home.png";
import BreadcrumbComponent from "../../layout/BreadcrumbComponent";
import SearchComponent from "../../layout/SearchComponent";
import tableData from "../../pages/datatable/tableData.json";
import { Link } from "react-router-dom";


export default function Request() {
	const [showLeaveInputs, setShowLeaveInputs] = useState(false);
	const [data, setData] = useState([]);

	useEffect(() => {
		setData(
			tableData.map((item) => ({
				...item,
				req_id : (
					<Link to="/requestpage" className="text-sidebarBgColor underline">
						{item.req_id}
					</Link>
				),
			}))
		);
	}, []);

	const onFinish = (values) => {
		console.log("Success:", values);
	};
	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

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

	const statusColors = {
		New: "#52c41a",
		Approved: "#ff4d4f",
		Rejected: "#faad14",
	};

	

	const onValuesChange = (changedValues, allValues) => {
		if (changedValues.requestType !== undefined) {
			setShowLeaveInputs(changedValues.requestType === "leaves");
		}
		console.log(allValues);
	};

	const { Option } = Select;

	const columns = [
		{
			title: "S.No",
			dataIndex: "key",
			key: "s_no",
			sorter: (a, b) => a.s_no.localeCompare(b.s_no),
		},
		{
			title: "Id",
			dataIndex: "req_id",
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
			title: "Request Type",
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

	const breadcrumbItems = [{ icon: brad_logo }, { title: "Request", href: "" }];

	return (
		<>
			<div>
				<BreadcrumbComponent breadcrumbItems={breadcrumbItems} />
			</div>

			<section className="mt-3">
				<div className="flex flex-row justify-between">
					<SearchComponent />
					<div>
						<Button
							className="bg-sidebarBgColor text-white"
							onClick={showModal}
						>
							+ Add Request
						</Button>
					</div>
				</div>
			</section>

			<section className="mt-5 rounded-lg border border-gray-300">
				<div className="flex justify-between px-5 py-3">
					<div>
						<h1 className="text-sidebarBgColor text-2xl font-semibold">
							Total(23)
						</h1>
					</div>
					<div className="flex items-center">
						<div>
							<h1 className="text-customCategoryColor">Category</h1>
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
					title="Add Request"
					open={isModalOpen}
					onOk={handleOk}
					style={{ maxWidth: 475 }}
					onCancel={handleCancel}
				>
					<Form
						name="basic"
						labelCol={{ span: 8 }}
						wrapperCol={{ span: 24 }}
						style={{ maxWidth: 475 }}
						initialValues={{ remember: true }}
						layout="vertical"
						// item="center"
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
						autoComplete="off"
						onValuesChange={onValuesChange}
					>
						<Form.Item
							label={
								<span className="text-customCategoryColor">Employee Name</span>
							}
							name="employeeName"
						>
							<Select className="h-[40px]">
								<Select.Option value="Alex">Alex</Select.Option>
								<Select.Option value="John">John</Select.Option>
								<Select.Option value="Roy">Roy</Select.Option>
							</Select>
						</Form.Item>

						<Form.Item
							label={
								<span className="text-customCategoryColor">Request Type</span>
							}
							name="requestType"
						>
							<Select className="h-[40px]">
								<Select.Option value="leaves">Leaves</Select.Option>
								<Select.Option value="cash">Advanced Cash</Select.Option>
								<Select.Option value="office">Office Equipments</Select.Option>
								<Select.Option value="transport">Transport</Select.Option>
							</Select>
						</Form.Item>

						{showLeaveInputs && (
							<>
								<Form.Item
									label={
										<span className="text-customCategoryColor">Leave Type</span>
									}
									name="leaveType"
								>
									<Select className="h-[40px]">
										<Select.Option value="sick">Sick Leave</Select.Option>
										<Select.Option value="urgent">Urgent Leave</Select.Option>
										<Select.Option value="fmla">FMLA</Select.Option>
										<Select.Option value="half">Half Leave</Select.Option>
									</Select>
								</Form.Item>

								<Flex className="space-x-4">
									<Form.Item
										label={
											<span className="text-customCategoryColor">From</span>
										}
										name="fromDate"
									>
										<DatePicker className="h-[40px] w-[207px]" />
									</Form.Item>
									<Form.Item
										label={<span className="text-customCategoryColor">To</span>}
										name="toDate"
									>
										<DatePicker className="h-[40px] w-[207px]" />
									</Form.Item>
								</Flex>

								<Form.Item
									label={
										<span className="text-customCategoryColor">
											Description
										</span>
									}
									name="description"
								>
									<Input.TextArea className="h-[78px]" />
								</Form.Item>
							</>
						)}
					</Form>
				</Modal>
			</section>
		</>
	);
}
