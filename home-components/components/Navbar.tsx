import Link from 'next/link'
import React from 'react'

export default function Navbar() {

    
    const [menu, setMenu] = React.useState(false);
    
    return ( 
        <nav className='w-full h-auto flex flex-col items-center px-16 px-12' >

            <div className='w-full h-24 flex items-center' >

                {/* website logo */}
                <img src='../assets/images/logo.png' alt='logo' />
                
                {/* navigation links */}
                <div className='w-full hidden lg:flex flex-row justify-center items-center' >
                    <Link href="/#">
                        <p className="text-base font-Poppins-Regular mx-8 cursor-pointer hover:underline">Home</p>
                    </Link> 
                    <Link href="/#services">
                        <p className="text-base font-Poppins-Regular mx-8 cursor-pointer hover:underline">Services</p>
                    </Link> 
                    <Link href="/#">
                        <p className="text-base font-Poppins-Regular mx-8 cursor-pointer hover:underline">Projects</p>
                    </Link> 
                    <Link href="/#">
                        <p className="text-base font-Poppins-Regular mx-8 cursor-pointer hover:underline">Team</p>
                    </Link> 
                </div>

                <Link href="/#GetTheApp">
                    <button className='w-36 h-12 rounded-full border border-black' > 
                        <p className="text-sm font-Poppins-Regular ">Lets’s Talk</p>
                    </button>
                </Link>
                {/* <div className="w-full flex justify-end lg:hidden flex">

                    {!menu
                        ?
                            <button onClick={()=> setMenu(true)} className=" w-auto h-auto text-center font-Heebo-Regular">
                                <FiMenu size={24} color="white" />
                            </button>
                        :
                            <button onClick={()=> setMenu(false)} className="xl:hidden sm:flex sm:justify-end sm:w-auto sm:h-auto text-center font-Heebo-Regular"> 
                                <IoMdClose  size={24} color="white"/>
                            </button>
                    } 
                </div> */}

            </div> 

            {/* {menu 
                ?
                <div className=' w-full h-full xl:hidden flex flex-col font-Inter-SemiBold items-center mt-0 text-white mb-4'  > 
                    <Link href="/#">
                        <p onClick={()=>setMenu(false)} className="text-sm py-4 cursor-pointer ">Home</p>
                    </Link>
                    <Link href="/#ForIndividuals">
                        <p onClick={()=>setMenu(false)}  className="text-sm py-4 cursor-pointer ">For Individuals</p>
                    </Link>
                    <Link href="/#ForBusinesses">
                        <p onClick={()=>setMenu(false)}  className="text-sm py-4 cursor-pointer ">For Businesses</p>
                    </Link>
                    <Link href="/#Features" >
                        <p onClick={()=>setMenu(false)}  className="text-sm py-4 cursor-pointer">Features</p>
                    </Link>
                    <Link href="/#contactus">
                        <p onClick={()=>setMenu(false)}  className="text-sm py-4 cursor-pointer ">Contact Us</p>
                    </Link>
                    <Link href="/#gettheapp">
                        <p onClick={()=>setMenu(false)}  className="text-sm py-4 cursor-pointer ">Get The App</p>
                    </Link>
                </div>
            :null} */}

        </nav>
        // <div className=' w-full px-12 py-6 flex items-center'>
        //     <img src='/assets/images/logo.png' alt='logo' />
        //     <div className='w-full flex items-center' >
        //         <a></a>
        //     </div>
        // </div>
    )
}
