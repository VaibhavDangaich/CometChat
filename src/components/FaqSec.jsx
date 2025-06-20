import React from 'react'

function FaqSec() {
  return (
      <div className='w-[1440px] h-[1016px] bg-[#FAFAFF] flex flex-col justify-between items-center'>
          <div className='mt-[100px] w-[528px] h-[102px] flex flex-col gap-[12px] items-center'>
              <h1 className='text-[#FF7129] text-[22px] leading-[106%]' style={{ fontFamily: 'SatoshiVariable', fontWeight: 640 }}>FAQ's</h1>
              <p className=' text-[48px] leading-[106%] text-center text-[#14131D]' style={{ fontFamily: 'SatoshiVariable', fontWeight: 640 }} >We want to help you with all your doubts</p>
          </div>
          <div className='mt-[301px] w-[751px] flex flex-col gap-[16px]'>
              <div className='rounded-[20px] bg-[#14131D05] p-[24px] border-[1px] border-[#14131D0A] backdrop-blur-[40px] gap-[16px]'>
                  <h1 className=' text-[#14131D] text-[22px] leading-[106%] ' style={{ fontFamily: 'SatoshiVariable', fontWeight: 640 }}>This is a frequently asked question?</h1>
                  <p className='text-[#14131D] text-[22px] leading-[120%] tracking-[0.5%] opacity-[74%]' style={{ fontFamily: 'SatoshiVariable', fontWeight: 500 }}>Lorem ipsum dolor sit amet consectetur. Tellus eget consequat tortor odio maecenas cursus leo dui. Pulvinar quam sit quam feugiat laoreet morbi tellus dui massa.</p>
              </div>
              <div className='rounded-[20px] bg-[#14131D05] p-[24px] border-[1px] border-[#14131D0A] backdrop-blur-[40px] gap-[16px]'>
                  <h1 style={{ fontFamily: 'SatoshiVariable', fontWeight: 640 }} className='text-[22px] leading-[106%] text-[#14131D] opacity-[74%]'>This is a frequently asked question?</h1>
                  
              </div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              
          </div>
      </div>
  )
}

export default FaqSec