import Link from 'next/link';
import * as React from 'react';
import { LayoutProps } from '../../models';

export interface IMainLayoutProps {}

export function MainLayout({ children }: LayoutProps) {
    React.useEffect(() => {
        console.log('MainLayout mounting')

        return () => console.log('MainLayout unmounting')
    }, [])

    return (
        <div>
            <h1>Admin Layout</h1>
            <div>sidebar</div>
            <Link href='/'>
                <a>Home</a>
            </Link>
            <Link href='/about'>
                <a>About</a>
            </Link>

            <div>{children}</div>
        </div>
    );
}
