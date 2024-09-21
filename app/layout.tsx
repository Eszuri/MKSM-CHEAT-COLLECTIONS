import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "@TAILWINDCSS"
import {getServerSession} from "next-auth";
import SessionProvider from "@/lib/sessionProvider";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "MKSM CHEAT COLLECTIONS",
    description: "Membuat berbagai cheat mortal kombat shaolin monk yg saya upload ke youtub saya dan cheat ini saya buat sendiri bukan hasil comot",
};

export default async function RootLayout({children, }: Readonly<{children: React.ReactNode;}>) {
    const session = await getServerSession();
    return (
        <html lang="id">
            <SessionProvider session={session}>
                <body className={inter.className}>{children}</body>
            </SessionProvider>
        </html>
    );
}
