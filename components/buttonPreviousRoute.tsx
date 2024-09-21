"use client";

import {ReactNode, useEffect, useState} from "react";

export default function ButtonPreviousRoute({
    title,
    classNameDiv,
    children,
}: {
    title: string;
    classNameDiv: string;
    children?: ReactNode;
}) {
    const [currentUrl, setCurrentUrl] = useState("");

    useEffect(() => {
        // Menyimpan URL saat ini ketika komponen di-mount
        setCurrentUrl(window.location.href);
    }, []);

    const goBackUntilDifferentUrl = () => {
        let backCount = 0; // Track berapa kali kita mundur

        const checkUrlChange = () => {
            window.history.back();
            backCount++;

            setTimeout(() => {
                if (window.location.href === currentUrl && backCount < 10) {
                    // Jika URL masih sama dan belum lebih dari 10 kali back
                    checkUrlChange();
                }
            }, 100); // Menunggu sebentar sebelum cek URL lagi
        };

        checkUrlChange(); // Mulai proses back hingga URL berubah
    };

    return (
        <div className={classNameDiv} onClick={goBackUntilDifferentUrl}>
            <span>{title}</span>
            {children}
        </div>
    );
}
