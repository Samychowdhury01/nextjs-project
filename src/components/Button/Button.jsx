import Link from 'next/link';
import React from 'react';

const Button = ({url, text}) => {
    return (
        <Link href={url} className='p-5 cursor-pointer bg-[#53c28b] border-none rounded-md w-max text-white font-semibold'>
            {text}
        </Link>
    );
};

export default Button;