import React from 'react'
import arrow from "./Images/arrow.png"
import img from "./Images/image 39 (1).png"
import img1 from "./Images/image 39.png"
import img2 from "./Images/image 40.png"
import img4 from "./Images/themes 1 (2).png"
const Section = () => {
    return (
        <div>
            <div className='flex w-5/6 justify-center items-center mt-32 gap-72 m-auto'>
                <div>
                    <h1 className='text-[#000000] text-4xl'>Our Best Selling Products</h1>
                    <p className='w-96  text-[#454545]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                </div>
                <div className='flex mt-2'>
                    <div>
                        <h1 className='text-[#F6623E] text-xs w-48 ml-10 '>VIEW ALL PRODUCTS</h1>
                    </div>
                    <div><img src={arrow} alt="" /></div>

                </div>
            </div>
            <div className='flex gap-2 r mt-24 w-5/6 container justify-center items-center m-auto'>
                <div>
                    <img src={img} alt="" />
                    <h1 className='text-[#000000] text-xs my-2'>MULTI-VITAMIN (3 MONTH SUPPLY)</h1>
                    <p className='text-[#F6623E] text-xs '>$39.95 NZD <span className='text-[#9D9D9D]  ml-2 text-xs'>$199.75 NZD</span></p>
                </div>
                <div>
                    <img src={img1} alt="" />
                    <h1 className='text-[#000000] text-xs my-2 '>MULTI-VITAMIN (3 MONTH SUPPLY)</h1>
                    <p className='text-[#F6623E] text-xs '>$39.95 NZD <span className='text-[#9D9D9D] text-xs ml-2'>$199.75 NZD</span></p>
                </div>
                <div>
                    <img src={img2} alt="" />
                    <h1 className='text-[#000000] text-xs my-2'>MULTI-VITAMIN (3 MONTH SUPPLY)</h1>
                    <p className='text-[#F6623E] text-xs '>$39.95 NZD <span className='text-[#9D9D9D]  ml-2 text-xs'>$199.75 NZD</span></p>
                </div>
            </div>
            {/* <div className='mt-44 border-2 border-[#F6623E] bg-[#FFFFFF]'>
                <img className='bg-[#FFFFFF]' src={img4} alt="" />
            </div> */}
        </div>
    )
}

export default Section