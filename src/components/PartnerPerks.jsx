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

function PartnerPerks() {
  return (
      <div className='bg-[#0A0914] w-screen'>
          <div className='pt-[100px] pr-[64px] pb-[64px] pl-[64px] lg:w-[528px]'>
              <div className='flex flex-col lg:gap-[12px]'>
                  <h1 className='lg:w-[125px] lg:text-[22px] leading-[106%] text-[#FF7F3E]' style={{ fontFamily: 'SatoshiVariable', fontWeight: 600 }}>Be a partner</h1>
                  <p className='text-[#FAFAFF] lg:text-[48px] leading-[106%] lg:w-[528px]' style={{ fontFamily: 'SatoshiVariable', fontWeight: 600 }}>CometChat partner advantages</p>

              </div>
             
              
          </div>
          <div className='pt-[48px] pr-[64px] pb-[80px] pl-[64px] lg:w-[528px]'>
              <div className='lg:grid lg:grid-cols-3 lg:gap-[64px]'>
                  <div className='grid-style '>
                      <img src={icon3} width={38} height={38}></img>
                      <h1 className='lg:text-[18px] text-[#FAFAFF] leading-[112.00000000000001%]' style={{ fontFamily: 'SatoshiVariable', fontWeight: 640 }}>Free credits</h1>
                      <p className='lg:text-[18px] text-[#FAFAFF] opacity-[0.74] leading-[120%] tracking-[0.5%]' style={{ fontFamily: 'SatoshiVariable', fontWeight: 500 }}>Empowering partners to scale.</p>
                  </div>
                  <div className='grid-style'>
                      <img src={icon4} width={38} height={38}></img>
                  </div>
                  <div className='grid-style'>  
                      <img src={icon5} width={38} height={38}></img>

                  </div>
                  <div className='grid-style'>
                      <img src={icon6} width={38} height={38}></img>
                  </div>
                  <div className='grid-style'>
                      <img src={icon7} width={38} height={38}></img>
                  </div>
                  <div className='grid-style'>
                      <img src={icon8} width={38} height={38}></img>
                  </div>
                  <div className='grid-style'> 
                      <img src={icon9} width={38} height={38}></img>
                  </div>
                  <div className='grid-style'>
                      <img src={icon10} width={38} height={38}></img>
                  </div>
                  <div className='grid-style'>
                      <img src={icon4} width={38} height={38}></img>
                  </div>
                  
                
              </div>
              
          </div>
          
      </div>
  )
}

export default PartnerPerks