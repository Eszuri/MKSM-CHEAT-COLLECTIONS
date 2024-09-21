"use client"

import MKSMBG from "@/public/Logo_shaolin_monks_large.webp"
import Image from "next/image"
import {DragEvent} from "react"

export default function MKSM_BACKGROUND() {

    function DragStop(event: DragEvent<HTMLImageElement>) {
        event.preventDefault();
    }

    return (
        <Image src={MKSMBG}
            draggable={false}
            alt="mksm background"
            priority={true}
            height={256}
            width={512}
            className="select-none fixed -z-10 top-1/2 left-1/2 opacity-30 translate-x-[-50%] translate-y-[-50%] w-[90%] h-[90%]"
            onDragStart={DragStop} />
    )
}
