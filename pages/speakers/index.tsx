import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Speaker from '@/components/Speakers/Speaker';
import Head from 'next/head';
import React from 'react';
import logo from '../../public/logos/logo-black.png';
import Image from 'next/image';
import { speakersData } from '@/constants/speakers';

function Speakers() {
    const renderSpeakers = speakersData.map(({ image, name, title }) => (
        <Speaker key={name} image={image} name={name} title={title} />
    ));

    return (
        <>
            <Head>
                <title>TEDxUPV | Speakers</title>
                <meta name="description" content="TEDxUPV | Speakers" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className="mt-5 mb-20 px-10 md:px-20">
                <h1 className="font-extrabold text-3xl text-center">
                    SPEAKERS
                </h1>
                <Image
                    alt="TEDxUPV"
                    className="max-w-full w-[450px] mx-auto -mt-5"
                    src={logo}
                />
                <p className="mx-auto max-w-full w-[850px] mt-5 mb-14 text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat reprehenderit, officiis quasi aut laborum doloribus
                    voluptatum explicabo consequuntur minus quae! Aut id
                    consequuntur dolore repellat neque numquam eligendi, ipsum
                    doloribus dicta labore corrupti facere tempore iusto minima
                    amet ut cupiditate veritatis quo! Voluptate laborum quaerat
                    odio excepturi veritatis non inventore.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-[860px] max-w-full mx-auto gap-2 gap-y-5">
                    {renderSpeakers}
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Speakers;
