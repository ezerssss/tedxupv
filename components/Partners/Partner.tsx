import React from 'react';
import Image from 'next/image';
import logo from '../../public/logos/logo-white.png';

function Partner() {
    return (
        <div className="bg-gray-200 h-48 w-full rounded-lg p-5 flex items-center justify-center">
            <Image alt="partner" src={logo} />
        </div>
    );
}

export default Partner;
