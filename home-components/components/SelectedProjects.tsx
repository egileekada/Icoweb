import React from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function SelectedProjects() {

    const controls = useAnimation();
    const controls2 = useAnimation();
    const [ ref, inView ]  = useInView();  
    const [ ref2, inView2 ] = useInView();    

    React.useEffect(() => { 
        if (inView) {
            controls.start({ x: 0});
        } 
        if (inView2) {
            controls2.start({ x: 0});
        } 
    }, [controls, controls2, inView, inView2]) 

    return (
        <div style={{backgroundColor: '#F4F4F4'}} className='w-full h-auto py-32 px-6 lg:px-12 flex flex-col items-center justify-center '>
            <p className='font-PublicSans-Bold text-2xl' >Selected  Projects</p>
            {/* Project List */}
            <div onClick={()=> window.open("https://mploi-me.vercel.app/", "_blank")} className='mt-16 w-full lg:w-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-8' >
                <motion.div ref={ref} initial={{x: -200}} animate={controls}  
                    transition={{ ease: "easeOut", duration: 1 }}  className=' w-full lg:w-520px cursor-pointer py-6 lg:py-0' >
                    <div className='w-full h-280px lg:h-520px bg-white' >
                        <img className=' object-cover w-full h-full' src='../assets/images/Mploi.png' /> 
                    </div>
                    <p className='font-PublicSans-Bold text-xl mt-6' >Mploime</p>
                    <p className='font-Poppins-Regular text-sm mt-2'>Branding</p>
                </motion.div>
                <motion.div  initial={{x: +200}} animate={controls}  
                    transition={{ ease: "easeOut", duration: 1 }}  className=' w-full lg:w-520px cursor-pointer py-6 lg:py-0' >
                    <div className='w-full h-280px lg:h-520px bg-white' >

                    </div>
                    <p className='font-PublicSans-Bold text-xl mt-6' >Ndi Igbo</p>
                    <p className='font-Poppins-Regular text-sm mt-2 '>UI/UX & Web Developmet</p>
                </motion.div>
                <motion.div  initial={{x: -200}} animate={controls2}  
                    transition={{ ease: "easeOut", duration: 1 }} onClick={()=> window.open("https://theemma.org/", "_blank")} className=' w-full lg:w-520px cursor-pointer py-6 lg:py-0' >
                    <div ref={ref2} className='w-full h-280px lg:h-520px bg-white' >
                        <img className=' object-cover w-full h-full' src='../assets/images/Emma.png' />
                    </div>
                    <p className='font-PublicSans-Bold text-xl mt-6' >The EMMAs</p>
                    <p className='font-Poppins-Regular text-sm mt-2'>Web Developement</p>
                </motion.div>
                <motion.div  initial={{x: +200}} animate={controls2}  
                    transition={{ ease: "easeOut", duration: 1 }} onClick={()=> window.open("https://www.olokun.icoweb.website/", "_blank")} className=' w-full lg:w-520px cursor-pointer py-6 lg:py-0' >
                    <div className='w-full h-280px lg:h-520px bg-white' >
                        <img className=' object-cover w-full h-full' src='../assets/images/Olokun.png' /> 
                    </div>
                    <p className='font-PublicSans-Bold text-xl mt-6' >Olokun Store</p>
                    <p className='font-Poppins-Regular text-sm mt-2'>Web Development</p>
                </motion.div>
            </div>
            <div className='' >

            </div>
        </div>
    )
}
