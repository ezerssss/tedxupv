import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { speakersData } from '@/constants/speakers';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

function Speaker() {
    const router = useRouter();
    const { image } = router.query;

    const speaker = speakersData.filter((speaker) => speaker.image === image);

    if (!speaker) {
        router.push('/');
    }

    const { name, title, description, topic } = speaker[0];

    const renderTopic = topic ? (
        <h2 className="text-lg sm:text-xl md:text-2xl text-redted font-bold mt-5 md:mt-0">
            {topic}
        </h2>
    ) : (
        <div className="flex gap-2 mt-5 md:mt-0">
            <div className="bg-redted h-3 w-[50%]" />
            <div className="bg-redted h-3 w-[20%]" />
            <div className="bg-redted h-3 w-[10%]" />
        </div>
    );

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
                <section className="my-16 md:flex gap-10 w-[1000px] max-w-full mx-auto px-5 sm:px-10">
                    <div className="flex-1">
                        <div className="w-full md:h-[300px] md:w-auto aspect-square relative overflow-hidden">
                            <Image
                                fill
                                alt="speaker"
                                className="object-cover"
                                src={`/images/speakers/${image}`}
                            />
                        </div>
                    </div>
                    <div>
                        {renderTopic}
                        <h1 className="font-bold text-xl sm:text-3xl md:text-4xl mt-2">
                            {name}
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg mt-1 mb-5 md:mb-10 text-gray-500">
                            <i>{title}</i>
                        </p>
                        <p>{description}</p>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Speaker;
