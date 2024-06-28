import dragon_logo from '@/Images/mksm-dragon-logo.png'
import { ChangeEvent, ReactNode, useEffect, useRef, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shadcn/ui/tabs";
import CopyIcon from '@/icon/CopyIcon';
import { toast, Toaster } from 'sonner';
import { Link } from 'react-router-dom';
import DataCheatPage_simple, { DataCheatPageProblem } from '@/ObjectData/DataCheatPage';
import WarningIcon from '@/icon/WarningIcon';
import AccordionCheatPage from './AccordionCheatPage';
import NoProfile from '@/icon/NoProfile';
import axios from 'axios';
import { ReloadIcon } from '@radix-ui/react-icons';
import { userGlobal } from '@/ObjectData/GlobalState';
import DirectionAwareTabs from './DirectionAwareTabs';
import YoutubeIcon from '@/icon/YoutubeIcon';


type CheatPage = {
    position: number,
    children: ReactNode
};

type list = {
    position: number
};

type code = {
    CheatCodeRaw: string,
    CheatCodePnach: string,
};

type typeyt = {
    position: number
};

type warning = {
    position: number
};

type Comment = {
    type: string,
    position: any
};

type DB = {
    name: string,
    email: string,
    picture: string,
    content: string,
    dateCreated: string,
}

const CheatPage = ({ position, children }: CheatPage) => {
    const { deskripsi, title } = DataCheatPage_simple(position);
    return (
        <>
            <div className="text-white w-full mt-20">
                <h1 className="text-center mt-5 font-medium text-2xl font-Amaranth tracking-wider">Cheat {title}</h1>
                <div className="w-[95%] mx-auto mt-10">
                    <p>hello, welcome everyone.</p>
                    {deskripsi.map((desc, index) => (
                        <p key={index}>{desc.text}</p>
                    ))}
                    {children}
                </div>
            </div >
        </>
    )
};


CheatPage.list = ({ position }: list) => {
    const { cheatList } = DataCheatPage_simple(position)
    return (
        <>
            <div className="mt-2 grid gap-5 w-80">
                {cheatList.map((cheat, index) => (
                    <div className="h-12 mt-2 flex gap-2 items-center" key={index}>
                        <img src={dragon_logo} className="w-6 max-w-6 min-w-6 h-6 mt-1" />
                        <div className='grid' >
                            <span className="text-emerald-400 text-lg font-Taylor" >{cheat.li_title}</span>
                            <p className='text-xs opacity-70 tracking-wider font-Taylor' >{cheat.li_Desc}</p>
                        </div >
                    </div>
                ))}
            </div >
        </>
    )
};


CheatPage.code = ({ CheatCodeRaw, CheatCodePnach }: code) => {
    const raw = useRef<HTMLPreElement>(null)
    const pnach = useRef<HTMLPreElement>(null)
    const Copy = (text: string | any) => {
        window.navigator.clipboard.writeText(text)
            .then(() => {
                toast.success('Code Success Copied', { style: { backgroundColor: "rgb(5 100 105)", color: 'white' } })
            })
    };

    return (
        <>
            <Toaster visibleToasts={2} duration={2000} />
            <div className='mt-20'>
                <h1 className='text-xl font-bold tracking-wider mb-3 font-Taylor'>Cheat Code:</h1>
                <Tabs defaultValue='raw' className="w-full">
                    <div className='flex h-10 items-center gap-3'>
                        <TabsList className='bg-slate-600 text-white w-80 max-[405px]:w-64 flex justify-between'>
                            <TabsTrigger value="raw" className='w-40 max-[405px]:w-32'>Raw Code</TabsTrigger>
                            <TabsTrigger value="pnach" className='w-40 max-[405px]:w-32'>Pnach Code</TabsTrigger>
                        </TabsList>
                    </div>
                    <TabsContent value="raw" className='border-2 p-1 border-white/30 bg-slate-600/30 rounded-lg relative'>
                        <div className='cursor-pointer w-12 h-9 bg-slate-600 flex justify-center items-center rounded hover:bg-slate-700 absolute left-[333px] top-[-48px] max-[405px]:left-[260px]' onClick={() => { Copy(raw.current?.textContent) }}>
                            <CopyIcon />
                        </div>
                        <pre className='overflow-auto text-nowrap font-JetBrain selection:bg-emerald-700' ref={raw}>{CheatCodeRaw}</pre>
                    </TabsContent>
                    <TabsContent value="pnach" className='border-2 p-1 border-white/30 bg-slate-600/30 rounded-lg relative'>
                        <div className='cursor-pointer w-12 h-9 bg-slate-600 flex justify-center items-center rounded hover:bg-slate-700 absolute left-[333px] top-[-48px] max-[405px]:left-[260px]' onClick={() => { Copy(pnach.current?.textContent) }}>
                            <CopyIcon />
                        </div>
                        <pre className='overflow-auto text-nowrap font-JetBrain selection:bg-emerald-700' ref={pnach}>{CheatCodePnach}</pre>
                    </TabsContent>
                </Tabs>
            </div>
        </>
    )
};


CheatPage.yt = ({ position }: typeyt) => {
    const { ytlink } = DataCheatPage_simple(position);
    return (
        <>
            <div className='mt-20'>
                <h1 className='text-xl font-bold tracking-wider mb-3 font-Taylor'>Youtube Link:</h1>
                {ytlink.map((link, index) => (
                    <div key={index} className='flex gap-2 justify-start h-8 items-center'>
                        <span>🧷</span>
                        <Link to={link.url} target='_blank' className='text-blue-500'>{link.url}</Link>
                    </div>
                ))}
            </div >
        </>
    )
};


CheatPage.warning = ({ position }: warning) => {
    const { warning } = DataCheatPage_simple(position)
    return (
        <>
            <div className='mt-20'>
                <h1 className='text-xl font-bold tracking-wider mb-3 font-Taylor text-yellow-400'>Warning:</h1>
                {warning.map((warning, index) => (
                    <div key={index} className='flex gap-3 items-center'>
                        <WarningIcon fillColor='red' />
                        <span className='my-1'>{warning.text}</span>
                    </div>
                ))}
            </div>
        </>
    )
};


CheatPage.problem = () => {
    return (
        <>
            <div className='mt-20'>
                <h1 className='text-xl font-bold tracking-wider mb-3 font-Taylor '>do you have a problem or questions ?</h1>
                <AccordionCheatPage title='apakah cheat tidak berjalan?'>
                    <DirectionAwareTabs tabs={DataCheatPageProblem.pageOne} className='bg-slate-900' />
                </AccordionCheatPage>
                <br />
                <AccordionCheatPage title='cheat ini berfungsi untuk emulator apa saja?'>
                    <DirectionAwareTabs tabs={DataCheatPageProblem.pageTwo} className='bg-slate-900' />
                </AccordionCheatPage>
                <br />
                <AccordionCheatPage title='bagaimana cara pasang cheatnya?'>
                    <DirectionAwareTabs tabs={DataCheatPageProblem.pageThree} className='bg-slate-900' />
                </AccordionCheatPage>
            </div >
        </>
    )
};


CheatPage.Comment = ({ type, position }: Comment) => {
    const { name, isLoggin, picture, email, setFetchAgain, fetchAgain } = userGlobal();
    let getName: any = localStorage.getItem('name');
    const chatHeight = useRef<HTMLDivElement>(null);
    const [loading, setloading] = useState(true);
    const [loadingIcon, setloadingIcon] = useState(true);
    const [failed, setfailed] = useState("Please Wait ...");
    const [disable, setdisable] = useState(true);
    const [value, setvalue] = useState('');
    const [db, setdb] = useState<DB[]>([]);

    function getComment() {
        axios.get(`${import.meta.env.VITE_BACKEND_API_URL}/api/read-comment`, { headers: { 'price_type': type, 'position_db': position } })
            .then((result) => {
                const decode = JSON.parse(atob(result.data.data));
                setdb(decode);
                setTimeout(() => {
                    if (chatHeight.current) {
                        chatHeight.current.scrollTop = chatHeight.current.scrollHeight;
                    }
                }, 300);
                if (decode.length == 0) {
                    setloading(true);
                    setfailed("Message Empty");
                } else {
                    setloading(false);
                }
                setdisable(false);
            }).catch(() => {
                setfailed("failed get data, please reload page")
            });
    };
    useEffect(() => {
        getComment();
    }, [fetchAgain])

    const createComment = (event: ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formDataNoLoggin = new FormData(event.target);
        formDataNoLoggin.append("type", type);
        formDataNoLoggin.append("position", position);

        const formDataWithLoggin = new FormData(event.target);
        formDataWithLoggin.append("type", type);
        formDataWithLoggin.append("position", position);
        formDataWithLoggin.append("name", name);
        formDataWithLoggin.append("email", email);
        formDataWithLoggin.append("picture", picture);


        setdisable(true);
        setloadingIcon(false);

        axios.post(import.meta.env.VITE_BACKEND_API_URL + "/api/create-comment", isLoggin ? formDataWithLoggin : formDataNoLoggin, { headers: { 'Content-Type': "application/json" } })
            .then(() => {
                setdisable(false);
                setvalue('');
                setloadingIcon(true);
                setFetchAgain(!fetchAgain);
                toast.success("created success", { style: { backgroundColor: "rgb(5 100 105)", color: 'white' } });
            })
            .catch(() => {
                setdisable(false);
                setloadingIcon(true);
                toast.error("No Internet", { style: { backgroundColor: "red", color: 'white' } });
            })
    };
    return (
        <div className='my-20'>
            <Toaster />
            <h1 className='text-xl font-bold tracking-wider mb-3 font-Taylor '>Komentar</h1>
            <section className='border-[1px] bg-slate-800/70 p-2 rounded-lg h-full'>
                <div className='h-96 overflow-auto scroll-smooth' ref={chatHeight}>


                    {loading ?
                        <div className='w-full h-full flex justify-center items-center'>
                            <h1 className='text-2xl text-center'>{failed}</h1>
                        </div>
                        :
                        <>
                            {
                                db.map((data, index) => (
                                    <div className='flex gap-4 my-5' key={index}>
                                        {data.picture ?
                                            <img src={data.picture} className='w-10 h-10 rounded-full' />
                                            :
                                            <NoProfile className='w-10 h-10' />
                                        }
                                        <div className='grid gap-3 items-start bg-emerald-700 rounded-lg p-3 pt-1 max-w-[85%] min-w-32 relative'>
                                            <span className='absolute left-[-5px] rotate-45 top-3 bg-emerald-700 w-4 h-4'></span>
                                            <span className='text-xl font-semibold'>{data.name}</span>
                                            <p className='opacity-85 text-sm'>{data.content}</p>
                                            <p className='text-end mr-[-5px] mb-[-10px] text-sm mt-3 italic'>{data.dateCreated}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </>

                    }
                </div>
                <hr className='my-1' />
                <form className='grid gap-2 mt-5' onSubmit={createComment}>
                    {isLoggin ?
                        <span className={'bg-emerald-700 p-2 rounded'}>{name}</span>
                        :
                        <input name='name' type="text" required={true} className='rounded p-2 text-white bg-slate-600 outline-none w-80 max-[355px]:w-72 placeholder:text-white/60' placeholder='input your name' defaultValue={getName} onChange={(e: ChangeEvent<HTMLInputElement>) => { localStorage.setItem('name', e.target.value) }} disabled={disable} />
                    }

                    <textarea name='comment' required={true} className='rounded disabled:cursor-not-allowed p-2 text-white bg-slate-600 outline-none w-full h-40 placeholder:text-white/60' placeholder='input your comment' value={value} disabled={disable} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => { setvalue(e.target.value) }} />
                    <button type='submit' className='disabled:cursor-not-allowed disabled:bg-blue-700/30 bg-blue-700 h-12 text-xl rounded hover:bg-blue-800 cursor-pointer flex justify-center items-center gap-2' disabled={disable}>
                        <span className='font-semibold'>Kirim</span>
                        <ReloadIcon className={`animate-spin ${loadingIcon ? 'invisible' : 'visible'}`} />
                    </button>
                </form>
            </section>
        </div>
    )
};


CheatPage.footer = () => {
    return (
        <div className='w-full flex justify-center mt-40 border-t p-3'>
            <Link to={'https://youtube.com/@lieval'} target='_blank' className='inline'>
                <YoutubeIcon className='scale-[2]' />
            </Link>
        </div>
    )
};


export default CheatPage;