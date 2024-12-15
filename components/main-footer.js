import Link from 'next/link';
import React from 'react';

const Mainfooter = () => {
    return (
        <div className='bg-gray-50'>
            <footer className='max-w-[1200px] mx-auto p-2 flex flex-col lg:flex-row justify-between items-start'>
                <section className='w-full lg:w-1/3 p-2 flex flex-col gap-2'>
                    <h2 className='text-orange-500 font-bold'>TravelApp</h2>
                    <p className="text-xs text-gray-500">
                        TravelApp.com เว็บไซต์ที่รวมรวมโปรแกรมทัวร์ และแพ็กเกจทัวร์ครบ มากที่สุด ทั้งทัวร์ในประเทศและทัวร์ต่างประเทศ ง่ายๆ<br />
                        บริษัท ทราเวลแอป จำกัด ใบอนุญาต เลขที่ 11/080080<br />
                        <br />
                        101 กรุงเทพ 10110<br />
                        02-101-1100<br />
                        เบอร์ติดต่อฉุกเฉิน : 080-000-0008,<br />
                        <br />
                        contact@travelapp.com or travelapp@gmail.com
                    </p>
                </section>

                <section className='w-full lg:w-1/3  flex flex-col gap-2 p-2'>
                    <h2 className='text-orange-500 font-bold'>บริษัททัวร์คุณภาพ</h2>
                    <nav aria-label="Tour Company Links" className="text-xs text-gray-500 grid grid-cols-2 gap-1">
                        <Link href={'/#'}>บล็อกสารพันเรื่องน่าอ่าน</Link>
                        <Link href={'/#'}>ข่าวสารท่องเที่ยว</Link>
                        <Link href={'/#'}>ข้อมูลท่องเที่ยว</Link>
                        <Link href={'/#'}>ติดต่อเรา</Link>
                        <Link href={'/#'}>คำถามที่พบบ่อย</Link>
                        <Link href={'/#'}>สำหรับลูกค้าองค์กร</Link>
                        <Link href={'/#'}>ผลงานที่ผ่านมา</Link>
                        <Link href={'/#'}>เกี่ยวกับเรา</Link>
                        <Link href={'/#'}>ร่วมงานกับเรา</Link>
                    </nav>
                </section>

                <section className='w-full lg:w-1/3  flex flex-col gap-2 p-2'>
                    <h2 className='text-orange-500 font-bold'>นโยบาย เงื่อนไขและข้อตกลง</h2>
                    <nav aria-label="Policy Links" className="text-xs text-gray-500 flex flex-col gap-1">
                        <Link href={'/#'}>เงื่อนไขการให้บริการ</Link>
                        <Link href={'/#'}>นโยบายความเป็นส่วนตัว</Link>
                        <Link href={'/#'}>นโยบายคุกกี้</Link>
                    </nav>
                </section>
            </footer>
        </div>
    );
};

export default Mainfooter;
