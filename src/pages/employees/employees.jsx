import React, { useState , useEffect} from "react";

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



import edit_icon from "../../../public/assets/Employees 1/pencil (1).png";
import delete_icon from "../../../public/assets/Employees 1/trash (1).png";
import brad_logo from "../../../public/assets/Notices 1/home.png";
import BreadcrumbComponent from "../../layout/BreadcrumbComponent";
import SearchComponent from "../../layout/SearchComponent";
import tableData from "../../pages/datatable/tableData.json";
import SelectComponent from "../../layout/SelectComponent";


export default function employees() {
	const { Option } = Select;

	

	const [data, setData] = useState([]);


	useEffect(() => {
		setData(
			tableData.map((item) => ({
				...item,
				id : (
					<Link to="/employees-detail" className="text-sidebarBgColor underline">
						{item.id}
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
        <SelectComponent
          label="Department"
          options={[
            { label: "Select 1", value: "select1" },
            { label: "Select 2", value: "select2" },
            { label: "Select 3", value: "select3" },
          ]}
         
        />
        <div className="px-2" />
        <SelectComponent
          label="Designation"
          options={[
            { label: "Select 1", value: "select1" },
            { label: "Select 2", value: "select2" },
            { label: "Select 3", value: "select3" },
          ]}
       
        />
        <div className="px-2" />
        <SelectComponent
          label="Employment"
          options={[
            { label: "Select 1", value: "select1" },
            { label: "Select 2", value: "select2" },
            { label: "Select 3", value: "select3" },
          ]}
       
        />
      </div>
    </div>

				<Table columns={columns} dataSource={data} pagination={true} />
			</section>
		</>
	);
}
