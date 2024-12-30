import Image from "next/image"

export const Logo = () => {

    return (
        <>
            <div className='dark:hidden'>
                <Image src='/logo-light.svg' alt='100xcoding Logo' width={200} height={100} />
            </div>
            <div className='hidden dark:block'>
                <Image src='/logo-dark.svg' alt='100xcoding Logo' width={200} height={100} />
            </div>
        </>
    )
}
