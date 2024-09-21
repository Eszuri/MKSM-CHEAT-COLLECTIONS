import connectDB from "@/lib/connectMongodb"
import GoogleUserModels from "@/models/googleUser";
import NextAuth, {User} from "next-auth"
import Google from "next-auth/providers/google"
import getRandomInteger from "@/lib/getRandomInteger"



const authOptions = {
    providers: [
        Google({
            clientId: process.env.NEXT_AUTH_CLIENT_ID as string,
            clientSecret: process.env.NEXT_AUTH_CLIENT_SECRET as string,
        }),
    ],
    callbacks: {
        async signIn({user}: {user: User}) {
            try {
                await connectDB();
                const existingUser = await GoogleUserModels.findOne({email: user.email});

                if (existingUser) {
                    console.log(`User with email ${user.email} already exists.`);
                    return true;
                } else {
                    await GoogleUserModels.create({
                        name: user.name,
                        email: user.email,
                        picture: user.image,
                        token: getRandomInteger().toFixed(),
                        expiresToken: Date.now() + (24 * 60 * 60 * 1000),
                    });
                    console.log(`Created new user with email ${user.email}.`);
                    return true;
                }

            } catch (error) {
                console.log("Error is: " + error)
                return false
            }
        },
    }
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}
