import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Head from 'next/head';
import Image from 'next/image';
import logo from '../public/logos/logo-white.png';
import rocket from '../public/images/aboutrocket.png';

function about() {
    return (
        <>
            <Head>
                <title>TEDxUPV | About</title>
                <meta name="description" content="TEDxUPV | About" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>
                <section className="py-10 text-white bg-[url('../public/images/aboutbg.png')] bg-center bg-cover bg-no-repeat -mt-5 bg-top">
                    <h1 className="font-extrabold text-3xl text-center">
                        ABOUT
                    </h1>
                    <Image
                        alt="TEDxUPV"
                        className="max-w-full w-[450px] mx-auto -mt-5"
                        src={logo}
                    />
                    <div className="px-10 mt-10 max-w-full w-[1020px] mx-auto text-center">
                        <p className="my-10">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ea nostrum, veniam corporis ducimus soluta
                            exercitationem blanditiis cumque nulla modi repellat
                            doloremque, tempora molestias in facere a nisi
                            temporibus laudantium! Accusantium odit impedit at
                            sint suscipit. Laudantium, beatae asperiores
                            sapiente labore magnam odit doloribus ipsam, porro
                            eveniet fugiat quidem totam corporis aliquid iure
                            maxime explicabo, voluptatum tempore suscipit!
                            Distinctio numquam voluptatum dolore atque aut odit
                            totam placeat voluptate provident omnis esse
                            necessitatibus, doloremque impedit ipsum ducimus
                            maiores explicabo sequi inventore culpa deleniti
                            dolores quos rem porro officiis! Id pariatur libero
                            eos quos distinctio officiis, suscipit quod, ex
                            quisquam architecto tempore laborum?
                        </p>
                        <p className="my-20">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ea nostrum, veniam corporis ducimus soluta
                            exercitationem blanditiis cumque nulla modi repellat
                            doloremque, tempora molestias in facere a nisi
                            temporibus laudantium! Accusantium odit impedit at
                            sint suscipit. Laudantium, beatae asperiores
                            sapiente labore magnam odit doloribus ipsam, porro
                            eveniet fugiat quidem totam corporis aliquid iure
                            maxime explicabo, voluptatum tempore suscipit!
                            Distinctio numquam voluptatum dolore atque aut odit
                            totam placeat voluptate provident omnis esse
                            necessitatibus, doloremque impedit ipsum ducimus
                            maiores explicabo sequi inventore culpa deleniti
                            dolores quos rem porro officiis! Id pariatur libero
                            eos quos distinctio officiis, suscipit quod, ex
                            quisquam architecto tempore laborum?
                        </p>
                    </div>
                </section>
                <section className="text-center mb-16 px-10">
                    <Image
                        alt="rocket"
                        className="mx-auto my-10 h-32 w-auto"
                        src={rocket}
                    />
                    <h2 className="font-extrabold text-4xl md:text-6xl mb-10">
                        MOON<span className="text-redted">SHOT</span>
                    </h2>
                    <p className="max-w-full w-[1020px] mx-auto">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Atque doloribus libero quasi. Minus recusandae
                        aperiam aspernatur officia voluptatum, cupiditate modi
                        quibusdam numquam repellendus sunt maxime ab distinctio
                        dolores fuga libero vero vel nemo? Nostrum enim,
                        excepturi perspiciatis ut dicta exercitationem!
                        Temporibus maxime assumenda, quisquam praesentium ipsum
                        cupiditate! Error nihil alias aspernatur qui odit magni
                        voluptates deleniti consequatur corrupti, laboriosam,
                        distinctio, iure recusandae quidem ipsa? Recusandae
                        veniam, quia, optio, accusantium iusto minima commodi
                        assumenda at fuga vero iure sed. Iste iusto commodi
                        perspiciatis id suscipit, recusandae tempore, eaque
                        ipsa, illum odio beatae possimus et minima cupiditate
                        expedita fugiat assumenda eligendi doloribus.
                    </p>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default about;
