import React from 'react';
import comet from '../assets/Comets.png';
import comet2 from '../assets/Comets2.png';
import logo from '../assets/logo.png';
import highlight from '../assets/highlight.png';

function HomePage() {
    return (
        <div className="relative min-h-[646px] w-full bg-gradient-to-b from-[#0A0914] to-[#1B133A] overflow-hidden">

            {/* NAVBAR */}
            <nav className='flex justify-between items-center border-white/10 lg:pt-[16px] lg:pr-[32px] lg:pb-[16px] lg:pl-[32px]'>
                <img src={logo} alt="logo" />

                <div className='flex lg:gap-[48px] justify-center items-center'>
                    {['Platform', 'Solutions', 'Developers', 'Resources', 'Pricing'].map((item) => (
                        <p key={item} className='opacity-[0.84] lg:text-[14px] leading-[140%] tracking-[2%] text-[#FAFAFF]' style={{ fontFamily: 'SatoshiVariable', fontWeight: 600 }}>
                            {item}
                        </p>
                    ))}
                </div>

                <div className='flex lg:gap-[16px] items-center'>
                    <p className='opacity-[0.84] lg:text-[14px] leading-[140%] tracking-[2%] text-[#FAFAFF]' style={{ fontFamily: 'SatoshiVariable', fontWeight: 600 }}>Log in</p>
                    <div className='relative lg:rounded-[10px] pt-[8px] pr-[12px] pb-[8px] pl-[12px]' style={{ backgroundColor: 'rgba(104, 82, 214, 1)' }}>
                        <img src={highlight} className='absolute top-[1px] bg-cover' alt="highlight" />
                        <p className='text-[14px] leading-[140%] tracking-[2%] text-[#FCFCFE]' style={{ fontFamily: 'SatoshiVariable', fontWeight: 600 }}>
                            Schedule a demo
                        </p>
                    </div>
                </div>
            </nav>

            {/* BACKGROUND ORBS */}
            <img src={comet} className='absolute top-0 left-0 z-0' alt="comet1" />
            <img src={comet2} className='absolute bottom-0 left-0 z-0' alt="comet2" />

            {/* STAR OVERLAY */}
            <div className="absolute inset-0 bg-[url('../assets/stars.png')] bg-repeat opacity-30 z-0" />

            {/* MAIN CONTENT */}
            <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-[40px]">
                {/* LEFT TEXT */}
                <div className="absolute z-20 max-w-[600px] text-white flex flex-col lg:gap-[20px] top-[188px] left-[176px]">
                    <h1 className="text-[48px] lg:text-[48px] font-bold leading-[106%]" style={{ fontFamily: 'SatoshiVariable', fontWeight: 600 }}>
                        Join the CometChat <br /> partner universe
                    </h1>
                    <p className="text-white/70 text-[18px] lg:text-[22px] leading-[120%] lg:w-[480px] tracking-[0.5%]" style={{ fontFamily: 'SatoshiVariable', fontWeight: 500 }}>
                        Create value for your clients, leveraging our world-class technology. Partner with us and grow your business!
                    </p>
                </div>

                {/* GLASSMORPHISM FORM */}
                <div className="absolute top-[132px] left-[736px] bg-white/5 backdrop-blur-[100px] rounded-[24px] border border-white/10 lg:min-w-[528px] min-h-[434px] p-[32px] text-white shadow-xl">
                    <h2 className="text-[24px] lg:text-[32px] leading-[106%] mb-[24px]" style={{ fontFamily: 'SatoshiVariable', fontWeight: 600 }}>Become a partner</h2>

                    {['Full name', 'Email address', 'Companies name'].map((label, index) => (
                        <div key={label} className='flex flex-col lg:gap-[6px] mb-[18px]'>
                            <p className='text-[16px] leading-[112%] tracking-[0.5%] text-[#FAFAFF] opacity-[0.74]' style={{ fontFamily: 'SatoshiVariable', fontWeight: 640 }}>
                                {label}
                            </p>
                            <div className='lg:rounded-[14px] border-[1px] lg:pt-[13px] lg:pr-[16px] lg:pb-[13px] lg:pl-[13px] border-[#FAFAFF1A] bg-[#FAFAFF05]'>
                                <p className='lg:text-[16px] opacity-[0.64] leading-[112%] tracking-[0.5%] text-[#FAFAFF]' style={{ fontFamily: 'SatoshiVariable', fontWeight: 640 }}>
                                    {index === 1 ? 'Type your emailsomething...' : index === 2 ? 'Type you company’s name' : 'Type your name here...'}
                                </p>
                            </div>
                        </div>
                    ))}

                    {/* SUBMIT BUTTON */}
                    <div className='absolute top-[358px] left-[32px] lg:rounded-[12px] pt-[12px] pr-[16px] pb-[12px] pl-[16px] gap-[10px]' style={{ backgroundColor: 'rgba(104, 82, 214, 1)' }}>
                        <img src={highlight} className='absolute top-[1px] bg-cover' alt="highlight" />
                        <p className='text-[#FCFCFE] lg:text-[14px] leading-[140%] tracking-[2%]' style={{ fontFamily: 'SatoshiVariable', fontWeight: 600 }}>
                            Submit application
                        </p>
                    </div>
                </div>
            </div>

            {/* GRADIENT FADE TO NEXT SECTION */}
            <div className="absolute bottom-0 left-0 w-full h-[100px] bg-gradient-to-b from-transparent to-[#0A0914] z-20" />

        </div>
    );
}

export default HomePage;