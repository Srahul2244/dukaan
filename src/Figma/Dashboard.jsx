import React from "react";
import { AiOutlineQuestion } from "react-icons/ai";
import { RiMessage2Fill } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { LuArrowUpDown } from "react-icons/lu";
import Table from "./Table";
import { BsDownload } from "react-icons/bs";

const Dashboard = () => {
  return (
    <div>
      <div className="h-[64px] w-full flex pt-[12px] pr-[32px] pb-[12px] pl-[32px] border justify-between items-center border-[#E6E6E6E] sticky top-0 z-50 bg-white">
        <div className="flex">
          <p className="text-[20px] font-medium leading-[28px]">Payments</p>
          <p className="flex ml-[15px] mt-1 text-[14px] text-[#4D4D4D] gap-[6px]">
            <AiOutlineQuestion className="w-[14px] h-[14px] rounded-full border-[1px] border-gray-700 mt-1" />
            How it works
          </p>
        </div>
        <div className="relative ">
          <input
            type="text"
            placeholder="Search,Features,Tutorials,etc.."
            className="border border-[#E6E6E6] rounded bg-[#E6E6E6] px-5 p-1 w-[400px] text-[15px] leading-[22px] font-normal text-[#808080] text-center"
          />
          <CiSearch className="absolute top-2  left-5" />
        </div>
        <div className="flex gap-[16px]">
          <div className="w-[40px] h-[40px] rounded-full bg-[#E6E6E6] flex items-center justify-center">
            <RiMessage2Fill />
          </div>
          <div className="w-[40px] h-[40px] rounded-full bg-[#E6E6E6] flex items-center justify-center">
            <IoMdArrowDropdown size={26} />
          </div>
        </div>
      </div>
      {/* hero section middle part */}
      <div className="w-full h-[794px] top-[96px] mt-[20px] px-[30px]">
        <div className="flex justify-between">
          <div>
            <p className="text-[#1A181E] font-medium leading-[28px] p-2 text-[20px]">
              Overview
            </p>
          </div>
          <div className="flex gap-5 items-center justify-center border-[1px] border-[#D9D9D9] p-3 rounded-md">
            <p className="text-[#4D4D4D] text-[16px] leading-[24px]">
              This month
            </p>
            <div>
              <FaChevronDown className="text-[#4D4D4D]" />
            </div>
          </div>
        </div>

        {/* hero cards section */}
        <div className="flex gap-[24px] w-full mt-[20px]">
          <div className="w-[370px] h-[154px] bg-[#146EB4] rounded-md p-[20px]">
            <div className="flex gap-[10px]">
              <p className="text-[16px] font-normal text-[#FFFFFF]">
                Next layout
              </p>
              <AiOutlineQuestion className="w-[14px] h-[14px] text-[#FFFFFF] rounded-full border-[1px] border-[#FFFFFF] mt-[5px]" />
            </div>
            <div className="flex h-[38px] w-[330px] justify-between mt-[10px] ">
              <p className="text-[38px] text-[#FFFFFF] leading-[28px] font-medium">
                ₹2,312.23
              </p>
              <div className="flex gap-[10px]  mt-[4px]">
                <p className="text-[16px] text-[#FFFFFF] leading-[24px] font-medium">
                  23 orders
                </p>
                <FaChevronRight
                  size={"14px"}
                  className="text-[#FFFFFF] mt-[6px]"
                />
              </div>
            </div>
            <div className="bg-[#0E4F82] pt-[8px] pr-[24px] pb-[8px] pl-[24px] flex justify-between rounded-[8px] mt-[25px] w-[370px] ml-[-20px]">
              <p className="text-[14px] text-[#F2F2F2] leading-[20px]">
                Next payout date:
              </p>
              <p className="text-[14px] text-[#F2F2F2] leading-[20px]">
                Today, 04:00PM
              </p>
            </div>
          </div>
          <div className="w-[360px] h-[118px] shadow-md rounded-md p-[20px]">
            <div className="flex gap-[10px]">
              <p className="text-[16px] font-normal text-[#4D4D4D]">
                Amount Pending
              </p>
              <AiOutlineQuestion className="w-[14px] h-[14px] text-[#4D4D4D] rounded-full border-[1px] border-[#4D4D4D] mt-[5px]" />
            </div>
            <div className="flex h-[38px] w-[330px] justify-between mt-[10px] ">
              <p className="text-[38px] leading-[28px] font-medium">
                ₹2,312.23
              </p>
              <div className="flex gap-[10px]  mt-[4px]">
                <p className="text-[16px] text-[#146EB4] leading-[24px] font-medium">
                  23 orders
                </p>
                <FaChevronRight
                  size={"14px"}
                  className="text-[#146EB4] mt-[6px]"
                />
              </div>
            </div>
          </div>
          <div className="w-[350px] h-[118px]  rounded-md p-[20px] shadow-md">
            <div className="flex gap-[10px]">
              <p className="text-[16px] font-normal text-[#4D4D4D]">
                Amount Pending
              </p>
              <AiOutlineQuestion className="w-[14px] h-[14px] text-[#4D4D4D] rounded-full border-[1px] border-[#4D4D4D] mt-[5px]" />
            </div>
            <div className="mt-[10px]">
              <p className="text-[38px] leading-[28px] font-medium">
                ₹2,312.23
              </p>
            </div>
          </div>
        </div>
        {/*hero section card upto here end  */}

        {/* transaction toggle buttonss */}
        <div className="mt-[28px]">
          <div>
            <p className="text-[#1A181E] text-[20px] leading-[28px] font-medium">
              Transactions | This Month
            </p>
            <div className="flex gap-[20px] mt-[20px]">
              <div className="bg-[#146EB4] pt-[6px] pr-[16px] pb-[6px] pl-[16px] text-[#FFFFFF] text-[14px] font-medium hover:bg-[#E6E6E6] rounded-[40px]">
                Payouts (22)
              </div>
              <div className="bg-[#808080] pt-[6px] pr-[16px] pb-[6px] pl-[16px] text-[#FFFFFF] text-[14px] font-medium hover:bg-[#146EB4] rounded-[40px]">
                Refunds (2)
              </div>
            </div>
          </div>
        </div>
        {/* toglle buttons ends */}

        {/* tabular data */}
        <div>
          <div className="flex justify-between mt-[20px]">
            <div className="relative ">
              <input
                type="text"
                className="border border-[#999999] rounded bg-[#FFFFFF]  px-3 p-1 w-[200px] text-[15px] leading-[22px] font-normal text-[#808080] text-center"
              />
              <CiSearch className="absolute top-2  left-5" />
            </div>
            <div className="flex gap-2">
              <div className="flex gap-5 items-center justify-center border-[1px] border-[#D9D9D9] p-3 rounded-md w-[79px]">
                <p className="text-[#4D4D4D] text-[16px] leading-[20px]">
                  Sort
                </p>
                <div>
                  <LuArrowUpDown className="text-[#4D4D4D]" />
                </div>
              </div>
              <div className="flex gap-2 items-center justify-center border-[1px] border-[#D9D9D9] p-3 rounded-md w-[79px]">
                <div>
                  <BsDownload className="text-[#4D4D4D]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Table />
      </div>
    </div>
  );
};

export default Dashboard;
