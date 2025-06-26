import React from 'react';
import icon from '../assets/Icon.png';
import icon1 from '../assets/Icon(1).png';
import icon2 from '../assets/Icon(2).png';

function Programs() {
    const programs = [
        {
            icon: icon,
            title: "Affiliate partner program",
            desc:
                "Bring value to your customers with a world-class in-app messaging tool that increases user-to-user engagement and retention. Get incentivized for referring CometChat to any of your customers."
        },
        {
            icon: icon1,
            title: "Technology partner program",
            desc:
                "Development teams can use our plug and play solution to build top class chat solutions for their clients using our SDKs and APIs. It’s simple, safe and secure!"
        },
        {
            icon: icon2,
            title: "Start up growth program",
            desc:
                "We help incubators, accelerators, co-working space that foster an ecosystem of start-ups. This program also enables VCs to accelerate the growth of their portfolio companies."
        }
    ];

    return (
        <div  className='w-full bg-white flex flex-col items-center px-[20px] lg:px-[64px] py-[64px] lg:py-[100px]'>

        
            <div data-aos="fade-up"  className="w-full max-w-[1440px] flex flex-col gap-[10px] pb-[64px]">
                <p
                    className="text-[#6852D6] text-[18px] lg:text-[22px] leading-[106%]"
                    style={{ fontFamily: 'SatoshiVariable', fontWeight: 640 }}
                >
                    Our programs
                </p>
                <h2
                    className="text-[#14131D] text-[32px] lg:text-[48px] leading-[106%] max-w-[528px]"
                    style={{ fontFamily: 'SatoshiVariable', fontWeight: 640 }}
                >
                    Types of partnerships programs
                </h2>
            </div>

          
            <div data-aos="fade-up" className='w-full max-w-[1440px] pt-[48px] pb-[80px] grid grid-cols-1 lg:grid-cols-3 gap-[48px] lg:gap-[64px]'>
                {programs.map((program, index) => (
                    <div key={index} className='flex flex-col gap-[8px] lg:gap-[10px]'>
                        <img
                            src={program.icon}
                            alt={`Program icon ${index + 1}`}
                            width={38}
                            height={38}
                        />
                        <h1
                            className='text-[#14131D] text-[18px] leading-[112%]'
                            style={{ fontFamily: 'SatoshiVariable', fontWeight: 640 }}
                        >
                            {program.title}
                        </h1>
                        <p
                            className='text-[#14131D] text-[18px] opacity-[74%] leading-[120%] tracking-[0.5%]'
                            style={{ fontFamily: 'SatoshiVariable', fontWeight: 500 }}
                        >
                            {program.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Programs;