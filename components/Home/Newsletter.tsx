import React from 'react';

function Newsletter() {
    return (
        <section className="p-5 sm:p-10 md:p-20 md:px-32 bg-redted text-white lg:flex gap-10 justify-around">
            <div className="text-center lg:text-left text-2xl lg:text-3xl">
                <p className="mb-10 hidden lg:block">Want to know more?</p>
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
    );
}

export default Newsletter;
