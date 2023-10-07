import React from 'react';

const ContactUs = () => {
const handelContact= e =>{
e.preventDefault()
}
    return (
        <div className='container mx-auto'>
           <div className='flex justify-center items-center gap-[2%] p-3 px-5 my-6'>
           <div className='w-[49%]'>
                <h2 className='text-2xl font-bold text-[#FF6969] italic my-4 '>Contact Us</h2>
                <p className='font-medium text-lg pb-3'>MWP provides the experience, expertise, and personalized service that result in sheer elegance, style and sophisticated wedding planning and execution. with 100% success rate, we guarantee you a stress-free engagement and a wedding that is absolutely perfect. we only take few orders specially for wedding planning in a year,So that we can give our complete attention to our client’s wedding to make it the most spectacular and memorable event for our clients <br /> feel free to email us, phone us, get free consultation for your wedding with our expert wedding planners.</p>
                <h4 className='text-xl font-semibold'>contact info</h4>
                <ul className='list-disc pl-5 font-bold py-2'>
                    <li>Email us: EleganceWedding@gmail.com</li>
                    <li>Call us: +880******** / +880********* /</li>
                    <li>Skype id: EleganceWedding</li>
                </ul>
                <p>
                    <p className='text-[#FF6969] italic pb-2'>Sales Office Address:</p>
                    103B, B-37, Gokuldham, Goregaon East, Mumbai – 400063.
                    </p>
            </div>
            <div className='w-[49%] flex justify-center items-center'>
        <form onSubmit={handelContact} className='w-[400px] mx-auto text-center p-8 bg-gray-200 rounded-lg'>
        <h4 className='bg-[#FF6969] text-white text-lg px-2 py-1'>Get Free Consultation</h4>
        <input required type="text" placeholder="Looking For" className="my-2 input input-bordered input-secondary w-full " />
        <input required type="text" placeholder="Full Name" className="my-2 input input-bordered input-secondary w-full " />
        <input required type="text" placeholder="Your Location" className="my-2 input input-bordered input-secondary w-full " />
        <input required type="text" placeholder="Preferred Wedding Location" className="my-2 input input-bordered input-secondary w-full " />
        <input required type="email" placeholder="Email" className="my-2 input input-bordered input-secondary w-full " />
        <input required type="text" placeholder="Contact No" className="my-2 input input-bordered input-secondary w-full " />
        <textarea required placeholder="Mention Detailed requirement with Dates" className="my-2 textarea textarea-bordered textarea-lg w-full" ></textarea>
        <button className='bg-[#FF6969] px-9 py-2 active:scale-90 rounded-md font-bold uppercase'>submit</button>
        </form>
            </div>
           </div>
        </div>
    );
};

export default ContactUs;
