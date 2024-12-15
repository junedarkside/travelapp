'use client'
import React from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react'
import koreaImg from '../ImageData/korea.webp';
import japanImg from '../ImageData/japan.webp';
import swisImg from '../ImageData/swis.webp';
import chinaImg from '../ImageData/china.webp';
import englandImg from '../ImageData/england.webp';
import indoImg from '../ImageData/indo.webp';
import russiaImg from '../ImageData/russia.webp';
import turkeyImg from '../ImageData/turkey.webp';
import vietnamImg from '../ImageData/vietnam.webp';
import { KR, JP, CH, GB, ID, RU, TR, VN } from 'country-flag-icons/react/3x2';

const destinations = [
    {
        name: 'ทัวร์ญี่ปุ่น',
        image: japanImg,
        flag: JP,
        flagTitle: 'Japan',
    },
    {
        name: 'ทัวร์สวิตเซอร์แลนด์',
        image: swisImg,
        flag: CH,
        flagTitle: 'Switzerland',
    },
    {
        name: 'ทัวร์เกาหลี',
        image: koreaImg,
        flag: KR,
        flagTitle: 'Korea',
    },
    {
        name: 'ทัวร์จีน',
        image: chinaImg,
        flag: CH,
        flagTitle: 'China',
    },
    {
        name: 'ทัวร์อังกฤษ',
        image: englandImg,
        flag: GB,
        flagTitle: 'United Kingdom',
    },
    {
        name: 'ทัวร์อินโดนีเซีย',
        image: indoImg,
        flag: ID,
        flagTitle: 'Indonesia',
    },
    {
        name: 'ทัวร์รัสเซีย',
        image: russiaImg,
        flag: RU,
        flagTitle: 'Russia',
    },
    {
        name: 'ทัวร์ตุรกี',
        image: turkeyImg,
        flag: TR,
        flagTitle: 'Turkey',
    },
    {
        name: 'ทัวร์เวียดนาม',
        image: vietnamImg,
        flag: VN,
        flagTitle: 'Vietnam',
    },
];


const GrideImage = () => {

    const [emblaRef] = useEmblaCarousel()
    return (
        <div className="overflow-hidden mx-auto" ref={emblaRef}>
            {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-auto" > */}
            <div className="flex gap-4">
                {destinations.map((destination, index) => {
                    const FlagComponent = destination.flag;
                    return (
                        <div key={index} className="min-w-[250px] rounded-lg border border-orange-200 bg-orange-50">
                            <Image
                                width={250}
                                height={200}
                                src={destination.image}
                                alt={destination.name}
                                className="rounded-t-lg"
                                style={{ width: '250px', height: '200px' }}
                            />
                            <div className="px-4 py-8 text-center rounded-b-lg relative">
                                {destination.name}
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                                    <FlagComponent
                                        title={destination.flagTitle}
                                        className="w-12 h-12 bg-orange-50 p-1 rounded-full border-2 border-orange-200"
                                    />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default GrideImage;
