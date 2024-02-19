'use client'
import { FC, ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'
import { useState, useEffect } from "react"

export interface ProvidersProps {
    children: ReactNode
}

const Providers: FC<ProvidersProps> = ({ children }) => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <>
                <Toaster position='top-center' reverseOrder={false} />
                {children}
            </>
        )
    }

    return (
        <div>
            <Toaster position='top-center' reverseOrder={false} />
            {children}
        </div>
    )
}

export default Providers