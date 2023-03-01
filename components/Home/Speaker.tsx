import React from 'react';

interface PropsInterface {
    image: string;
    topic: string;
    name: string;
    credentials: string;
}

function Speaker() {
    return (
        <div className="flex-1">
            <div className="bg-gray-300 aspect-square my-5"></div>
            <p>TOPIC</p>
            <p className="font-bold my-[1px]">NAME OF SPEAKER</p>
            <p>Credentials</p>
            <hr className="my-10 h-[1px] bg-gray-300" />
        </div>
    );
}

export default Speaker;
