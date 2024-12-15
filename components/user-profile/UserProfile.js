'use client'
import Link from 'next/link'
import React from 'react'
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
const UserProfile = () => {
  return (
    <div className='px-2 py-1 rounded-md text-orange-500 bg-gray-200'>
      <Link href={'/'}>
        เข้าสู่ระบบ
        <PermIdentityOutlinedIcon />
      </Link>

    </div>
  )
}

export default UserProfile