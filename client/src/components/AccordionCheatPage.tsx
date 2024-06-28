import { TriangleRightIcon } from '@radix-ui/react-icons';
import React, { useState } from 'react';

interface AccordionProps {
    title: string;
    children: React.ReactNode;
}

const AccordionCheatPage: React.FC<AccordionProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`transition-all duration-500 ease-in-out border-gray-200 ${isOpen ? 'w-full' : 'w-80'}`}>
            <button
                className={`w-full h-14 text-lg font-Taylor font-semibold text-left px-4 py-2 bg-slate-600 text-white focus:outline-none rounded-t border-b ${isOpen ? "rounded-b-none" : "rounded-b"} flex justify-between items-center`}
                onClick={toggleAccordion}
            >
                <span>
                    {title}
                </span>
                <TriangleRightIcon className={`scale-[2] ${isOpen ? "rotate-90" : "rotate-0"}`} />
            </button>
            <div
                className={`duration-500 ease-in-out overflow-auto`}
                style={{ maxHeight: isOpen ? '100vh' : '0' }}
            >
                <div className={`p-4 bg-slate-600 rounded-b-sm h-fit`}>
                    {children}
                </div>
            </div>
        </div >
    );
};

export default AccordionCheatPage;
