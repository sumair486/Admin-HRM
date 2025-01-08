import React, { useState,useEffect } from "react";

import { Form,Flex, Button,Row,Radio,Divider,Card,Typography
	, Select,Modal,Input,Col, Table } from "antd";

import { Link } from "react-router-dom";



import brad_logo from "../../../public/assets/Notices 1/home.png";
import BreadcrumbComponent from "../../layout/BreadcrumbComponent";
import SearchComponent from "../../layout/SearchComponent";
import edit_icon from "../../../public/assets/Employees 1/pencil (1).png";
import delete_icon from "../../../public/assets/Employees 1/trash (1).png";
import print_logo from "../../../public/assets/Notices 1/Group 164179.png";
import download_logo from "../../../public/assets/Notices 1/Group 164178.png";

import tableData from "../../pages/datatable/tableData.json";



export default function payroll() {
	const { Title, Text } = Typography;
	const { Option } = Select;

	
	const [data, setData] = useState([]);
	useEffect(() => {
		setData(
			tableData.map((item) => ({
				...item,
				id : (
					<Link onClick={empShowModal} className="text-sidebarBgColor underline">
						{item.id}
					</Link>
				),
			}))
		);
	}, []);

// model 1
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

	//model 2

	const [isEmpModalOpen, setIsEmpModalOpen] = useState(false);
	const empShowModal = () => {
		setIsEmpModalOpen(true);
	};
	const empHandleOk = () => {
		setIsEmpModalOpen(false);
	};
	const empHandleCancel = () => {
		setIsEmpModalOpen(false);
	};

	//model 3
	
	const [isAddModalOpen, setIsAddModalOpen] = useState(false);
	const AddShowModal = () => {
		setIsAddModalOpen(true);
	};
	const AddHandleOk = () => {
		setIsAddModalOpen(false);
	};
	const AddHandleCancel = () => {
		setIsAddModalOpen(false);
	};
	

	
	const [selectedRowKeys, setSelectedRowKeys] = useState([]);
	

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
			title: "Status",
			dataIndex: "payroll_status",
			key: "status",
			sorter: (a, b) => a.status.localeCompare(b.status),
			render: (text) => (
				<span
					style={{
						color:
							text === "Paid" ? "#57b81b" : text === "Unpaid" ? "#e62e53" : "#000",
						background: "#e9f9e8",padding:"5px",borderRadius:"10px",
					}}
				>
					{text}
				</span>
			),
		},


		{
			title: "Net Salary",
			dataIndex: "salary",
			key: "salary",
			sorter: (a, b) => a.salary.localeCompare(b.salary),
		},

		{
			title: "Action",
			dataIndex: "action",
			key: "action",
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
	

	const rowSelection = {
		selectedRowKeys,
		onChange: (keys) => setSelectedRowKeys(keys),
	};
	const breadcrumbItems = [
		{ icon: brad_logo },
		{ title: "Payrolls", href: "" },
	];

	return (
		<>
			<div>
				<BreadcrumbComponent breadcrumbItems={breadcrumbItems} />
			</div>
			<section className="mt-3">
				<div className="flex flex-row justify-between">
					<SearchComponent />
					<div className="space-x-3">
						<Link
							className="bg-sidebarBgColor p-2 text-white rounded-md"
							onClick={() => setSelectedRowKeys(data.map((item) => item.key))}
						>
							Pay All
						</Link>

						<Link
							className="bg-sidebarBgColor p-2 text-white rounded-md"
							onClick={showModal}
						>
						

							+ New Payroll
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
							<h1 className="text-gray-400">Filter</h1>
						</div>
						<div className="px-2">
							<Select
								style={{
									width: 239,
									height: 40,
								}}
							>
								<Option value="select">All</Option>
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

			<section>
				<Modal
					title="Add Payroll"
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
							label={
								<span className="text-customCategoryColor">Employee Name</span>
							}
							name="employee"
						>
							<Select className="h-[40px] w-[207px]">
									<Select.Option value="sick">Joy</Select.Option>
									<Select.Option value="urgent">John</Select.Option>
									<Select.Option value="fmla">Roy</Select.Option>
								
								</Select>
							
						</Form.Item>
						<Flex className="space-x-4">
							<Form.Item
							className="w-[280px]"
								label={<span className="text-customCategoryColor">Month</span>}
								name="month"
							>

								<Select className="h-[40px] w-[307px]">
									<Select.Option value="sick">Joy</Select.Option>
									<Select.Option value="urgent">John</Select.Option>
									<Select.Option value="fmla">Roy</Select.Option>
								
								</Select>
								
							</Form.Item>
							<Form.Item
								className="w-[280px]"
								label={
									<span className="text-customCategoryColor">Year</span>
								}
								name="year"
							>
								<Select className="h-[40px]">
									<Select.Option value="sick">Sick Leave</Select.Option>
									<Select.Option value="urgent">Urgent Leave</Select.Option>
									<Select.Option value="fmla">FMLA</Select.Option>
									<Select.Option value="half">Half Leave</Select.Option>
								</Select>
							</Form.Item>
						</Flex>

						
					</Form>
				</Modal>
			</section>
{/* model 2  */}
			<section>
				<Modal
				
				open={isEmpModalOpen}
				onOk={empHandleOk}
				style={{ maxWidth: 775 }}
				onCancel={empHandleCancel}
				>
					<Form
					name="basic"
					labelCol={{ span: 8 }}
					wrapperCol={{ span: 24 }}
					style={{ maxWidth: 775 }}
					initialValues={{ remember: true }}
					layout="vertical"
				
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete="off"
					>



					<div className="px-6 flex justify-between">
					<div>
					<h1 className="font-bold">Edit Payslip-123</h1>
					</div>
					<div className="space-x-3 flex mr-3">
					<img className="" src={print_logo}/>
					<img src={download_logo}/>
					</div>
					
					</div>

<Card  bordered={false} >
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Text strong>Employee Name:</Text> John Doe
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Text strong>Created by:</Text> Ahmad Jatoi
        </Col>
        <Col span={12}>
          <Text strong>Designation:</Text> Team Manager
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Text strong>Payment Status:</Text>
         
        </Col>
        <Col span={12}>
          <Text strong>Payment Method:</Text> On Cash
        </Col>

		<Col span={12} style={{ textAlign: 'right' }}>
		<Radio.Group defaultValue="paid">
            <Radio value="paid">Paid</Radio>
            <Radio value="unpaid">Unpaid</Radio>
          </Radio.Group>
		</Col>
      </Row>

      

	  <div className="container mt-5">
      <div className="grid grid-cols-1 gap-4">
       
        <div className=" rounded-lg shadow-md">
         
          <table className="w-full text-left border-separate border-spacing-0">
            <thead>
              <tr className="bg-sidebarBgColor text-white">
                <th className="py-2 px-4 font-medium border-b border-blue-600">
                  Earnings
                </th>
                <th className="py-2 px-4 font-medium border-b border-blue-600 text-right">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-blue-200">
                <td className="py-2 px-4 border-b">Basic Salary</td>
                <td className="py-2 px-4 border-b text-right">500 SAR</td>

              </tr>
			  <tr>

			  <button onClick={AddShowModal} className="py-2 px-4 border-b  text-sidebarBgColor">+ Add</button>

			  </tr>
			  
            </tbody>
          </table>
        </div>

        
        <div className=" rounded-lg shadow-md">
        
          <table className="w-full text-left border-separate border-spacing-0">
            <thead>
              <tr className="bg-sidebarBgColor text-white">
                <th className="py-2 px-4 font-medium border-b border-blue-600">
                  Deductions
                </th>
                <th className="py-2 px-4 font-medium border-b border-blue-600 text-right">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-blue-200">
                <td className="py-2 px-4 border-b">Advance Cash</td>
                <td className="py-2 px-4 border-b text-right">500 SAR</td>
              </tr>
			  <tr>

			  <button onClick={AddShowModal} className="py-2 px-4 border-b  text-sidebarBgColor">+ Add</button>


				</tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

      {/* <Divider /> */}
		<h1 className="mt-5 font-bold">Summary</h1>
	  <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
		
	  
        <Col span={12}>
          <Text strong>Earning</Text> 
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Text strong>500 SAR</Text> 
        </Col>
        <Col span={12}>
          <Text strong>Deduction</Text> 
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Text strong>500 SAR</Text>
         
        </Col>

		<Divider />

		<Col  span={12} >
          <Text className="text-sidebarBgColor" strong>Total</Text> 
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Text className="text-sidebarBgColor"  strong>500 SAR</Text>
         
        </Col>

      </Row>


      
    </Card>
					</Form>
				</Modal>
			</section>


			{/* model 3  */}

			<section>
			<Modal
					title="Add Other Earnings"
					open={isAddModalOpen}
					onOk={AddHandleOk}
					style={{ maxWidth: 775 }}
					onCancel={AddHandleCancel}
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
							label={
								<span className="text-customCategoryColor"> Name</span>
							}
							name="employee"
						>
							<Select className="h-[40px] w-[207px]">
									<Select.Option value="sick">Joy</Select.Option>
									<Select.Option value="urgent">John</Select.Option>
									<Select.Option value="fmla">Roy</Select.Option>
								
								</Select>
							
						</Form.Item>


						<Form.Item
							label={
								<span className="text-customCategoryColor"> Amount</span>
							}
							name="employee"
						>
							<Select className="h-[40px] w-[207px]">
									<Select.Option value="sick">Joy</Select.Option>
									<Select.Option value="urgent">John</Select.Option>
									<Select.Option value="fmla">Roy</Select.Option>
								
								</Select>
							
						</Form.Item>
						

						
					</Form>
				</Modal>
			</section>

		</>
	);
}
