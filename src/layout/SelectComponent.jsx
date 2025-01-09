import React from "react";
import { Select } from "antd";

const { Option } = Select;

const SelectComponent = ({
  label,
  options = [],
  placeholder = "Select an option",
  style = { width: 239, height: 40 },
  onChange,
  value,
}) => {
  return (
    <div className="flex flex-row items-center space-x-2">
      {label && <h1 className="text-gray-400">{label}</h1>}
      <Select
        style={style}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      >
        {options.map((option, index) => (
          <Option key={index} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default SelectComponent;
