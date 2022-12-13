import Link from 'next/link';
import * as React from 'react';
import { LayoutProps } from '../../models';
import { Box, Stack } from '@mui/material';
import { Header, Footer } from '../common/';
import { Container } from '@mui/system';
export interface IMainLayoutProps {}

export function MainLayout({ children }: LayoutProps) {
    React.useEffect(() => {
        console.log('MainLayout mounting');

        return () => console.log('MainLayout unmounting');
    }, []);

    return (
        <Stack minHeight='100vh'>
            <Header />
                <Box component='main' flexGrow={1}>
                    {children}
                </Box>
            <Footer />
        </Stack>
    );
}
