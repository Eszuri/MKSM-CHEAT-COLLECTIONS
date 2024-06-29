import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

type Prop = {
    children: ReactNode
}

export default function Home({ children }: Prop) {
    return (
        <>
            <Navbar />
            <div className="text-white relative h-[100vh] top-20">
                <div className="bg-mksm-cover fixed inset-3 bg-contain bg-no-repeat bg-center opacity-35" />
                <div className="absolute top-3 inset-x-3">
                    {children}
                </div>
            </div>
        </>
    )
}

