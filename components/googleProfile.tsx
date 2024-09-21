"use client"

import Image from "next/image";
import NoUser from '@/public/noUser.png'
import {useEffect, useRef, useState} from "react";
import {useOnClickOutside} from "usehooks-ts";
import {signIn, signOut, useSession} from "next-auth/react";
import LogoutIcon from "@/icon/LogoutIcon";
import {useRouter} from "next/navigation";
import GoogleIcon from "@/icon/GoogleIcon";

export default function GoogleProfile() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [menuVisible, setMenuVisible] = useState(false);
    const [getDataProfile, setGetDataProfile] = useState(false);
    const {data, status} = useSession();
    const navigate = useRouter();
    useEffect(() => {
        if (status && data) {
            setGetDataProfile(true)
        } else {setGetDataProfile(true)}
    }, [setGetDataProfile, data, status]);


    const NotLogin = () => {
        return (
            <div className="flex bg-white text-black p-2 gap-5 rounded w-full justify-center cursor-pointer hover:opacity-65 duration-200"
                onClick={() => {signIn("google")}}>
                <span className="font-semibold">Login with Goggle</span>
                <GoogleIcon />
            </div>

        )
    }


    const IsLogin = () => {
        return (
            <div className="flex gap-2 justify-center w-full">
                <div className="flex bg-green-600 p-2 gap-2 rounded w-44 cursor-pointer hover:bg-green-700 duration-200"
                    onClick={() => {navigate.push('/profile')}}
                >
                    <LogoutIcon />
                    <span>Manage Profile</span>
                </div>
                <div className="flex bg-red-600 p-2 gap-2 rounded w-44 justify-center cursor-pointer hover:bg-red-700 duration-200"
                    onClick={() => {signOut()}}
                >
                    <LogoutIcon />
                    <span>Logout</span>
                </div>
            </div>
        )
    }


    const Menu = () => {
        return (
            <div className="bg-slate-600 p-4 rounded-lg absolute top-full mt-2 right-0 w-96 h-60 shadow-lg z-10">
                <div className="flex flex-col justify-center items-center">
                    <Image
                        alt="no user"
                        src={status == "authenticated" ? String(data?.user?.image) : NoUser}
                        height={128}
                        width={128}
                        priority={true}
                        className="w-28 mb-3 h-28 cursor-pointer rounded-full" />
                    <span className="text-lg">{data?.user?.name || 'unknown'}</span>
                    <span className="text-xs -mt-1 italic mb-3 opacity-75">{data?.user?.email || "unknown@xxx.com"}</span>
                    {status == "authenticated" ? <IsLogin /> : <NotLogin />}
                </div>
            </div>
        )
    }

    useOnClickOutside(containerRef, () => setMenuVisible(false));

    return (
        <>
            {!getDataProfile &&
                <div className="shrink-0 animate-pulse">
                    <span className="size-12 block bg-gray-200 rounded-full dark:bg-black/50"></span>
                </div>}


            {getDataProfile &&
                <div ref={containerRef} className="relative inline-block">
                    <Image
                        alt="user pp"
                        src={status == "authenticated" ? String(data?.user?.image) : NoUser}
                        height={128}
                        width={128}
                        priority={true}
                        className={`w-12 min-h-12 h-12 cursor-pointer rounded-full`}
                        onClick={() => setMenuVisible(prev => !prev)}
                    />
                    {menuVisible && <Menu />}
                </div>
            }
        </>
    )
}
