import Link from 'next/link';
import * as React from 'react';
import { LayoutProps } from '../../models';

export function AdminLayout({ children }: LayoutProps) {
    return (
        <div>
            <h1>Admin Layout</h1>
            <div>sidebar</div>
            <Link href=''>
                <a>Home</a>
            </Link>
            <Link href='/about'>
                <a>Home1</a>
            </Link>

            <div>{children}</div>
        </div>
    );
}
