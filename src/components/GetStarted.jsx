import React from 'react'
import bgImage from '../assets/Group-1.png'
import bgImage2 from '../assets/bgImage2.png'
import grad from '../assets/Vector-grad.png'
import orbit from '../assets/orbit.png'


function GetStarted() {
  return (
    <div  className='relative overflow-hidden bg-no-repeat w-full min-h-[358px] lg:min-h-[480px] bg-[#0A0914] flex flex-col lg:gap-[32px] gap-[24px] justify-center lg:items-center items-start pl-[20px]'>

     
      <div data-aos="fade-up" className="absolute inset-0 z-0 pointer-events-none">
        <img src={grad} className=' mt-[-190px]'></img>
        <img src={orbit} className='mt-[-450px]'></img>
        {Array.from({ length: 150 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 1.5 + 0.5}px`,
              height: `${Math.random() * 1.5 + 0.5}px`,
              backgroundColor: [
                '#FFFFFF',
                '#A584FF',
                '#72BCFF',
                '#FFBD6F',
                '#AC7DFF',
              ][Math.floor(Math.random() * 5)],
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}
      </div>

   
      <img data-aos="fade-up"
        src={bgImage}
        alt="orb"
        className="absolute lg:top-[-200px] top-[-410px] left-[-70px] lg:left-[-25px] z-0 pointer-events-none"
        style={{
         
          transform: 'rotate(13.38deg)',
        }}
      />

      
      <img data-aos="fade-up"
        src={bgImage2}
        alt="orb-2"
        className="absolute lg:top-[100px] top-[10px] left-[130px] lg:left-[1100px] z-0 pointer-events-none"
       
      />

      <div data-aos="fade-up" className='flex flex-col justify-center lg:items-center items-start gap-[16px] z-10'>
        <h1 className='lg:text-[48px] text-[32px] leading-[106%] text-[#FAFAFF]' style={{ fontFamily: 'SatoshiVariable', fontWeight: 600 }}>
          Get started<br className='lg:hidden block'></br> for free
        </h1>
        <p className='lg:text-[22px] text-[18px] leading-[120%] tracking-[0.5%] opacity-[0.74] text-[#FAFAFF] lg:text-center text-left' style={{ fontFamily: 'SatoshiVariable', fontWeight: 500 }}>
          Build and test for as long as you need.<br />
          Pick a plan when you’re ready.
        </p>
      </div>

      <div data-aos="fade-up" className='flex gap-[12px] justify-center items-center z-10'>
        <button className='transition-transform duration-300 ease-in-out hover:scale-115 border-[#FAFAFF1A] border-[1px] cursor-pointer pt-[12px] pr-[16px] pb-[12px] pl-[16px] rounded-[12px] bg-[#FAFAFF05] text-[14px] leading-[140%] tracking-[2%] text-[#FAFAFF]' style={{ fontFamily: 'SatoshiVariable', fontWeight: 600 }}>
          Start free trial
        </button>
        <button className='transition-transform duration-300 ease-in-out hover:scale-115 border-[#FAFAFF1A] border-[1px] cursor-pointer pt-[12px] pr-[16px] pb-[12px] pl-[16px] rounded-[12px] bg-[#6852D6] text-[14px] leading-[140%] tracking-[2%] text-[#FAFAFF]' style={{ fontFamily: 'SatoshiVariable', fontWeight: 600 }}>
          Schedule a demo
        </button>
      </div>
    </div>
  )
}

export default GetStarted