import React from 'react'
import logo from '../assets/logo.png'
import divider from '../assets/Divider.png'
import { GoPlus } from "react-icons/go"
import facebook from '../assets/facebook.png'
import github from '../assets/github.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'

const platformSections = [
    {
        title: 'Features',
        items: [
            'Chat & Messaging',
            'Voice & Video Calls',
            'Security & Compliance',
            'Extensions',
            'Features at a glance',
            'Webhooks & Bots',
            'Moderation',
            'Analytics & Insights',
        ],
    },
    {
        title: 'Implementation',
        items: ['Widgets', 'UI Kits', 'SDKs & APIs'],
    },
    {
        title: 'Technologies',
        items: [
            'React Chat SDK & API',
            'Angular Chat SDK & API',
            'Vue Chat SDK & API',
            'IOS Swift Chat SDK & API',
            'Android Kotlin Chat SDK & API',
            'Android Java Chat SDK & API',
            'React Native Chat SDK & API',
            'Ionic/Capacitor Chat SDK & API',
            'WordPress Chat SDK & API',
            'Lavarel/PHP Chat SDK & API',
            'Flutter Chat SDK & API',
            'Next.js Chat SDK & API',
        ],
    },
]

const solutionsSections = [
    {
        title: 'By Use cases',
        items: [
            'Social Community',
            'Marketplace',
            'Healthcare',
            'Education',
            'Virtual Events',
            'On-Demand Service',
            'Dating Apps',
            'Gaming',
        ],
    },
    {
        title: 'By Organization Type',
        items: ['Enterprise', 'Startups'],
    },
]

const developerSections = [
    {
        title: 'Technologies documentation',
        items: [
            'React',
            'Angular',
            'Vue',
            'IOS Swift',
            'Android Kotlin',
            'Android Java',
            'React Native',
            'Ionic/Capacitor',
            'WordPress',
            'Lavarel/PHP',
            'Flutter',
            'Next.js',
        ],
    },
    {
        title: 'Documentation',
        items: [
            'Documentation',
            'Product updates',
            'Tutorials',
            'Open-source Apps',
            'Product status',
            'Glossary',
        ],
    },
]

const resourcesSections = [
    {
        title: '',
        items: [
            'Customer stories',
            'Blog',
            'Give feedback',
            'Community forum',
            'Help center',
            'Partners',
        ],
    },
    {
        title: 'Competitors',
        items: ['SendBird', 'GetStream', 'Applozic', 'Twilio', 'PubNub'],
        isPrimary: true,
    },
    {
        title: 'Company',
        items: ['About us', 'Careers', 'Partners', 'Pricing', 'Chat with us'],
        isPrimary: true,
    },
]

const FooterSection = ({ heading, sections }) => (
    <div className='flex flex-col lg:gap-[16px] w-full'>
        <div data-aos="slide-left" className='flex justify-between items-center lg:block'>
            <h1 
                className='lg:text-[16px] text-[#6852D6] text-[16px] leading-[112%] tracking-[0.5%]'
                style={{ fontFamily: 'SatoshiVariable', fontWeight: 600 }}
            >
                {heading}
            </h1>
            <GoPlus className='text-[#6852D6] lg:hidden block' />
        </div>
        <div data-aos="slide-right" className='lg:flex flex-col lg:gap-[32px] hidden'>
            {sections.map(({ title, items, isPrimary }, idx) => (
                <div key={idx} className='flex flex-col lg:gap-[16px]'>
                    {title && (
                        <h1
                            className={
                                isPrimary
                                    ? 'lg:text-[16px] leading-[112%] tracking-[0.5%] text-[#6852D6]'
                                    : 'opacity-[0.54] lg:text-[14px] text-[#FAFAFF] leading-[140%] tracking-[2%]'
                            }
                            style={{ fontFamily: 'SatoshiVariable', fontWeight: 600 }}
                        >
                            {title}
                        </h1>
                    )}
                    {items.map((item) => (
                        <p
                            key={item}
                            className='opacity-[0.84] lg:text-[14px] leading-[140%] tracking-[2%] text-[#FAFAFF]'
                            style={{ fontFamily: 'SatoshiVariable', fontWeight: 600 }}
                        >
                            {item}
                        </p>
                    ))}
                </div>
            ))}
        </div>
    </div>
)

