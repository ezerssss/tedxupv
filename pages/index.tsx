import Head from 'next/head';
import Link from 'next/link';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedVideo } from '@cloudinary/react';
import Speaker from '@/components/Home/Speaker';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Home/Newsletter';
import { speakersData } from '@/constants/speakers';

export default function Home() {
    const cld = new Cloudinary({
        cloud: {
            cloudName: 'dyfs1hsn8',
        },
    });

    const teaserVideo = cld.video('teaser_c8gnmz');

    const { image: image1, title: title1, name: name1 } = speakersData[0];
    const { image: image2, title: title2, name: name2 } = speakersData[1];
    const { image: image3, title: title3, name: name3 } = speakersData[2];

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
            <Header />
            <main>
                <section className="h-[500px] w-full flex items-center justify-center bg-[url('../public/images/rocket.png')] bg-cover bg-center mb-20">
                    <div className="z-10">
                        <h1 className="text-white text-4xl sm:text-6xl lg:text-7xl font-black drop-shadow mb-6 text-center">
                            MOONSHOT
                        </h1>
                        <div className="py-1 sm:py-3 px-5 sm:px-8 rounded-3xl bg-redted text-white text-base sm:text-xl lg:text-2xl font-light w-fit mx-auto tracking-widest drop-shadow">
                            <p>JUNE 2, 2023</p>
                        </div>
                    </div>
                </section>
                <section className="my-10 md:flex mx-auto justify-center px-10 md:px-20">
                    <div className="aspect-video flex-1">
                        <AdvancedVideo
                            autoPlay
                            controls
                            className="w-full h-full"
                            cldVid={teaserVideo}
                        />
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
                        <Speaker image={image1} title={title1} name={name1} />
                        <div className="flex-1 hidden sm:block">
                            <Speaker
                                image={image2}
                                title={title2}
                                name={name2}
                            />
                        </div>
                        <div className="flex-1 hidden md:block">
                            <Speaker
                                image={image3}
                                title={title3}
                                name={name3}
                            />
                        </div>
                    </div>
                </section>
                <Newsletter />
            </main>
            <Footer />
        </>
    );
}
