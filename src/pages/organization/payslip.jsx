import { Divider, Switch } from 'antd'
import React from 'react'
import delete_icon from "../../../public/assets/Employees 1/trash (1).png";

export default function payslip() {
  return (
    <div class="p-6 bg-white shadow-md rounded-md">
    <div className="">
        <h1 className="text-2xl font-semibold text-sidebarBgColor">Payslip</h1>
    </div>
    <Divider/>

<div class="flex justify-between space-x-6 mt-5">

<div class="flex-1 flex flex-col space-y-4">
<h2 class="text-lg font-bold">Earnings</h2>
<div class="flex justify-between items-center font-bold">
<div><h1>Field Name</h1></div>
<div><h1>Action</h1></div>
</div>
<div class="flex justify-between items-center">
<span>Field Name 1</span>
<button class="text-red-500 hover:text-red-600">
<img src={delete_icon}></img>
</button>
</div>
<div class="flex justify-between items-center">
<span>Field Name 2</span>
<button class="text-red-500 hover:text-red-600">
<img src={delete_icon}></img>

</button>
</div>
<div>
<button class="text-blue-500 hover:underline">+ Add Another Text Field</button>

</div>
</div>


<div class="flex-1 flex flex-col space-y-4">
<h2 class="text-lg font-bold">Deductions</h2>
<div class="flex justify-between items-center font-bold">
<div><h1>Field Name</h1></div>
<div><h1>Action</h1></div>
</div>
<div class="flex justify-between items-center">
<span>Field Name 1</span>
<button class="text-red-500 hover:text-red-600">
<img src={delete_icon}></img>

</button>
</div>
<div class="flex justify-between items-center">
<span>Field Name 2</span>
<button class="text-red-500 hover:text-red-600">
<img src={delete_icon}></img>

</button>
</div>
<div>
<button class="text-blue-500 hover:underline">+ Add Another Text Field</button>

</div>
</div>


<div class="flex-1 flex flex-col space-y-4">
<h2 class="text-lg font-bold">Advance Cash</h2>

<h2 class="text-md font-bold">Deduct Advance Cash</h2>
<div>
<p class="text-sm">By enabling, the advance cash will be deducted automatically in the next month.</p>
<label class="flex items-center space-x-2 mt-5">
            <Switch />


</label>
</div>
</div>
</div>
</div>
  )
}
