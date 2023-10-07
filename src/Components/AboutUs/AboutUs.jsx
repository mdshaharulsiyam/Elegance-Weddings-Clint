import React from 'react'

const AboutUs = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex justify-center gap-[2%] items-center my-10 py-4'>
                <div data-aos="fade-up"
                    data-aos-duration="3000" className='w-[49%]'>
                    <img className='w-full object-cover h-full' src="./about1.jpg" alt="" />
                </div>
                <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className='w-[49%]'>
                    <button className='bg-[#CAB7A6] tracking-[1px] p-3 px-4 my-2 text-xl font-extrabold rounded-full text-white'>01</button>
                    <h4 className='text-2xl py-5 font-semibold italic text-[#FF6969]'>Event Design</h4>
                    <p className='text-lg tracking-[1px]'>We will create a design plan for your wedding. We will cover everything from attire, to stationery, to personalized details, florals, and rentals to ensure a cohesive look for your event.</p>
                </div>
            </div>

            <div className='flex justify-center gap-[2%] items-center my-10 py-4'>
                <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className='w-[49%] text-right'>
                    <button className='bg-[#CAB7A6] tracking-[1px] p-3 px-4 my-2 text-xl font-extrabold rounded-full text-white'>02</button>
                    <h4 className='text-2xl py-5 font-semibold italic text-[#FF6969]'>Online Planning Portal</h4>
                    <p className='text-lg tracking-[1px]'>Our online planning portal is where all of your wedding information & to dos will be stored. Your checklist, timeline, budget, guest list tracking, seating, contacts & additional notes.</p>
                </div>
                <div data-aos="fade-up"
                    data-aos-duration="3000" className='w-[49%]'>
                    <img className='w-full object-cover h-full' src="./about2.jpg" alt="" />
                </div>
            </div>

            <div className='flex justify-center gap-[2%] items-center my-10 py-4'>
                <div data-aos="fade-up"
                    data-aos-duration="3000" className='w-[49%]'>
                    <img className='w-full object-cover h-full' src="./about3.jpg" alt="" />
                </div>
                <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className='w-[49%]'>
                    <button className='bg-[#CAB7A6] tracking-[1px] p-3 px-4 my-2 text-xl font-extrabold rounded-full text-white'>03</button>
                    <h4 className='text-2xl py-5 font-semibold italic text-[#FF6969]'>Wedding Day Execution</h4>
                    <p className='text-lg tracking-[1px]'>Our team is ready to lead the entire vendor team on wedding day. We will attend your wedding rehearsal, as well as be on site for vendors, set up, as well as at your getting ready location.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
