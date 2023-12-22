import React from 'react'
import theme from "./Images/themes 1.png"
import "./Theme.css"
import img from "./Images/Rectangle 26.png"
import img1 from "./Images/Rectangle 25.png"
import img3 from "./Images/Rectangle 30.png"
import i from "./Images/1.png"
import im from "./Images/2.png"
import ims from "./Images/3.png"
const Theme = () => {
    return (
        <>
            <div className='container bg-[#FFF8F6]'>
                <img className='mt-14 mx-10' src={theme} alt="" />
            </div>
            <div className='flex  w-5/6 m-auto justify-center items-center bg-[rgb(255,255,255)]'>
                <div className='px-6'>
                    <h1 className='text-[#000000] font-semibold text-4xl w-9/12 mb-9'>New Collection For GOOD4ME
                        Care Products</h1>
                    <div className='hero h-96 flex items-center justify-center '>
                        <button className=' bg-[#F6623E] text-[#FFF8F6] p-2  px-5'>Shopify</button>
                    </div>
                </div>
                <div>
                    <img className='mb-10' src={img1} alt="" />
                    <img src={img1} alt="" />
                </div>
            </div>
            <div>
                <div className='flex w-5/6 m-auto justify-evenly'>
                    <div className='border-black w-96'>
                        <img className='w-full h-96 mx-14 mt-24 ' src={img3} alt="" />
                    </div>
                    <div className='w-6/12'>
                        <h1 className='text-[#000000] font-medium text-4xl mt-36 ml-32'>TAKE CONTROL OF YOUR HEALTH</h1>
                        <p className='text-sm mx-32 font-medium'>The Good4Me range has been formulated based on scientific & traditional evidence.</p>
                        <p className='text-sm mx-32 font-medium'>Our vitamins are here and ready to boost your mood, immunity and overall well-being!</p>
                        <p className='text-sm mx-32 font-medium'>Made in New Zealand from local and imported ingredients.</p>
                        <button className='py-2 px-6 mx-32 font-medium mt-4 border-2 border-[#F6623E] box-border'>BROWSE OUR RANGE</button>
                    </div>
                    {/* <div className='flex gap-[-100] w-72 mt-32'>
                        <img className='h-60' src={i} alt="" />
                        <img className='h-60' src={im} alt="" />
                        <img className='h-60' src={ims} alt="" />
                    </div> */}
                </div >
            </div>
        </>

    )
}

export default Theme