import Link from 'next/link';
import React from 'react';

const MainNav = () => {
  const navLinks = [
    { href: '/', label: 'หน้าแรก' },
    { href: '/blog', label: 'โปรแกรมทัวร์' },
    { href: '/product', label: 'ทัวร์ต่างประเทศ' },
    { href: '/about', label: 'ทัวร์วันหยุด' },
    { href: '/about', label: 'ทัวร์โปรไฟไหม้' },
    { href: '/about', label: 'จัดกรุ๊ปทัวร์' },
    { href: '/about', label: 'วีซ่า' },
    { href: '/about', label: 'ตั๋วเครื่องบิน' },
    { href: '/about', label: 'บทความ' },
  ];

  return (
    <nav className='hidden lg:block bg-gray-300'>
      <div className='max-w-[1200px] mx-auto p-2 flex flex-row justify-between items-center'>
        <ul className='flex flex-row justify-between items-center gap-4 text-sm font-normal'>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className='hover:bg-gray-400 p-1 rounded transition-colors duration-200 hover:text-gray-50'
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default MainNav;
