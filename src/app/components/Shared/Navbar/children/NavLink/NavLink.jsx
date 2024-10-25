import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import React from 'react';

export default function NavLink({ route, children }) {
    const currentPath = usePathname();

    return (
        <Link className={`${currentPath === route ? 'active' : ''} dark:text-white`} href={route}>
            {children}
        </Link>
    );
}
