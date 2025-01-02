import React from "react";

import { NavLink } from "react-router-dom";

// import { AudioOutlined } from "@ant-design/icons";
import dashboardIcon from "../../public/assets/Notices 1/Component 3.png";
import logo from "../../public/assets/Notices 1/Group 163991.png";
// import BellIcon from "../../public/assets/Notices 1/Group 164104.png";
import announcementsIcon from "../../public/assets/Notices 1/announcements.png";
import attendanceIcon from "../../public/assets/Notices 1/attendance.png";
import employeesIcon from "../../public/assets/Notices 1/employees.png";
import noticesIcon from "../../public/assets/Notices 1/notices.png";
import orgStructureIcon from "../../public/assets/Notices 1/org_structure.png";
import payrollsIcon from "../../public/assets/Notices 1/payrolls.png";
import reportsIcon from "../../public/assets/Notices 1/reports.png";
import requestsIcon from "../../public/assets/Notices 1/requests (3).png";
import usersRolesIcon from "../../public/assets/Notices 1/users_roles.png";
import warningIcon from "../../public/assets/Notices 1/warning.png";

// Import other icons...

const menuItems = [
	{ title: "Dashboard", icon: dashboardIcon, path: "/" },
	{ title: "Attendance", icon: attendanceIcon, path: "/attendance" },
	{ title: "Requests", icon: requestsIcon, path: "/requests" },
	{ title: "Employees", icon: employeesIcon, path: "/employees" },
	{ title: "Notices", icon: noticesIcon, path: "/notices" },
	{ title: "Warning Letters", icon: warningIcon, path: "/warning-letters" },
	{ title: "Payrolls", icon: payrollsIcon, path: "/payrolls" },
	{
		title: "Organization Structure",
		icon: orgStructureIcon,
		path: "/org-structure",
	},
	{ title: "Users & Roles", icon: usersRolesIcon, path: "/users-roles" },
	{ title: "Reports", icon: reportsIcon, path: "/reports" },
	{ title: "Announcements", icon: announcementsIcon, path: "/announcements" },
	// Add other menu items...
];

const Sidebar = () => {
	return (
		<div className="flex h-[768px] w-[260px] flex-col gap-2 bg-white p-4 shadow-md">
			<h1 className="mb-4 text-xl font-bold">
				<img src={logo} alt="Logo" />
			</h1>
			<div className="flex flex-col gap-2">
				{menuItems.map((item) => (
					<MenuItem
						key={item.title}
						title={item.title}
						icon={item.icon}
						path={item.path}
					/>
				))}
			</div>
		</div>
	);
};

const MenuItem = ({ title, icon, path }) => (
	<NavLink
		to={path}
		className={({ isActive }) =>
			`group flex cursor-pointer items-center gap-2 rounded-md px-4 py-2 transition-colors ${
				isActive
					? "bg-sidebarBgColor text-sidebarTextColor"
					: "text-sidebarColor"
			} hover:bg-sidebarBgColor hover:text-sidebarTextColor`
		}
	>
		<img
			src={icon}
			alt={`${title} Icon`}
			className="h-5 w-5 transition-colors group-hover:brightness-0 group-hover:invert"
		/>
		<span>{title}</span>
	</NavLink>
);

export default Sidebar;
