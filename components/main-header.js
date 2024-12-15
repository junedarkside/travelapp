import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

import TravelappLogo from '../public/travelapp.svg';
import fbIcon from '@/public/social/facebook.svg';
import callIcon from '@/public/social/phone-call.svg';
import lineIcon from '@/public/social/line.svg';
import tictokIcon from '@/public/social/tiktok.svg';
import igIcon from '@/public/social/instagram.svg';
import mailIcon from '@/public/social/email.svg';
import UserProfile from './user-profile/UserProfile';

const Mainheader = () => {
    const socialIcons = [
        { src: fbIcon, alt: 'Facebook TravelApp', link: 'https://facebook.com/travelapp' },
        { src: lineIcon, alt: 'Line TravelApp', link: 'https://line.me/travelapp' },
        { src: tictokIcon, alt: 'TikTok TravelApp', link: 'https://tiktok.com/@travelapp' },
        { src: igIcon, alt: 'Instagram TravelApp', link: 'https://instagram.com/@travelapp' },
        { src: mailIcon, alt: 'Email TravelApp', link: '' },
    ];

    return (
        <header className='bg-gray-50'>
            <div className='max-w-[1200px] mx-auto p-2 flex flex-row justify-between items-center'>
                <section className='flex flex-row gap-2 items-center'>
                    <Image
                        src={TravelappLogo}
                        width={60}
                        height={60}
                        alt='TravelApp logo'
                        className='rounded-md'
                        priority
                    />
                    <div className='text-xs text-gray-600 flex flex-col justify-center items-center'>
                        <h1 className='text-lg text-orange-500 font-extrabold'>Travelapp</h1>
                        <p>เที่ยวด้วยกัน</p>
                    </div>
                </section>

                {/* <section className='text-xs text-gray-600 flex flex-row justify-end items-center gap-8 '> */}
                <section className='hidden lg:flex text-xs text-gray-600 flex-row justify-end items-center gap-8'>
                    <div className='flex flex-row justify-start items-center gap-4'>
                        <div className='flex flex-col items-end text-xs border-r border-gray-400 px-4'>
                            <p>ศูนย์บริการช่วยเหลือลูกค้า</p>
                            <p className='text-orange-500 font-semibold'>+1234567890</p>
                            <p className='text-orange-500 font-semibold'>เปิดให้บริการ 07.00-18.00 น. ทุกวัน</p>
                        </div>
                        <a href="tel:+1234567890" aria-label="Call customer support">
                            <Image
                                src={callIcon}
                                width={24}
                                height={24}
                                alt='Call customer support'
                                priority
                            />
                        </a>
                    </div>

                    <div className='text-xs text-gray-600 flex flex-row justify-end items-center gap-2'>
                        {socialIcons.map((icon, index) => (
                            <span key={index}>
                                <Link href={icon.link} target="_blank" rel="noopener noreferrer" aria-label={icon.alt}>
                                    <Image
                                        src={icon.src}
                                        width={24}
                                        height={24}
                                        alt={icon.alt}
                                        priority
                                    />
                                </Link>
                            </span>
                        ))}
                    </div>
                    <UserProfile />
                </section>
            </div>
        </header>
    );
};

export default Mainheader;
