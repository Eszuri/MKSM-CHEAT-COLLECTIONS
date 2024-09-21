import MKSM_BACKGROUND from "@/components/mksm-background";
import Link from "next/link";

const H1 = ({title, desc, to}: {title: string, desc: string, to: string}) => {
    return (
        <Link href={to} className="border-2 rounded-md w-1/3 max-md:w-1/2 max-[540px]:w-[95%] p-3 h-28 text-lg font-semibold hover:opacity-70 hover:bg-slate-950 hover:cursor-pointer">{title}<br /><span className="text-sm opacity-65">{desc}</span></Link>
    )
};


export default async function Home() {
    return (
        <div className="relative">
            <MKSM_BACKGROUND />
            <div className="relative">
                <h1 className="text-center text-2xl font-bold my-5 mt-24">MKSM CHEAT COLLECTIONS</h1>
                <div className="absolute inset-x-0 mt-10 w-full p-2 flex max-[540px]:flex-col justify-center items-center gap-3">

                    <H1
                        desc="cheat yg saya buat sendiri dan saya upload ke youtube"
                        title="Free"
                        to="/free"
                    />

                    <H1
                        desc="cheat sangat berguna yg saya buat sendiri dan saya rahasiakan"
                        title="Premium"
                        to="/premium"
                    />
                </div>
            </div>

        </div>
    );
} 
