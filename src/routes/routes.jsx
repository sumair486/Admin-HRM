import { lazy } from "react";

// Home imports
const Home = lazy(() => import("../pages/Home"));

// About imports
const About = lazy(() => import("../pages/About"));

// Services imports
const Services = lazy(() => import("../pages/services/Services"));
const Attendences = lazy(() => import("../pages/attendence/attendence"));
const Requests = lazy(() => import("../pages/request/request"));
const RequestPage = lazy(() => import("../pages/request/requestpage"));

const Announcements = lazy(() => import("../pages/announcement/announcement"));
const AnnouncementsDetail = lazy(
	() => import("../pages/announcement/annoucementdetail"),
);

const Employees = lazy(() => import("../pages/employees/employees"));
const AddEmployees = lazy(() => import("../pages/employees/addemployee"));
const EmployeesDetail = lazy(() => import("../pages/employees/employeedetail"));

const Notices = lazy(() => import("../pages/notice/notice"));
const NoticesDetail = lazy(() => import("../pages/notice/noticedetail"));

const Organizations = lazy(() => import("../pages/organization/organization"));
const OrganizationDetail = lazy(() => import("../pages/organization/organizationdetail"));
const LevelDetail = lazy(() => import("../pages/organization/leveldetail"));
const DesignationDetail = lazy(() => import("../pages/organization/designationdetail"));



const Payrolls = lazy(() => import("../pages/payroll/payroll"));
const Reports = lazy(() => import("../pages/report/report"));
const User_Role = lazy(() => import("../pages/user_role/user_role"));
const User_Detail = lazy(() => import("../pages/user_role/userdetail"));
const Role_Detail = lazy(() => import("../pages/user_role/roledetail"));


const Warnings = lazy(() => import("../pages/warning/warning"));
const WarningDetail = lazy(() => import("../pages/warning/warningdetail"));

const ServiceDetail = lazy(() => import("../pages/services/ServiceDetail"));

// ================================================================================================
// exporting all routes
// ================================================================================================
export const routes = [
	{
		path: "/",
		element: <Home />,
		isPrivate: true,
	},
	{
		path: "/about",
		element: <About />,
		isPrivate: true,
	},
	{
		path: "/Services",
		element: <Services />,
		isPrivate: true,
	},
	{
		path: "/Services/service/:id",
		element: <ServiceDetail />,
		isPrivate: true,
	},

	{
		path: "/attendance",
		element: <Attendences />,
		isPrivate: true,
	},

	{
		path: "/requests",
		element: <Requests />,
		isPrivate: true,
	},

	{
		path: "/requestpage",
		element: <RequestPage />,
		isPrivate: true,
	},

	{
		path: "/announcements",
		element: <Announcements />,
		isPrivate: true,
	},

	{
		path: "/announcements-details",
		element: <AnnouncementsDetail />,
		isPrivate: true,
	},

	{
		path: "/employees",
		element: <Employees />,
		isPrivate: true,
	},

	{
		path: "/add-employees",
		element: <AddEmployees />,
		isPrivate: true,
	},
	{
		path: "/employees-detail",
		element: <EmployeesDetail />,
		isPrivate: true,
	},

	{
		path: "/notices",
		element: <Notices />,
		isPrivate: true,
	},

	{
		path: "/notices-detail",
		element: <NoticesDetail />,
		isPrivate: true,
	},
	
	{
		path: "/org-structure",
		element: <Organizations />,
		isPrivate: true,
	},
	{
		path: "/organization-detail",
		element: <OrganizationDetail />,
		isPrivate: true,
	},


	{
		path: "/level-detail",
		element: <LevelDetail />,
		isPrivate: true,
	},

	{
		path: "/designation-detail",
		element: <DesignationDetail />,
		isPrivate: true,
	},

	{
		path: "/payrolls",
		element: <Payrolls />,
		isPrivate: true,
	},

	{
		path: "/reports",
		element: <Reports />,
		isPrivate: true,
	},

	{
		path: "/users-roles",
		element: <User_Role />,
		isPrivate: true,
	},

	{
		path: "/users-detail",
		element: <User_Detail />,
		isPrivate: true,
	},

	{
		path: "/roles-detail",
		element: <Role_Detail />,
		isPrivate: true,
	},

	{
		path: "/warning-letters",
		element: <Warnings />,
		isPrivate: true,
	},

	{
		path: "/warning-letters-details",
		element: <WarningDetail />,
		isPrivate: true,
	},
];
