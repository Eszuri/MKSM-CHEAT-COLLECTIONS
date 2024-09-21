import getRandomInteger from "@/lib/getRandomInteger";
import connectDB from "@/lib/connectMongodb";
import GoogleUserModels from "@/models/googleUser";
import {getServerSession} from "next-auth";
import {ReactNode, Suspense} from "react";
import New_Token_noUser from "./new-token.nouser";
import New_Token_SuccessGenerateToken from "./new-token.successGenerateToken";


function Loading() {
    return (
        <h1 className="fixed inset-0 w-full h-full flex items-center justify-center text-xl font-semibold">Loading ...</h1>
    )
}

function TemplatePosition({children}: {children: ReactNode}) {
    return (
        <div className="fixed inset-0 w-full h-full flex flex-col items-center justify-center">
            {children}
        </div>
    )
}



async function UpdateData() {
    await connectDB();
    const session = await getServerSession();
    const user = session?.user
    const newToken = getRandomInteger().toFixed();
    const findOne = await GoogleUserModels.findOne({email: user?.email});
    let text = null;
    if (findOne && Date.now() > findOne.expiresToken) {
        if (!findOne) {
            text = "Database Error. Please Contact Developer";
        } else {
            await GoogleUserModels.findOneAndUpdate({email: user?.email}, {token: newToken, expiresToken: Date.now() + (7 * 24 * 60 * 60 * 1000)})
            text = `Success Generate New Token: ${newToken}`;
        }
    } else {
        text = `Your Token Already Created`
    }
    return text
}


export default async function HOME() {
    const session = await getServerSession();
    const user = session?.user;
    return (
        <div>
            <Suspense fallback={<Loading />}>
                {user ?
                    <TemplatePosition><New_Token_SuccessGenerateToken>{UpdateData()}</New_Token_SuccessGenerateToken></TemplatePosition>
                    :
                    <New_Token_noUser />}
            </Suspense>
        </div >
    )
}
