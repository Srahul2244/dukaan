import React from 'react'
import img1 from "./Images/Vector (2).png"
import img from "./Images/Vector (2).png"
import img3 from "./Images/Vector (3).png"
import img4 from "./Images/Vector (4).png"
import img2 from "./Images/Logo_-_Good4Me_140x 1.png"
import Middle from './Middle'
import Theme from './Theme'
import Section from './Section'
import FSection from './FSection'
import Footer from './Footer'
const Navbar = () => {
    return (
        <div>
            <div className='bg-[#F6623E] p-3'>
                <div className='container bg-[#F6623E] w-5/6 flex mx-auto justify-between '>
                    <p className="text-zinc-50">Afterpay, Laybuy & Genoapay | Free Delivery New Zealand + Australia*</p>
                    <div className="flex gap-2">
                        <h1 className="text-zinc-50 gap-5">Sign in /</h1>
                        <h2 className="text-zinc-50 gap-5">Register</h2>
                        <div className='h-5 w-1 bg-[#FFFFFF] mt-1 mx-7'></div>
                        <p>USD</p>
                        <img className="h-1 mt-2" src={img1} alt='' />
                    </div>
                </div>
            </div>
            <div className='bg-[#FFF8F6]'>
                <div className=' w-5/6 container flex  justify-center items-center justify-between p-4 bg-[#FFF8F6] mx-auto '>
                    <div>
                        <img src={img2} alt="" />
                    </div>
                    <div className='flex gap-12'>
                        <p>HOME</p>
                        <p>SHOP</p>
                        <p>FAQ'S</p>
                        <p>STOCKISTS</p>
                        <p>WHOLESALE</p>
                        <p>CONTACT</p>

                    </div>
                    <div className='flex gap-10'>

                        <img src={img4} alt="" />
                        <img src={img3} alt="" />
                    </div>
                </div>
            </div>
            <Middle />
            <Section />
            <FSection />
            <Footer />
        </div >
    )
}

export default Navbar