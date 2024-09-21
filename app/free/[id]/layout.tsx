import type {Metadata} from "next";
import dataFree from "@/data/dataFree";
import {redirect} from "next/navigation";


interface LayoutProps {
    params: {
        id: string;
    };
    children: React.ReactNode;
}

export async function generateMetadata({params}: LayoutProps): Promise<Metadata> {
    const {id} = params;
    if (dataFree.some((x) => x.navigate.slice(6) === id)) {
        return {
            title: `${dataFree[Number(id) - 1].title}`, // Title dinamis berdasarkan 'id'
            description: "Membuat berbagai cheat mortal kombat shaolin monk yg saya upload ke youtub saya dan cheat ini saya buat sendiri bukan hasil comot",
            keywords: ["cheat mksm", "mod mortal kombat", "cheat mortal kombat"]
        }
    } else {
        redirect("/");
    }
}


export default async function RootLayout({children, }: Readonly<{children: React.ReactNode;}>) {
    return (
        <main>{children}</main>
    );
}
