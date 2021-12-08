import { motion } from 'framer-motion';
import React from 'react';

export default function Team() {
    return (
        <div style={{backgroundColor: '#F2F2F2'}} className='w-full flex py-32 px-6 lg:px-12 flex-col justify-center items-center' > 
            <p className='font-Poppins-Regular text-lg' >The Thinkers & Builders at icoweb</p>
            <p className='font-PublicSans-Bold text-2xl text-center lg:text-3xl my-6' >Meet Our Team Heads</p>
            <div className='w-auto grid grid-cols-1 lg:grid-cols-5 gap-6 mt-10' >
                <motion.div 
                    drag="x"
                    dragConstraints={{ left: -100, right: 100 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}  className='w-auto' > 
                    <div style={{backgroundColor: '#C4C4C4'}}  className='w-auto h-auto rounded-full '>
                        <img src='/assets/images/CEO.png' className='w-40 h-40 rounded-full ' />
                    </div>
                    <p className='font-PublicSans-Medium text-center mt-4' >Abiodun Osagie</p>
                    <p className='font-Poppins-Regular text-center mt-1 text-xs' >CEO, BUSINESS DEVELOPER</p>
                </motion.div>
                <motion.div 
                    drag="x"
                    dragConstraints={{ left: -100, right: 100 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}  className='w-auto' > 
                    <div style={{backgroundColor: '#C4C4C4'}}  className='w-auto h-auto rounded-full '>
                        <img src='/assets/images/team1.jpeg' className='w-40 h-40 rounded-full object-cover  ' />
                    </div>
                    <p className='font-PublicSans-Medium text-center mt-4' >George Boma Smith</p>
                    <p className='font-Poppins-Regular text-center mt-1 text-xs' >Chief Technical officer</p>
                </motion.div>
                <motion.div 
                    drag="x"
                    dragConstraints={{ left: -100, right: 100 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}  className='w-auto' > 
                    <div style={{backgroundColor: '#C4C4C4'}}  className='w-auto h-auto rounded-full '>
                        <img src='/assets/images/team2.jpeg' className='w-40 h-40 rounded-full object-cover ' />
                    </div>
                    <p className='font-PublicSans-Medium text-center mt-4' >Tekevwe Emoghene</p>
                    <p className='font-Poppins-Regular text-center mt-1 text-xs' >Chief Operations Officer</p>
                </motion.div>
                <motion.div 
                    drag="x"
                    dragConstraints={{ left: -100, right: 100 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}  className='w-auto' > 
                    <div style={{backgroundColor: '#C4C4C4'}}  className='w-auto h-auto rounded-full '>
                        <img src='/assets/images/Bright.png' className='w-40 h-40 rounded-full ' />
                    </div>
                    <p className='font-PublicSans-Medium text-center mt-4' >Bright Mba</p>
                    <p className='font-Poppins-Regular text-center mt-1 text-xs' >Product Designer</p>
                </motion.div>
                <motion.div 
                    drag="x"
                    dragConstraints={{ left: -100, right: 100 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}  className='w-auto' > 
                    <div style={{backgroundColor: '#C4C4C4'}}  className='w-auto h-auto rounded-full '>
                        <img src='/assets/images/Avatar.png' className='w-40 h-40 rounded-full ' />
                    </div>
                    <p className='font-PublicSans-Medium text-center mt-4' >Ekada God's Time</p>
                    <p className='font-Poppins-Regular text-center mt-1 text-xs' >Frontend Developer</p>
                </motion.div>
            </div>
        </div>
    );
}
