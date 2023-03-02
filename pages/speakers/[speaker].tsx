import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

function Speaker() {
    const router = useRouter();
    const { speaker, type } = router.query;

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
                                src={`/images/speakers/${speaker}.${type}`}
                            />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-lg sm:text-2xl md:text-3xl text-redted font-bold mt-5 md:mt-0">
                            POLITICS
                        </h2>
                        <h1 className="font-bold text-xl sm:text-3xl md:text-4xl mt-2">
                            Maria Leonor Santo Tomas Gerona
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg mt-1 mb-5 md:mb-10">
                            <i>14th Vice President of the Philippines</i>
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Corrupti animi in doloribus expedita? Nam
                            dolor, modi nostrum reiciendis atque vero saepe
                            inventore ipsam a earum quis perferendis repudiandae
                            aut libero qui, suscipit unde eius aliquid
                            exercitationem incidunt obcaecati adipisci vitae
                            ipsum. Quo veritatis illo dolorem similique
                            accusantium neque laudantium deleniti totam numquam
                            ratione harum debitis culpa omnis quis, autem itaque
                            error. Repudiandae quis praesentium, illum
                            exercitationem temporibus perferendis doloremque
                            itaque, nemo veritatis ipsam suscipit eaque amet
                            aliquid architecto ad placeat dolores,
                            necessitatibus reprehenderit labore nobis minus
                            numquam unde. Corporis sed ab aliquid temporibus
                            sunt dolore iste dolores totam, reiciendis illo.
                            <br />
                            <br />
                            <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Corrupti animi in doloribus expedita? Nam
                            dolor, modi nostrum reiciendis atque vero saepe
                            inventore ipsam a earum quis perferendis repudiandae
                            aut libero qui, suscipit unde eius aliquid
                            exercitationem incidunt obcaecati adipisci vitae
                            ipsum. Quo veritatis illo dolorem similique
                            accusantium neque laudantium deleniti totam numquam
                            ratione harum debitis culpa omnis quis, autem itaque
                            error. Repudiandae quis praesentium, illum
                            exercitationem temporibus perferendis doloremque
                            itaque, nemo veritatis ipsam suscipit eaque amet
                            aliquid architecto ad placeat dolores,
                            necessitatibus reprehenderit labore nobis minus
                            numquam unde. Corporis sed ab aliquid temporibus
                            sunt dolore iste dolores totam, reiciendis illo.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Speaker;
