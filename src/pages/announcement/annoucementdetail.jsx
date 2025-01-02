import React, { useState } from "react";

import { Breadcrumb, Button, Modal, Select, Tooltip, Typography } from "antd";
import { useNavigate } from "react-router-dom";

import edit_icon from "../../../public/assets/Employees 1/pencil (1).png";
import delete_icon from "../../../public/assets/Employees 1/trash (1).png";
import brad_logo from "../../../public/assets/Notices 1/home.png";
import BreadcrumbComponent from "../../layout/BreadcrumbComponent";

const { Title, Text } = Typography;

export default function noticedetail() {
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
		{ title: "Announcement", href: "" },
		{ title: "Announcement Details", href: "" },
	];

	return (
		<>
			<div>
				<BreadcrumbComponent
					breadcrumbItems={breadcrumbItems}
					headerTitle="Announcement Details"
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
							Announcement Name
						</h1>

						<h1 className="font-semibold">Other Details</h1>
						<div className="mb-4 mt-5 flex">
							<h1 strong>Date: </h1>
							<h1 className="ml-44">02/05/2025</h1>
						</div>
						<div className="mb-6">
							<h1 strong className="font-bold">
								Description:
							</h1>
							<p className="mt-2 text-gray-700">
								As we approach the end of May 2024, it’s time for us to reflect
								on our achievements and areas for growth over the past quarter.
								Your contributions to the team have been outstanding, and I’m
								eager to discuss your performance in detail during our upcoming
								quarterly performance review scheduled for Thursday, May 30th,
								2024, at 10:00 AM.
								<br />
								<h1 className="mt-3 font-bold">Audience</h1>
								<h1 className="mt-3 font-bold">All Employees</h1>
							</p>
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
