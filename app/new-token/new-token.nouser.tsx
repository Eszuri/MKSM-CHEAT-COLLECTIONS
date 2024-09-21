"use client"

import {signIn} from "next-auth/react"

export default function New_Token_noUser() {
    return (
        <div className="fixed inset-0 w-full h-full flex flex-col items-center justify-center text-xl font-semibold">
            <h1 className="text-xl">User Not Found</h1>
            <h1>Please <b className="font-bold underline cursor-pointer text-blue-700" onClick={() => {signIn('google')}}>Login</b> Again</h1>
        </div>
    )
}
