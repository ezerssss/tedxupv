import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Partner from '@/components/Partners/Partner';
import Head from 'next/head';

function Partners() {
    return (
        <>
            <Head>
                <title>TEDxUPV | Partners</title>
                <meta name="description" content="TEDxUPV | Partners" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className="px-10 md:px-20 min-h-screen my-10">
                <p className="mb-10">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eos iure dolores nulla enim aperiam quae in aliquam veniam
                    ipsum, voluptatum deleniti eveniet natus velit aliquid quia
                    maxime voluptas architecto minima corporis sed suscipit ad
                    rem. Totam, natus ipsum doloremque dicta fuga, ipsa
                    aspernatur ducimus quasi dolor earum, tempora aliquam aut.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    <Partner />
                    <Partner />
                    <Partner />
                    <Partner />
                    <Partner />
                    <Partner />
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Partners;
