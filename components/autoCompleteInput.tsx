"use client"

import {useCombobox} from 'downshift';
import {useEffect, useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {useRouter} from 'next/navigation';
import {useSetAtom} from 'jotai';
import {openAutoComplete} from '@/state/jotai';


export default function AutoCompleteInput({
    dataArray,
    classNameDiv,
    classNameUL,
    classNameLi,
    classNameInput = "bg-gray-700/90 text-white placeholder:text-white/50",
    bgSelected = "bg-blue-700 text-white",
    bgNoSelected = "bg-slate-800 text-white",
}: {
    dataArray: [{title: string, navigate: string}] | any
    classNameDiv?: string
    classNameUL?: string
    classNameLi?: string
    classNameInput?: string
    bgSelected?: string,
    bgNoSelected?: string
}) {
    const data_free = dataArray.map((x: any) => {return x.title});
    const [data, setData] = useState(data_free);
    const [lengthFiltered, setLengthFiltered] = useState(data_free.length);
    const setOpen = useSetAtom(openAutoComplete);
    const navigate = useRouter();


    function filtered(inputValue: string) {
        return data_free.filter((item: any) => {
            return item.toLowerCase().includes(inputValue.toLowerCase())
        });
    }


    const {
        isOpen,
        getMenuProps,
        getInputProps,
        getItemProps,
        highlightedIndex,
    } = useCombobox({
        items: data,
        onSelectedItemChange: ({selectedItem}) => {
            const xyz = dataArray.filter((x: any) => selectedItem == x.title)[0].navigate;
            navigate.push(xyz);
        },
        onInputValueChange: ({inputValue}) => {
            setData(filtered(inputValue));
            setLengthFiltered(filtered(inputValue).length);
        }
    });

    useEffect(() => {
        setOpen(isOpen)
    }, [isOpen, setOpen])

    return (
        <div className={`flex flex-col duration-300 relative ${classNameDiv}`} >
            <input {...getInputProps()} className={`w-full p-2 text-black border border-gray-300 rounded-md focus:outline-none placeholder:text-black/40 ${classNameInput}`} placeholder="Search Cheats ..." />
            <ul {...getMenuProps()}>
                <AnimatePresence>
                    {isOpen && (<motion.ul
                        {...getMenuProps()}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.5}}
                        className={`mt-1 rounded-md max-h-80 overflow-y-auto ${classNameUL}`}>
                        <span className='text-xs bg-black p-1'>found data: {lengthFiltered}</span>
                        {data.map((item: any, index: number) => (
                            <li
                                {...getItemProps({item, index})}
                                key={item}
                                className={`p-2 cursor-pointer ${classNameLi} ${highlightedIndex === index ? `${bgSelected} font-bold` : `${bgNoSelected} font-normal`}`}>
                                {item}
                            </li>
                        ))}
                    </motion.ul>)}
                </AnimatePresence>
            </ul>
        </div >
    );
}

