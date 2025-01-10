/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				// header
				customBorderHeaderColor: "#EEEEEE",
				customBgHeaderColor: "#FBFBFB",

				logoutBtnColor: "#9CB1BB",
				logoutBgBtn: "#F2F2F2",

				//side bar
				sidebarBgColor: "#3B9EA2",
				sidebarTextColor: "#F8FFFE",
				sidebarColor: "#83949F",

				//breadcrumb color

				customBcColor: "#435B6D",

				//attendence color

				PresentColor: "#52c41a",
				AbsentColor: "#ff4d4f",
				LateColor: "#faad14",
				TimeOffColor: "#d9d9d9",
				LeaveColor: "#40a9ff",

				//request

				customCategoryColor: "#989898",
				customRequestBgColor: "#f8fffe",

				//employee detail color;

				customBorderColor: "#dfdfdf",
				customEmpColor: "#818080",
				customAddEmpColor: "#595959",
				customDragColor: "#1890ff",
			},
		},
	},
	plugins: [],
};
