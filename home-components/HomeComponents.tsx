import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import SelectedProjects from './components/SelectedProjects'
import Services from './components/Services'
import Team from './components/Team'

export default function HomeComponents() {
    return ( 
        <div style={{backgroundColor: '#F4F4F4', color: '#121212'}} className='w-full h-full relative overflow-x-hidden'  >
            <Navbar />
            {/* SalesPage Component */}
            <div className='w-full h-full flex justify-center items-center relative flex-col ' >
                <p className='font-PublicSans-SemiBold text-2xl lg:text-5xl py-8 text-center z-10' >Bring your amazing ideas to the <br/> market with iCOWEB</p>
            
                <div className='w-full h-auto -mt-16 flex justify-center items-center relative pb-20 ' >
                    <img className='lg:h-673.37px lg:w-656.24px w-full' src='../assets/images/homeimage.png' alt='logo' />
                    <img className='absolute -mt-1' src='../assets/images/people.png' alt='logo' />
                </div>
          </div>
          {/* Services Component */}
          <div id='services' className='w-full' >
            <Services />
          </div>
          {/* Projects Component  */}
          <div id='projects' className='w-full' >
            <SelectedProjects />
          </div>
          {/* Team Component  */}
          <div id='team' className='w-full' >
            <Team />
          </div>
          {/* Floating Button  */}
          <button style={{backgroundColor: '#544AC4'}} className=' rounded-full flex items-center p-2 lg:py-3 lg:px-6 fixed lg:bottom-24 lg:right-24 right-8 bottom-10 font-Poppins-Reglar text-sm text-white' >
            <svg className='lg:mr-2 w-10 h-10 ' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.3333 9.78532C18.3333 14.2692 14.6705 17.9041 10.1515 17.9041C8.71679 17.9041 7.36904 17.5374 6.19644 16.8939L1.66663 18.3333L3.14348 13.9774C2.39848 12.7541 1.9694 11.3192 1.9694 9.78532C1.9694 5.30147 5.63255 1.66666 10.1515 1.66666C14.6709 1.66666 18.3333 5.30147 18.3333 9.78532ZM10.1515 2.95962C6.35811 2.95962 3.27255 6.02166 3.27255 9.78532C3.27255 11.2789 3.7594 12.662 4.58293 13.7872L3.72348 16.3222L6.36699 15.482C7.45311 16.1952 8.75421 16.6111 10.1516 16.6111C13.9444 16.6111 17.0305 13.5494 17.0305 9.78574C17.0305 6.02202 13.9446 2.95962 10.1515 2.95962ZM14.2831 11.6552C14.2325 11.5724 14.099 11.5224 13.8986 11.423C13.698 11.3235 12.7116 10.8418 12.5283 10.7757C12.3444 10.7094 12.2103 10.6761 12.0768 10.8752C11.9433 11.0744 11.5589 11.5224 11.4416 11.6552C11.3246 11.7883 11.2077 11.805 11.007 11.7053C10.8066 11.6059 10.1605 11.3956 9.39438 10.7177C8.79829 10.1903 8.39571 9.53924 8.27866 9.33982C8.16181 9.14074 8.26644 9.03316 8.36663 8.93407C8.45696 8.84482 8.56738 8.70166 8.66754 8.58557C8.76813 8.46924 8.80146 8.38649 8.86796 8.25351C8.93513 8.12073 8.90163 8.00462 8.85129 7.90481C8.80129 7.80536 8.39979 6.8261 8.23274 6.42758C8.0657 6.02943 7.89885 6.09573 7.78163 6.09573C7.66478 6.09573 7.53089 6.07906 7.39719 6.07906C7.26348 6.07906 7.04607 6.12888 6.86219 6.32796C6.67848 6.52722 6.16052 7.00869 6.16052 7.98777C6.16052 8.96699 6.87885 9.91316 6.9794 10.0457C7.07959 10.1783 8.36646 12.2532 10.4053 13.05C12.4444 13.8465 12.4444 13.5807 12.8122 13.5474C13.1796 13.5142 13.9985 13.0661 14.1663 12.6017C14.333 12.1365 14.333 11.7382 14.2831 11.6552Z" fill="white"/>
            </svg>
            <p className='hidden lg:flex' >Whatsapp us</p>
          </button>
          {/* Footer Component  */}
          <div className='w-full' >
            <Footer />
          </div>
        </div>
    )
}
