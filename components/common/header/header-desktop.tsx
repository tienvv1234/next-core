import * as React from 'react';
import { Box } from '@mui/system';
import { Container, Stack, Link as MuiList } from '@mui/material';
import { ROUTE_LIST } from './routes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';

export interface IHeaderDesktopProps {}

export function HeaderDesktop(props: IHeaderDesktopProps) {
    const router = useRouter();
    return (
        <Box display={{ xs: 'none', lg: 'block' }} py={2}>
            Header Desktop
            <Container>
                <Stack direction='row' justifyContent='flex-end'>
                    {ROUTE_LIST.map((route) => (
                        <Link key={route.path} href={route.path} passHref>
                            <MuiList sx={{ ml: 2 }} underline='hover' className={clsx({active: router.pathname === route.path})}>
                                {route.label}
                            </MuiList>
                        </Link>
                    ))}
                </Stack>
            </Container>
        </Box>
    );
}
