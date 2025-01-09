import React from 'react'
import SearchComponent from './SearchComponent'
import { Select } from 'antd'
import export_logo from "../../../public/assets/Notices 1/export.png";

export default function ReportSearchComponent() {
  return (
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
  )
}
