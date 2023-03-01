import React from 'react';
import logo from '../public/logos/logo-white.png';
import Image from 'next/image';
import Link from 'next/link';
import { RxHamburgerMenu } from 'react-icons/rx';

function Header() {
    return (
        <header className="py-4 px-2 sm:px-4 bg-black flex items-center justify-around text-white">
            <Link href="/">
                <Image alt="TEDxUPV" height={60} src={logo} />
            </Link>
            <div className="hidden md:flex gap-12">
                <Link href="/about">ABOUT</Link>
                <Link href="/speakers">SPEAKERS</Link>
                <Link href="/partners">PARTNERS</Link>
            </div>
            <button className="block md:hidden">
                <RxHamburgerMenu size={30} />
            </button>
        </header>
    );
}

export default Header;
