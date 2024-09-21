"use client"
import dataPremium from "@/data/dataPremium";
import Image from "next/image";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import CopyIcon from "@/icon/CopyIcon";
import Link from "next/link";
import WarningIcon from "@/icon/WarningIcon";
import {useEffect, useRef, useState} from "react";
import ChevronIcon from "@/icon/ChevronIcon";
import {AnimatePresence, motion} from "framer-motion";
import mksmCheatActive from "@/public/mksm-cheat-active.jpg";
import mksmCRCGame from "@/public/mksm-crc-game.png";
import mksmCheatFolder from "@/public/mksm-folder-cheat.png";
import mksmCheatLocal from "@/public/mksm-cheat-activate-lokal.png"
import mksmCheatGlobal from "@/public/mksm-cheat-gobal.png"
import mksmExplorerCheatFolder from "@/public/mksm-explorer-folder-cheat.png"
import mksmNotepadEdit from "@/public/mksm-notepad-edit-cheat.png"
import YoutubeIcon from "@/icon/YoutubeIcon";
import DiscordIcon from "@/icon/DiscordIcon";
import {Inter, Sriracha, JetBrains_Mono, Tauri} from "next/font/google"
import CheatCodePremium from "@/data/pnachPremium";
import {toast, Toaster} from "sonner";
import accessPremiumCheck from "@/promises/accessPremiumCheck";


const InterFont = Inter({subsets: ["latin"]});

const SrirachaFont = Sriracha({
    subsets: ['latin'],
    weight: ["400"],
});

const TauriFont = Tauri({
    subsets: ['latin'],
    weight: ["400"],
});

const JetBrainFont = JetBrains_Mono({
    subsets: ['latin'],
    weight: ["400"],
});


interface CheatPageFreeType {
    position: number | string | any
    cloudinaryVideo: any
}


