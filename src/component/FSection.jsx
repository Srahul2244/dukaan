import React from 'react'
import img from "./Images/Vector (8).png"
import img1 from "./Images/Vector (7).png"
import img2 from "./Images/Vector (5).png"
import img5 from "./Images/Rectangle 34.png"
import img6 from "./Images/Rectangle 35.png"
import vector from "./Images/Vector (6).png"

import arrow from "./Images/arrow.png"
import imgs from "./Images/Rectangle 36 (1).png"
import imgs1 from "./Images/Rectangle 36 (2).png"
import imgs2 from "./Images/Rectangle 36.png"


const FSection = () => {
    return (
        <div>
            <div className='w-5/6 m-auto container mt-20 ml-52'>
                <div>
                    <h1 className='text-[#000000] text-4xl ml-12'>Our Best Services</h1>
                    <p className='text-[#454545] text-sm mb-10 w-80 ml-12 mt-3'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                </div>
                <div className='flex justify-around '>
                    <div>
                        <img className='bg-[#fcf8f8] mb-4 ml-28' src={img} alt="" />
                        <h1 className=' text-2xl text-[#000000] mt-6 text-center'>WORLDWIDE SHIPPING</h1>
                        <p className='text-[#828181] text-lg w-80 text-center'>Lorem ipsum dolor sit amet, consectetuer
                            adipiscing elit. Aenean</p>
                    </div>
                    <div>
                        <img className='bg-[#fcf8f8] mb-4 ml-28' src={img1} alt="" />
                        <h1 className=' text-2xl text-[#000000] mt-6 text-center'>WORLDWIDE SHIPPING</h1>
                        <p className='text-[#828181] text-lg w-80 text-center'>Lorem ipsum dolor sit amet, consectetuer
                            adipiscing elit. Aenean</p>
                    </div>
                    <div>
                        <img className='bg-[#fcf8f8] mb-4 ml-28' src={img2} alt="" />
                        <h1 className=' text-2xl text-[#000000] mt-6 text-center'>WORLDWIDE SHIPPING</h1>
                        <p className='text-[#828181] text-lg w-80 text-center'>Lorem ipsum dolor sit amet, consectetuer
                            adipiscing elit. Aenean</p>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex  justify-center items-center gap-60 mt-28'>
                    <div>
                        <h1 className='text-[#000000] text-2xl mt-4'>Clients Loved Products</h1>
                        <h1 className='text-[#F6623E] text-2xl my-4'>REAL RESULTS</h1>
                        <div className='flex my-2'>
                            <img src={vector} alt="" />
                            <img src={vector} alt="" />
                            <img src={vector} alt="" />
                            <img src={vector} alt="" />
                            <img src={vector} alt="" />
                        </div>
                        <p className='text-[#454545] text-2xl w-96'>“We have perfected our formulas over time, based on your feedback. Check out hundreds of reviews on our website.We can't wait until you are a part of our Good4Me Family.”</p>
                        <h3 className='text-[#F6623E] text-lg my-2'>_Chloe H.</h3>
                        <div>
                            <button className='border-2 border-[#292929] p-3 px-6 mr-4'>{"<"}</button>
                            <button className='border-2 border-[#F6623E] p-3 px-6 text-[#F6623E]'>{">"}</button>
                        </div>
                    </div>
                    <div>
                        <img className='absolute w-80' src={img5} alt="" />
                        <img className='relative top-14 right-16  w-80' src={img6} alt="" />
                    </div>
                </div>
            </div>
            <div>
                <div className='flex w-5/6 justify-center items-center mt-32 gap-72 m-auto'>
                    <div>
                        <h1 className='text-[#000000] text-4xl'>Latest news</h1>
                        <p className='w-96  text-[#454545]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                    </div>
                    <div className='flex mt-2'>
                        <div>
                            <h1 className='text-[#F6623E] text-xs w-48 ml-10 '>VIEW ALL POSTS</h1>
                        </div>
                        <div><img src={arrow} alt="" /></div>

                    </div>
                </div>
                <div className='flex  w-5/6 container justify-center items-center m-auto mt-24 gap-14'>
                    <div>
                        <img src={imgs} alt="" />
                        <h1 className='text-[#000000] text-xs my-2'>WE DONATE ONE WEEKS SUPPLY</h1>
                        <p className='text-[#9D9D9D] text-xs  w-80'>We care about New Zealand children, and we want to support our community by providing our children in need with necessary vitamins to improve....</p>
                        <span className='text-[#F6623E] text-xm my-14'>READ MORE</span>
                    </div>
                    <div>
                        <img src={imgs2} alt="" />
                        <h1 className='text-[#000000] text-xs my-2 '>WE DONATE ONE WEEKS SUPPLY</h1>
                        <p className='text-[#9D9D9D] text-xs w-80'>We care about New Zealand children, and we want to support our community by providing....</p>
                        <span className='text-[#F6623E] text-xm my-14'>READ MORE</span>

                    </div>
                    <div>
                        <img src={imgs1} alt="" />
                        <h1 className='text-[#000000] text-xs my-2'>WE DONATE ONE WEEKS SUPPLY</h1>
                        <p className='text-[#9D9D9D] text-xs w-80'>We care about New Zealand children, and we want to support our community by providing our children ....</p>
                        <span className='text-[#F6623E] text-xm my-14'>READ MORE</span>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default FSection