import React, { useState } from "react";

import { Breadcrumb, Button, Modal, Select, Tooltip, Typography } from "antd";
import { useNavigate } from "react-router-dom";

import edit_icon from "../../../public/assets/Employees 1/pencil (1).png";
import delete_icon from "../../../public/assets/Employees 1/trash (1).png";
import brad_logo from "../../../public/assets/Notices 1/home.png";
import BreadcrumbComponent from "../../layout/BreadcrumbComponent";

const { Title, Text } = Typography;

export default function roledetail() {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const handleDeleteClick = () => {
		setIsModalVisible(true);
	};

	const handleConfirmDelete = () => {
		setIsModalVisible(false);
	};

	const handleCancelDelete = () => {
		setIsModalVisible(false);
	};
	const { Option } = Select;

	const breadcrumbItems = [
		{ icon: brad_logo },
		{ title: "User and Roles", href: "" },
		{ title: "Role Details", href: "" },
	];

	return (
		<>
			<div>
				<BreadcrumbComponent
					breadcrumbItems={breadcrumbItems}
					headerTitle="Role Details"
				/>
			</div>

			<section>
				<div className="">
					<div className="flex items-center justify-end">
						<div className="flex items-center gap-4">
							<div title="Edit">
								<div className="flex cursor-pointer items-center gap-1">
									<div className="flex text-sm font-medium">
										<div>
											<img src={edit_icon} />
										</div>
										<div>
											<p className="underline">Edit</p>
										</div>
									</div>
								</div>
							</div>
							<div title="Delete">
								<div
									className="flex cursor-pointer items-center gap-1"
									onClick={handleDeleteClick}
								>
									<span>
										<img src={delete_icon} />
									</span>
									<span className="text-sm font-medium underline">Delete</span>
								</div>
							</div>
						</div>
					</div>

					<div className="rounded-lg border-2 border-gray-300 bg-white p-6 shadow-md">
						<h1
							level={4}
							className="mb-4 text-2xl font-bold text-sidebarBgColor"
						>
							Software Engineering
						</h1>
                        <div className="mb-4 flex">
							<h1  strong>Description: </h1>
                          
					
						</div>
                        <div className="mb-4 flex">
							<h1 strong>Description of the role is shown here </h1>
                          
					
						</div>

                         <div className="mb-4 flex">
							<h1 className="font-bold" strong>Permissions Given </h1>
                          
					
						</div>
                        <div className="mb-4 flex">
							<h1 strong> Permission 1 </h1>
							<h1 className="ml-44  ">Given</h1>
						</div>


                        <div className="mb-4 flex">
							<h1 strong> Permission 2 </h1>
							<h1 className="ml-44  ">Given</h1>
						</div>


                        <div className="mb-4 flex">
							<h1 strong> Permission 3 </h1>
							<h1 className="ml-44  ">Given</h1>
						</div>


                        <div className="mb-4 flex">
							<h1 strong> Permission 4 </h1>
							<h1 className="ml-44  ">Given</h1>
						</div>

                       

                     

						
					</div>

					<Modal
						title="Confirm Delete"
						visible={isModalVisible}
						onOk={handleConfirmDelete}
						onCancel={handleCancelDelete}
						okText="Delete"
						cancelText="Cancel"
					>
						<p>Are you sure you want to delete this notice?</p>
					</Modal>
				</div>
			</section>
		</>
	);
}
