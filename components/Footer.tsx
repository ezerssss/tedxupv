import React from 'react';
import Image from 'next/image';
import email from '../public/logos/email.png';
import fb from '../public/logos/fb.png';
import twitter from '../public/logos/twitter.png';

function Footer() {
    return (
        <footer className="bg-[url('../public/images/stars.png')] bg-cover bg-center md:px-24 py-16 md:py-20 text-center md:flex items-center justify-between">
            <p className="text-white font-bold text-4xl md:text-5xl drop-shadow">
                CONTACT US
            </p>
            <div className="flex gap-3 md:gap-7 items-center justify-center mt-10 md:mt-0">
                <button>
                    <Image
                        alt="email"
                        className="h-14 md:h-16 w-auto"
                        src={email}
                    />
                </button>
                <button>
                    <Image
                        alt="facebook"
                        className="h-14 md:h-16 w-auto"
                        src={fb}
                    />
                </button>
                <button>
                    <Image
                        alt="twitter"
                        className="h-14 md:h-16 w-auto"
                        src={twitter}
                    />
                </button>
            </div>
        </footer>
    );
}

export default Footer;
