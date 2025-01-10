import React from "react";

import { Input } from "antd";

import { SearchOutlined } from "@ant-design/icons";

export default function SearchComponent() {
	return (
		<div className="flex h-[40px] w-[239px] items-center rounded-lg border border-gray-300 px-3 py-2">
			<SearchOutlined className="mr-2 text-2xl text-[#3B9EA2]" />
			<Input
				type="text"
				placeholder="Search"
				className="border-none text-sm outline-none"
			/>
		</div>
	);
}
