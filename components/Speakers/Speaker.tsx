import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface PropsInteface {
    image: string;
    name: string;
    title: string;
}

function Speaker(props: PropsInteface) {
    const { image, name, title } = props;

    return (
        <Link className="block" href={`/speakers/${image}`}>
            <div className="w-full aspect-square relative overflow-hidden">
                <Image
                    fill
                    alt="speaker"
                    className="object-cover"
                    src={`/images/speakers/${image}`}
                />
            </div>
            <h2 className="mt-2 mb-1 leading-tight font-bold text-base md:text-lg">
                {name}
            </h2>
            <p className="text-xs md:text-sm text-gray-500">
                <i>{title}</i>
            </p>
        </Link>
    );
}

export default Speaker;
