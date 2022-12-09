import Link from 'next/link';
import * as React from 'react';
import { LayoutProps } from '../../models';
import { Box, Stack } from '@mui/material';
import { Header, Footer } from '../common/';
export interface IMainLayoutProps {}

export function MainLayout({ children }: LayoutProps) {
    React.useEffect(() => {
        console.log('MainLayout mounting');

        return () => console.log('MainLayout unmounting');
    }, []);

    return (
        <Stack>
            <Header />
                <Link href='/'>
                    <a>Home</a>
                </Link>
                <Link href='/blog'>
                    <a>Blog</a>
                </Link>
                <Link href='/works'>
                    <a>Works</a>
                </Link>
                <Box component='main'>{children}</Box>
            <Footer />
        </Stack>
    );
}
