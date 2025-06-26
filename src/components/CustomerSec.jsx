import React from 'react';
import img1 from '../assets/Logo1.png';
import img2 from '../assets/Logo2.png';
import img3 from '../assets/Logo3.png';
import img4 from '../assets/microsoft.png';
import img5 from '../assets/path2.png';
import img6 from '../assets/homemainlogo.png';
import img7 from '../assets/10x-Genomics.png';
import img8 from '../assets/3e4407466e2ac11df3213e7b0b10.png';
import img9 from '../assets/amazon-web-services.png';

const logos = [img9, img7, img4, img5, img1, img3, img2, img8, img6];

function CustomerSec() {
  return (
    <div  className="w-full bg-[#0A0914] pt-[64px] pb-[80px] logo-wrapper">
      <div  data-aos="fade-up" className="logo-track">
        {[...logos, ...logos].map((logo, index) => (
          <img
            key={index}
            src={logo}
            className="h-[32px] opacity-[54%]"
            alt={`logo-${index}`}
          />
        ))}
      </div>
    </div>
  );
}

export default CustomerSec;