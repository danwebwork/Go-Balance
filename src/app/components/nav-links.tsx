'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from 'clsx';

const links = [
    {
        name: 'Home',
        href: '/',
    },
    {
        name: 'AboutUs',
        href: '/pages/AboutUs',
    },
    {
        name: 'OurWork',
        href: '/pages/OurWork',
    },
    {
        name: 'OurTeam',
        href: '/pages/OurTeam',
    },
    {
        name: 'News&blog',
        href: '/pages/NewsBlog',
    },
    {
        name: 'ContactUs',
        href: '/pages/ContactUs',
    },
];

export default function NavLinks(){
    const pathname = usePathname();
    return(
        <>
            {links.map((link) => {
                return (
                <Link
                    key={link.name}
                    href={link.href}
                    className={clsx("flex h-[80px] grow items-center justify-center mx-1 gap-0 p-3 text-md font-medium hover:border-b-2 border-white hover:text-blue-800 md:flex-none md:justify-start md:p-0 md:px-3",
                    {
                    'bf-sky-100 text-blue-600 border-b-2 border-white': pathname === link.href
                    },
                    )}
                >
                <p className="flex-col">{link.name}</p>
                </Link>
                );
             })}
        </>
    );
}

