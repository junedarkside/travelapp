import GrideImage from '@/components/ImageGride/GrideImage'
import FrontPackage from '@/components/package-tours/FrontPackage'
import React from 'react'

const Home = () => {
  return (
    <main>
      <div className='max-w-[1200px] mx-auto p-2 flex flex-row justify-between items-center'>
        <GrideImage />
      </div>
      <div className='bg-orange-600 flex flex-col '>
        <h2 className='max-w-[1200px] mx-auto p-8 text-center text-xl font-bold text-gray-50'>โปรแกรมทัวร์ยอดนิยม</h2>
        <div className='max-w-[1200px] mx-auto p-2 flex flex-row justify-between items-center '>
          <FrontPackage />
        </div>
      </div>
    </main>
  )
}

export default Home

