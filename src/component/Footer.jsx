import React from 'react'
import img2 from "./Images/Logo_-_Good4Me_140x 1.png"
import img from "./Images/Vector (9).png"
import img1 from "./Images/Vector (10).png"
import img3 from "./Images/Vector (11).png"
import img4 from "./Images/Vector (12).png"
import img5 from "./Images/Vector (13).png"
import img6 from "./Images/Screenshot-2021-01-26-at-2.46 1@2x.png"
const Footer = () => {
    return (
        <>
            <div className='flex justify-between w-5/6 m-auto  mt-32'>
                <div>
                    <img className='m-auto my-2' src={img2} alt="" />
                    <p className='text-[#454545] text-center w-72 text-base'>Good health is important, so all of our products have been carefully designed to bring out the best in you.</p>
                </div>
                <div>
                    <h1 className='text-[#000000] text-2xl text-center my-2'>Keep In Touch</h1>
                    <p className='text-[#454545] text-center text-base mt-2 w-96'>Subscribe to receive new product updates, be the first to know about sales, and more.</p>
                    <div className='flex justify-between mt-4'>
                        <p className='text-[#000000] text-base my-1'>Enter your email address</p>
                        <h1 className='text-[#F6623E] text-base my-1'>Subscribe</h1>
                    </div>
                    <div className='border-2 border-black h-1 w-96 bg-black'></div>
                </div>
                <div>
                    <h1 className='text-[#000000] text-2xl text-center my-2'>MORE INFO</h1>
                    <p className='text-[#454545] text-center w-36 text-base mt-2'>Shipping & Delivery Refund Policy Partner Program Wholesale Portal You Buy, We Donate Privacy Policy Terms & Conditions</p>
                </div>
            </div>
            <div>
                <div className='border-2 h-0 w-full bg-white mt-24'></div>
                <div className='flex justify-between w-5/6 m-auto  mt-4'>
                    <div className='flex gap-10'>
                        <img src={img} alt="" />
                        <img src={img1} alt="" />
                        <img src={img3} alt="" />
                        <img src={img4} alt="" />
                        <img src={img5} alt="" />
                    </div>
                    <div>
                        <p className='text-base'>
                            © 2021, <span className='text-[#F6623E] text-base'>GOOD4ME.</span>Powered by Shopify
                        </p>
                    </div>
                    <div>
                        <img className='w-80' src={img6} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer