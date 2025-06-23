import React from 'react'
import icon3 from '../assets/Icon(3).png'
import icon4 from '../assets/Icon(4).png'
import icon5 from '../assets/Icon(5).png'
import icon6 from '../assets/Icon(6).png'
import icon7 from '../assets/Icon(7).png'
import icon8 from '../assets/Icon(8).png'
import icon9 from '../assets/Icon(9).png'
import icon10 from '../assets/Icon(10).png'
import icon11 from '../assets/Icon(11).png'
const perks = [
    { icon: icon3, title: "Free credits", desc: "Empowering partners to scale." },
    { icon: icon4, title: "Revenue share", desc: "Get monthly recurring revenues when you refer clients." },
    { icon: icon5, title: "Training and mentoring sessions", desc: "Enabling partners to deliver the best experience." },
    { icon: icon6, title: "Special developer access", desc: "Get an all-access account to build unlimited PoCs for your clients." },
    { icon: icon7, title: "Reduced time", desc: "Deliver your products much faster with our partners’ programs." },
    { icon: icon8, title: "Value addition to your users", desc: "We need a 2 line text here " },
    { icon: icon9, title: "Knowledge sessions", desc: "Access to product and market sessions." },
    { icon: icon10, title: "On-demand support", desc: "Technical assistance for implementation." },
    { icon: icon4, title: "Significant passive income",desc : "We need a 2 line text here ." },
  ];

function PartnerPerks() {
  return (
      <div className='bg-[#0A0914] w-full max-w-[100vw] overflow-x-hidden'>
          <div className='lg:pt-[100px] pt-[48px] lg:pr-[64px] pr-[20px] lg:pb-[64px] pb-[40px] lg:pl-[64px] pl-[20px] lg:w-[528px]'>
              <div className='flex flex-col lg:gap-[12px] gap-[8px]'>
                  <h1 className='hidden lg:block lg:w-[125px] lg:text-[22px] leading-[106%] text-[#FF7F3E]' style={{ fontFamily: 'SatoshiVariable', fontWeight: 600 }}>Be a partner</h1>
                  <h1 className='block lg:hidden text-[#FF7F3E] text-[18px] leading-[106%]'>The benefits</h1>
                  <p className='text-[#FAFAFF] hidden lg:block lg:text-[48px] leading-[106%] lg:w-[528px]' style={{ fontFamily: 'SatoshiVariable', fontWeight: 600 }}>CometChat partner advantages</p>
                  <p className='block  lg:hidden w-[350px] text-[32px] leading-[106%] text-[#FAFAFF]' style={{ fontFamily: 'SatoshiVariable', fontWeight: 600 }}>Moderation to help your community thrive</p>

              </div>
             
              
          </div>
          <div className='lg:pt-[48px] pt-[24px] lg:pr-[64px] pr-[20px] lg:pb-[80px] pb-[48px] lg:pl-[64px] pl-[20px] '>
              <div className='lg:grid lg:grid-cols-3 lg:gap-[64px] flex flex-col gap-[48px]'>
                  {
                      perks.map((perk, index) => (
                          <div className='flex flex-col justify-center lg:gap-[12px] gap-[8px]'>
                              <img src={perk.icon} height={38} width={38}></img>
                              <h1 className='text-[#FAFAFF] lg:text-[18px] leading-[112.00000000000001%] ' style={{ fontFamily: 'SatoshiVariable', fontWeight: 640 }}>{perk.title}</h1>
                              <p className='text-[#FAFAFF] opacity-[0.74] lg:text-[18px] tracking-[0.5%]' style={{ fontFamily: 'SatoshiVariable', fontWeight: 500 }}>{perk.desc}</p>
                          </div>
                      ))
                      
                  }
                 
              
                  
                
              </div>
              
          </div>
          
      </div>
  )
}

export default PartnerPerks