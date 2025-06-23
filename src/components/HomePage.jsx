import React from 'react';
import comet from '../assets/Comets.png'
import comet2 from '../assets/Comets2.png'
import logo from '../assets/logo.png'
import highlight from '../assets/highlight.png'

function HomePage() {
    return (
        <div className=" min-h-[646px] w-full bg-gradient-to-b from-[#0A0914] to-[#1B133A] overflow-hidden">
            <nav className='flex justify-between items-center border-b-[1px] lg:pt-[16px] lg:pr-[32px] lg:pb-[16px] lg:pl-[32px]'>
                <img src={logo}></img>
                <div className='flex lg:gap-[48px]'>
                    <p className='opacity-[0.84] lg:text-[14px] leading-[140%] tracking-[2%] text-[#FAFAFF]' style={{ fontFamily: 'SatoshiVariable', fontWeight: 600 }}>Platform</p>
                    <p style={{ fontFamily: 'SatoshiVariable', fontWeight: 600 }} className='opacity-[0.84] lg:text-[14px] leading-[140%] tracking-[2%] text-[#FAFAFF]'>Solutions</p>
                    <p style={{ fontFamily: 'SatoshiVariable', fontWeight: 600 }} className='opacity-[0.84] lg:text-[14px] leading-[140%] tracking-[2%] text-[#FAFAFF]'>Developers</p>
                    <p style={{ fontFamily: 'SatoshiVariable', fontWeight: 600 }} className='opacity-[0.84] lg:text-[14px] leading-[140%] tracking-[2%] text-[#FAFAFF]'>Resources</p>
                    <p style={{ fontFamily: 'SatoshiVariable', fontWeight: 600 }} className='opacity-[0.84] lg:text-[14px] leading-[140%] tracking-[2%] text-[#FAFAFF]'>Pricing</p>
                
                </div>
                <div className='flex lg:gap-[16px] items-center'>
                    <p className='opacity-[0.84] lg:text-[14px] leading-[140%] tracking-[2%] text-[#FAFAFF]' style={{ fontFamily: 'SatoshiVariable', fontWeight: 600 }}>Log in</p>
                    <div style={{ backgroundColor: 'rgba(104, 82, 214, 1)' }} className='relative lg:rounded-[10px] pt-[8px] pr-[12px] pb-[8px] pl-[12px]'>
                        <img src={highlight} className='absolute top-[1px] bg-cover  '></img>
                        <p className='text-[14px] leading-[140%] tracking-[2%] text-[#FCFCFE]' style={{ fontFamily: 'SatoshiVariable', fontWeight: 600 }}>Schedule a demo</p>

                    </div>

                </div>
            </nav>
            {/* Purple Orb Top Left */}
            <img src={comet} className='absolute'></img>
            

            {/* Orange Orb Bottom Left */}
            <img src={comet2} className='absolute'></img>
            



           

            {/* Optional Stars Overlay */}
            <div className="absolute inset-0 bg-[url('../assets/stars.png')] bg-repeat opacity-30 z-0" />

           
            <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-[40px]">
                {/* Left Text Section */}
                <div className="absolute z-20 max-w-[600px] text-white flex flex-col lg:gap-[20px] top-[188px] left-[176px] ">
                    <h1 className="text-[48px] lg:text-[48px] font-bold leading-[106%]" style={{ fontFamily: 'SatoshiVariable', fontWeight: 600 }}>
                        Join the CometChat <br /> partner universe
                    </h1>
                    <p className="text-white/70 text-[18px] lg:text-[22px] leading-[120%] lg:w-[480px] tracking-[0.5%] " style={{ fontFamily: 'SatoshiVariable', fontWeight: 500 }}>
                        Create value for your clients, leveraging our world-class technology. Partner with us and grow your business!
                    </p>
                </div>
             



                {/* Glassmorphism Card */}
                <div className="absolute top-[132px] left-[736px] bg-white/5 backdrop-blur-[100px] rounded-[24px] border border-white/10 lg:min-w-[528px] min-h-[434px] p-[32px] text-white shadow-xl">
                    <h2 className="text-[24px] lg:text-[32px] leading-[106%] mb-[24px]" style={{ fontFamily: 'SatoshiVariable', fontWeight: 600 }}>Become a partner</h2>
                    <div className='flex flex-col lg:gap-[6px] mb-[18px]'>
                        <p className='text-[16px] leading-[112.00000000000001%] tracking-[0.5%] text-[#FAFAFF] opacity-[0.74]' style={{ fontFamily: 'SatoshiVariable', fontWeight: 640 }}>Full name</p>
                        <div className='lg:rounded-[14px] border-[1px] lg:pt-[13px] lg:pr-[16px] lg:pb-[13px] lg:pl-[13px] border-[#FAFAFF1A] bg-[#FAFAFF05]'>
                            <p className='lg:text-[16px] opacity-[0.64] leading-[112.00000000000001%] tracking-[0.5%] text-[#FAFAFF]' style={{ fontFamily: 'SatoshiVariable', fontWeight: 640 }}>Type your name here...</p>
                        </div>
                        
                    </div>
                    <div className='flex flex-col lg:gap-[6px] mb-[18px]'>
                        <p className='text-[16px] leading-[112.00000000000001%] tracking-[0.5%] text-[#FAFAFF] opacity-[0.74]' style={{ fontFamily: 'SatoshiVariable', fontWeight: 640 }}>Email address </p>
                        <div className='lg:rounded-[14px] border-[1px] lg:pt-[13px] lg:pr-[16px] lg:pb-[13px] lg:pl-[13px] border-[#FAFAFF1A] bg-[#FAFAFF05]'>
                            <p className='lg:text-[16px] opacity-[0.64] leading-[112.00000000000001%] tracking-[0.5%] text-[#FAFAFF]' style={{ fontFamily: 'SatoshiVariable', fontWeight: 640 }}>Type your emailsomething...</p>
                        </div>

                    </div>
                    <div className='flex flex-col lg:gap-[6px] mb-[18px]'>
                        <p className='text-[16px] leading-[112.00000000000001%] tracking-[0.5%] text-[#FAFAFF] opacity-[0.74]' style={{ fontFamily: 'SatoshiVariable', fontWeight: 640 }}>Companies name</p>
                        <div className='lg:rounded-[14px] border-[1px] lg:pt-[13px] lg:pr-[16px] lg:pb-[13px] lg:pl-[13px] border-[#FAFAFF1A] bg-[#FAFAFF05]'>
                            <p className='lg:text-[16px] opacity-[0.64] leading-[112.00000000000001%] tracking-[0.5%] text-[#FAFAFF]' style={{ fontFamily: 'SatoshiVariable', fontWeight: 640 }}>Type you company’s name</p>
                        </div>

                    </div>
                    <div className='absolute top-[358px] left-[32px] lg:rounded-[12px] pt-[12px] pr-[16px] pb-[12px] pl-[16px] gap-[10px] ' style={{ backgroundColor: 'rgba(104, 82, 214, 1)' }}>
                        <img src={highlight} className='absolute top-[1px] bg-cover  '></img>
                        <p className='text-[#FCFCFE] lg:text-[14px] leading-[140%] tracking-[2%]' style={{ fontFamily: 'SatoshiVariable', fontWeight: 600 }}>Submit application</p>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;