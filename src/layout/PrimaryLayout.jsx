import React from "react";

import { Outlet } from "react-router-dom";

import Header from "./Header";
import Sidebar from "./Sidebar";

const PrimaryLayout = () => {
	return (
		<div className="flex">
			<Sidebar />
			<div className="flex w-full flex-col">
				<Header />
				<main className="p-4">
					<Outlet />
				</main>
			</div>
		</div>
	);
};

export default PrimaryLayout;
