import Link from 'next/link'
import React from 'react'
import { FiMenu } from 'react-icons/fi'; 
import { IoMdClose } from 'react-icons/io';

export default function Navbar(props: any) { 
    
    const [menu, setMenu] = React.useState(false);
    
    return ( 
        <nav className='w-full h-auto flex flex-col items-center px-6 lg:px-16' >

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
                    <Link href="/#projects">
                        <p className="text-base font-Poppins-Regular mx-8 cursor-pointer hover:underline">Projects</p>
                    </Link> 
                    <Link href="/#team">
                        <p className="text-base font-Poppins-Regular mx-8 cursor-pointer hover:underline">Team</p>
                    </Link> 
                </div> 
                <button onClick={()=> props.open(true)} className='w-36 h-12 rounded-full hidden justify-center items-center lg:flex  border border-black' > 
                    <p className="text-sm font-Poppins-Regular ">Lets’s Talk</p>
                </button> 
                <div className="w-full flex justify-end lg:hidden flex">

                    {!menu
                        ?
                            <button onClick={()=> setMenu(true)} className=" w-auto h-auto text-center font-Heebo-Regular">
                                <FiMenu size={24} color="#544BC2" />
                            </button>
                        :
                            <button onClick={()=> setMenu(false)} className="xl:hidden sm:flex sm:justify-end sm:w-auto sm:h-auto text-center font-Heebo-Regular"> 
                                <IoMdClose  size={24} color="#544BC2"/>
                            </button>
                    } 
                </div>

            </div> 

            {menu 
                ?
                <div style={{color: '#544BC2'}} className=' w-full h-full xl:hidden flex flex-col font-Inter-SemiBold items-center mt-0 mb-4'  > 
                    <Link href="/#">
                        <p onClick={()=>setMenu(false)} className="text-sm py-4 font-Poppins-Regular cursor-pointer hover:underline">Home</p>
                    </Link> 
                    <Link href="/#services">
                        <p onClick={()=>setMenu(false)} className="text-sm py-4 font-Poppins-Regular cursor-pointer hover:underline">Services</p>
                    </Link> 
                    <Link href="/#projects">
                        <p onClick={()=>setMenu(false)} className="text-sm py-4 font-Poppins-Regular cursor-pointer hover:underline">Projects</p>
                    </Link> 
                    <Link href="/#team">
                        <p onClick={()=>setMenu(false)} className="text-sm py-4 font-Poppins-Regular cursor-pointer hover:underline">Team</p>
                    </Link> 
                    <Link href="https://api.whatsapp.com/send?phone=+2347030850395">
                        <p onClick={()=>setMenu(false)} className="text-sm py-4 font-Poppins-Regular cursor-pointer hover:underline">Lets’s Talk</p>
                    </Link> 
                </div>
            :null}

        </nav> 
    )
}
