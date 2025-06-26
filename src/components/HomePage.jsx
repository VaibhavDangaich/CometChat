import React from 'react';
import comet from '../assets/Comets.png';
import comet2 from '../assets/Comets2.png';
import logo from '../assets/logo.png';
import comet3 from '../assets/comet3.png';
import highlight from '../assets/highlight.png';
import { MdNightlight } from "react-icons/md";

function HomePage() {
    return (
        <div className="relative lg:min-h-[646px] min-h-screen w-screen bg-gradient-to-b from-[#0A0914] to-[#1B133A] overflow-hidden">

            {/* NAVBAR */}
            <nav className='flex justify-between items-center border-white/10 pt-[12px] pr-[16px] pb-[12px] pl-[16px] lg:pt-[16px] lg:pr-[32px] lg:pb-[16px] lg:pl-[32px]'>
                <img src={logo} alt="logo" className='w-[90.165px] h-[14px] lg:w-[128.8px] lg:h-[20px]' />
                <div className='hidden lg:flex lg:gap-[48px] justify-center items-center'>
                    {['Platform', 'Solutions', 'Developers', 'Resources', 'Pricing'].map((item) => (
                        <p key={item} className='opacity-[0.84] lg:text-[14px] leading-[140%] tracking-[2%] text-[#FAFAFF]' style={{ fontFamily: 'SatoshiVariable', fontWeight: 600 }}>
                            {item}
                        </p>
                    ))}
                </div>
                <div className='flex lg:gap-[16px] gap-[12px] items-center'>
                    <p className='opacity-[0.84] text-[14px] leading-[140%] tracking-[2%] text-[#FAFAFF]' style={{ fontFamily: 'SatoshiVariable', fontWeight: 600 }}>Log in</p>
                    <div className='lg:block hidden relative lg:rounded-[10px] pt-[8px] pr-[12px] pb-[8px] pl-[12px]' style={{ backgroundColor: 'rgba(104, 82, 214, 1)' }}>
                        <img src={highlight} className='absolute top-[1px] bg-cover' alt="highlight" />
                        <p className='text-[14px] leading-[140%] tracking-[2%] text-[#FCFCFE]' style={{ fontFamily: 'SatoshiVariable', fontWeight: 600 }}>Schedule a demo</p>
                    </div>
                    <div className='pt-[10px] pr-[12px] pb-[10px] pl-[12px] bg-[#FAFAFF05] border-[1px] border-[#FAFAFF1A] rounded-[10px]'>
                        <MdNightlight className='text-white -rotate-45 lg:hidden block' />
                    </div>
                </div>
            </nav>

            {/* BACKGROUND ORBS */}
            <img src={comet} className='absolute lg:top-0 lg:left-0 top-[165px] z-0' alt="comet1" />
            <img src={comet2} className='hidden lg:block absolute bottom-0 left-0 z-0' alt="comet2" />
            <img src={comet3} className='absolute lg:top-[200px] lg:left-[1150px] right-[0px] bottom-[-100px]' alt="comet3" />

            {/* STAR FIELD */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {[...Array(25)].map((_, i) => {
                    const size = Math.random() < 0.5 ? '1px' : '2px';
                    const colors = ['#ffffffb3', '#937BFF', '#F5C2E7', '#FAFAFF', '#FFD580', '#C9C9FF', '#FFADAD', '#B2F7EF', '#FFF5BA', '#E2AFFF', '#C4FCEF', '#FFE0F0', '#FDE2FF'];
                    const color = colors[Math.floor(Math.random() * colors.length)];
                    const top = `${Math.floor(Math.random() * 90)}%`;
                    const left = `${Math.floor(Math.random() * 100)}%`;
                    const delay = `${Math.floor(Math.random() * 1000)}ms`;
                    return (
                        <div
                            key={i}
                            className="absolute rounded-full animate-pulse"
                            style={{
                                width: size,
                                height: size,
                                backgroundColor: color,
                                top,
                                left,
                                animationDelay: delay
                            }}
                        />
                    );
                })}
            </div>

            {/* STAR OVERLAY TEXTURE */}
            <div className="absolute inset-0 bg-[url('../assets/stars.png')] bg-repeat opacity-30 z-0" />

            {/* MAIN SECTION */}
            <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-[40px] px-[24px] lg:px-[176px] py-[40px]">
                {/* LEFT TEXT */}
                <div className="max-w-[600px] text-white flex flex-col lg:gap-[20px] gap-[12px]">
                    <h1 className="text-[32px] lg:text-[48px] font-bold leading-[106%]" style={{ fontFamily: 'SatoshiVariable', fontWeight: 600 }}>
                        Join the CometChat <br /> partner universe
                    </h1>
                    <p className="text-white/70 text-[18px] lg:text-[22px] leading-[120%] tracking-[0.5%]" style={{ fontFamily: 'SatoshiVariable', fontWeight: 500 }}>
                        Create value for your clients, leveraging our world-class technology. Partner with us and grow your business!
                    </p>
                </div>

                {/* FORM */}
                <div className="bg-white/5 backdrop-blur-[100px] rounded-[24px] border border-white/10 w-full max-w-[528px] min-h-[434px] p-[32px] text-white shadow-xl">
                    <h2 className="text-[24px] lg:text-[32px] leading-[106%] mb-[24px]" style={{ fontFamily: 'SatoshiVariable', fontWeight: 600 }}>Become a partner</h2>

                    {['Full name', 'Email address', 'Companies name'].map((label, index) => (
                        <div key={label} className='flex flex-col gap-[6px] mb-[18px]'>
                            <p className='text-[16px] leading-[112%] tracking-[0.5%] text-[#FAFAFF] opacity-[0.74]' style={{ fontFamily: 'SatoshiVariable', fontWeight: 640 }}>
                                {label}
                            </p>
                            <div className='rounded-[14px] border border-[#FAFAFF1A] bg-[#FAFAFF05] px-[13px] py-[13px]'>
                                <p className='text-[16px] opacity-[0.64] leading-[112%] tracking-[0.5%] text-[#FAFAFF]' style={{ fontFamily: 'SatoshiVariable', fontWeight: 640 }}>
                                    {index === 1 ? 'Type your emailsomething...' : index === 2 ? 'Type your company’s name' : 'Type your name here...'}
                                </p>
                            </div>
                        </div>
                    ))}

                    <div className='mt-[12px] rounded-[12px] px-[16px] py-[12px] inline-block relative' style={{ backgroundColor: 'rgba(104, 82, 214, 1)' }}>
                        <img src={highlight} className='absolute top-[1px] bg-cover' alt="highlight" />
                        <p className='text-[#FCFCFE] text-[14px] leading-[140%] tracking-[2%]' style={{ fontFamily: 'SatoshiVariable', fontWeight: 600 }}>
                            Submit application
                        </p>
                    </div>
                </div>
            </div>

            {/* GRADIENT FADE */}
            <div className="absolute bottom-0 left-0 w-full h-[100px] bg-gradient-to-b from-transparent to-[#0A0914] z-20" />
        </div>
    );
}

export default HomePage;