import React from 'react'
import { GoChevronUp } from "react-icons/go";
import { GoChevronDown } from "react-icons/go";

function FaqSec() {
  return (
      <div className='relative max-w-[1440px] max-h-[1016px] bg-[#FAFAFF] flex flex-col justify-center items-center'>
          
              <div className='absolute mx-auto px-[8px] py-[16px] top-[100px] lg:w-[528px] w-[350px] flex flex-col gap-[12px] justify-center items-start lg:items-center'>

                  <h1 className='text-[#FF7129] text-[19px] lg:text-[22px] leading-[106%]' style={{ fontFamily: 'SatoshiVariable', fontWeight: 640 }}>FAQ's</h1>
                  <p className='text-[32px] lg:text-[48px] leading-[106%] text-start lg:text-center text-[#14131D] lg:w-[528px] w-[350px] ' style={{ fontFamily: 'SatoshiVariable', fontWeight: 640 }} >We want to help you with all your doubts</p>


              </div>
         
             
          
          <div className='mx-auto absolute top-[301px] w-[390px] pr-[20px] pl-[20px] pb-[48px] lg:w-[751px] flex flex-col gap-[16px]'>
              <div className='flex flex-col lg:rounded-[20px] rounded-[16px] bg-[#14131D05] lg:p-[24px] p-[16px] border-[1px] border-[#14131D0A] backdrop-blur-[40px] lg:gap-[8px] gap-[12px]'>
                  <div className='flex justify-between items-center'>
                      <h1 className=' text-[#14131D] lg:text-[22px] lg:w-[667px] w-[286px] text-[18px] leading-[106%] ' style={{ fontFamily: 'SatoshiVariable', fontWeight: 640 }}>This is a frequently asked question?</h1>
                      <GoChevronUp className='w-[20px] h-[20px] opacity-[74%]' />

                  </div>
                  
                  
                  <p className='text-[#14131D] text-[18px] lg:text-[22px] leading-[120%] tracking-[0.5%] opacity-[74%]' style={{ fontFamily: 'SatoshiVariable', fontWeight: 500 }}>Lorem ipsum dolor sit amet consectetur. Tellus eget consequat tortor odio maecenas cursus leo dui. Pulvinar quam sit quam feugiat laoreet morbi tellus dui massa.</p>
              </div>
              <div className='flex flex-col lg:rounded-[20px] rounded-[16px] bg-[#14131D05] lg:p-[24px] p-[16px] border-[1px] border-[#14131D0A] backdrop-blur-[40px] lg:gap-[16px] gap-[12px]'>
                  <div className='flex justify-between items-center'>
                      <h1 style={{ fontFamily: 'SatoshiVariable', fontWeight: 640 }} className='lg:text-[22px] text-[18px] lg:w-[667px] w-[290px] leading-[106%] text-[#14131D] opacity-[74%]'>This is a frequently asked question?</h1>
                      <GoChevronDown className='w-[20px] h-[20px] opacity-[74%]' />
                  </div>
                
                  
              </div>
              <div className='flex flex-col lg:rounded-[20px] rounded-[16px] bg-[#14131D05] lg:p-[24px] p-[16px] border-[1px] border-[#14131D0A] backdrop-blur-[40px] lg:gap-[16px] gap-[12px]'>
                  <div className='flex justify-between items-center'>
                      <h1 style={{ fontFamily: 'SatoshiVariable', fontWeight: 640 }} className='lg:text-[22px] text-[18px] lg:w-[667px] w-[290px] leading-[106%] text-[#14131D] opacity-[74%]'>This is a very long frequently asked question about our services with more than one line?</h1>
                      <GoChevronDown className='w-[20px] h-[20px] opacity-[74%]' />
                      
                  </div>
              </div>
              <div className='flex flex-col lg:rounded-[20px] rounded-[16px] bg-[#14131D05] lg:p-[24px] p-[16px] border-[1px] border-[#14131D0A] backdrop-blur-[40px] lg:gap-[16px] gap-[12px]'>
                  <div className='flex justify-between items-center'>
                      <h1 style={{ fontFamily: 'SatoshiVariable', fontWeight: 640 }} className='lg:text-[22px] text-[18px] lg:w-[667px] w-[290px] leading-[106%] text-[#14131D] opacity-[74%]'>This is a frequently asked question?</h1>
                      <GoChevronDown className='w-[20px] h-[20px] opacity-[74%]' />
                      
                  </div>
              </div>
              <div className='flex flex-col lg:rounded-[20px] rounded-[16px] bg-[#14131D05] lg:p-[24px] p-[16px] border-[1px] border-[#14131D0A] backdrop-blur-[40px] lg:gap-[16px] gap-[12px]'>
                  <div className='flex justify-between items-center'> 
                      <h1 style={{ fontFamily: 'SatoshiVariable', fontWeight: 640 }} className='lg:text-[22px] text-[18px] lg:w-[667px] w-[290px] leading-[106%] text-[#14131D] opacity-[74%]'>This is a question?</h1>
                      <GoChevronDown className='w-[20px] h-[20px] opacity-[74%]' />

                  </div>
              </div>
              <div className='flex flex-col lg:rounded-[20px] rounded-[16px] bg-[#14131D05] lg:p-[24px] p-[16px] border-[1px] border-[#14131D0A] backdrop-blur-[40px] lg:gap-[16px] gap-[12px]'>
                  <div className='flex justify-between items-center'>
                      <h1 style={{ fontFamily: 'SatoshiVariable', fontWeight: 640 }} className='lg:text-[22px] text-[18px] lg:w-[667px] w-[290px] leading-[106%] text-[#14131D] opacity-[74%]'>This is a question?</h1>
                      <GoChevronDown className='w-[20px] h-[20px] opacity-[74%]' />

                  </div>
              </div>
              
          </div>
      </div>
  )
}

export default FaqSec