import React from 'react'

export default function Services() {
    return (
        <div style={{backgroundColor: '#FFF3EC'}} className='w-full h-auto py-32 px-6 lg:px-12 flex flex-col items-center justify-center '>
            <p  style={{backgroundColor: '#F4F4F4'}}  className='font-Poppins-Regular text-lg' >Our Services</p>
            <p className='font-PublicSans-Bold text-2xl my-6' >What we do at iCOWEB</p>
            <p className='font-Poppins-Regular text-center lg:w-540px' >We build useable and scalable products from our customer’s imagination and ensure it meets the business and user goal and as well ensure every design process is followed</p>

            {/* Services Options  */}
            <div className='w-full flex flex-col lg:flex-row  items-center justify-center  mt-16' >
                <div className='border border-black pb-2 w-full lg:w-280px h-338px' >
                    <div className='w-full h-full flex flex-col px-8 justify-end' > 
                        <div style={{backgroundColor: '#121212'}} className='w-16 h-16 flex items-center justify-center' >
                            <svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.35 22V16.12H6.5V22H0.35ZM15.4871 6.49V22H9.93711V6.49H15.4871ZM15.4871 0.309999V5.23H9.93711V0.309999H15.4871Z" fill="white"/>
                            </svg>
                        </div>
                        <p className='font-Poppins-Regular text-lg my-10 w-40' >Brand & Identity Design</p>
                    </div>
                </div>

                <div className='border border-black w-full lg:w-auto lg:mt-0 mt-12 lg:h-338px lg:ml-12' > 
                    <p className='font-PublicSans-Bold text-xl text-center py-12' >Product Development</p>
                    <div className='flex flex-col lg:flex-row mt-auto ' > 
                        <div className=' w-full lg:w-280px px-8 border-t lg:border-t-0 border-black lg:py-0 py-10  ' > 
                            <div style={{backgroundColor: '#121212'}} className='w-16 h-16 flex items-center justify-center' >
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="11.0304" width="28" height="3.39394" rx="1" fill="white"/>
                                    <rect y="17.8182" width="28" height="3.39394" rx="1" fill="white"/>
                                    <rect y="24.6061" width="28" height="3.39394" rx="1" fill="white"/>
                                    <ellipse cx="4.06452" cy="3.81818" rx="4.06452" ry="3.81818" fill="white"/>
                                </svg>
                            </div>
                            <p className='font-Poppins-Regular text-lg my-10 w-40' >User Interface Design</p>
                        </div>
                        <div className=' w-full lg:w-280px h-full border-t lg:border-t-0 lg:py-0 py-10 lg:border-l lg:border-r border-black px-8' > 
                            <div style={{backgroundColor: '#121212'}} className='w-16 h-16 flex items-center justify-center' >
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.9321 19.3862C20.507 19.3862 24.4133 20.1115 24.4133 23.0138C24.4133 25.915 20.5321 26.6667 15.9321 26.6667C11.3572 26.6667 7.45083 25.9414 7.45083 23.0403C7.45083 20.1379 11.3321 19.3862 15.9321 19.3862ZM23.2468 17.6385C24.9958 17.6061 26.8762 17.8463 27.571 18.0168C29.043 18.3062 30.0113 18.897 30.4124 19.7556C30.7515 20.4604 30.7515 21.2782 30.4124 21.9819C29.7988 23.3136 27.8205 23.7411 27.0517 23.8515C26.8929 23.8755 26.7651 23.7375 26.7819 23.5777C27.1746 19.8877 24.0503 18.1381 23.242 17.7358C23.2074 17.7178 23.2002 17.6902 23.2038 17.6734C23.2062 17.6614 23.2205 17.6421 23.2468 17.6385ZM8.42482 17.6361L8.75417 17.639C8.78044 17.6426 8.79357 17.6618 8.79596 17.6726C8.79954 17.6907 8.79238 17.7171 8.75895 17.7363C7.9495 18.1386 4.82515 19.8881 5.21793 23.577C5.23464 23.7379 5.10809 23.8748 4.94931 23.852C4.18046 23.7415 2.20221 23.314 1.58856 21.9823C1.24831 21.2775 1.24831 20.4609 1.58856 19.7561C1.9897 18.8975 2.95674 18.3067 4.42878 18.0161C5.12481 17.8468 7.00396 17.6066 8.75417 17.639L8.42482 17.6361ZM15.9321 5.33337C19.0469 5.33337 21.5445 7.84306 21.5445 10.9772C21.5445 14.1101 19.0469 16.6222 15.9321 16.6222C12.8173 16.6222 10.3197 14.1101 10.3197 10.9772C10.3197 7.84306 12.8173 5.33337 15.9321 5.33337ZM23.5512 6.27457C26.5598 6.27457 28.9225 9.12169 28.1178 12.293C27.5746 14.4281 25.6083 15.8462 23.4175 15.7886C23.1979 15.7826 22.9818 15.7622 22.7728 15.7261C22.6212 15.6997 22.5448 15.528 22.6308 15.4007C23.4665 14.1639 23.9428 12.6761 23.9428 11.079C23.9428 9.41228 23.4223 7.85844 22.5185 6.58438C22.4899 6.54475 22.4684 6.48351 22.4971 6.43788C22.5209 6.40065 22.5651 6.38144 22.6069 6.37183C22.9113 6.30939 23.2241 6.27457 23.5512 6.27457ZM8.44794 6.27445C8.77507 6.27445 9.08786 6.30927 9.39349 6.37171C9.43408 6.38132 9.47945 6.40173 9.50333 6.43776C9.53079 6.48339 9.51049 6.54463 9.48184 6.58426C8.57808 7.85831 8.05755 9.41216 8.05755 11.0789C8.05755 12.676 8.5339 14.1638 9.36961 15.4006C9.45557 15.5279 9.37916 15.6996 9.22754 15.726C9.01742 15.7632 8.80252 15.7825 8.58285 15.7885C6.3921 15.8461 4.4258 14.4279 3.88259 12.2929C3.07672 9.12157 5.43939 6.27445 8.44794 6.27445Z" fill="white"/>
                                </svg>
                            </div>
                            <p className='font-Poppins-Regular text-lg my-10 w-40' >User Experience Design</p>
                        </div>
                        <div className=' w-full lg:w-280px h-full px-8  border-t lg:border-t-0 border-black lg:py-0 py-10' > 
                            <div style={{backgroundColor: '#121212'}} className='w-16 h-16 flex items-center justify-center' >
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25.6512 31.6801H6.34883C5.34403 31.6801 4.74243 31.0785 4.74243 30.0737V1.92647C4.74243 0.921668 5.34403 0.320068 6.34883 0.320068H25.648C26.6528 0.320068 27.2544 0.921668 27.2544 1.92647V30.0705C27.2576 31.0721 26.656 31.6801 25.6512 31.6801ZM24.8448 3.53607C24.8448 3.03687 24.5408 2.73287 24.0416 2.73287H7.95843C7.45923 2.73287 7.15523 3.03687 7.15523 3.53607V28.4609C7.15523 28.9601 7.45923 29.2641 7.95843 29.2641H24.0416C24.5408 29.2641 24.8448 28.9601 24.8448 28.4609V3.53607ZM16.2016 26.8513C15.2 26.8513 14.3904 26.0417 14.3904 25.0401C14.3904 24.0385 15.2 23.2289 16.2016 23.2289C17.2032 23.2289 18.0128 24.0385 18.0128 25.0401C18.0128 26.0449 17.1968 26.8513 16.2016 26.8513Z" fill="white"/>
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