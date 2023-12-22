import React from 'react'
import img from "./Images/vit.png"
import Theme from './Theme'
const Middle = () => {
    return (
        <div className='bg-[#FFF8F6] h-full'>
            <div className='flex justify-around w-5/6 m-auto justify-center items-center'>
                <div className="w-3/12">
                    <p className="text-[#F6623E] text-xl  mb-2 ">Good4Me</p>
                    <h1 className='text-[#000000] text-4xl font-semibold'>MULTI-VITAMIN(3 MONTH SUPPLY)</h1>
                    <p className='text-[#454545] font-medium  text-xl mt-4'>Good4Me Apple Cider Vinegar gummies are the newest addition to your morning health and well-being regime.</p>
                    <button className='bg-[#F6623E] text-[#FFF8F6] p-2 mt-2 px-5'>Shop Now</button>
                </div>
                <div>
                    <img className="w-8/12 mt-9" src={img} alt="" />
                </div>
            </div>
            <Theme />
        </div>
    )
}

export default Middle