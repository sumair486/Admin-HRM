import React from "react";

import { Breadcrumb } from "antd";

import { ArrowLeftOutlined } from "@ant-design/icons";

const BreadcrumbComponent = ({ breadcrumbItems, headerTitle, onBack }) => {
	return (
		<>
			<section>
				<Breadcrumb
					separator="/"
					items={breadcrumbItems.map((item, index) => ({
						title: item.icon ? (
							<img className="mt-1 font-[10px]" src={item.icon} alt="" />
						) : (
							<h1 className={`text-customBcColor ${item.className || ""}`}>
								{item.title}
							</h1>
						),
						href: item.href || undefined,
					}))}
				/>
			</section>

			<section className="mt-3">
				<div className="flex items-center">
					{onBack && (
						<ArrowLeftOutlined onClick={onBack} className="cursor-pointer" />
					)}
					<h1 className="ml-2 text-2xl">{headerTitle}</h1>
				</div>
			</section>
		</>
	);
};

export default BreadcrumbComponent;
