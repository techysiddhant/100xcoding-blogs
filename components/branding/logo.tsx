import Image from 'next/image'
import React from 'react'

export const Logo = () => {
    return (
        <div className='dark:display-none'>
            <Image src="/logo-dark.svg" alt="Logo" width={150} height={50} />
        </div>
    )
}
