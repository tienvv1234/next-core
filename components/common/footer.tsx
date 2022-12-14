import * as React from 'react';
import { Box, Icon, Stack, Typography } from '@mui/material';
import { Facebook } from '@mui/icons-material';
export interface IFooterProps {}

export function Footer(props: IFooterProps) {
    console.log('render Footer');
    const socialLinks = [
        { icon: Facebook, url: '' },
        { icon: Facebook, url: '' },
        { icon: Facebook, url: '' },
        { icon: Facebook, url: '' },
    ];
    return <Box component='footer' py={2} textAlign='center'>
        <Stack direction='row' justifyContent='center'>
            {socialLinks.map((link, i) => (
                <Box key={i} component='a' p={2} href={link.url} target='_blank' rel='noopener noreferrer'>
                    <Icon component={link.icon} sx={{ fontSize: 48}} />
                </Box>
            ))}
        </Stack>
        <Typography>
            Copyright @{new Date().getFullYear()} - All rights reserved
        </Typography>
    </Box>;
}
//alway use noopener noreferrer - security feature to prevent malicious code from running on your site