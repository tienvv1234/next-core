import { Box, Container, Typography, Link as MuiLink } from '@mui/material';
import { Stack } from '@mui/system';
import Link from 'next/link';
import * as React from 'react';
import { Post } from '../../models';
import { PostCard } from './post-card';

export default function FeatureWorks() {
    const postList: Post[] = [
        {
            id: 1,
            title: 'Making a design system from scratch',
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            tagList: ['Design', 'Pattern'],
            publishedDate: new Date().getTime().toString(),
        },
        {
            id: 2,
            title: 'Creating pixel perfect icons in Figma',
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            tagList: ['Figma', 'Icon Design'],
            publishedDate: new Date().getTime().toString(),
        }
    ];
    return (
        <Box component='section' pt={2} pb={4}>
            <Container>
                <Typography variant='h5'>Featured Works</Typography>
                <Stack
                    direction={{
                        xs: 'column',
                        md: 'row',
                    }}
                    spacing={3}
                    sx={{
                        '& > div': {
                            width: {
                                xs: '100%',
                                md: '50%',
                            },
                        },
                    }}
                >
                    {postList.map((post) => (
                        <Box key={post.id}>
                            <PostCard post={post} />
                        </Box>
                    ))}
                </Stack>
            </Container>
        </Box>
    );
}
