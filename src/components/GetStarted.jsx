import React from 'react'
import bgImage from '../assets/Group-1.png'
import bgImage2 from '../assets/bgImage2.png'

function GetStarted() {
  return (
    <div className='relative overflow-hidden bg-no-repeat mx-auto w-full lg:min-h-[480px] bg-[#0A0914] flex flex-col lg:gap-[32px] justify-center items-center'>

      {/* First orb */}
      <img
        src={bgImage}
        alt="orb"
        className="absolute z-0 pointer-events-none"
        style={{
          top: '-200px',
          left: '-25px',
          transform: 'rotate(13.38deg)',
        }}
      />

      {/* Second orb positioned at (1262px, 296px) */}
      <img
        src={bgImage2}
        alt="orb-2"
        className="absolute z-0 pointer-events-none"
        style={{
          top: '100px',
          left: '1100px',
        }}
      />

      <div className='flex flex-col justify-center items-center gap-[16px]'>
        <h1 className='lg:text-[48px] leading-[106%] text-[#FAFAFF]' style={{ fontFamily: 'SatoshiVariable', fontWeight: 600 }}>
          Get started for free
        </h1>
        <p className='lg:text-[22px] leading-[120%] tracking-[0.5%] opacity-[0.74] text-[#FAFAFF] text-center' style={{ fontFamily: 'SatoshiVariable', fontWeight: 500 }}>
          Build and test for as long as you need.<br />
          Pick a plan when you’re ready.
        </p>
      </div>

      <div className='flex gap-[12px] justify-center items-center'>
        <button className='border-[#FAFAFF1A] border-[1px] cursor-pointer pt-[12px] pr-[16px] pb-[12px] pl-[16px] lg:rounded-[12px] bg-[#FAFAFF05] lg:text-[14px] leading-[140%] tracking-[2%] text-[#FAFAFF]' style={{ fontFamily: 'SatoshiVariable', fontWeight: 600 }}>
          Start free trial
        </button>
        <button className='border-[#FAFAFF1A] border-[1px] cursor-pointer pt-[12px] pr-[16px] pb-[12px] pl-[16px] lg:rounded-[12px] bg-[#6852D6] lg:text-[14px] leading-[140%] tracking-[2%] text-[#FAFAFF]' style={{ fontFamily: 'SatoshiVariable', fontWeight: 600 }}>
          Schedule a demo
        </button>
      </div>
    </div>
  )
}

export default GetStarted