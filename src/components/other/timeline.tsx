import { cn } from '@/lib/utils';
import { CircleCheckBig } from 'lucide-react';
import React from 'react';

// Define the type for the experience details
interface Items {
    title: string;
    content: string;
    side: 'left' | 'right';
}

// Define the props for the ExperienceCard component
interface TimelineCardProps {
    title: string;
    content: string;
    side: 'left' | 'right';
}

const TimelineCard = ({ title, content, side }: TimelineCardProps) => {
    return (
        <div className={`flex ${side === 'left' ? 'flex-row-reverse' : 'flex-row'} items-center mb-8`}>
            <div className={`w-1/2 p-4 ${side === 'left' ? 'text-right' : 'text-left'}`}>
                <p className={cn("text-accent-dark-gray flex items-center gap-5", side === 'right' && "flex-row-reverse")}>
                    <CircleCheckBig color="#1226A5" />
                    <div className={cn("flex flex-col", side === 'left' ? "items-start" : "items-end")}>
                        <span className="pr-1.5 font-semibold">{title}</span>{content}
                    </div>
                </p>
            </div >
            <div className="w-1/2 flex justify-center">
                <div className="w-1 h-full bg-gray-300"></div>
            </div>
        </div >
    );
};

const Timeline = () => {
    const items: Items[] = [
        {
            title: 'Extensive Product Portfolio',
            content: 'A one-stop solution for diverse industrial needs.',
            side: 'left',
        },
        {
            title: 'Uncompromising Quality',
            content: 'Every product undergoes stringent quality checks.',
            side: 'right',
        },
        {
            title: 'Competitive Pricing',
            content: 'Premium products at the best market rates.',
            side: 'left',
        },
        {
            title: 'Customer-Centric Approach',
            content: 'We prioritize your needs with tailored solutions and timely delivery.',
            side: 'right',
        },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="relative">
                <div className="absolute left-1/2 w-1 h-full bg-gray-300 transform -translate-x-1/2"></div>
                {items.map((exp, index) => (
                    <TimelineCard key={index} {...exp} />
                ))}
            </div>
        </div>
    );
};

export default Timeline;
