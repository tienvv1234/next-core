import * as React from 'react';
import { AdminLayout, MainLayout } from '../components/layout';
import { Box, Typography } from '@mui/material';
export interface IAboutProps {}

export default function About(props: IAboutProps) {
    return (
        <Box>
            <Typography component='h1' variant='h3' color="primary.main">About Page</Typography>
        </Box>
    );
}

About.Layout = AdminLayout;
