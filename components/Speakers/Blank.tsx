import Head from 'next/head';
import React from 'react';
import Footer from '../Footer';
import Header from '../Header';

function Blank() {
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
            <main>
                <section className="w-screen h-screen"></section>
            </main>
            <Footer />
        </>
    );
}

export default Blank;
