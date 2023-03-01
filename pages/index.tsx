import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/logos/logo-white.png';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedVideo } from '@cloudinary/react';
import Speaker from '@/components/Home/Speaker';
import email from '../public/logos/email.png';
import fb from '../public/logos/fb.png';
import twitter from '../public/logos/twitter.png';

export default function Home() {
    const cld = new Cloudinary({
        cloud: {
            cloudName: 'dyfs1hsn8',
        },
    });

    const myVideo = cld.video('teaser_c8gnmz');

    return (
        <>
            <Head>
                <title>TEDxUPV</title>
                <meta name="description" content="TEDxUPV" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className="py-4 px-2 sm:px-4 bg-black flex items-center justify-around text-white">
                <Image alt="TEDxUPV" height={60} src={logo} />
                <div className="hidden md:flex gap-12">
                    <Link href="/about">ABOUT</Link>
                    <Link href="/speakers">SPEAKERS</Link>
                    <Link href="/sponsors">SPONSORS</Link>
                </div>
                <button className="block md:hidden">
                    <RxHamburgerMenu size={30} />
                </button>
            </header>
            <main>
                <section className="h-[500px] w-full flex items-center justify-center bg-[url('../public/images/rocket.png')] bg-cover bg-center mb-20">
                    <div className="z-10">
                        <h1 className="text-white text-4xl sm:text-6xl lg:text-7xl font-black drop-shadow mb-6 text-center">
                            MOONSHOT
                        </h1>
                        <div className="py-1 sm:py-3 px-5 sm:px-8 rounded-3xl bg-red-500 text-white text-base sm:text-xl lg:text-2xl font-light w-fit mx-auto tracking-widest drop-shadow">
                            <p>JUNE 2, 2023</p>
                        </div>
                    </div>
                </section>
                <section className="my-10 md:flex mx-auto justify-center px-10 md:px-20">
                    <div className="aspect-video flex-1">
                        <AdvancedVideo autoPlay controls cldVid={myVideo} />
                    </div>
                    <div className="flex-1 bg-gray-300 aspect-video flex flex-col items-center justify-center text-center py-10">
                        <div className="flex-1 flex justify-center items-center px-5">
                            <div>
                                <p>TEDxUPV Moonshot</p>
                                <p className="font-bold text-xl my-4">
                                    INSERT MOONSHOT SLOGAN
                                </p>
                            </div>
                        </div>
                        <Link href="/about">Read more</Link>
                    </div>
                </section>
                <section className="mt-20 mb-10 px-10 md:px-20">
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl sm:text-4xl font-bold tracking-wide">
                            SPEAKERS
                        </h2>
                        <Link
                            className="text-base sm:text-2xl"
                            href="/speakers"
                        >
                            VIEW ALL
                        </Link>
                    </div>
                    <div className="my-5 flex gap-5 md:gap-10 lg:gap-20 items-center justify-center">
                        <Speaker />
                        <div className="flex-1 hidden sm:block">
                            <Speaker />
                        </div>
                        <div className="flex-1 hidden md:block">
                            <Speaker />
                        </div>
                    </div>
                </section>
                <section className="p-5 sm:p-10 md:p-20 md:px-32 bg-red-500 text-white lg:flex gap-10 justify-around">
                    <div className="text-center lg:text-left text-2xl lg:text-3xl">
                        <p className="mb-10 hidden lg:block">
                            Want to know more?
                        </p>
                        <p>Subscribe to the</p>
                        <p className="font-bold mb-10">MathO Newsletter</p>
                        <p className="font-thin">to keep updated.</p>
                    </div>
                    <div className="flex flex-col gap-2 text-black mt-10 lg:mt-0">
                        <input
                            className="p-4 max-w-full w-[400px] drop-shadow outline-none mx-auto"
                            placeholder="Email"
                            type="email"
                        />
                        <input
                            className="p-4 max-w-full w-[400px] drop-shadow outline-none mx-auto"
                            placeholder="First Name"
                        />
                        <input
                            className="p-4 max-w-full w-[400px] drop-shadow outline-none mx-auto"
                            placeholder="Last Name"
                        />
                        <input
                            className="p-4 max-w-full w-[400px] drop-shadow outline-none mx-auto"
                            placeholder="School / University"
                        />
                        <button
                            className="bg-black text-white p-4 drop-shadow max-w-full w-[400px] mx-auto mb-10"
                            type="submit"
                        >
                            SUBSCRIBE
                        </button>
                    </div>
                </section>
            </main>
            <footer className="bg-[url('../public/images/stars.jpeg')] bg-cover bg-center px-24 py-40 text-center md:flex items-center justify-between">
                <p className="text-white font-bold text-5xl drop-shadow">
                    CONTACT US
                </p>
                <div className="flex gap-7 items-center justify-center mt-10 md:mt-0">
                    <button>
                        <Image
                            alt="email"
                            className="h-16 w-auto"
                            src={email}
                        />
                    </button>
                    <button>
                        <Image
                            alt="facebook"
                            className="h-16 w-auto"
                            src={fb}
                        />
                    </button>
                    <button>
                        <Image
                            alt="twitter"
                            className="h-16 w-auto"
                            src={twitter}
                        />
                    </button>
                </div>
            </footer>
        </>
    );
}
