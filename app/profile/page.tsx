import {getServerSession} from "next-auth"
import Image from "next/image";
import NoUser from "@/public/noUser.png"
import GoogleUserModels from "@/models/googleUser";
import ButtonLogin from "@/components/buttonLogin";
import ButtonLogout from "@/components/buttonLogout";
import Link from "next/link";
import connectDB from "@/lib/connectMongodb";
import ButtonPreviousRoute from "@/components/buttonPreviousRoute";

const Title = ({title, content}: {title: string, content: string}) => {
    return (
        <div className="relative bg-slate-800 w-[90%] p-2 rounded my-5">
            <span className="absolute -top-5 text-sm opacity-70 left-2">{title}</span>
            <span>{content ?? "you are not logged"}</span>
        </div>
    )
}

export default async function Home() {
    await connectDB();
    const session = await getServerSession();
    const user = session?.user
    let dbUser = null;

    if (user?.email) {
        dbUser = await GoogleUserModels.findOne({email: user.email});
    }

    return (
        <div className="flex flex-col items-center relative">
            <div className="w-full px-5 text-start">
                <ButtonPreviousRoute title={`˂ BACK`} classNameDiv="bg-red-600 p-2 rounded mt-5 text-white cursor-pointer text-start w-32 flex justify-center items-center pr-10 uppercase" />
            </div>
            <Image
                alt="user profile picture"
                src={session ? (user?.image as string) : NoUser}
                height={128}
                width={128}
                priority={true}
                className="w-32 h-32 cursor-pointer rounded-full mt-20"
            />

            <Title title="Your Name" content={dbUser ? dbUser.name : null} />
            <Title title="Your Email" content={dbUser ? dbUser.email : null} />
            <Title title="Your Token" content={dbUser && Date.now() < dbUser.expiresToken ? dbUser.token.toString() : "Token Is Expired"} />
            {dbUser ? (<span>Your Token Expired: {new Date(dbUser.expiresToken).toLocaleString()}</span>) : ""}
            {dbUser ? (
                Date.now() < dbUser.expiresToken ? <ButtonLogout title="Click For Logout" classNameDiv="bg-red-600 p-2 rounded mt-5 text-white cursor-pointer" /> : <Link href={'https://pndk.to/t1gElCKSIz'} target="_blank" className="bg-green-600 hover:bg-green-700 p-2 rounded">Click For Generate New Token</Link>
            ) : (
                <ButtonLogin title="Not Available (Please Log In)" classNameDiv="bg-red-600 p-2 rounded mt-5 text-white cursor-pointer" />
            )}
        </div>
    )
}
