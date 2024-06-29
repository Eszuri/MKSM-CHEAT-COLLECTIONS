import { Command } from 'cmdk';
import { useNavigate } from "react-router-dom"
import DataListSideBar from "@/ObjectData/DataListFree";
import NoProfile from "@/Images/noUser.png";
import { Avatar, AvatarImage } from "@/shadcn/ui/avatar";
import { Menubar, MenubarContent, MenubarMenu, MenubarTrigger } from "@/shadcn/ui/menubar";
import { GoogleCredentialResponse, GoogleLogin } from "@react-oauth/google";
import axios, { AxiosResponse } from "axios";
import { toast, Toaster } from "sonner";
import { useEffect, useState } from "react";
import { ExitIcon } from "@radix-ui/react-icons";
import { userGlobal } from "@/ObjectData/GlobalState";
import SearchIcon from "@/icon/SearchIcon";
import { motion, AnimatePresence } from 'framer-motion';
import { DataListPremium } from '@/ObjectData/DataListPremium';


export default function Navbar() {
    const { setName, setEmail, setPicture, setLoggin, setFetchAgain, fetchAgain } = userGlobal();
    const navigate = useNavigate();
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [hideGoogleLogin, sethideGoogleLogin] = useState(false);
    const [profileGoogle, setprofileGoogle] = useState({
        name: '',
        email: '',
        pp: '',
        Login: false
    });


    const handleScroll = () => {
        if (window.scrollY > lastScrollY) {
            // Scroll ke bawah
            setShowNavbar(false);
        } else {
            // Scroll ke atas
            setShowNavbar(true);
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);



    const Auth = (token: GoogleCredentialResponse) => {
        const credentialTOKEN = token.credential;
        const clientIDTOKEN = token.clientId;
        axios.get(`${import.meta.env.VITE_BACKEND_API_URL}/api/login`, { headers: { "Content-Type": "application/json", "ClientID": btoa(String(clientIDTOKEN)), "Credential": btoa(String(credentialTOKEN)) }, withCredentials: true })
            .then(() => {
                // window.location.reload();
                alert("login success")
            }).catch(() => {
                toast.error("No Internet", { style: { backgroundColor: "red", color: 'white' } });
            });
    };

    const Logout = () => {
        axios.get(`${import.meta.env.VITE_BACKEND_API_URL}/api/logout`, { withCredentials: true })
            .then(() => {
                window.location.reload();
            })
            .catch(() => {
                toast.error("No Internet", { style: { backgroundColor: "red", color: 'white' } });
            });
    };

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_API_URL}/api/user`, { withCredentials: true })
            .then((result: AxiosResponse) => {
                const data = {
                    name: result.data.name,
                    email: result.data.email,
                    pp: result.data.picture,
                    Login: result.data.isLoggin,
                };
                setprofileGoogle({ name: data.name, email: data.email, pp: data.pp, Login: data.Login });
                setName(data.name);
                setEmail(data.email);
                setPicture(data.pp);
                setLoggin(data.Login);
                sethideGoogleLogin(true);

            }).catch(() => {
                sethideGoogleLogin(false);
                toast.error("No Internet", { style: { backgroundColor: "red", color: 'white' } });
            });
    }, [])


    const [cmdkOpen, setcmdkOpen] = useState(false)
    return (
        <>
            <Toaster visibleToasts={2} />

            <AnimatePresence>
                {cmdkOpen && (
                    <Command.Dialog open={cmdkOpen} className="bg-transparent">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 z-20 bg-black/60 backdrop-blur-sm"
                            onClick={() => setcmdkOpen(false)}
                        ></motion.div>
                        <motion.div
                            initial={{ opacity: 0, translateY: -20 }}
                            animate={{ opacity: 1, translateY: 0 }}
                            exit={{ opacity: 0, translateY: -20 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-x-60 max-lg:inset-x-40 max-md:inset-x-20 max-sm:inset-x-3 top-20 z-30 bg-[#1d1f20] shadow-xl rounded-lg overflow-hidden"
                        >
                            <Command.Input className="w-full p-4 outline-none bg-[#1d1f20] placeholder:text-white placeholder:opacity-60 placeholder:font-semibold text-lg border-b border-gray-200 text-white font-bold before:content-['woi'] before:absolute before:top-0 before:text-white" placeholder='🔍  Search Cheats ...' />
                            <Command.List className="max-h-72 overflow-y-auto">
                                <Command.Empty className="p-4 text-center text-gray-300 text-lg">No results found.</Command.Empty>
                                <Command.Group className="p-4 text-white/50">
                                    <span>Free</span>
                                    {DataListSideBar.map((list, index) => (
                                        <Command.Item key={index} className="font-Amaranth text-lg p-2 h-12 border-2 m-2 my-10 rounded border-white/20 text-white cursor-pointer data-[selected=true]:bg-emerald-700 data-[selected=true]:rounded relative" onSelect={() => { navigate(list.navigate); setcmdkOpen(false); setFetchAgain(!fetchAgain) }}>{list.title} <span className='absolute left-0 -top-5 text-sm font-semibold opacity-45'>{list.dateAdd}</span></Command.Item>
                                    ))}
                                    <span className='block -mb-3 text-yellow-500'>Premium</span>
                                    {DataListPremium.map((list, index) => (
                                        <Command.Item key={index} className="font-Amaranth text-lg p-2 h-12 border-2 m-2 my-10 rounded border-white/20 text-white cursor-pointer data-[selected=true]:bg-emerald-700 data-[selected=true]:rounded relative" onSelect={() => { alert("upcoming") }}>{list.title} <span className='absolute left-0 -top-5 text-sm font-semibold opacity-45'>{list.dateAdd}</span></Command.Item>
                                    ))}
                                </Command.Group>
                            </Command.List>
                        </motion.div>
                    </Command.Dialog>
                )}
            </AnimatePresence >




            < section className={`w-full h-16 bg-gray-700 flex justify-between px-10 max-sm:px-3 items-center fixed top-0 text-white duration-200 z-10  ${showNavbar ? 'translate-y-0 opacity-1000' : 'translate-y-[-65px] opacity-0'}`}>

                < div className="flex justify-between w-56 items-center border-emerald-500 border-2 rounded-lg p-2" onClick={() => { setcmdkOpen(true) }}>
                    <SearchIcon className="w-10 h-5" />
                    <span className=" w-40 select-none cursor-pointer bg-transparent outline-none border-none text-slate-300">Search Cheats</span>
                </div >

                <div className="flex gap-5 w-20 max-md:gap-3 max-md:w-16">
                    <Menubar>
                        <MenubarMenu>
                            <MenubarTrigger>
                                <Avatar>
                                    {profileGoogle.Login ?
                                        <AvatarImage src={profileGoogle.pp} alt="No User Logged" className="cursor-pointer" />
                                        :
                                        <AvatarImage src={NoProfile} alt="No User Logged" className="cursor-pointer" />
                                    }
                                </Avatar>
                            </MenubarTrigger>
                            <MenubarContent>
                                <div className="bg-slate-600 w-80 p-2 rounded-lg h-full">
                                    <Avatar className="w-full max-w-52 h-full text-center grid justify-center mx-auto">
                                        {profileGoogle.Login ?
                                            <AvatarImage src={profileGoogle.pp} alt="No User Logged" className="cursor-pointer w-24 h-24 rounded-full" />
                                            :
                                            <AvatarImage src={NoProfile} alt="No User Logged" className="cursor-pointer w-24 h-24 rounded-full" />
                                        }
                                    </Avatar>
                                    <span className="text-lg font-semibold text-center inline-block w-full overflow-auto">{profileGoogle.name}</span>
                                    <span className="text-sm font-normal text-white/85 text-center inline-block w-full overflow-auto">{profileGoogle.email}</span>
                                    <div className={`w-full flex justify-center`}>
                                        {profileGoogle.Login ?
                                            <button className="w-full flex justify-start items-center gap-2 bg-red-700 rounded p-1 py-2 hover:bg-red-800" onClick={Logout}>
                                                <ExitIcon className="scale-[1.3] ml-2" />
                                                <span className="w-full text-center mr-5">Logout</span>
                                            </button>
                                            :
                                            <div
                                                style={{ display: hideGoogleLogin ? "block" : "none" }}
                                            ><GoogleLogin onSuccess={Auth} /></div>
                                        }
                                    </div>
                                </div>
                            </MenubarContent>
                        </MenubarMenu>
                    </Menubar>

                </div>
            </section >
        </>
    )

}
