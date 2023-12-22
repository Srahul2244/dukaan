import React from "react";
import { CiHome } from "react-icons/ci";
import { CiWallet } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";
import { CiDiscount1 } from "react-icons/ci";
import { FaBorderAll } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import { MdCampaign } from "react-icons/md";
import { MdPayments } from "react-icons/md";
import { MdOutlineSpatialAudio } from "react-icons/md";
import { SiSimpleanalytics } from "react-icons/si";
import { VscTools } from "react-icons/vsc";
import { PiPlugsDuotone } from "react-icons/pi";

import image from "./images/Rectangle 96.jpg";
const SideNav = () => {
  return (
    <div className=" bg-[#1E2640]  pt-[8px] pr-[16px] pb-[8px] pl-[16px] h-[100vh] sticky top-0">
      <div className="flex gap-[18px] w-[192px] h-[40px] ">
        <div>
          <img
            className="w-[39px] h-[39px] rounded-[4px]"
            src={image}
            alt="image_logo"
          />
        </div>
        <div className="flex justify-center items-center text-white gap-[68px]">
          <p className="text-[15px] font-[500]">Nishyan</p>
          <FaChevronDown className="text-[15px] font-[500] text-[#E6E6E6]" />
        </div>
      </div>
      <div className="w-[208px]   mt-[26px]">
        <div className="flex pt-[8px] pr-[16px] pb-[8px] pl-[16px] text-white gap-[12px]">
          <CiHome className="text-[18px]" />
          <p className="text-[14px] font-[500]">Home</p>
        </div>
        <div className="flex pt-[8px] pr-[16px] pb-[8px] pl-[16px] text-white gap-[12px]">
          <FaBorderAll className="text-[18px]" />
          <p className="text-[14px] font-[500]">Orders</p>
        </div>
        <div className="flex pt-[8px] pr-[16px] pb-[8px] pl-[16px] text-white gap-[12px]">
          <CiHome className="text-[18px]" />
          <p className="text-[14px] font-[500]">Products</p>
        </div>
        <div className="flex pt-[8px] pr-[16px] pb-[8px] pl-[16px] text-white gap-[12px]">
          <CiDeliveryTruck className="text-[18px]" />
          <p className="text-[14px] font-[500]">Delivery</p>
        </div>
        <div className="flex pt-[8px] pr-[16px] pb-[8px] pl-[16px] text-white gap-[12px]">
          <MdCampaign className="text-[18px]" />
          <p className="text-[14px] font-[500]">Marketing</p>
        </div>
        <div className="flex pt-[8px] pr-[16px] pb-[8px] pl-[16px] text-white gap-[12px]">
          <SiSimpleanalytics className="text-[18px]" />
          <p className="text-[14px] font-[500]">Analytics</p>
          <p className="ml-[20px] pt-[2px] pr-[6px] pb-[2px] pl-[6px] bg-[#FFFFFF] rounded-[3px] text-[12px] font-[500] text-gray-900">
            BETA
          </p>
        </div>
        <div className="flex pt-[8px] pr-[16px] pb-[8px] pl-[16px] text-white gap-[12px]">
          <MdPayments className="text-[18px]" />
          <p className="text-[14px] font-[500]">Payments</p>
        </div>
        <div className="flex pt-[8px] pr-[16px] pb-[8px] pl-[16px] text-white gap-[12px]">
          <VscTools className="text-[18px]" />
          <p className="text-[14px] font-[500]">Tools</p>
        </div>
        <div className="flex pt-[8px] pr-[16px] pb-[8px] pl-[16px] text-white gap-[12px]">
          <CiDiscount1 className="text-[18px]" />
          <p className="text-[14px] font-[500]">Discounts</p>
        </div>
        <div className="flex pt-[8px] pr-[16px] pb-[8px] pl-[16px] text-white gap-[12px]">
          <MdOutlineSpatialAudio className="text-[18px]" />
          <p className="text-[14px] font-[500]">Audiance</p>
        </div>
        <div className="flex pt-[8px] pr-[16px] pb-[8px] pl-[16px] text-white gap-[12px]">
          <CiHome className="text-[18px]" />
          <p className="text-[14px] font-[500]">Appearance</p>
        </div>
        <div className="flex pt-[8px] pr-[16px] pb-[8px] pl-[16px] text-white gap-[12px]">
          <PiPlugsDuotone  className="text-[18px]" />
          <p className="text-[14px] font-[500]">Plugins</p>
        </div>
      </div>
      <div className="flex items-center rounded bg-[#353C53] p-2 mt-5">
        <div className="text-white mx-2 border-[2px] bg-[#404555] border-[#353C53] w-[40px] h-[40px] rounded flex items-center justify-center">
          <CiWallet size={20} />
        </div>
        <div>
          <p className="text-[13px] text-[#FFFFFF] inter ">Availabe credit</p>
          <p className="text-[13px] text-[#FFFFFF] inter">222.10</p>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
