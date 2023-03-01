import React from 'react';

function Speaker() {
    return (
        <div className="my-10 flex flex-col md:flex-row items-center justify-center gap-5 md:odd:flex-row-reverse md:odd:text-right text-center md:text-left">
            <div className="h-60 md:h-64 w-60 md:w-64 rounded-full bg-[url('../public/images/speakers/leni.jpg')] bg-cover bg-center drop-shadow-lg"></div>
            <div className="max-w-full w-[400px]">
                <h2 className="text-redted font-bold text-2xl md:text-3xl">
                    Maria Leonor G. Robredo
                </h2>
                <p className="text-sm mb-2 mt-[2px]">
                    <i>14th Vice President of the Philippines</i>
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore deleniti nam soluta itaque, modi nobis, repudiandae
                    libero culpa debitis natus asperiores deserunt accusamus.
                    Vero, magni impedit! Hic architecto perspiciatis earum vel
                    similique reprehenderit molestias amet ab, temporibus quas
                    modi exercitationem.
                </p>
            </div>
        </div>
    );
}

export default Speaker;
