import React from 'react'

export default function SelectedProjects() {
    return (
        <div style={{backgroundColor: '#F4F4F4'}} className='w-full h-auto py-32 px-6 lg:px-12 flex flex-col items-center justify-center '>
            <p className='font-PublicSans-Bold text-2xl' >Selected  Projects</p>
            {/* Project List */}
            <div className='mt-16 w-full lg:w-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-8' >
                <div className=' w-full lg:w-520px cursor-pointer py-6 lg:py-0' >
                    <div className='w-full h-280px lg:h-520px bg-white' >

                    </div>
                    <p className='font-PublicSans-Bold text-xl mt-6' >Mploime</p>
                    <p className='font-Poppins-Regular text-sm mt-2'>Branding</p>
                </div>
                <div className=' w-full lg:w-520px cursor-pointer py-6 lg:py-0' >
                    <div className='w-full h-280px lg:h-520px bg-white' >

                    </div>
                    <p className='font-PublicSans-Bold text-xl mt-6' >Ndi Igbo</p>
                    <p className='font-Poppins-Regular text-sm mt-2'>UI/UX & Web Developmet</p>
                </div>
                <div className=' w-full lg:w-520px cursor-pointer py-6 lg:py-0' >
                    <div className='w-full h-280px lg:h-520px bg-white' >

                    </div>
                    <p className='font-PublicSans-Bold text-xl mt-6' >The EMMAs</p>
                    <p className='font-Poppins-Regular text-sm mt-2'>Web Developement</p>
                </div>
                <div className=' w-full lg:w-520px cursor-pointer py-6 lg:py-0' >
                    <div className='w-full h-280px lg:h-520px bg-white' >

                    </div>
                    <p className='font-PublicSans-Bold text-xl mt-6' >Olokun Store</p>
                    <p className='font-Poppins-Regular text-sm mt-2'>Web Development</p>
                </div>
            </div>
            <div className='' >

            </div>
        </div>
    )
}
