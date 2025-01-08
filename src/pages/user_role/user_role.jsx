import React, { useState,useEffect } from "react";

import { Flex, Form, Input, Modal, Radio, Select, Table,Tabs ,Checkbox, Row, Col} from "antd";
import moment from "moment";
import { Link } from "react-router-dom";



import edit_icon from "../../../public/assets/Employees 1/pencil (1).png";
import delete_icon from "../../../public/assets/Employees 1/trash (1).png";
import brad_logo from "../../../public/assets/Notices 1/home.png";
import BreadcrumbComponent from "../../layout/BreadcrumbComponent";
import SearchComponent from "../../layout/SearchComponent";
import tableData from "../../pages/datatable/tableData.json";
import TextArea from "antd/es/input/TextArea";


export default function user_role() {
	const { Option } = Select;
	const { TextArea } = Input;

	const [activeKey, setActiveKey] = useState("1");

	const onChange = (key) => {
	  setActiveKey(key);
	};

	const [permissions, setPermissions] = useState({
		permission1: { view: false, edit: false, delete: false },
		permission2: { view: false, edit: false, delete: false },
		permission3: { view: false, edit: false, delete: false },
		permission4: { view: false, edit: false, delete: false },
	  });

	  const handlePermissionChange = (module, action, checked) => {
		setPermissions((prev) => ({
		  ...prev,
		  [module]: { ...prev[module], [action]: checked },
		}));
	  };
	
	  const handleSelectAll = (checked) => {
		const updatedPermissions = Object.keys(permissions).reduce((acc, module) => {
		  acc[module] = { view: checked, edit: checked, delete: checked };
		  return acc;
		}, {});
		setPermissions(updatedPermissions);
	  };

	  // model for user

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


	// role model 
	const [isRoleModalOpen, setRoleIsModalOpen] = useState(false);
	const showRoleModal = () => {
		setRoleIsModalOpen(true);
	};
	const handleRoleOk = () => {
		setRoleIsModalOpen(false);
	};
	const handleRoleCancel = () => {
		setRoleIsModalOpen(false);
	};

	const onFinish = (values) => {
		console.log("Success:", values);
	};
	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	// user column data
	
	const [data, setData] = useState([]);
	useEffect(() => {
		setData(
			tableData.map((item) => ({
				...item,
				us_id : (
					<Link to="/users-detail" className="text-sidebarBgColor underline">
						{item.us_id}
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
			dataIndex: "us_id",
			key: "id",
			sorter: (a, b) => a.id.localeCompare(b.id),
		},
		
		{
			title: "User Name",
			dataIndex: "name",
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


	// role data 

	// user column data
	
	const [roledata, setroleData] = useState([]);
	useEffect(() => {
		setroleData(
			tableData.map((item) => ({
				...item,
				rl_id : (
					<Link to="/roles-detail" className="text-sidebarBgColor underline">
						{item.rl_id}
					</Link>
				),
			}))
		);
	}, []);

	

	const rolecolumns = [
		{
			title: "S.No",
			dataIndex: "key",
			key: "s_no",
			sorter: (a, b) => a.s_no.localeCompare(b.s_no),
		},
		{
			title: "Id",
			dataIndex: "rl_id",
			key: "id",
			sorter: (a, b) => a.id.localeCompare(b.id),
		},
		
		{
			title: "Role Name",
			dataIndex: "role",
			key: "holiday",
			sorter: (a, b) => a.role.localeCompare(b.role),
		},

		{
			title: "Description",
			dataIndex: "role_des",
			key: "role_des",
			sorter: (a, b) => a.role_des.localeCompare(b.role_des),
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

	//tab data

	const items = [
		{
		  key: '1',
		  label: 'User',
		  children: 

		  <section className="mt-5 rounded-lg border border-gray-300">
				<div className="flex items-center justify-between px-5 py-3">
					<div>
						<h1 className="text-2xl font-semibold text-sidebarBgColor">
							Total(10)
						</h1>
					</div>
					<div className="flex items-center space-x-3">
					<div>

					<SearchComponent />

					</div>
				<div>
					<Link
						onClick={showModal}
						className="rounded-md bg-sidebarBgColor p-3 text-white"
					>
						+ New User
					</Link>
				</div>
				</div>
				</div>

				<Table columns={columns} dataSource={data} pagination={true} />
			</section>
		},
		{
		  key: '2',
		  label: 'Roles',
		  children: 
		  <section className="mt-5 rounded-lg border border-gray-300">
		  <div className="flex items-center justify-between px-5 py-3">
			  <div>
				  <h1 className="text-2xl font-semibold text-sidebarBgColor">
					  Total(5)
				  </h1>
			  </div>
			  <div className="flex items-center space-x-3">
			  <div>

			  <SearchComponent />

			  </div>
		  <div>
			  <Link
				  onClick={showRoleModal}
				  className="rounded-md bg-sidebarBgColor p-3 text-white"
			  >
				  + New Role
			  </Link>
		  </div>
		  </div>
		  </div>

		  <Table columns={rolecolumns} dataSource={roledata} pagination={true} />
	  </section>
		},
		
	  ];

	  const handleDelete = (key) => {
		const newData = data.filter((item) => item.key !== key);
		setData(newData);
	};

	const breadcrumbItems = [
		{ icon: brad_logo },
		{ title: "Users and Roles", href: "" },
	];
	

	
	
	  

	return (
		<>
			<div>
				<BreadcrumbComponent breadcrumbItems={breadcrumbItems} />
			</div>

			{/* <Tabs   type="card" defaultActiveKey="1" items={items} onChange={onChange} /> */}

			
			<Tabs
  type="card"
  activeKey={activeKey}
  onChange={onChange}
  items={items.map((tab) => ({
    ...tab,
    label: (
      <div 
        style={{
          backgroundColor: activeKey === tab.key ? "#3B9EA2" : "white",
          color: activeKey === tab.key ? "white" : "black",
		  padding: "8px 26px",
        //   borderRadius: "4px",
        }}
      >
        {tab.label}
      </div>
    ),
  }))}
/>

			

			<section>
				<Modal
					title="Add User"
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
								<span className="text-customCategoryColor">User Name</span>
							}
							name="name"
						>
							<Input placeholder="John Roy" className="h-[40px] w-[470px]" />
						</Form.Item>

						<Form.Item
							label={
								<span className="text-customCategoryColor">Password</span>
							}
							name="password"
						>
							<Input placeholder="Password" className="h-[40px] w-[470px]" />
						</Form.Item>

					

						<Form.Item
							className="w-[470px]"
							label={
								<span className="text-customCategoryColor">
									Role
								</span>
							}
							name="role"
						>
							<Select className="h-[40px] w-[80px]">
								<Select.Option value="Senior">Senior</Select.Option>
								<Select.Option value="Junior">Junior</Select.Option>
								
							</Select>
						</Form.Item>

						

				


					</Form>
				</Modal>
			</section>

			<section>
  <Modal
    title="Add Role"
    open={isRoleModalOpen}
    onOk={handleRoleOk}
    onCancel={handleRoleCancel}
    style={{ maxWidth: 775 }}
  >
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 24 }}
      style={{ maxWidth: 775 }}
      layout="vertical"
      onFinish={(values) => console.log(values)}
    >
      <Form.Item
        label={<span className="text-customCategoryColor">Role Name</span>}
        name="role_name"
        rules={[{ required: true, message: 'Role Name is required!' }]}
      >
        <Input placeholder="Supervisor" className="h-[40px] w-[470px]" />
      </Form.Item>

      <Form.Item
        label={<span className="text-customCategoryColor">Description</span>}
        name="description"
      >
        <TextArea placeholder="Description" className="h-[40px] w-[470px]" />
      </Form.Item>

      <Form.Item >
		<label>Permissions</label>
        <Checkbox
          onChange={(e) => handleSelectAll(e.target.checked)}
          style={{ marginBottom: '10px' ,float:"right"}}
        >
          Select All
        </Checkbox>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead className="bg-blue-100">
            <tr>
              <th style={{ textAlign: 'left', padding: '8px' }}>Module</th>
              <th style={{ textAlign: 'center', padding: '8px' }}>View</th>
              <th style={{ textAlign: 'center', padding: '8px' }}>Edit</th>
              <th style={{ textAlign: 'center', padding: '8px' }}>Delete</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(permissions).map((module) => (
              <tr key={module}>
                <td style={{ padding: '8px' }}>{module.replace('permission', 'Permission ')}</td>
                {['view', 'edit', 'delete'].map((action) => (
                  <td style={{ textAlign: 'center', padding: '8px' }} key={action}>
                    <Checkbox
                      checked={permissions[module][action]}
                      onChange={(e) =>
                        handlePermissionChange(module, action, e.target.checked)
                      }
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Form.Item>
    </Form>
  </Modal>
</section>

		</>
	);
}
