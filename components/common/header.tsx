import * as React from 'react';
import { Box } from '@mui/material';

export interface IHeaderProps {}

export function Header(props: IHeaderProps) {
    console.log('render header');

    return (
        <Box component='header' py={2} textAlign='center'>
            Header
        </Box>
    );
}
