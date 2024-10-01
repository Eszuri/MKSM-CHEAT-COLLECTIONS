"use server"

import connectDB from "@/lib/connectMongodb"
import GoogleUserModels from "@/models/googleUser";
import {getServerSession} from "next-auth";

export default async function accessPremiumCheck(token: number) {
    await connectDB();
    const session = await getServerSession();
    const checkProfile = await GoogleUserModels.findOne({email: session?.user?.email});
    try {
        if (!session) {
            return {noLoggin: true};
        }

        if (!checkProfile) {
            return {noDB: true};
        }

        if (checkProfile.token == token) {
            if (Date.now() < checkProfile.expiresToken) {
                return {oke: true};
            } else {
                return {expires: true}
            }
        } else {
            return {tokenIncorrect: true};
        }
    } catch (error) {
        throw new Error("Validate Error")
    }
}
