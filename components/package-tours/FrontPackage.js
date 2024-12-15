// import React from 'react'
// import japanPackageImg from '../ImageData/japan-package.webp';
// import malaysiaAirlinemg from '../ImageData/malaysia-airline.webp';
// import Image from 'next/image'
// import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
// const FrontPackage = () => {
//     return (
//         <div className='max-w-[373px] bg-gray-50 rounded-lg flex flex-col gap-2'>
//             <Image
//                 src={japanPackageImg}
//                 width={373}
//                 height={200}
//                 alt='ทัวร์ญี่ปุ่น โตเกียว ฟูจิ เทศกาลมัตสึดะซากุระ'
//                 className='rounded-t-md'
//             />
            
//             <div className='px-2 text-gray-800 text-sm font-medium'>Japan Tokyo Fuji Matsuda Sakura ทัวร์ญี่ปุ่น โตเกียว ฟูจิ เทศกาลมัตสึดะซากุระ</div>
//             <div className='w-full px-2 flex flex-row justify-between items-center text-xs text-gray-600'>
//                 <span className='flex flex-col justify-center items-center'>
//                     <div className='font-bold'>รหัสทัวร์</div>
//                     <div className='text-red-500'>TVZ4695</div>
//                 </span>
//                 <span className='flex flex-col justify-center items-center'>
//                     <div className='font-bold'>จำนวนวัน</div>
//                     <div>3วัน 2คืน</div>
//                 </span>
//                 <span className='flex flex-col justify-center items-center'>
//                     <div className='font-bold'>สายการบิน</div>
//                     <div >
//                         <Image
//                         width={40}
//                         height={40}
//                         src={malaysiaAirlinemg}
//                         alt='malaysia airline'
//                         />
//                     </div>
//                 </span>
//                 <span className='flex flex-col justify-center items-center'>
//                     <div className='font-bold'>โรงแรม</div>
//                     <div>
//                         <StarOutlinedIcon className='text-yellow-500' fontSize='small' />
//                         <StarOutlinedIcon className='text-yellow-500' fontSize='small' />
//                         <StarOutlinedIcon className='text-yellow-500' fontSize='small' />
//                     </div>
//                 </span>
//             </div>
//             <div className='px-2 text-gray-600 font-bold'>ช่วงเวลาเดินทาง ธ.ค. 67 - มิ.ย. 68</div>
//             <div className='px-2 flex flex-row justify-between items-center'>
//                 <span className='text-gray-600 text-sm font-medium'>เริ่มต้น 10,999 B</span>
//                 <div className='p-2 bg-orange-400 mb-2 rounded-lg text-gray-50'>ดูรายละเอียด</div>
//             </div>


//         </div>
//     )
// }

// export default FrontPackage
import React from 'react'
import japanPackageImg from '../ImageData/japan-package.webp';
import malaysiaAirlinemg from '../ImageData/malaysia-airline.webp';
import Image from 'next/image'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';

const FrontPackage = () => {
    const packages = new Array(8).fill(true); // Creates an array with 8 elements

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {packages.map((_, index) => (
                <div key={index} className='max-w-[373px] bg-gray-50 rounded-lg flex flex-col gap-2'>
                    <Image
                        src={japanPackageImg}
                        width={373}
                        height={200}
                        alt='ทัวร์ญี่ปุ่น โตเกียว ฟูจิ เทศกาลมัตสึดะซากุระ'
                        className='rounded-t-md'
                    />
                    
                    <div className='px-2 text-gray-800 text-sm font-medium'>Japan Tokyo Fuji Matsuda Sakura ทัวร์ญี่ปุ่น โตเกียว ฟูจิ เทศกาลมัตสึดะซากุระ</div>
                    <div className='w-full px-2 flex flex-row justify-between items-center text-xs text-gray-600'>
                        <span className='flex flex-col justify-center items-center'>
                            <div className='font-bold'>รหัสทัวร์</div>
                            <div className='text-red-500'>TVZ4695</div>
                        </span>
                        <span className='flex flex-col justify-center items-center'>
                            <div className='font-bold'>จำนวนวัน</div>
                            <div>3วัน 2คืน</div>
                        </span>
                        <span className='flex flex-col justify-center items-center'>
                            <div className='font-bold'>สายการบิน</div>
                            <div >
                                <Image
                                    width={40}
                                    height={40}
                                    src={malaysiaAirlinemg}
                                    alt='malaysia airline'
                                />
                            </div>
                        </span>
                        <span className='flex flex-col justify-center items-center'>
                            <div className='font-bold'>โรงแรม</div>
                            <div>
                                <StarOutlinedIcon className='text-yellow-500' fontSize='small' />
                                <StarOutlinedIcon className='text-yellow-500' fontSize='small' />
                                <StarOutlinedIcon className='text-yellow-500' fontSize='small' />
                            </div>
                        </span>
                    </div>
                    <div className='px-2 text-gray-600 font-bold'>ช่วงเวลาเดินทาง ธ.ค. 67 - มิ.ย. 68</div>
                    <div className='px-2 flex flex-row justify-between items-center'>
                        <span className='text-gray-600 text-sm font-medium'>เริ่มต้น 10,999 B</span>
                        <div className='p-2 bg-orange-400 mb-2 rounded-lg text-gray-50'>ดูรายละเอียด</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default FrontPackage;
