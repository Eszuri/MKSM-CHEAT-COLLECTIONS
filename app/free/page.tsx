import dataFree from "@/data/dataFree";
import Link from "next/link";
import {Play} from "next/font/google"
import Navbar from "@/components/navbar";
import MKSM_BACKGROUND from "@/components/mksm-background";

const PlayFont = Play({
    subsets: ['latin'],
    weight: ['400'],
});


const H1 = () => {
    return (
        <>
            {dataFree.map((z, index) => (
                <Link key={index} href={z.navigate} className="relative border-2 rounded-md w-1/4 max-md:w-1/2 max-[540px]:w-[95%] p-5 h-28 text-lg font-semibold bg-gradient-to-r from-indigo-500/40 to-indigo-900/40 hover:opacity-70 hover:bg-slate-950 hover:border-4 hover:border-emerald-200 hover:cursor-pointer overflow-hidden">
                    <h1 className={`text-base ${PlayFont.className} tracking-wider`}>{z.title}</h1>
                    <br />
                    <span className="text-sm opacity-65 absolute top-0 right-1">{z.dateAdd}</span>
                </Link>
            ))}
        </>
    )
};


export default function Home() {
    return (
        <div className="relative">
            <MKSM_BACKGROUND />
            <Navbar type="free" />
            <h1 className="mt-24 text-center text-2xl font-bold my-5">MKSM CHEAT COLLECTIONS</h1>
            <div className="absolute inset-x-0 mt-10 w-full p-2 flex justify-center gap-2 flex-wrap">
                <H1 />
            </div>
        </div>
    );
} 
