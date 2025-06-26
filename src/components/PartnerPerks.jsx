import React from 'react';
import icon3 from '../assets/Icon(3).png';
import icon4 from '../assets/Icon(4).png';
import icon5 from '../assets/Icon(5).png';
import icon6 from '../assets/Icon(6).png';
import icon7 from '../assets/Icon(7).png';
import icon8 from '../assets/Icon(8).png';
import icon9 from '../assets/Icon(9).png';
import icon10 from '../assets/Icon(10).png';

const perks = [
    { icon: icon3, title: "Free credits", desc: "Empowering partners to scale." },
    { icon: icon4, title: "Revenue share", desc: "Get monthly recurring revenues when you refer clients." },
    { icon: icon5, title: "Training and mentoring sessions", desc: "Enabling partners to deliver the best experience." },
    { icon: icon6, title: "Special developer access", desc: "Get an all-access account to build unlimited PoCs for your clients." },
    { icon: icon7, title: "Reduced time", desc: "Deliver your products much faster with our partners’ programs." },
    { icon: icon8, title: "Value addition to your users", desc: "We need a 2 line text here." },
    { icon: icon9, title: "Knowledge sessions", desc: "Access to product and market sessions." },
    { icon: icon10, title: "On-demand support", desc: "Technical assistance for implementation." },
    { icon: icon4, title: "Significant passive income", desc: "We need a 2 line text here." },
];

function PartnerPerks() {
    return (
        <div  className='bg-[#0A0914] w-full flex flex-col items-center px-[20px] lg:px-[64px] py-[48px] lg:py-[100px]'>

          
            <div data-aos="fade-up" className='w-full max-w-[1440px] flex flex-col gap-[8px] lg:gap-[12px]'>
                <h1 className='text-[#FF7F3E] text-[18px] lg:text-[22px] leading-[106%] font-semibold' style={{ fontFamily: 'SatoshiVariable', fontWeight: 600 }}>
                    {`Be a partner`}
                </h1>
                <p className='text-[#FAFAFF] text-[32px] lg:text-[48px] leading-[106%] font-semibold w-[350px] lg:w-[528px]' style={{ fontFamily: 'SatoshiVariable', fontWeight: 600 }}>
                    {`CometChat partner advantages`}
                </p>
            </div>

            
            <div  className='w-full max-w-[1440px] mt-[48px] grid grid-cols-1 lg:grid-cols-3 gap-[48px] lg:gap-[64px]'>
                {perks.map((perk, index) => (
                    <div data-aos="fade-left" key={index} className='flex flex-col gap-[8px] lg:gap-[12px]'>
                        <img src={perk.icon} alt={`icon-${index}`} width={38} height={38} />
                        <h1 className='text-[#FAFAFF] text-[18px] leading-[112%]' style={{ fontFamily: 'SatoshiVariable', fontWeight: 640 }}>
                            {perk.title}
                        </h1>
                        <p className='text-[#FAFAFF] opacity-[0.74] text-[18px] tracking-[0.5%]' style={{ fontFamily: 'SatoshiVariable', fontWeight: 500 }}>
                            {perk.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PartnerPerks;