import React from 'react'

export default function Services() {
    return (
        <div style={{backgroundColor: '#FFF3EC'}} className='w-full h-auto py-32 px-12 flex flex-col items-center justify-center '>
            <p  style={{backgroundColor: '#F4F4F4'}}  className='font-Poppins-Regular text-lg' >Our Services</p>
            <p className='font-PublicSans-Bold text-2xl my-6' >What we do at iCOWEB</p>
            <p className='font-Poppins-Regular text-center w-540px' >We build useable and scalable products from our customer’s imagination and ensure it meets the business and user goal and as well ensure every design process is followed</p>

            {/* Services Options  */}
            <div className='w-full flex  mt-16' >
                <div className='border border-black pb-2 w-280px h-338px' >
                    <div className='w-full h-full flex flex-col px-8 justify-end' > 
                        <div style={{backgroundColor: '#121212'}} className='w-16 h-16 flex items-center justify-center' >
                            <svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.35 22V16.12H6.5V22H0.35ZM15.4871 6.49V22H9.93711V6.49H15.4871ZM15.4871 0.309999V5.23H9.93711V0.309999H15.4871Z" fill="white"/>
                            </svg>
                        </div>
                        <p className='font-Poppins-Regular text-lg my-10 w-40' >Brand & Identity Design</p>
                    </div>
                </div>

                <div className='border border-black w-auto h-338px ml-12' > 
                    <p className='font-PublicSans-Bold text-xl text-center py-12' >Product Development</p>
                    <div className='flex mt-auto ' > 
                        <div className='w-280px px-8  ' > 
                            <div style={{backgroundColor: '#121212'}} className='w-16 h-16 flex items-center justify-center' >
                                <svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.35 22V16.12H6.5V22H0.35ZM15.4871 6.49V22H9.93711V6.49H15.4871ZM15.4871 0.309999V5.23H9.93711V0.309999H15.4871Z" fill="white"/>
                                </svg>
                            </div>
                            <p className='font-Poppins-Regular text-lg my-10 w-40' >User Interface Design</p>
                        </div>
                        <div className='w-280px h-full border-l border-r border-black px-8' > 
                            <div style={{backgroundColor: '#121212'}} className='w-16 h-16 flex items-center justify-center' >
                                <svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.35 22V16.12H6.5V22H0.35ZM15.4871 6.49V22H9.93711V6.49H15.4871ZM15.4871 0.309999V5.23H9.93711V0.309999H15.4871Z" fill="white"/>
                                </svg>
                            </div>
                            <p className='font-Poppins-Regular text-lg my-10 w-40' >User Experience Design</p>
                        </div>
                        <div className='w-280px h-full px-8' > 
                            <div style={{backgroundColor: '#121212'}} className='w-16 h-16 flex items-center justify-center' >
                                <svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.35 22V16.12H6.5V22H0.35ZM15.4871 6.49V22H9.93711V6.49H15.4871ZM15.4871 0.309999V5.23H9.93711V0.309999H15.4871Z" fill="white"/>
                                </svg>
                            </div>
                            <p className='font-Poppins-Regular text-lg my-10 w-40' >App/Software Development</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}