"use client"
import '../globals.css'
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function authLayout(
    { children }: { children: React.ReactNode }
) {
    const pathName = usePathname();
    const navlinks = [
        { name: 'login', href: '/login' },
        { name: 'register', href: '/register' }
    ]


    return (
        <div>
            <div className='flex flex-row items-center'>
                {navlinks.map((navlink) => {

                    const isActive = pathName === navlink.href || pathName.startsWith(navlink.href) && navlink.href !== '/';

                    return (
                            <Link
                                key={navlink.name}
                                href={navlink.href}
                                className={`
                              ${isActive ? "text-red-500 m-2 text-2xl font-bold" : "text-blue-500 m-2 text-2xl font-bold"}
                              `}
                            >
                                {navlink.name}
                            </Link>
                       
                    )
                }
                )}
            </div>
            {children}
        </div>
    )
}