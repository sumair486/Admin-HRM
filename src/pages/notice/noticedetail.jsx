import React, { useState } from "react";

import { Breadcrumb, Button, Modal, Select, Tooltip, Typography } from "antd";
import { useNavigate } from "react-router-dom";

import edit_icon from "../../../public/assets/Employees 1/pencil (1).png";
import delete_icon from "../../../public/assets/Employees 1/trash (1).png";
import brad_logo from "../../../public/assets/Notices 1/home.png";
import BreadcrumbComponent from "../../layout/BreadcrumbComponent";

const { Title, Text } = Typography;

export default function noticedetail() {
	const navigate = useNavigate();
	const [isModalVisible, setIsModalVisible] = useState(false);
	const handleDeleteClick = () => {
		setIsModalVisible(true);
	};

	const handleConfirmDelete = () => {
		// Add delete logic here
		setIsModalVisible(false);
	};

	const handleCancelDelete = () => {
		setIsModalVisible(false);
	};
	const { Option } = Select;

	const breadcrumbItems = [
		{ icon: brad_logo },
		{ title: "Notice", href: "" },
		{ title: "Notice Details", href: "" },
	];

	return (
		<>
			<div>
				<BreadcrumbComponent
					breadcrumbItems={breadcrumbItems}
					headerTitle="Notice Details"
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
							Title of the Notice Comes Here
						</h1>
						<div className="mb-4 flex">
							<h1 strong>Employee Name: </h1>
							<h1 className="ml-44 font-bold text-sidebarBgColor">Ali Ahmad</h1>
						</div>
						<div className="mb-6">
							<h1 strong className="font-bold">
								Description:
							</h1>
							<p className="mt-2 text-gray-700">
								Dear Ali Ahmad,
								<br />
								I hope this message finds you well.
								<br />
								As we approach the end of May 2024, it’s time for us to reflect
								on our achievements and areas for growth over the past quarter.
								Your contributions to the team have been outstanding, and I’m
								eager to discuss your performance in detail during our upcoming
								quarterly performance review scheduled for Thursday, May 30th,
								2024, at 10:00 AM.
								<br />
								<br />
								In addition to our review, we’ll also be discussing updates on
								our ongoing projects. This is an opportunity for us to align our
								efforts, address any challenges, and ensure that we’re on track
								to meet our goals for the quarter.
								<br />
								Please come prepared to share your insights, successes, and any
								concerns you may have. Your input is invaluable as we continue
								to strive for excellence as a team.
								<br />
								Looking forward to our discussion and to celebrating our
								achievements together!
								<br />
								Warm regards,
							</p>
						</div>

						<div className="border-t pt-4">
							<div className="flex justify-between">
								<h1 strong className="font-semibold text-sidebarBgColor">
									Response from Ali Ahmad:
								</h1>
								<h1 className="font-bold">12/05/2021</h1>
							</div>
							<p className="mt-2 text-gray-700">
								Thank you for the heads-up and the kind words. I’m looking
								forward to our meeting on Thursday, May 30th, 2024, at 10:00 AM.
								I appreciate the opportunity to discuss my performance and
								contribute to our team’s progress. I’ll make sure to come
								prepared with insights and updates on my end.
								<br />
								Please let me know if there’s anything specific you’d like me to
								focus on during our discussion.
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
