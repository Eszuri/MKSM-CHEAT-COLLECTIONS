"use client"

import dataFree from '@/data/dataFree';
import dataPremium from '@/data/dataPremium';
import {motion, AnimatePresence} from 'framer-motion';
import {Play} from 'next/font/google';
import Link from 'next/link';
import React, {ForwardedRef, forwardRef} from 'react';

const PlayFont = Play({
    subsets: ['latin'],
    weight: ['400'],
});

interface ExpandNavProps {
    open?: boolean;
}


const ExpandNav = forwardRef<HTMLDivElement, ExpandNavProps>(({open}, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    ref={ref}
                    className={`${PlayFont.className} fixed top-16 left-0 right-0 bottom-0 overflow-y-auto w-80 p-4 bg-slate-800 shadow-lg border-0 border-r-2 border-emerald-600 rounded-md z-10`}
                    initial={{opacity: 0, x: -200}}
                    animate={{opacity: 1, x: 0}}
                    exit={{opacity: 0, x: -200}}
                    transition={{duration: 0.3, ease: 'easeInOut'}}
                >
                    <h2 className="text-xl font-bold text-center mb-10">Semua Rute Path</h2>
                    <Link href={'/'} className='text-red-500 block text-lg font-semibold'>HOME/Beranda/Root Path</Link>
                    <ul className='flex flex-col mt-1 border-l-2 border-white'>
                        <Link href={'/free'} className='text-yellow-400 text-lg mt-5 border-b-2 hover:border-blue-700 pl-2'>Free</Link>

                        <ul className='flex flex-col gap-10 mt-1 ml-5 border-l-2 border-white'>
                            {dataFree.map((x, index) => (
                                <div className={`flex mt-5 gap-2 ${index == dataFree.length - 1 && '-mb-[11px] -ml-[1.5px]'}`} key={index}>
                                    <span>─</span>
                                    <Link className={`underline text-emerald-400 decoration-[2.2px] underline-offset-2 decoration-white hover:decoration-blue-700 block`} href={x.navigate}>{x.title}</Link>
                                </div>
                            ))}
                        </ul>


                        <Link href={'/premium'} className='text-yellow-400 text-lg mt-20 border-b-2 hover:border-blue-700 pl-2'>Premium</Link>
                        <ul className='flex flex-col gap-10 mt-1 ml-5 border-l-2 border-white'>
                            {dataPremium.map((x, index) => (
                                <div className={`flex mt-5 gap-2 ${index == dataPremium.length - 1 && '-mb-[11px] -ml-[1.5px]'}`} key={index}>
                                    <span>─</span>
                                    <Link className='text-emerald-400 underline decoration-[2.2px] underline-offset-2 decoration-white hover:decoration-blue-700 block' href={x.navigate}>{x.title}</Link>
                                </div>
                            ))}
                        </ul>


                    </ul>
                </motion.div>
            )
            }
        </AnimatePresence >
    );
});

ExpandNav.displayName = 'ExpandNav'; // Useful for debugging

export default ExpandNav;
