import React from 'react'
import "./AboutUs.css"
const AboutUs = () => {
  return (
    <>
    <div className='max-w-[1000px] md:py-[80] py-20 flex mx-auto relative md:flex-row flex-col'>
        <div className='basis-[60%] pb-5'>
            <div>
                <button className='border-solid border-[#007AFF] border-2 py-2 px-9 rounded-3xl mb-9' >About Us</button>
                <p className='text-3xl font-semibold max-w-[500px] mb-5'>Enhancing Operations with Advanced Technology</p>
                <p className='text-[#A3A6AE] text-sm max-w-[500px]'>We strive to leverage the latest advancements in IT to create sustainable value for our clients, enabling them to achieve their strategic objectives and stay ahead in an increasingly competitive landscape.</p>
            </div>
            <div className='mt-9 flex flex-col gap-2' >
                <div className='flex justify-start items-center gap-4'>
                    <img src='../public/image/ph_cloud-check-light.png' />
                    <p className='text-[#A3A6AE] text-sm w-[500px]'>Sed vitae quam porttitor, mattis lorem nec, aliquet sapien</p>
                </div>
                <div className='flex justify-start items-center gap-4'>
                    <img src='../public/image/ph_cloud-check-light.png' />
                    <p className='text-[#A3A6AE] text-sm w-[500px]'>Sed vitae quam porttitor, mattis lorem nec, aliquet sapien</p>
                </div>
                <div className='flex justify-start items-center gap-4'>
                    <img src='../public/image/ph_cloud-check-light.png' />
                    <p className='text-[#A3A6AE] text-sm w-[500px]'>Sed vitae quam porttitor, mattis lorem nec, aliquet sapien</p>
                </div>
            </div>
            <div className='mt-10 flex justify-start items-center gap-4'>
                <button className='bg-[#007AFF] text-white border-solid rounded-xl border-2 py-2 px-9'>Contact Us</button>
                <button className=' text-black border-solid border-[#007AFF] rounded-xl border-2 py-2 px-9'>Our Service</button>
            </div>
        </div>
        <div className='basis-[40%] relative'>
            <img src='../public/image/image.png'/>
            <div className='w-[350px] h-[120px] bg-[#007AFF] rounded-lg flex justify-start items-center gap-3 lg:absolute static bottom-6 right-32'>
                <img src='../public/image/man.png' className=' size-16 mx-3'/>
                <p className=' text-white text-[13px] mr-3'>"The technology you use impresses no one. The experience you create with it is everything." - CEO Portal</p>
            </div>
        </div>

    </div>
      
    </>
  )
}

export default AboutUs
