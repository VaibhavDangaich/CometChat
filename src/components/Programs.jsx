import React from 'react';
import icon from '../assets/Icon.png'
import icon1 from '../assets/Icon(1).png'
import icon2 from '../assets/Icon(2).png'


function Programs() {
  return (
      <div className='lg:w-[1440px] flex flex-col'>
          <div className="w-full max-w-[1440px] px-[64px] pt-[100px] pb-[64px] flex flex-col gap-[10px]">
              <p className="lg:text-[22px] lg:w-[142px] lg:h-[23px] leading-[106%] text-[#6852D6] font-semibold" style={{ fontFamily: 'SatoshiVariable', fontWeight: 640 }}>Our programs</p>
              <h2 className="lg:text-[48px] lg:h-[102px] lg:w-[528px] font-bold text-[#14131D] leading-[106%]" style={{ fontFamily: 'SatoshiVariable', fontWeight: 640 }}>
                  Types of partnerships programs
              </h2>
          </div>
          <div className='flex lg:gap-[64px] pt-[48px] pr-[64px] pb-[80px] pl-[64px]'>
              <div className='flex flex-col lg:gap-[10px]'>
                  <img
                      src={icon}
                      alt="Banner"
                      width={38}               
                      height={38}     
                    
                  />
                  <div className=' flex flex-col lg:gap-[4px]'>
                      <h1 className='lg:w-[394.6666564941406px] lg:text-[18px] leading-[112.00000000000001%] text-[#14131D]' style={{ fontFamily: 'SatoshiVariable', fontWeight: 640 }}>Affiliate partner program</h1>
                      <p className=' lg:w-[394.6666564941406px] opacity-[74%] lg:text-[18px] leading-[120%] tracking-[0.5%] text-[#14131D]' style={{ fontFamily: 'SatoshiVariable', fontWeight: 500 }}>Bring value to your customers with a world-class in-app messaging tool that increases user-to-user engagement and retention. Get incentivized for referring CometChat to any of your customers.</p>

                      
                  </div>
                  
              </div>
              <div className='flex flex-col lg:gap-[10px]'>
                  <img
                      src={icon1}
                      alt='Banner'
                      width={38}
                      height={38}
                  >
                  </img>
                  <div className=' flex flex-col lg:gap-[4px]'>
                      <h1 className='lg:w-[394.6666564941406px] lg:text-[18px] leading-[112.00000000000001%] text-[#14131D]' style={{ fontFamily: 'SatoshiVariable', fontWeight: 640 }}>Technology partner program</h1>
                      <p className=' lg:w-[394.6666564941406px] opacity-[74%] lg:text-[18px] leading-[120%] tracking-[0.5%] text-[#14131D]' style={{ fontFamily: 'SatoshiVariable', fontWeight: 500 }}>Development teams can use our plug and play solution to build top class chat solutions for their clients using our SDKs and APIs. It’s simple, safe and secure!</p>

                </div>
                 
              </div>
              <div className='flex flex-col lg:gap-[10px]'>
                  <img
                      src={icon2}
                      alt='Banner'
                      width={38}
                      height={38}
                  ></img>
                  <div className=' flex flex-col lg:gap-[4px]'>
                      <h1 className='lg:w-[394.6666564941406px] lg:text-[18px] leading-[112.00000000000001%] text-[#14131D]' style={{ fontFamily: 'SatoshiVariable', fontWeight: 640 }}>Start up growth program</h1>
                      <p className=' lg:w-[394.6666564941406px] opacity-[74%] lg:text-[18px] leading-[120%] tracking-[0.5%] text-[#14131D]' style={{ fontFamily: 'SatoshiVariable', fontWeight: 500 }}>We help incubators, accelerators, co-working space that foster an ecosystem of start-ups. This program also enables VCs to accelerate the growth of their portfolio companies.</p>

                  </div>
                  
              </div>
              
          </div>
    </div>
  )
}

export default Programs
