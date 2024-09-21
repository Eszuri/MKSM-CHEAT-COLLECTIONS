import MKSM_BACKGROUND from "@/components/mksm-background";
import Navbar from "@/components/navbar";
import dataPremium from "@/data/dataPremium";
import Link from "next/link";

const H1 = () => {
    return (
        <>
            {dataPremium.map((z, index) => (
                <Link key={index} href={z.navigate} className="bg-gradient-animated rounded-md w-1/3 max-md:w-1/2 max-[540px]:w-[95%] p-1 h-28 text-lg font-semibold hover:opacity-70 hover:bg-slate-950 hover:cursor-pointer overflow-hidden">
                    <div className="bg-black relative p-5 h-full rounded hover:bg-emerald-900/80">
                        <h1 className="text-base">{z.title}</h1>
                        <br />
                        <span className="text-xs opacity-65 absolute top-1 right-1">{z.dateAdd}</span>
                    </div>
                </Link>
            ))}
        </>
    )
};


export default function Home() {
    return (
        <div className="relative">
            <MKSM_BACKGROUND />
            <Navbar type="premium" />
            <h1 className="mt-24 text-center text-2xl font-bold my-5">MKSM CHEAT COLLECTIONS</h1>
            <div className="absolute inset-x-0 mt-10 w-full p-2 flex justify-center gap-2 flex-wrap">
                <H1 />
            </div>
        </div>
    );
} 
