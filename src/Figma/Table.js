import React from "react";
import { RiArrowDownSFill } from "react-icons/ri";

const Table = () => {
  return (
    <div>
      <div className="relative overflow-x-auto mt-[20px]">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-[#F2F2F2] dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-[#4D4D4D] text-[14px] font-normal text-right"
              >
                <RiArrowDownSFill />
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-[#4D4D4D] text-[14px] font-normal text-right"
              >
                Transaction ID
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-[#4D4D4D] text-[14px] font-normal text-right"
              >
                Order Amount
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-[#4D4D4D] text-[14px] font-normal text-right"
              >
                Transaction fees
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-[#4D4D4D] text-[14px] font-normal text-right"
              >
                Total
              </th>
            </tr>
          </thead>
          <tbody className="text-right">
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex gap-[3px] ml-[150px] "
              >
                <div className="w-[10px] h-[10px] rounded-full border-[1px] bg-[#999999] mt-[4px]" />
                Processing
              </th>
              <td className="px-6 py-4 text-[14px] text-[#4D4D4D] font-normal inter">
                131634495747
              </td>
              <td className="px-6 py-4 text-[14px] text-[#4D4D4D] font-normal inter">
                ₹10,125.00
              </td>
              <td className="px-6 py-4 text-[14px] text-[#4D4D4D] font-normal inter">
                {" "}
                ₹1,125.00
              </td>
              <td className="px-6 py-4 text-[14px] text-[#4D4D4D] font-normal inter">
                {" "}
                ₹9,312
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex gap-[3px] ml-[150px] "
              >
                <div className="w-[10px] h-[10px] rounded-full border-[1px] bg-[#17B31B] mt-[4px]" />
                Successful
              </th>
              <td className="px-6 py-4 text-[14px] text-[#4D4D4D] font-normal inter">
                131634495747
              </td>
              <td className="px-6 py-4 text-[14px] text-[#4D4D4D] font-normal inter">
                ₹10,125.00
              </td>
              <td className="px-6 py-4 text-[14px] text-[#4D4D4D] font-normal inter">
                {" "}
                ₹1,125.00
              </td>
              <td className="px-6 py-4 text-[14px] text-[#4D4D4D] font-normal inter">
                {" "}
                ₹9,312
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex gap-[3px] ml-[150px] "
              >
                <div className="w-[10px] h-[10px] rounded-full border-[1px] bg-[#17B31B] mt-[4px]" />
                Successful
              </th>
              <td className="px-6 py-4 text-[14px] text-[#4D4D4D] font-normal inter">
                131634495747
              </td>
              <td className="px-6 py-4 text-[14px] text-[#4D4D4D] font-normal inter">
                ₹10,125.00
              </td>
              <td className="px-6 py-4 text-[14px] text-[#4D4D4D] font-normal inter">
                {" "}
                ₹1,125.00
              </td>
              <td className="px-6 py-4 text-[14px] text-[#4D4D4D] font-normal inter">
                {" "}
                ₹9,312
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex gap-[3px] ml-[150px] "
              >
                <div className="w-[10px] h-[10px] rounded-full border-[1px] bg-[#17B31B] mt-[4px]" />
                Successful
              </th>
              <td className="px-6 py-4 text-[14px] text-[#4D4D4D] font-normal inter">
                131634495747
              </td>
              <td className="px-6 py-4 text-[14px] text-[#4D4D4D] font-normal inter">
                ₹10,125.00
              </td>
              <td className="px-6 py-4 text-[14px] text-[#4D4D4D] font-normal inter">
                {" "}
                ₹1,125.00
              </td>
              <td className="px-6 py-4 text-[14px] text-[#4D4D4D] font-normal inter">
                {" "}
                ₹9,312
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex gap-[3px] ml-[150px] "
              >
                <div className="w-[10px] h-[10px] rounded-full border-[1px] bg-[#17B31B] mt-[4px]" />
                Successful
              </th>
              <td className="px-6 py-4 text-[14px] text-[#4D4D4D] font-normal inter">
                131634495747
              </td>
              <td className="px-6 py-4 text-[14px] text-[#4D4D4D] font-normal inter">
                ₹10,125.00
              </td>
              <td className="px-6 py-4 text-[14px] text-[#4D4D4D] font-normal inter">
                {" "}
                ₹1,125.00
              </td>
              <td className="px-6 py-4 text-[14px] text-[#4D4D4D] font-normal inter">
                {" "}
                ₹9,312
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
