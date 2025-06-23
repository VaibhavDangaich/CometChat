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
      <div className='bg-[#0A0914] lg:min-w-[1440px]'>
          <div className='pt-[100px] pr-[64px] pb-[64px] pl-[64px] lg:w-[528px]'>
              <div className='flex flex-col lg:gap-[12px]'>
                  <h1 className='hidden lg:block lg:w-[125px] lg:text-[22px] leading-[106%] text-[#FF7F3E]' style={{ fontFamily: 'SatoshiVariable', fontWeight: 600 }}>Be a partner</h1>
                  <h1 className='block lg:hidden text-[#FF7F3E]'>The benefits</h1>
                  <p className='text-[#FAFAFF] lg:text-[48px] leading-[106%] lg:w-[528px]' style={{ fontFamily: 'SatoshiVariable', fontWeight: 600 }}>CometChat partner advantages</p>

              </div>
             
              
          </div>
          <div className='pt-[48px] pr-[64px] pb-[80px] pl-[64px] '>
              <div className='lg:grid lg:grid-cols-3 lg:gap-[64px]'>
                  {
                      perks.map((perk, index) => (
                          <div className='flex flex-col justify-center lg:gap-[12px]'>
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