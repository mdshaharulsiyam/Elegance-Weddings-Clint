import React from 'react'

const WhyChooseUs = () => {
    return (
      <div className='container mx-auto py-4 my-14'>
        <h2 className='text-center font-bold text-[#FF6969] text-4xl py-2 pb-20'>Why Choose Us</h2>
          <div className='flex justify-center md:flex-row flex-col-reverse items-center gap-[2%] '>
            <div data-aos="fade-up-right" className='md:w-[49%] w-full'>
                <h2 className='text-xl font-semibold italic pb-3'>Exquisite Wedding Planning by <span className='text-[#FF6969] font-extrabold'>Elegance Wedding’s</span></h2>
                <p className='tracking-[.5px]'>
                    Welcome to Elegance Wedding’s, where dreams become reality. Our seasoned and certified team of wedding planners brings professionalism and expertise to every celebration. We pride ourselves on personalized services, crafting unique weddings that reflect each couple's dreams. Satisfied clients rave about our meticulous attention to detail, innovative creativity, and seamless execution. <br /><br />
                    What sets us apart is our comprehensive approach. From initial planning to flawless execution, we leave no detail untouched. Our strong vendor relationships ensure quality and cost-effectiveness. Transparency is paramount in our interactions, with clear pricing structures allowing clients to tailor services to their budget.</p>
            </div>
            <div data-aos="fade-up-left" className='md:w-[49%] w-full h-full'>
            <img className='w-full object-cover h-full' src="./whychoose.jpg" alt="" />
            </div>
        </div>
      </div>
    )
}

export default WhyChooseUs
