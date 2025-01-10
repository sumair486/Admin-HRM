import React from "react";
import brad_logo from "../../../public/assets/Notices 1/home.png";
import BreadcrumbComponent from "../../layout/BreadcrumbComponent";
import ReportSelectComponent from "../../layout/ReportSelectComponent";
import tableData from "../../pages/datatable/tableData.json";
import export_logo from "../../../public/assets/Notices 1/export.png";

import { Select, Table } from "antd";

import SearchComponent from "../../layout/SearchComponent";


export default function attendancereport() {
  const breadcrumbItems = [
    { icon: brad_logo },
    { title: "Reports", href: "" },
    { title: "Attendance Report", href: "" },
  ];

  const data = tableData;

  const columns = [
    {
      title: "S.No",
      dataIndex: "key",
      key: "key",
      sorter: (a, b) => a.key.localeCompare(b.key),
    },
    {
      title: "Employee Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
        title: "Designation",
        dataIndex: "designation",
        key: "name",
        sorter: (a, b) => a.name.localeCompare(b.name),
      },

      {
        title: "Department",
        dataIndex: "department",
        key: "name",
        sorter: (a, b) => a.name.localeCompare(b.name),
      },
      {
          title: "Total Working Days",
          dataIndex: "designation",
          key: "name",
          sorter: (a, b) => a.name.localeCompare(b.name),
        },

        {
            title: "Present",
            dataIndex: "loss",
            key: "loss",
            sorter: (a, b) => a.loss.localeCompare(b.loss),
          },

    {
      title: "Absentees",
      dataIndex: "loss",
      key: "loss",
      sorter: (a, b) => a.loss.localeCompare(b.loss),
    },
    
    {
        title: "Leaves",
        dataIndex: "loss",
        key: "loss",
        sorter: (a, b) => a.loss.localeCompare(b.loss),
      },

      {
        title: "Half Days",
        dataIndex: "loss",
        key: "loss",
        sorter: (a, b) => a.loss.localeCompare(b.loss),
      },
   
  
  ];

 
  const employee = ["Joy", "Ali", "Asim", "Sharma"];
 
  const duration = ["Jan", "Feb", "March"];


  
  



  return (
    <>
      <div>
        <BreadcrumbComponent
          breadcrumbItems={breadcrumbItems}
          headerTitle="Attendance Report"
        />
      </div>

      <section className="mt-8 border px-5 py-8">
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
          
        
         

            <ReportSelectComponent
            label="Duration"
            options={duration}
        
          
          />

            <ReportSelectComponent
            label="Employee"
            options={employee}
          
          />

  
          <div className="flex space-x-4">
            <button className="bg-teal-500 mt-5 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition duration-300">
              Apply
            </button>
            <button className="border mt-5 border-teal-500 text-teal-500 px-6 py-2 rounded-lg hover:bg-teal-100 transition duration-300">
              Clear
            </button>
          </div>
        </div>
      </section>

      {/* table  */}

      <section className="mt-5 rounded-lg border border-gray-300">
      {/* <ReportSelectComponent/> */}

      <div className="flex items-center justify-between px-5 py-3">
    <div>
        <h1 className="text-xl font-semibold text-sidebarBgColor">
            Total(23)
        </h1>
    </div>
    <div className="flex items-center space-x-3">
          <div>

          <SearchComponent />

          </div>
          <div>
              <img src={export_logo}></img>

              </div>
          <div>
              
          <Select placeholder="Export" className="h-[40px] w-[200px]">
                      <Select.Option value="Alex">PDF</Select.Option>
                      <Select.Option value="John">CSV</Select.Option>
                  
          </Select>
          </div>

      
      </div>
</div>


				<Table columns={columns} dataSource={data} pagination={true} />
			</section>
    </>
  );
}
