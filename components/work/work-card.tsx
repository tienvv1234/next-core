import { Box, Chip, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import * as React from 'react';
import { Work } from '../../models';

export interface IWorkCardProps {
    work: Work;
}

export function WorkCard({ work }: IWorkCardProps) {
    return (
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
            <Box width={{ xs: '100%', md: '246px' }}>
                <Image
                    src={work.thumbnail}
                    width={246}
                    height={180}
                    layout="responsive"
                    alt="work thumbnail"
                />
            </Box>

            <Box>
                <Typography variant='h4' fontWeight='bold'>{work.title}</Typography>
                <Stack direction='row' my={2}>
                    <Chip color='secondary' label={new Date(Number(work.createdAt)).getFullYear()} size='small' />
                    <Typography ml={3} color='GrayText'>{work.tagList.join(', ')}</Typography>
                </Stack>
                <Typography>{work.shortDescription}</Typography>
            </Box>
        </Stack>
    );
}