const CheatPagePremium = ({position, cloudinaryVideo}: CheatPageFreeType) => {
    const {deskripsi, title, warning, dateAdd, } = dataPremium[position];
    const [localData, setLocalData] = useState<string | null>('');
    const [open, setOpen] = useState(false);
    const inputToken = useRef<HTMLInputElement | any>(null)



    const CopyText = (text: string | any) => {
        window.navigator.clipboard.writeText(text)
            .then(() => {
                toast.success("Kode Telah DiSalin", {className: "bg-emerald-700 text-white", position: "bottom-center"});
            }).catch(() => {
                toast.error("Browser Tidak Support. Gunakanlah Google Chrome", {className: "bg-red-700 text-white", position: "bottom-center"});
            })
    };



    useEffect(() => {
        const data = localStorage.getItem("token");
        if (data) {
            setLocalData(data);
        }
    }, []);



    // title and description
    function First() {
        return (
            <div className="text-white w-full mt-20">
                <h1 className={`${SrirachaFont.className} font-normal text-right -mt-3 text-sm font-Amaranth tracking-wider opacity-70`}>{dateAdd}</h1>
                <h1 className={`${SrirachaFont.className} font-normal text-center mt-5 text-3xl font-Amaranth tracking-wider`}>Cheat {title}</h1>
                <div className={`w-full mt-20`}>
                    <p>hello, welcome everyone.</p>
                    {deskripsi}
                </div>
            </div >
        )
    };



    function Two() {
        return (
            <div className="mt-20 w-full">
                <h1 className={`text-2xl uppercase mb-3 ${TauriFont.className}`}>Video:</h1>
                <video className="w-full" width={1024} height={768} controls={true} preload="none">
                    <source src={cloudinaryVideo} type="video/mp4" />
                </video>
            </div>

        )
    }



    // cheat code raw/pnach
    function Three() {
        return (
            <Tabs className={"mt-20"}>
                <h1 className={`text-2xl uppercase mb-3 ${TauriFont.className}`}>Cheat Code:</h1>
                <TabList className={"w-60 p-1 flex gap-3 border-2 justify-around items-center rounded border-white/50 mb-2"}>
                    <Tab selectedClassName="bg-emerald-700 rounded" className={"p-1 flex justify-center w-1/2 cursor-pointer outline-none"}>Raw Code</Tab>
                    <Tab selectedClassName="bg-emerald-700 rounded" className={"p-1 flex justify-center w-1/2 cursor-pointer outline-none"}>Pnach Code</Tab>
                </TabList>

                <TabPanel selectedClassName="relative w-full border-2 border-white/40 rounded bg-slate-600/30 p-2">
                    <div className='cursor-pointer w-56 h-9 bg-slate-600 flex justify-center gap-3 items-center rounded hover:bg-slate-700 mb-2'
                        onClick={() => {CopyText(CheatCodePremium[position].raw)}}>
                        <CopyIcon />
                        <span>Copy Text</span>
                    </div>
                    <pre className={`overflow-auto text-nowrap ${JetBrainFont.className} selection:bg-emerald-700`}>{CheatCodePremium[position].raw}</pre>
                </TabPanel>
                <TabPanel selectedClassName="relative w-full border-2 border-white/40 rounded bg-slate-600/30 p-2">
                    <div className='cursor-pointer w-56 h-9 bg-slate-600 flex justify-center gap-3 items-center rounded hover:bg-slate-700 mb-2'
                        onClick={() => {CopyText(CheatCodePremium[position].pnach)}}>
                        <CopyIcon />
                        <span>Copy Text</span>
                    </div>
                    <pre className={`overflow-auto text-nowrap selection:bg-emerald-700 ${JetBrainFont.className}`}>{CheatCodePremium[position].pnach}</pre>
                </TabPanel>
            </Tabs >
        )
    };



    // warning
    function Six() {
        return (

            <div className='mt-20'>
                <h1 className={`text-2xl font-bold uppercase mb-3 ${TauriFont.className} text-yellow-400`}>Warning:</h1>
                {warning.map((warning, index) => (
                    <div key={index} className='flex gap-3 items-center'>
                        <WarningIcon fillColor='red' />
                        <span className='my-1'>{warning.text}</span>
                    </div>
                ))}
            </div>
        )
    }



    // problem
    function Seven({title, contentText, contentImage}: {title: string, contentText: any, contentImage: any}) {
        const [open, setOpen] = useState(false);

        const variants = {
            initial: {
                y: 300,
                opacity: 0,
            },
            active: {
                y: 0,
                opacity: 1,
                transition: {duration: 0.3}
            },
            exit: {
                y: 300,
                opacity: 0,
                transition: {duration: 0.3}
            },
        };

        return (
            <div className="my-2">
                <div className={`flex justify-between items-center border-b-2 border-white/40 rounded bg-slate-700 p-2 cursor-pointer duration-300 ${open ? 'w-full' : 'w-1/3'}`} onClick={() => setOpen(!open)}>
                    <span className={`${SrirachaFont.className} text-xl`}>{title}</span>
                    <ChevronIcon fillColor="white" className={`${open ? "rotate-180" : "rotate-0"} duration-300`} width={36} height={36} />
                </div>
                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial="initial"
                            animate="active"
                            exit="exit"
                            variants={variants}
                            className="overflow-hidden">
                            <Tabs className={'bg-slate-800'}>
                                <TabList className={"w-full p-3 flex gap-3 justify-center items-center rounded mb-2 mt-3"}>
                                    <Tab selectedClassName="bg-emerald-700 rounded" className={"p-1 flex border-2 border-white/40 justify-center w-40 cursor-pointer outline-none"}>Text Only</Tab>
                                    <Tab selectedClassName="bg-emerald-700 rounded" className={"p-1 flex border-2 border-white/40 justify-center w-40 cursor-pointer outline-none"}>Image Only</Tab>
                                </TabList>
                                <TabPanel selectedClassName="relative w-full rounded p-2">{contentText}</TabPanel>
                                <TabPanel selectedClassName="relative w-full rounded p-2">{contentImage}</TabPanel>
                            </Tabs>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div >
        );
    }



    function Eight() {
        return (
            <div className='w-full flex justify-center gap-10 mt-40 border-t p-3' title='@LievaL'>
                <Link href={'https://youtube.com/@lieval'} target='_blank' className='inline'>
                    <YoutubeIcon className='scale-[1.3] hover:opacity-65' />
                </Link>

                <Link href={'https://discord.gg/us22h2CDXf'} target='_blank' className='inline' title='MKSM Modding By LievaL'>
                    <DiscordIcon fillColor='white' className='scale-[1.3] hover:opacity-65' />
                </Link>
            </div >
        )
    }


    return (
        <>
            <Toaster visibleToasts={3} duration={2000} className="duration-500" />
            {open ? (<div className={`mx-10 ${InterFont.className}`}>
                <First />
                <Two />
                <Three />
                <Six />

                <h1 className={`${TauriFont.className} mt-20 text-2xl uppercase font-bold mb-3`}>Do you have a problem or questions?</h1>
                <Seven title="apakah cheat tidak berjalan?"
                    contentText={
                        <ul className='list-disc list-inside'>
                            <li>periksa bahwa cheat benar benar aktif</li>
                            <li>periksa bahwa file pnach sama dengan CRC game</li>
                        </ul>}

                    contentImage={
                        <ul className='list-disc list-inside flex flex-col gap-4'>
                            <Image src={mksmCheatActive} alt="cheat activated" width={1080} height={768} className="w-full" priority={false} />
                            <Image src={mksmCheatLocal} alt="cheat activate local" width={1080} height={768} className="w-full" priority={false} />
                            <Image src={mksmCheatGlobal} alt="cheat activate global" width={1080} height={768} className="w-full" priority={false} />
                            <Image src={mksmCRCGame} alt="CRC GAME" width={1080} height={768} className="w-full" priority={false} />
                        </ul>}
                />

                <Seven title="cheat ini berfungsi untuk emulator apa saja?"
                    contentText={
                        <ul className='list-disc list-inside'>
                            <li>pengguna PC : <span className='text-emerald-400 font-semibold italic'>PCSX2</span></li>
                            <li>pengguna HP : <span className='text-emerald-400 font-semibold italic'>AetherSX2</span></li>
                            <br />
                            <span>support all version {'(versi berapa pun bisa)'}</span>
                        </ul>}

                    contentImage={<p className="text-center m-3 text-xl font-bold my-10">tidak ada gambar yg tersedia</p>} />

                <Seven title="bagaimana cara pasang cheatnya?"
                    contentText={
                        <ul className='list-decimal list-inside'>
                        <span className="font-semibold">Untuk pengguna PC di PCSX2 <span className='text-sm text-emerald-400'>{'(nightly version/v1.7)'}</span> :</span>
                        <li className='mt-2'>buka file explorer lalu cari folder cheatnya</li>
                        <li>jika tidak tahu lokai folder cheat nya, kalian ikuti ini:</li>
                        <div className="ml-3 grid opacity-80">
                            <span>- buka pcsx2 v1.7</span>
                            <span>{"- pilih 'pengaturan' sebelah kiri atas"}</span>
                            <span>{"- akan muncul pilihan, kalian pilih 'Folder'"}</span>
                            <span>{"- nanti akan muncul popup, kalian cari saja 'Directory Cheat'"}</span>
                            <span>{"- pilih 'buka...' atau bisa mencari folder secara manual"}</span>
                        </div>
                        <li>{"pada folder tersebut, buat file '455DD546.pnach'"}</li>
                        <li>{"jika file '455DD546.pnach' sudah ada sebelumnya, kalian tinggal buka saja"}</li>
                        <li>{"buka file '455DD546.pnach' dengan text editor apapun, bebas, terserah"}</li>
                        <li>{"salin kode diatas atau kode pnach yg sudah anda siapkan ntah dapet darimana"}</li>
                        <li>{"paste atau tempel kode cheatnya"}</li>
                        <li>{"save, lalu aktifkan cheat"}</li>
                        <li>{"jika tidak tau cara aktifkan cheatnya, kalian ikuti ini:"}</li>
                        <div className="ml-3 grid opacity-80">
                            <span>{"- buka pcsx2 v1.7"}</span>
                            <span>{"- pilih 'pengaturan' sebelah kiri atas"}</span>
                            <span>{"- akan muncul pilihan, kalian pilih 'Emulasi'"}</span>
                            <span>{"- nanti akan muncul popup, kalian cari saja 'Aktifkan Cheat'"}</span>
                            <span>{"- lalu centang dalam checkbox tersebut"}</span>
                            <span>{"- cheat sudah aktif, game bisa langsung diluncurkan"}</span>
                        </div>
                        <br /><br /><br /><br />
                        <span className="font-semibold">Untuk pengguna PC di PCSX2 <span className='text-sm text-emerald-400'>{'(stable version/v1.6)'}</span> :</span>
                        <ul className='list-decimal list-inside'>
                            <p className="mt-2">carannya sama seperti diatas</p>
                            <li>buka file explorer lalu cari folder cheatnya</li>
                            <li>jika tidak tahu lokai folder cheat nya, kalian ikuti ini:</li>
                            <div className="ml-3 grid opacity-80">
                                <span>{"- buka pcsx2 v1.6"}</span>
                                <span>{"- pilih 'Konfigurasi' sebelah atas"}</span>
                                <span>{"- akan muncul pilihan, kalian pilih 'Pemilih Plugin/BIOS'"}</span>
                                <span>{"- nanti akan muncul popup, kalian cari saja 'Folder' sebelah kiri"}</span>
                                <span>{"- lalu cari 'Cheats' ada dibagian paling atas"}</span>
                                <span>{"- pilih 'Buka dalam Explorer' atau bisa mencari folder secara manual"}</span>
                            </div>
                            <li>{"pada folder tersebut, buat file '455DD546.pnach'"}</li>
                            <li>{"jika file '455DD546.pnach' sudah ada sebelumnya, kalian tinggal buka saja"}</li>
                            <li>{"buka file '455DD546.pnach' dengan text editor apapun, bebas, terserah"}</li>
                            <li>{"salin kode diatas atau kode pnach yg sudah anda siapkan ntah dapet darimana"}</li>
                            <li>{"paste atau tempel kode cheatnya"}</li>
                            <li>{"save, lalu aktifkan cheat"}</li>
                            <li>{"jika tidak tau cara aktifkan cheatnya, kalian ikuti ini:"}</li>
                            <div className="ml-3 grid opacity-80">
                                <span>{"- buka pcsx2 v1.6"}</span>
                                <span>{"- pilih 'Sistem' sebelah kiri atas"}</span>
                                <span>{"- akan muncul pilihan, kalian cari 'Aktifkan Cheats'"}</span>
                                <span>{"- lalu centang sampai muncul logo checklist/centang"}</span>
                                <span>{"- cheat sudah aktif, game bisa langsung diluncurkan"}</span>
                            </div>
                        </ul>
                        <br /><br /><br /><br />
                        <span className="font-semibold">Untuk pengguna HP di AetherSX2 <span className='text-sm text-emerald-400'>{'(all version)'}</span> :</span>
                        <ul className='list-decimal list-inside mt-2'>
                            <p className='mt-2'>sebelum memulai, kalian siapkan kode pnach terlebih dahulu</p>
                            <li>{"buka aplikasi AetherSX2"}</li>
                            <li>{"pilih game 'Mortal Kombat Shaolin Monk' dan masuk ke game nya"}</li>
                            <li>{"tunggu beberapa saat sampai booting bios selesai"}</li>
                            <li>{"setelah booting bios selesai, masuk ke pengaturan"}</li>
                            <li>{"tombol pengaturan biasanya ada di pojok kanan atas"}</li>
                            <li>{"alternatif lain, tekan tombol kembali dari hp bawaan"}</li>
                            <li>{"setelah masuk ke pengaturan, kalian scroll ke bawah"}</li>
                            <li>{"cari dan klik 'Kode Patch'"}</li>
                            <li>{"akan muncul 5 pilihan, kalian pilih 'Ubah Patch'"}</li>
                            <li>{"lalu paste atau tempelkan kode pnach yg sudah anda siapkan"}</li>
                            <li>{"tekan tombol simpan di pojok kanan atas"}</li>
                            <li>{"setelah tersimpan nanti otomatis akan keluar dari pengaturan"}</li>
                            <li>{"kalian masuk lagi ke pengaturan dan pilih 'Kode Patch'"}</li>
                            <li>{"lalu pilih 'Aktifkan Patch' dan otomatis akan keluar dari pengaturan"}</li>
                            <li>{"kalian perhatikan notifikasi di kiri atas"}</li>
                            <li>{"jika muncul '10 cheat patches are active' berarti cheat sudah aktif"}</li>
                            <li>{"angka 10 itu hanya perumpamaan atau contoh"}</li>
                            <li>{"agar cheat benar benar sudah dimuat semuanya, kalian keluar game dan masuk ke game lagi"}</li>
                        </ul>
                    </ul >
                    }

                    contentImage={
                        <ul className='list-disc list-inside flex flex-col gap-4'>
                            <Image src={mksmCheatFolder} alt="folder cheat" width={1080} height={768} className="w-full" priority={false} />
                            <Image src={mksmExplorerCheatFolder} alt="cheat folder" width={1080} height={768} className="w-full" priority={false} />
                            <Image src={mksmNotepadEdit} alt="edit pnach" width={1080} height={768} className="w-full" priority={false} />
                            <Image src={mksmCheatGlobal} alt="cheat activate global" width={1080} height={768} className="w-full" priority={false} />
                        </ul>}
                />
                <Eight />

            </div>) : (
                <div className="fixed w-80 h-40 flex flex-col gap-2 p-2 left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%] bg-blue-800/80 rounded">
                    <h1 className="text-center">Please Input Token</h1>
                    <input type="number" placeholder="input token here ... " className="[-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none   mt-5 bg-blue-900/80 border-2 border-white/60 focus:border-white p-2 rounded-md outline-none" maxLength={10} ref={inputToken} defaultValue={localData as string} />
                    <button className="bg-emerald-600 rounded p-2 hover:bg-emerald-700"
                        onClick={() => {
                            accessPremiumCheck(inputToken.current?.value).then((data) => {
                                if (data.tokenIncorrect) {
                                    toast.error(`Input Token Salah`, {className: "bg-red-700 text-white", position: "bottom-center"})
                                } else if (data.oke) {
                                    toast.success("Input Token Berhasil", {className: "bg-emerald-700 text-white", position: "bottom-center"});
                                    setOpen(true);
                                    localStorage.setItem('token', inputToken.current?.value);
                                } else if (data.noDB) {
                                    toast.error("Akun Tidak DiTemukan", {className: "bg-red-700 text-white", position: "bottom-center"});
                                } else if (data.noLoggin) {
                                    toast.error("Silahkan Login Terlebih dahulu", {className: "bg-red-700 text-white", position: "bottom-center"});
                                }
                            })
                        }}
                    >Send</button>
                </div >
            )}
        </>
    )
};

export default CheatPagePremium;
