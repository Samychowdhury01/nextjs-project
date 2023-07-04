import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <div className='h-[50px] text-sm flex items-center justify-between'>
        <div>©2023 Lamamia. All rights reserved.</div>
        <div className='flex items-center gap-2'>
          <Image src="/1.png" width={15} height={15} className='opacity-50 cursor-pointer' alt="Lama Dev Facebook Account" />
          <Image src="/2.png" width={15} height={15} className='opacity-50 cursor-pointer' alt="Lama Dev" />
          <Image src="/3.png" width={15} height={15} className='opacity-50 cursor-pointer' alt="Lama Dev" />
          <Image src="/4.png" width={15} height={15} className='opacity-50 cursor-pointer' alt="Lama Dev" />
        </div>
      </div>
  
    );
};

export default Footer;