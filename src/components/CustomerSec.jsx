import React from 'react'
import img1 from '../assets/Logo1.png'
import img2 from '../assets/Logo2.png'
import img3 from '../assets/Logo3.png'
import img4 from '../assets/microsoft.png'
import img5 from '../assets/path2.png'
import img6 from '../assets/homemainlogo.png'
import img7 from '../assets/10x-Genomics.png'
import img8 from '../assets/3e4407466e2ac11df3213e7b0b10.png'
import img9 from '../assets/amazon-web-services.png'
const logos = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

function CustomerSec() {
  return (
    <div className='w-full bg-[#0A0914] pt-[64px] pb-[80px]'>
      <div className='flex justify-between items-center gap-[64px]'>
        {
          logos.map((logo, index) => (
            <img src={logo} className='h-[32px] opacity-[54%]'></img>
            
          ))
          
       }

      </div>
    </div>
  )
}

export default CustomerSec