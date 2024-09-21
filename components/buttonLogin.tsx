"use client"

import {signIn} from "next-auth/react"
import {ReactNode} from "react"

export default function ButtonLogin({title, classNameDiv, children}: {title: string, classNameDiv: string, children?: ReactNode}) {
    return (
        <div className={classNameDiv} onClick={() => {signIn("google")}}>
            <span>{title}</span>
            {children}
        </div>
    )
}
