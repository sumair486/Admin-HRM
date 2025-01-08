import React, { useState,useEffect } from "react";

import { Flex, Form,Switch, Input, Modal, Select, Table, Tabs,Button,Divider  } from "antd";
import moment from "moment";
import { Link } from "react-router-dom";



import edit_icon from "../../../public/assets/Employees 1/pencil (1).png";
import delete_icon from "../../../public/assets/Employees 1/trash (1).png";
import brad_logo from "../../../public/assets/Notices 1/home.png";
import map_logo from "../../../public/assets/Notices 1/map.png";
import tableData from "../../pages/datatable/tableData.json";


import BreadcrumbComponent from "../../layout/BreadcrumbComponent";
import SearchComponent from "../../layout/SearchComponent";

export default function organization() {

	// add field 
	 const [fields, setFields] = useState([
    { level_name: "", salary: "" }, 
  ]);

  const handleAddField = () => {
    setFields([...fields, { level_name: "", salary: "" }]);
  };

	const onChange = (key) => {
	console.log(key);
  };
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

	// level 
	const [isLevelModalOpen, setIsLevelModalOpen] = useState(false);
	const LevelshowModal = () => {
		setIsLevelModalOpen(true);
	};
	const LevelhandleOk = () => {
		setIsLevelModalOpen(false);
	};
	const LevelhandleCancel = () => {
		setIsLevelModalOpen(false);
	};

	// tab 1 data and

	const [data, setData] = useState([]);
	useEffect(() => {
		setData(
			tableData.map((item) => ({
				...item,
				dp_id : (
					<Link to="/organization-detail" className="text-sidebarBgColor underline">
						{item.dp_id}
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
			dataIndex: "dp_id",
			key: "id",
			sorter: (a, b) => a.id.localeCompare(b.id),
		},
		
		{
			title: "Department",
			dataIndex: "department",
			key: "department",
			sorter: (a, b) => a.department.localeCompare(b.department),
		},

		{
			title: "Number of Employees",
			dataIndex: "employees",
			key: "employees",
			sorter: (a, b) => a.employees.localeCompare(b.employees),
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

	// tab 2 data column  

	const [data2, setData2] = useState([]);
	useEffect(() => {
		setData2(
			tableData.map((item) => ({
				...item,
				lv_id : (
					<Link to="/level-detail" className="text-sidebarBgColor underline">
						{item.lv_id}
					</Link>
				),
			}))
		);
	}, []);

	const columns2 = [
		{
			title: "S.No",
			dataIndex: "key",
			key: "s_no",
			sorter: (a, b) => a.s_no.localeCompare(b.s_no),
		},
		{
			title: "Id",
			dataIndex: "lv_id",
			key: "id",
			sorter: (a, b) => a.id.localeCompare(b.id),
		},
		
		{
			title: "Level Group Name",
			dataIndex: "department",
			key: "level",
			sorter: (a, b) => a.level.localeCompare(b.level),
		},

		{
			title: "Number of Employees",
			dataIndex: "employees",
			key: "employees",
			sorter: (a, b) => a.employees.localeCompare(b.employees),
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

	const [data3, setData3] = useState([]);
	useEffect(() => {
		setData3(
			tableData.map((item) => ({
				...item,
				ds_id : (
					<Link to="/designation-detail" className="text-sidebarBgColor underline">
						{item.ds_id}
					</Link>
				),
			}))
		);
	}, []);
	// tab 3 

	
	const columns3 = [
		{
			title: "S.No",
			dataIndex: "key",
			key: "s_no",
			sorter: (a, b) => a.s_no.localeCompare(b.s_no),
		},
		{
			title: "Id",
			dataIndex: "ds_id",
			key: "id",
			sorter: (a, b) => a.id.localeCompare(b.id),
		},
		
		{
			title: "Designation Name",
			dataIndex: "designation",
			key: "level",
			sorter: (a, b) => a.level.localeCompare(b.level),
		},

		{
			title: "Number of Employees",
			dataIndex: "employees",
			key: "employees",
			sorter: (a, b) => a.employees.localeCompare(b.employees),
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


	const [data4, setData4] = useState([]);
	useEffect(() => {
		setData4(
			tableData.map((item) => ({
				...item,
				et_id : (
					<Link to="/designation-detail" className="text-sidebarBgColor underline">
						{item.et_id}
					</Link>
				),
			}))
		);
	}, []);

	const columns4 = [
		{
			title: "S.No",
			dataIndex: "key",
			key: "s_no",
			sorter: (a, b) => a.s_no.localeCompare(b.s_no),
		},
		{
			title: "Id",
			dataIndex: "et_id",
			key: "id",
			sorter: (a, b) => a.id.localeCompare(b.id),
		},
		
		{
			title: "Employment Name",
			dataIndex: "employment",
			key: "level",
			sorter: (a, b) => a.level.localeCompare(b.level),
		},

		{
			title: "Number of Employees",
			dataIndex: "employees",
			key: "employees",
			sorter: (a, b) => a.employees.localeCompare(b.employees),
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
		{ title: "Organizational Structure", href: "" },
	];

	// shift tab





	const shift_item = [
		{
		  key: '1.0',
		  label: 'Morning Shift',
		  children: 
		  <div class="p-6 bg-white shadow-md rounded-md space-y-6">
  
  <div class="flex justify-between items-center">
    <h2 class="text-lg font-bold text-teal-700">Organization Morning Working Time</h2>
    <div class="flex space-x-4">
      <button class="text-blue-600 hover:underline flex items-center space-x-1">
	  <img src={edit_icon}></img>
        <span>Edit</span>
      </button>
      <button class="text-red-600 hover:underline flex items-center space-x-1">
        <img src={delete_icon}></img>
        <span>Delete</span>
      </button>
    </div>
  </div>


  <div class="grid grid-cols-5 gap-4">
    <div class="flex flex-col space-y-1">
      <label class="text-sm font-semibold">Time In</label>
	  <div class="flex w-32 items-center border border-gray-300 rounded-md">
		<h1 class=" border-2 p-4">04.00</h1>
        <span class=" bg-gray-100 border-l text-sm ml-4">PM</span>
      </div>
    </div>
    <div class="flex flex-col space-y-1">
      <label class="text-sm font-semibold">Arrival Out</label>
      <div class="flex w-32 items-center border border-gray-300 rounded-md">
		<h1 class=" border-2 p-4">04.00</h1>
        <span class=" bg-gray-100 border-l text-sm ml-4">PM</span>
      </div>
    </div>
    <div class="flex flex-col space-y-1">
      <label class="text-sm font-semibold">Early Arrival</label>
      <div class="flex w-32 items-center border border-gray-300 rounded-md">
		<h1 class=" border-2 p-4">04.00</h1>
        <span class=" bg-gray-100 border-l text-sm ml-4">PM</span>
      </div>
    </div>
    <div class="flex flex-col space-y-1 ">
      <label class="text-sm font-semibold">Time Relaxation</label>
	  <div class="flex w-32 items-center border border-gray-300 rounded-md">
		<h1 class=" border-2  p-4">04.00</h1>
        <span class=" bg-gray-100 border-ltext-sm ml-4">PM</span>
      </div>
    </div>
    <div class="flex flex-col space-y-1">
      <label class="text-sm font-semibold">Absent After</label>
      <div class="flex w-32 items-center border border-gray-300 rounded-md">
		<h1 class=" border-2 p-4">04.00</h1>
        <span class=" bg-gray-100 border-l text-sm ml-4">PM</span>
      </div>
    </div>
  </div>


  <div class="space-y-4">
    <div>
      <h3 class="text-teal-700 font-semibold">Identity Restrictions</h3>
      <p class="text-sm">Disabled</p>
    </div>
    <div>
      <h3 class="text-teal-700 font-semibold">Location Restriction</h3>
      <div class="flex flex-col space-y-1">
        <label class="text-sm font-semibold">IP Restriction</label>
        <input disabled type="text" value="192.168.1.1" class="w-64 px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-teal-500 focus:outline-none"/>
      </div>
    </div>
  </div>
</div>

		},
		{
		  key: '2.0',
		  label: 'Night Shift',
		  children:

		  <div class="p-6 bg-white shadow-md rounded-md space-y-6">
  
		  <div class="flex justify-between items-center">
			<h2 class="text-lg font-bold text-teal-700">Organization Morning Working Time</h2>
			<div class="flex space-x-4">
			  <button class="text-blue-600 hover:underline flex items-center space-x-1">
			  <img src={edit_icon}></img>
				<span>Edit</span>
			  </button>
			  <button class="text-red-600 hover:underline flex items-center space-x-1">
				<img src={delete_icon}></img>
				<span>Delete</span>
			  </button>
			</div>
		  </div>
		
		
		  <div class="grid grid-cols-5 gap-4">
			<div class="flex flex-col space-y-1">
			  <label class="text-sm font-semibold">Time In</label>
			  <div class="flex w-32 items-center border border-gray-300 rounded-md">
				<h1 class=" border-2 p-4">04.00</h1>
				<span class=" bg-gray-100 border-l text-sm ml-4">PM</span>
			  </div>
			</div>
			<div class="flex flex-col space-y-1">
			  <label class="text-sm font-semibold">Arrival Out</label>
			  <div class="flex w-32 items-center border border-gray-300 rounded-md">
				<h1 class=" border-2 p-4">04.00</h1>
				<span class=" bg-gray-100 border-l text-sm ml-4">PM</span>
			  </div>
			</div>
			<div class="flex flex-col space-y-1">
			  <label class="text-sm font-semibold">Early Arrival</label>
			  <div class="flex w-32 items-center border border-gray-300 rounded-md">
				<h1 class=" border-2 p-4">04.00</h1>
				<span class=" bg-gray-100 border-l text-sm ml-4">PM</span>
			  </div>
			</div>
			<div class="flex flex-col space-y-1 ">
			  <label class="text-sm font-semibold">Time Relaxation</label>
			  <div class="flex w-32 items-center border border-gray-300 rounded-md">
				<h1 class=" border-2  p-4">04.00</h1>
				<span class=" bg-gray-100 border-ltext-sm ml-4">PM</span>
			  </div>
			</div>
			<div class="flex flex-col space-y-1">
			  <label class="text-sm font-semibold">Absent After</label>
			  <div class="flex w-32 items-center border border-gray-300 rounded-md">
				<h1 class=" border-2 p-4">04.00</h1>
				<span class=" bg-gray-100 border-l text-sm ml-4">PM</span>
			  </div>
			</div>
		  </div>
		
		
		  <div class="space-y-4">
			<div>
			  <h3 class="text-teal-700 font-semibold">Identity Restrictions</h3>
			  <p class="text-sm">Disabled</p>
			</div>
			<div>
			  <h3 class="text-teal-700 font-semibold">Location Restriction</h3>
			  <div class="flex flex-col space-y-1">
				<label class="text-sm font-semibold">Geofencing</label>
				<input disabled type="text" value="Peshawar Pakistan" class="w-64 px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-teal-500 focus:outline-none"/>
			  </div>
			</div>
			
		  </div>
		  <div>

				<img className="" src={map_logo}/>
			</div>
		</div>
		},
	
	  ];

	  // request tab

	  const [data5, setData5] = useState([]);
useEffect(() => {
	setData5(
		tableData.map((item) => ({
			...item,
			rq_id : (
				<Link to="/designation-detail" className="text-sidebarBgColor underline">
					{item.rq_id}
				</Link>
			),
		}))
	);
}, []);

const columns5 = [
	{
		title: "S.No",
		dataIndex: "key",
		key: "s_no",
		sorter: (a, b) => a.s_no.localeCompare(b.s_no),
	},
	{
		title: "Id",
		dataIndex: "rq_id",
		key: "id",
		sorter: (a, b) => a.id.localeCompare(b.id),
	},
	
	{
		title: "Name",
		dataIndex: "req_name",
		key: "level",
		sorter: (a, b) => a.level.localeCompare(b.level),
	},

	{
		title: "Number of Employees",
		dataIndex: "employees",
		key: "employees",
		sorter: (a, b) => a.employees.localeCompare(b.employees),
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


//tab policy


const [data6, setData6] = useState([]);
useEffect(() => {
	setData6(
		tableData.map((item) => ({
			...item,
			pl_id : (
				<Link to="/designation-detail" className="text-sidebarBgColor underline">
					{item.pl_id}
				</Link>
			),
		}))
	);
}, []);

const columns6 = [
	{
		title: "S.No",
		dataIndex: "key",
		key: "s_no",
		sorter: (a, b) => a.s_no.localeCompare(b.s_no),
	},
	{
		title: "Id",
		dataIndex: "pl_id",
		key: "id",
		sorter: (a, b) => a.id.localeCompare(b.id),
	},
	
	{
		title: "Name",
		dataIndex: "pol_name",
		key: "level",
		sorter: (a, b) => a.level.localeCompare(b.level),
	},

	{
		title: "Number of Employees",
		dataIndex: "employees",
		key: "employees",
		sorter: (a, b) => a.employees.localeCompare(b.employees),
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

	const items = [

		// tab 1
		{
		  key: '1',
		  label: 'Departments',
		  children: 

		  <section className="mt-5 rounded-lg border border-gray-300">
			  <div className="flex items-center justify-between px-5 py-3">
				  <div>
					  <h1 className="text-xl font-semibold text-sidebarBgColor">
						  Total(23)
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
							+ Add Department
						</Link>
					</div>
					</div>
			  </div>

			  <Table columns={columns} dataSource={data} pagination={true} />
		  </section>
		},

		//tab 2

		{
		  key: '2',
		  label: 'Levels',
		  children: 
		  <section className="mt-5 rounded-lg border border-gray-300">
			  <div className="flex items-center justify-between px-5 py-3">
				  <div>
					  <h1 className="text-xl font-semibold text-sidebarBgColor">
						  Total(23)
					  </h1>
				  </div>
				  <div className="flex items-center space-x-3">
						<div>

						<SearchComponent />

						</div>
					<div>
						<Link
							onClick={LevelshowModal}
							className="rounded-md bg-sidebarBgColor p-3 text-white"
						>
							+ Add Levels
						</Link>
					</div>
					</div>
			  </div>

			  <Table columns={columns2} dataSource={data2} pagination={true} />
		  </section>
		  
		},

		// tab 3 
		{

		  key: '3',
		  label: 'Designations',
		  children:   <section className="mt-5 rounded-lg border border-gray-300">
		  <div className="flex items-center justify-between px-5 py-3">
			  <div>
				  <h1 className="text-xl font-semibold text-sidebarBgColor">
					  Total(23)
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
						+ Add Designation
					</Link>
				</div>
				</div>
		  </div>

		  <Table columns={columns3} dataSource={data3} pagination={true} />
	  </section>
		},

		// tab 4 
		{
			key: '4',
			label: 'Employment Types',
			children: 

			<section className="mt-5 rounded-lg border border-gray-300">
		  <div className="flex items-center justify-between px-5 py-3">
			  <div>
				  <h1 className="text-xl font-semibold text-sidebarBgColor">
					  Total(23)
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
						+ Add Employment Type
					</Link>
				</div>
				</div>
		  </div>

		  <Table columns={columns4} dataSource={data4} pagination={true} />
	  </section>
		  },

		  // tab 5
		  {
			key: '5',
			label: 'Shift Settings',
			children: 

<section className="mt-5 rounded-lg border border-gray-300">
		  <div className="flex items-center justify-between px-5 py-3">
			  <div>
				  <h1 className="text-xl font-semibold text-sidebarBgColor">
					  Total(23)
				  </h1>
			  </div>
			  <div className="flex items-center space-x-3">
					<div>

					{/* <SearchComponent /> */}

					</div>
				<div>
					<Link
						onClick={showModal}
						className="rounded-md bg-sidebarBgColor p-3 text-white"
					>
						+ Add New Shift
					</Link>
				</div>
				</div>
		  </div>

		  <Tabs  type="card" defaultActiveKey="1" items={shift_item} onChange={onChange} />
	  </section>




		  },

		//   tab 6 
		  {
			key: '6',
			label: 'Requests',
			children: 
			<section className="mt-5 rounded-lg border border-gray-300">
		  <div className="flex items-center justify-between px-5 py-3">
			  <div>
				  <h1 className="text-xl font-semibold text-sidebarBgColor">
					  Total(23)
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
						+ Add Request Type
					</Link>
				</div>
				</div>
		  </div>

		  <Table columns={columns5} dataSource={data5} pagination={true} />
	  </section>
		  },

		//   tab 7 
		  {
			key: '7',
			label: 'Policies',
			children: 

			<section className="mt-5 rounded-lg border border-gray-300">
		  <div className="flex items-center justify-between px-5 py-3">
			  <div>
				  <h1 className="text-xl font-semibold text-sidebarBgColor">
					  Total(23)
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
						+ Add Policies Type
					</Link>
				</div>
				</div>
		  </div>

		  <Table columns={columns6} dataSource={data6} pagination={true} />
	  </section>
		  },

		  // tab 8
		  {
			key: '8',
			label: 'Pay Slips',
			children: 


			<div class="p-6 bg-white shadow-md rounded-md">
				<div className="">
					<h1 className="text-2xl font-semibold text-sidebarBgColor">Payslip</h1>
				</div>
				<Divider/>

  <div class="flex justify-between space-x-6 mt-5">
   
    <div class="flex-1 flex flex-col space-y-4">
      <h2 class="text-lg font-bold">Earnings</h2>
	  <div class="flex justify-between items-center font-bold">
        <div><h1>Field Name</h1></div>
        <div><h1>Action</h1></div>
      </div>
      <div class="flex justify-between items-center">
        <span>Field Name 1</span>
        <button class="text-red-500 hover:text-red-600">
          <img src={delete_icon}></img>
        </button>
      </div>
      <div class="flex justify-between items-center">
        <span>Field Name 2</span>
        <button class="text-red-500 hover:text-red-600">
		<img src={delete_icon}></img>

        </button>
      </div>
	  <div>
      <button class="text-blue-500 hover:underline">+ Add Another Text Field</button>

	  </div>
    </div>

   
    <div class="flex-1 flex flex-col space-y-4">
      <h2 class="text-lg font-bold">Deductions</h2>
	  <div class="flex justify-between items-center font-bold">
        <div><h1>Field Name</h1></div>
        <div><h1>Action</h1></div>
      </div>
      <div class="flex justify-between items-center">
        <span>Field Name 1</span>
        <button class="text-red-500 hover:text-red-600">
		<img src={delete_icon}></img>

        </button>
      </div>
      <div class="flex justify-between items-center">
        <span>Field Name 2</span>
        <button class="text-red-500 hover:text-red-600">
		<img src={delete_icon}></img>

        </button>
      </div>
	  <div>
      <button class="text-blue-500 hover:underline">+ Add Another Text Field</button>

	  </div>
    </div>

    
    <div class="flex-1 flex flex-col space-y-4">
	<h2 class="text-lg font-bold">Advance Cash</h2>

      <h2 class="text-md font-bold">Deduct Advance Cash</h2>
      <div>
        <p class="text-sm">By enabling, the advance cash will be deducted automatically in the next month.</p>
        <label class="flex items-center space-x-2 mt-5">
						<Switch />

       
        </label>
      </div>
    </div>
  </div>
</div>



		  },


	  ];

	 
	return (
		<>
			<div>
				<BreadcrumbComponent breadcrumbItems={breadcrumbItems} />
			</div>

			<Tabs   type="card" defaultActiveKey="1" items={items} onChange={onChange} />

			

			
        {/* department model  */}
			<section>
				<Modal
					title="Add Department"
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
							label={<span className="text-customCategoryColor">Department Name</span>}
							name="department"
						>
							<Input
								placeholder="Department Name"
								className="h-[40px] w-[480px]"
							/>
						</Form.Item>

						<Form.Item
							label={
								<span className="text-customCategoryColor">Description</span>
							}
							name="description"
						>
							<Input.TextArea className="h-[100px]" />
						</Form.Item>
					</Form>
				</Modal>
			</section>


			{/* level model  */}

			<section>
				<Modal
					title="Add Level"
					open={isLevelModalOpen}
					onOk={LevelhandleOk}
					style={{ maxWidth: 775 }}
					onCancel={LevelhandleCancel}
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
							label={<span className="text-customCategoryColor">Department Name</span>}
							name="department"
						>
							<Input
								placeholder="Department Name"
								className="h-[40px] w-[480px]"
							/>
						</Form.Item>

						<div>
      {fields.map((field, index) => (
        <div key={index} className="flex items-center gap-2 mb-4">
          <Form.Item
            className="w-[250px]"
            label={<span className="text-customCategoryColor">Level</span>}
            name={`level_name_${index}`}
          >
            <Input
              placeholder="Junior"
              className="h-[40px]"
              value={field.level_name}
              onChange={(e) => {
                const newFields = [...fields];
                newFields[index].level_name = e.target.value;
                setFields(newFields);
              }}
            />
          </Form.Item>
          <Form.Item
            className="w-[250px]"
            label={<span className="text-customCategoryColor">Salary</span>}
            name={`salary_${index}`}
          >
            <Input
              placeholder="0.00 SAR"
              className="h-[40px]"
              value={field.salary}
              onChange={(e) => {
                const newFields = [...fields];
                newFields[index].salary = e.target.value;
                setFields(newFields);
              }}
            />
          </Form.Item>
          <Form.Item>
            <img
              className="w-5 mt-6  cursor-pointer"
              src={delete_icon}
              alt="Delete"
			  onClick={() => handleDelete(record.key)}
              
            />
          </Form.Item>
        </div>
      ))}
      <Link className="text-sidebarBgColor" onClick={handleAddField}>
       + Add Another Level
      </Link>
    </div>



						

						<Form.Item
							label={
								<span className="text-customCategoryColor">Description</span>
							}
							name="description"
						>
							<Input.TextArea className="h-[100px]" />
						</Form.Item>
					</Form>
				</Modal>
			</section>


			
		</>
	);
}
