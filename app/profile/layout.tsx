import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Manage Profile",
    description: "Membuat berbagai cheat mortal kombat shaolin monk yg saya upload ke youtub saya dan cheat ini saya buat sendiri bukan hasil comot",
};

export default async function RootLayout({children, }: Readonly<{children: React.ReactNode;}>) {
    return (
        <main>{children}</main>
    );
}
