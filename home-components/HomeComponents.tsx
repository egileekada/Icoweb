import React from 'react'
import Navbar from './components/Navbar'
import Services from './components/Services'

export default function HomeComponents() {
    return ( 
        <div style={{backgroundColor: '#F4F4F4', color: '#121212'}} className='w-full h-full overflow-x-hidden'  >
            <Navbar />
            {/* SalesPage Components */}
            <div className='w-full h-full flex justify-center items-center relative flex-col ' >
                <p className='font-PublicSans-SemiBold text-5xl py-8 text-center z-10' >Bring your amazing ideas to the <br/> market with iCOWEB</p>
            
                <div className='w-full h-auto -mt-16 flex justify-center items-center relative pb-20 ' >
                    <img style={{width:'656.24px', height: '673.37px'}} src='../assets/images/homeimage.png' alt='logo' />
                    <img className='absolute -mt-1' src='../assets/images/people.png' alt='logo' />
                </div>
          </div>
          <div id='services' className='w-full' >
            <Services />
          </div>
        </div>
    )
}
