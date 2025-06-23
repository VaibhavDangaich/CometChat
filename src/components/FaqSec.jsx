import React from 'react';
import { GoChevronUp, GoChevronDown } from "react-icons/go";

function FaqSec() {
    return (
        <div className="bg-[#FAFAFF] w-full flex flex-col items-center py-[100px] px-[20px]">
            {/* FAQ heading */}
            <div className='w-full max-w-[751px] flex flex-col gap-[12px] items-start lg:items-center'>
                <h1 className='text-[#FF7129] text-[19px] lg:text-[22px] leading-[106%]' style={{ fontFamily: 'SatoshiVariable', fontWeight: 640 }}>
                    FAQ's
                </h1>
                <p className='text-[32px] lg:text-[48px] leading-[106%] text-start lg:text-center text-[#14131D] w-[350px] lg:w-[528px]' style={{ fontFamily: 'SatoshiVariable', fontWeight: 640 }}>
                    We want to help you with all your doubts
                </p>
            </div>

            {/* FAQ cards */}
            <div className='w-full max-w-[751px] flex flex-col gap-[16px] mt-[48px]'>
                {[
                    "This is a frequently asked question?",
                    "This is a frequently asked question?",
                    "This is a very long frequently asked question about our services with more than one line?",
                    "This is a frequently asked question?",
                    "This is a question?",
                    "This is a question?"
                ].map((question, idx) => (
                    <div key={idx} className='flex flex-col rounded-[16px] lg:rounded-[20px] bg-[#14131D05] p-[16px] lg:p-[24px] border border-[#14131D0A] backdrop-blur-[40px] gap-[12px] lg:gap-[16px]'>
                        <div className='flex justify-between items-center'>
                            <h1 className='text-[#14131D] text-[18px] lg:text-[22px] leading-[106%] w-[290px] lg:w-[667px] opacity-[74%]' style={{ fontFamily: 'SatoshiVariable', fontWeight: 640 }}>
                                {question}
                            </h1>
                            {idx === 0 ? (
                                <GoChevronUp className='w-[20px] h-[20px] opacity-[74%]' />
                            ) : (
                                <GoChevronDown className='w-[20px] h-[20px] opacity-[74%]' />
                            )}
                        </div>

                        {idx === 0 && (
                            <p className='text-[#14131D] text-[18px] lg:text-[22px] leading-[120%] tracking-[0.5%] opacity-[74%]' style={{ fontFamily: 'SatoshiVariable', fontWeight: 500 }}>
                                Lorem ipsum dolor sit amet consectetur. Tellus eget consequat tortor odio maecenas cursus leo dui. Pulvinar quam sit quam feugiat laoreet morbi tellus dui massa.
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FaqSec;