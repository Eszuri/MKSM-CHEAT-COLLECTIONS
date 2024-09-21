"use client"

import {useEffect, useRef, useState} from "react";
import AutoCompleteInput from "./autoCompleteInput";
import GoogleProfile from "./googleProfile";
import ExpandNav from "@/components/expandNav";
import ExpandTabIcon from "@/icon/expandTabIcon";
import {useOnClickOutside} from "usehooks-ts";
import {useAtomValue} from "jotai";
import {openAutoComplete} from "@/state/jotai";
import dataFree from "@/data/dataFree";
import dataPremium from "@/data/dataPremium";

const Navbar = ({type}: {type: 'free' | 'premium'}) => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [openNav, setOpenNav] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);
    const opened = useAtomValue(openAutoComplete)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                // Scrolling down
                setShowNavbar(false);
            } else {
                // Scrolling up
                setShowNavbar(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    useOnClickOutside(containerRef, (event) => {
        if (buttonRef.current && buttonRef.current.contains(event.target as Node)) {
            return;
        } else {
            setOpenNav(false);
        }
    });

    useEffect(() => {
        if (openNav == true) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [openNav])


    return (
        <>
            <section className={`w-full h-16 bg-gray-700 flex gap-3 justify-between px-5 max-sm:px-3 items-center fixed top-0 text-white duration-300 z-10 ${showNavbar ? "translate-y-0 opacity-1000" : "translate-y-[-650px] opacity-0"}`}>
                <div ref={buttonRef}> {/* Button ref here */}
                    <ExpandTabIcon
                        width={35}
                        height={35}
                        onClick={() => {setOpenNav(prev => !prev)}}
                    />
                </div>
                <AutoCompleteInput
                    classNameDiv={`${opened ? "w-full" : "w-1/3"}`}
                    classNameUL="absolute top-12 inset-x-0"
                    bgSelected="bg-emerald-600"
                    bgNoSelected="bg-slate-800"
                    dataArray={type == 'free' ? dataFree : dataPremium}
                />
                <div className="min-w-12 min-h-12 max-h-12 max-w-12">
                    <GoogleProfile />
                </div>
            </section >
            <ExpandNav
                open={openNav}
                ref={containerRef}
            />
        </>
    );
};

export default Navbar;

