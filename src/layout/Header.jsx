import React from "react";

import { Input } from "antd";

import { SearchOutlined } from "@ant-design/icons";

import BellIcon from "../../public/assets/Notices 1/Group 164104.png";

const Header = () => {
	return (
		<header className="border-customBorderHeaderColor bg-customBgHeaderColor flex items-center justify-between border-b px-4 py-2">
			<div className="flex items-center gap-2">
				<div className="flex h-[44px] w-[430px] items-center rounded-lg border border-gray-300 px-3 py-2">
					<SearchOutlined className="mr-2 text-black" />
					<Input
						type="text"
						placeholder="Search anything anywhere"
						className="border-none text-sm outline-none"
					/>
				</div>
			</div>
			<div className="flex items-center gap-10">
				<select className="rounded-lg border border-gray-300 px-2 py-1 text-sm">
					<option value="ENG">ENG</option>
					<option value="AR">AR</option>
				</select>
				<button className="relative">
					<img src={BellIcon} alt="Notifications" />
				</button>
				<button className="text-logoutBtnColor bg-logoutBgBtn h-[42.74px] w-[103px] rounded-lg border-2 text-sm">
					Logout
				</button>
			</div>
		</header>
	);
};

export default Header;
