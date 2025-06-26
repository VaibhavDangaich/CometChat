import React from 'react'
import logo from '../assets/logo.png'
import divider from '../assets/Divider.png'
import { GoPlus } from "react-icons/go";

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
        isPrimary: true
    },
    {
        title: 'Company',
        items: ['About us', 'Careers', 'Partners', 'Pricing', 'Chat with us'],
        isPrimary: true
    },
]

const FooterSection = ({ heading, sections }) => (
    <div className='flex flex-col lg:gap-[16px] w-full'>
        <div className='flex justify-between items-center lg:block'>
            <h1 className='lg:text-[16px] text-[#6852D6] text-[16px] leading-[112%] tracking-[0.5%]' style={{ fontFamily: 'SatoshiVariable', fontWeight: 600 }}>
                {heading}
            </h1>
            <GoPlus className='text-[#6852D6] lg:hidden block' />
        </div>
        <div className='lg:flex flex-col lg:gap-[32px] hidden'>
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
        <div className='bg-[#0A0914] lg:pt-[56px] pt-[24px] lg:pb-[40px] pb-[24px]'>
            <div className='flex flex-col justify-center lg:gap-[56px] gap-[24px]'>
                <div className='min-w-[1440px]'>
                    <img src={logo} className='lg:px-[64px] px-[20px] object-cover' />
                </div>

                <div className='flex lg:flex-row flex-col lg:gap-[40px] gap-[32px] lg:px-[64px] px-[20px] justify-between'>
                    <FooterSection heading='Platform' sections={platformSections} />
                    <FooterSection heading='Solutions' sections={solutionsSections} />
                    <FooterSection heading='Developers' sections={developerSections} />
                    <FooterSection heading='Resources' sections={resourcesSections} />

                    {/* SM screen Competitors + Icon */}
                    <div className='flex justify-between items-center lg:hidden'>
                        <h1 className='text-[#6852D6] text-[16px] leading-[112%] tracking-[0.5%]' style={{ fontFamily: 'SatoshiVariable', fontWeight: 600 }}>
                            Competitors
                        </h1>
                        <GoPlus className='text-[#6852D6]' />
                    </div>

                    {/* SM screen Company + Icon */}
                    <div className='flex justify-between items-center lg:hidden'>
                        <h1 className='text-[#6852D6] text-[16px] leading-[112%] tracking-[0.5%]' style={{ fontFamily: 'SatoshiVariable', fontWeight: 600 }}>
                            Company
                        </h1>
                        <GoPlus className='text-[#6852D6]' />
                    </div>
                </div>

                <div className='bg-[#0A0914] py-[40px] px-[64px] w-full'>
                    <div>
                        <img src={divider} alt='divider' className='w-full mb-[24px]' />
                    </div>

                    <div className='flex flex-col lg:flex-row justify-between items-center w-full gap-[24px]'>
                        <div className='flex flex-wrap items-center gap-[24px]'>
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

                        <div className='flex flex-wrap items-center gap-[24px]'>
                            {['Facebook', 'LinkedIn', 'Instagram', 'Twitter', 'GitHub'].map((item) => (
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