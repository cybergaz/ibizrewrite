'use client';

import React from 'react';
import { cn } from '@/lib/utils';

const Card = ({ h1, h2 }: { h1: string, h2: string }) => {
    return (
        <div className="relative w-[250px] h-[180px] rounded-lg p-[1px] bg-white/10 ">
            {/* Moving Dot */}
            <div className="absolute w-[5px] aspect-square bg-white rounded-full shadow-[0_0_10px_white] right-[10%] top-[10%] animate-moveDot" />

            {/* Card */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full rounded-md border border-accent-light-gray text-white">
                {/* Light Ray */}
                <div className="absolute top-16 -left-2 w-[200px] h-[40px] bg-[#c7c7c7] opacity-40 shadow-[0_0_50px_white] blur-lg transform rotate-[40deg]" />

                {/* Text Content */}
                <div className="text-4xl font-bold bg-gradient-to-r from-accent-gray via-white to-accent-gray bg-clip-text text-transparent">{h1}</div>
                <div className='text-white mt-2'>{h2}</div>

                {/* Borders */}
                <div className="absolute w-full h-[1px] bg-accent-light-gray top-[10%] bg-gradient-to-r from-gray-400 to-[#1d1f1f]" />
                <div className="absolute w-full h-[0.5px] bg-accent-gray bottom-[10%]" />
                <div className="absolute h-full w-[1px] bg-[#2c2c2c] left-[10%] bg-gradient-to-b from-gray-400 to-[#222424]" />
                <div className="absolute h-full w-[1px] bg-[#2c2c2c] right-[10%]" />
            </div>
        </div>
    );
};

export default Card;
