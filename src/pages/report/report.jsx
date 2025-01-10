import React from "react";
import { Link } from "react-router-dom";
import brad_logo from "../../../public/assets/Notices 1/home.png";
import BreadcrumbComponent from "../../layout/BreadcrumbComponent";
import SearchComponent from "../../layout/SearchComponent";

const Report = () => {
  const breadcrumbItems = [{ icon: brad_logo }, { title: "Reports", href: "" }];
  const reports = [
    { id: 1, title: "Advance Cash Request Report", url: "/advance-cash-reports" },
    { id: 2, title: "Leave Request Report", url: "/leave-reports" },
    { id: 3, title: "Attendance Report", url: "/attendance-reports" },
    { id: 4, title: "Salary Report", url: "/salary-reports" },
  ];

  return (
    <>
      <div>
        <BreadcrumbComponent breadcrumbItems={breadcrumbItems} />
      </div>

      <section className="mt-2">
        <div className="flex flex-row justify-between">
          <SearchComponent />
        </div>
      </section>

      <section className="mt-5">
        <h1 className="text-lg text-customBcColor mb-4">Reports</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reports.map((report) => (
            <Link
              key={report.id}
              to={report.url}
              className="flex justify-between items-center p-4 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <span className="text-lg text-sidebarBgColor">
                {report.title}
              </span>
              <span className="text-3xl text-sidebarBgColor">→</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Report;
