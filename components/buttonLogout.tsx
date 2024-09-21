"use client"

import {signOut} from "next-auth/react"
import {ReactNode} from "react"

export default function ButtonLogout({title, classNameDiv, children}: {title: string, classNameDiv: string, children?: ReactNode}) {
    return (
        <div className={classNameDiv} onClick={() => {signOut()}}>
            <span>{title}</span>
            {children}
        </div>
    )
}
