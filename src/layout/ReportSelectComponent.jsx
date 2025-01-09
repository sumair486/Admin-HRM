import React from "react";

const ReportSelectComponent = ({ label, options, onChange }) => {
  return (
    <div className="flex flex-col">
      <label className="text-gray-600 mb-1 text-sm font-medium">{label}</label>
      <select
        className="w-[200px] border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
        onChange={onChange}
      >
        <option value="">Select</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ReportSelectComponent;
