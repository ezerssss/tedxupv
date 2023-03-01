import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Speaker from '@/components/Speakers/Speaker';
import Head from 'next/head';
import React from 'react';

function Speakers() {
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
            <main className="mt-10 mb-20 px-10 md:px-20">
                <h1 className="font-bold text-5xl text-center drop-shadow">
                    TEDxUPV 2023 Speakers
                </h1>
                <p className="mx-auto max-w-full w-[850px] mt-5 mb-14 text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat reprehenderit, officiis quasi aut laborum doloribus
                    voluptatum explicabo consequuntur minus quae! Aut id
                    consequuntur dolore repellat neque numquam eligendi, ipsum
                    doloribus dicta labore corrupti facere tempore iusto minima
                    amet ut cupiditate veritatis quo! Voluptate laborum quaerat
                    odio excepturi veritatis non inventore.
                </p>
                <Speaker />
                <Speaker />
                <Speaker />
                <Speaker />
                <Speaker />
                <Speaker />
            </main>
            <Footer />
        </>
    );
}

export default Speakers;
