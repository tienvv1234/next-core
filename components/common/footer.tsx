import * as React from 'react';
import { Box } from '@mui/material';
export interface IFooterProps {}

export function Footer(props: IFooterProps) {
    console.log('render Footer');

    return <Box component='footer' py={2} textAlign='center'>Footer</Box>;
}
