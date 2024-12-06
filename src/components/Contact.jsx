import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 py-16'>
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf7PFYXKGKLiiWY8-1gK-rX9mRnRIeuVj92uMrhBWWod7wn1w/viewform?embedded=true" width="640" height="824" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    </div>
    )
}
    
export default Contact
    
    //different form that looks better but will end up costing money, good to keep for now

    // <div id='contact' className='max-w-[1040px] m-auto md:pl-20 py-16'>
    //     <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>Contact</h1>
    //     <form action="https://getform.io/f/paqgxrra" method='POST' encType='multipart/form-data'>
    //         <div className='grid md:grid-cols-2 gap-4 py-2'>
    //             <div className='flex flex-col'>
    //                 <label className='uppercase text-sm py-2'>Name</label>
    //                 <input 
    //                 className='border-2 rounded-lg p-3 flex border-gray-300' 
    //                 type="text" 
    //                 name='name'
    //                 />
    //             </div>
    //             <div className='flex flex-col'>
    //                 <label className='uppercase text-sm py-2'>Phone</label>
    //                 <input 
    //                 className='border-2 rounded-lg p-3 flex border-gray-300' 
    //                 type="text" 
    //                 name='phone'
    //                 />
    //             </div>
    //         </div>
    //         <div className='flex flex-col py-2'>
    //             <label className='uppercase text-sm py-2'>Email</label>
    //             <input 
    //             className='border-2 rounded-lg p-3 flex border-gray-300'
    //             type="email" 
    //             name='email'
    //             />
    //         </div>
    //         <div className='flex flex-col py-2'>
    //             <label className='uppercase text-sm py-2'>Subject</label>
    //             <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name="Subject"></input>
    //         </div>
    //         <div className='flex flex-col py-2'>
    //             <label className='uppercase text-sm py-2'>Message</label>
    //             <textarea className ='border-2 rounded-lg p-3 border-gray-300' name="Message" rows="10"></textarea>
    //         </div>
    //         <button className='bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg'>Send Message</button>
    //     </form>
    // </div>