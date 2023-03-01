import React, { useState } from 'react';
import logo from '../public/logos/logo-white.png';
import Image from 'next/image';
import Link from 'next/link';
import { RxHamburgerMenu } from 'react-icons/rx';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header className="py-4 px-2 sm:px-4 bg-black flex items-center justify-around text-white">
                <Link href="/">
                    <Image alt="TEDxUPV" height={60} src={logo} />
                </Link>
                <div className="hidden md:flex gap-12">
                    <Link href="/about">ABOUT</Link>
                    <Link href="/speakers">SPEAKERS</Link>
                    <Link href="/partners">PARTNERS</Link>
                </div>
                <button
                    className="block md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <RxHamburgerMenu size={30} />
                </button>
            </header>
            {isOpen && (
                <div className="flex p-5 pt-0 bg-black text-white flex gap-6 sm:gap-10 justify-center text-sm sm:text-base">
                    <Link href="/about">ABOUT</Link>
                    <Link href="/speakers">SPEAKERS</Link>
                    <Link href="/partners">PARTNERS</Link>
                </div>
            )}
        </>
    );
}

export default Header;