function Footer() {
    return (
        <div  className='bg-[#0A0914] lg:pt-[56px] pt-[24px] lg:pb-[40px] pb-[24px]'>
            <div className='flex flex-col justify-center lg:gap-[56px] gap-[24px]'>
                <div className='min-w-[1440px]'>
                    <img data-aos="fade-up" src={logo} className='lg:px-[64px] px-[20px] object-cover' />
                </div>

                <div  className='flex lg:flex-row flex-col lg:gap-[40px] gap-[32px] lg:px-[64px] px-[20px] justify-between'>
                    <FooterSection  heading='Platform' sections={platformSections} />
                    <FooterSection heading='Solutions' sections={solutionsSections} />
                    <FooterSection heading='Developers' sections={developerSections} />
                    <FooterSection heading='Resources' sections={resourcesSections} />

                    
                    <div className='flex justify-between items-center lg:hidden'>
                        <h1 className='text-[#6852D6] text-[16px] leading-[112%] tracking-[0.5%]' style={{ fontFamily: 'SatoshiVariable', fontWeight: 600 }}>
                            Competitors
                        </h1>
                        <GoPlus className='text-[#6852D6]' />
                    </div>

                  
                    <div  className='flex justify-between items-center lg:hidden'>
                        <h1 className='text-[#6852D6] text-[16px] leading-[112%] tracking-[0.5%]' style={{ fontFamily: 'SatoshiVariable', fontWeight: 600 }}>
                            Company
                        </h1>
                        <GoPlus className='text-[#6852D6]' />
                    </div>
                </div>

                <div className='bg-[#0A0914] py-[40px] lg:px-[64px] px-[20px] w-full'>
                    <div  >
                        <img src={divider} alt='divider' className='w-full mb-[24px]' />
                    </div>

                    <div  className='flex flex-col lg:flex-row justify-between items-center w-full gap-[24px]'>
                        <div className='lg:flex hidden flex-wrap items-center gap-[24px]'>
                            {['2023 © CometChat', 'Terms of Use', 'Privacy Policy'].map((item) => (
                                <p
                                    key={item}
                                    className='text-[#FAFAFF] opacity-[0.74] text-[14px] tracking-[2%]'
                                    style={{ fontFamily: 'SatoshiVariable', fontWeight: 600 }}
                                >
                                    {item}
                                </p>
                            ))}
                        </div>

                       
                        <div  className='flex flex-wrap items-center lg:gap-[24px] gap-[12px]'>
                            <div className='flex items-center gap-[8px]'>
                                <img src={facebook} className='w-[16px] h-[16px]' alt='Facebook' />
                                <p className='text-[#FAFAFF] opacity-[0.74] text-[14px] tracking-[2%]' style={{ fontFamily: 'SatoshiVariable', fontWeight: 600 }}>Facebook</p>
                            </div>
                            <div className='flex items-center gap-[8px]'>
                                <img src={linkedin} className='w-[16px] h-[16px]' alt='LinkedIn' />
                                <p className='text-[#FAFAFF] opacity-[0.74] text-[14px] tracking-[2%]' style={{ fontFamily: 'SatoshiVariable', fontWeight: 600 }}>LinkedIn</p>
                            </div>
                            <div className='flex items-center gap-[8px]'>
                                <img src={instagram} className='w-[16px] h-[16px]' alt='Instagram' />
                                <p className='text-[#FAFAFF] opacity-[0.74] text-[14px] tracking-[2%]' style={{ fontFamily: 'SatoshiVariable', fontWeight: 600 }}>Instagram</p>
                            </div>
                            <div className='flex items-center gap-[8px]'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#FAFAFF" className='w-[16px] h-[16px]'><path d="M459.4 151.7c.3 4.5.3 9 .3 13.6 0 138.7-105.6 298.7-298.7 298.7-59.5 0-114.7-17.2-161.1-47.1 8.4.9 16.8 1.4 25.5 1.4 49.1 0 94.2-16.8 130.3-45-46-1-84.8-31.2-98.1-72.8 6.5.9 13.2 1.6 20.1 1.6 9.4 0 18.7-1.3 27.5-3.6-48.1-9.7-84.3-52.1-84.3-103v-1.3c14.3 7.9 30.7 12.7 48.1 13.3-28.5-19-47.1-51.2-47.1-87.7 0-19.4 5.2-37.3 14.3-52.8 51.6 63.3 129.3 104.7 216.5 109.5-1.6-7.8-2.6-15.8-2.6-24 0-57.8 46.9-104.7 104.7-104.7 30.2 0 57.5 12.7 76.7 33.3 23.7-4.5 46-13.3 66.3-25.5-7.8 24.3-24.3 44.8-46 57.5 21.2-2.3 41.5-8.1 60.2-16.2-14.1 20.8-31.8 39.1-52.1 53.6z" /></svg>
                                <p className='text-[#FAFAFF] opacity-[0.74] text-[14px] tracking-[2%]' style={{ fontFamily: 'SatoshiVariable', fontWeight: 600 }}>Twitter</p>
                            </div>
                            <div className='flex items-center gap-[8px]'>
                                <img src={github} className='w-[16px] h-[16px]' alt='GitHub' />
                                <p className='text-[#FAFAFF] opacity-[0.74] text-[14px] tracking-[2%]' style={{ fontFamily: 'SatoshiVariable', fontWeight: 600 }}>GitHub</p>
                            </div>
                        
                        </div>

                    
                        <div  className='lg:hidden flex flex-wrap items-center lg:gap-[24px] gap-[16px]'>
                            {['2023 © CometChat', 'Terms of Use', 'Privacy Policy'].map((item) => (
                                <p
                                    key={item}
                                    className='text-[#FAFAFF] opacity-[0.74] text-[14px] tracking-[2%]'
                                    style={{ fontFamily: 'SatoshiVariable', fontWeight: 600 }}
                                >
                                    {item}
                                </p>
                            ))}
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer