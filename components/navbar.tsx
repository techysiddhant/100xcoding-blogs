"use client";
import { Logo } from '@/components/branding/logo'
import { MobileThemeToggle, ThemeToggle } from '@/components/theme-toggler'
import { useSearchContext } from 'fumadocs-ui/provider'
import { Search } from 'lucide-react'
import Link from 'next/link'

export const Navbar = () => {
    const { setOpenSearch } = useSearchContext();

    return (
        <header className='fixed left-1/2 top-[var(--fd-banner-height)] z-40 w-full max-w-fd-container -translate-x-1/2 border-b border-fd-foreground/10 transition-colors lg:mt-2 lg:w-[calc(100%-1rem)] lg:rounded-2xl lg:border shadow-sm bg-transparent backdrop-blur-lg'>
            <nav className='flex h-14 w-full flex-row items-center justify-between gap-6 px-4 lg:h-12'>
                <Link href="/" className='inline-flex items-center gap-2.5 font-semibold'>
                    <Logo />
                </Link>
                <div className="flex items-center md:gap-4">
                    <div className='hidden md:flex bg-transparent rounded-full border-fd-foreground/10  flex-row items-center justify-start gap-2 border p-2 w-56 cursor-pointer' onClick={() => setOpenSearch(true)}>
                        <Search className="h-4 w-4" />
                        <p className="text-sm text-fd-muted-foreground">
                            Search
                        </p>
                    </div>
                    <div className='relative'>
                        <ul data-orientation="horizontal" className='flex flex-row items-center gap-2 '>
                            <li>
                                <Link href="/blogs/introduction" className='inline-flex items-center gap-1 p-2 text-fd-foreground transition-colors hover:text-fd-accent-foreground data-[active=true]:text-fd-primary [&_svg]:size-4 text-sm'>
                                    Getting Started
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-1 flex-row items-center justify-end lg:gap-1.5">
                        <ThemeToggle />
                        <MobileThemeToggle />
                    </div>
                </div>
            </nav>
        </header>
    )
}
