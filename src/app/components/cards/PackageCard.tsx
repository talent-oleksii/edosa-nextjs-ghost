import React, { FC } from 'react';
import Image from 'next/image';
import DefaultButton from '../buttons/DefaultButton';
import Link from 'next/link';
import l_mark from '@/public/assets/images/l_mark.png';
import r_mark from '@/public/assets/images/r_mark.png';
import wm_mark from '@/public/assets/images/wm_mark.png';
import blueLine from '@/public/assets/svg/blueLine.svg';
import orangeLine from '@/public/assets/svg/orangeLine.svg';
import greenLine from '@/public/assets/svg/greenLine.svg';
import purpleLine from '@/public/assets/svg/purpleLine.svg';

interface PackageCardProps {
    type: string,
    title: string,
    badge?: string,
    isChecked: boolean,
    price: string,
    content: string,
    imgUrl?: string,
    linkUrl?: string,
}

const PackageCard: FC<PackageCardProps> = ({
    type,
    title,
    badge,
    isChecked,
    price,
    content,
    imgUrl,
    linkUrl
}: PackageCardProps) => {

    return (
        <>
        
        {
            type == 'learn' && (
                    <section className="relative w-full h-[278px]">
                        <article className="absolute w-full h-[278px] top-0 left-0 rounded-[22px]">
                            {/* Background and border */}
                            <div className="absolute w-full h-[278px] top-0 left-0 bg-[#f3f8fe] rounded-[22px] border border-solid border-[#5c76ff] rotate-180" />

                            {/* Checkbox instead of the check icon */}
                            <div className="absolute top-6 right-7">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                    // checked={isChecked}
                                />
                            </div>
                            
                            {/* Badge */}
                            {
                                badge && (
                                    <div
                                        className="absolute top-5 right-16 flex w-[88px] h-[25px] items-center gap-1 px-1.5 py-0.5 bg-white rounded-[23px] border border-solid border-[#5c76ff]"
                                        aria-label="Badge"
                                    >
                                        <div className="relative w-2 h-3" aria-hidden="true">
                                            <div className="relative w-1.5 h-1.5 top-px left-px bg-[#5c76ff] rounded-[3px]" />
                                        </div>
                                        <span className="relative w-fit mt-[-1px] font-text-xs-medium font-medium text-[#5c76ff] text-xs text-center tracking-wide leading-tight whitespace-nowrap">
                                            {badge}
                                        </span>
                                    </div>
                                )
                            }

                            {/* Course title */}
                            <h2 className="absolute top-[21px] left-[70px] font-bold text-[#101828] text-sm leading-[25px] whitespace-nowrap">
                                {title}
                            </h2>

                            {/* Blue circle */}
                            <div className="absolute w-6 h-[25px] top-[21px] left-[30px] rounded-[18px] bg-[#5c76ff]">
                                <Image src={l_mark} alt={'learn_mark'} className='w-full h-full' />
                            </div>

                            {/* White box */}
                            <div className="absolute flex top-[78px] left-[33px] right-[33px]">
                                <div className='w-[50%] h-[177px] bg-white rounded-[22px]' style={{backgroundImage: `url(${imgUrl})`, backgroundSize: '100% 100%'}}></div>
                                <div className='w-[50%] h-[177px] pl-7'>
                                    <div className="font-semibold text-[#344054] text-[14px] text-sm leading-[38px] whitespace-nowrap">
                                        ${price}
                                    </div>
                                    <p className="font-normal text-[#475467] text-[12px] leading-[19px] h-[77px]">
                                        {content}
                                    </p>
                                    <div className='w-full flex justify-center mt-5'>
                                        <Link href={`${linkUrl}`} className="w-full font-bold text-[#344054] text-xs text-center leading-[30px] bg-white rounded-[20px] border border-solid border-[#475467]">
                                            <button>Learn more</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </article>

                        {/* Decorative line */}
                        <Image
                            className="absolute w-[85%] left-[7.5%] md:w-[90%] md:left-[5%] h-px top-[60px] object-cover"
                            alt="blueLine"
                            src={blueLine}
                        />
                    </section>
            )
        }


        {
            type == 'read' && (
                    <section className="relative w-full h-[278px]">
                        <article className="absolute w-full h-[278px] top-0 left-0 rounded-[22px]">
                            {/* Background and border */}
                            <div className="absolute w-full h-[278px] top-0 left-0 bg-[#FFF7F4] rounded-[22px] border border-solid border-[#f15f31] rotate-180" />

                            {/* Checkbox instead of the check icon */}
                            <div className="absolute top-6 right-7">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                    // checked={isChecked}
                                />
                            </div>
                            
                            {/* Badge */}
                            {
                                badge && (
                                    <div
                                        className="absolute top-5 right-16 flex w-[88px] h-[25px] items-center gap-1 px-1.5 py-0.5 bg-white rounded-[23px] border border-solid border-[#f15f31]"
                                        aria-label="Badge"
                                    >
                                        <div className="relative w-2 h-3" aria-hidden="true">
                                            <div className="relative w-1.5 h-1.5 top-px left-px bg-[#f15f31] rounded-[3px]" />
                                        </div>
                                        <span className="relative w-fit mt-[-1px] font-text-xs-medium font-medium text-[#f15f31] text-xs text-center tracking-wide leading-tight whitespace-nowrap">
                                            {badge}
                                        </span>
                                    </div>
                                )
                            }

                            {/* Course title */}
                            <h2 className="absolute top-[21px] left-[70px] font-bold text-[#101828] text-sm leading-[25px] whitespace-nowrap">
                                {title}
                            </h2>

                            {/* Orange circle */}
                            <div className="absolute w-6 h-[25px] top-[21px] left-[30px] rounded-[18px] bg-[#f15f31]">
                                <Image src={r_mark} alt={'read_mark'} className='w-full h-full' />
                            </div>

                            {/* White box */}
                            <div className="absolute flex top-[78px] left-[33px] right-[33px]">
                                <div className='w-[50%] h-[177px] bg-white rounded-[22px]' style={{backgroundImage: `url(${imgUrl})`, backgroundSize: '100% 100%'}}></div>
                                <div className='w-[50%] h-[177px] pl-7'>
                                    <div className="font-semibold text-[#344054] text-[14px] text-sm leading-[38px] whitespace-nowrap">
                                        ${price}
                                    </div>
                                    <p className="font-normal text-[#475467] text-[12px] leading-[19px] h-[77px]">
                                        {content}
                                    </p>
                                    <div className='w-full flex justify-center mt-5'>
                                        <Link href={`${linkUrl}`} className="w-full font-bold text-[#344054] text-xs text-center leading-[30px] bg-white rounded-[20px] border border-solid border-[#475467]">
                                            <button>Learn more</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </article>

                        {/* Decorative line */}
                        <Image
                            className="absolute w-[85%] left-[7.5%] md:w-[90%] md:left-[5%] h-px top-[60px] object-cover"
                            alt="blueLine"
                            src={orangeLine}
                        />
                    </section>
            )
        }

        {
            type == 'meet' && (
                    <section className="relative w-full h-[278px]">
                        <article className="absolute w-full h-[278px] top-0 left-0 rounded-[22px]">
                            {/* Background and border */}
                            <div className="absolute w-full h-[278px] top-0 left-0 bg-[#f2faec] rounded-[22px] border border-solid border-[#95da79] rotate-180" />

                            {/* Checkbox instead of the check icon */}
                            <div className="absolute top-6 right-7">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                    // checked={isChecked}
                                />
                            </div>
                            
                            {/* Badge */}
                            {
                                badge && (
                                    <div
                                        className="absolute top-5 right-16 flex w-[88px] h-[25px] items-center gap-1 px-1.5 py-0.5 bg-white rounded-[23px] border border-solid border-[#95da79]"
                                        aria-label="Badge"
                                    >
                                        <div className="relative w-2 h-3" aria-hidden="true">
                                            <div className="relative w-1.5 h-1.5 top-px left-px bg-[#95da79] rounded-[3px]" />
                                        </div>
                                        <span className="relative w-fit mt-[-1px] font-text-xs-medium font-medium text-[#95da79] text-xs text-center tracking-wide leading-tight whitespace-nowrap">
                                            {badge}
                                        </span>
                                    </div>
                                )
                            }

                            {/* Course title */}
                            <h2 className="absolute top-[21px] left-[70px] font-bold text-[#101828] text-sm leading-[25px] whitespace-nowrap">
                                {title}
                            </h2>

                            {/* Green circle */}
                            <div className="absolute w-6 h-[25px] top-[21px] left-[30px] rounded-[18px] bg-[#95da79]">
                                <Image src={wm_mark} alt={'wm_mark'} className='w-full h-full rotate-180' />
                            </div>

                            {/* White box */}
                            <div className="absolute flex top-[78px] left-[33px] right-[33px]">
                                <div className='w-[50%] h-[177px] bg-white rounded-[22px]' style={{backgroundImage: `url(${imgUrl})`, backgroundSize: '100% 100%'}}></div>
                                <div className='w-[50%] h-[177px] pl-7'>
                                    <div className="font-semibold text-[#344054] text-[14px] text-sm leading-[38px] whitespace-nowrap">
                                        ${price}
                                    </div>
                                    <p className="font-normal text-[#475467] text-[12px] leading-[19px] h-[77px]">
                                        {content}
                                    </p>
                                    <div className='w-full flex justify-center mt-5'>
                                        <Link href={`${linkUrl}`} className="w-full font-bold text-[#344054] text-xs text-center leading-[30px] bg-white rounded-[20px] border border-solid border-[#475467]">
                                            <button>Learn more</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </article>

                        {/* Decorative line */}
                        <Image
                            className="absolute w-[85%] left-[7.5%] md:w-[90%] md:left-[5%] h-px top-[60px] object-cover"
                            alt="blueLine"
                            src={greenLine}
                        />
                    </section>
            )
        }
        
        {
            type == 'watch' && (
                    <section className="relative w-full h-[278px]">
                        <article className="absolute w-full h-[278px] top-0 left-0 rounded-[22px]">
                            {/* Background and border */}
                            <div className="absolute w-full h-[278px] top-0 left-0 bg-[#F7F6FF] rounded-[22px] border border-solid border-[#7f56d9] rotate-180" />

                            {/* Checkbox instead of the check icon */}
                            <div className="absolute top-6 right-7">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                    // checked={isChecked}
                                />
                            </div>
                            
                            {/* Badge */}
                            {
                                badge && (
                                    <div
                                        className="absolute top-5 right-16 flex w-[88px] h-[25px] items-center gap-1 px-1.5 py-0.5 bg-white rounded-[23px] border border-solid border-[#7f56d9]"
                                        aria-label="Badge"
                                    >
                                        <div className="relative w-2 h-3" aria-hidden="true">
                                            <div className="relative w-1.5 h-1.5 top-px left-px bg-[#7f56d9] rounded-[3px]" />
                                        </div>
                                        <span className="relative w-fit mt-[-1px] font-text-xs-medium font-medium text-[#7f56d9] text-xs text-center tracking-wide leading-tight whitespace-nowrap">
                                            {badge}
                                        </span>
                                    </div>
                                )
                            }

                            {/* Course title */}
                            <h2 className="absolute top-[21px] left-[70px] font-bold text-[#101828] text-sm leading-[25px] whitespace-nowrap">
                                {title}
                            </h2>

                            {/* Purple circle */}
                            <div className="absolute w-6 h-[25px] top-[21px] left-[30px] rounded-[18px] bg-[#7f56d9]">
                                <Image src={wm_mark} alt={'wm_mark'} className='w-full h-full' />
                            </div>

                            {/* White box */}
                            <div className="absolute flex top-[78px] left-[33px] right-[33px]">
                                <div className='w-[50%] h-[177px] bg-white rounded-[22px]' style={{backgroundImage: `url(${imgUrl})`, backgroundSize: '100% 100%'}}></div>
                                <div className='w-[50%] h-[177px] pl-7'>
                                    <div className="font-semibold text-[#344054] text-[14px] text-sm leading-[38px] whitespace-nowrap">
                                        ${price}
                                    </div>
                                    <p className="font-normal text-[#475467] text-[12px] leading-[19px] h-[77px]">
                                        {content}
                                    </p>
                                    <div className='w-full flex justify-center mt-5'>
                                        <Link href={`${linkUrl}`} className="w-full font-bold text-[#344054] text-xs text-center leading-[30px] bg-white rounded-[20px] border border-solid border-[#475467]">
                                            <button>Learn more</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </article>

                        {/* Decorative line */}
                        <Image
                            className="absolute w-[85%] left-[7.5%] md:w-[90%] md:left-[5%] h-px top-[60px] object-cover"
                            alt="blueLine"
                            src={purpleLine}
                        />
                    </section>
            )
        }
        

        </>
    );
};

export default PackageCard;
