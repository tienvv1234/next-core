import { Card, CardContent, Divider, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { format } from 'date-fns';
import * as React from 'react';
import { Post } from '../../models/post';

export interface IPostCardProps {
    post: Post;
}

export function PostCard({ post }: IPostCardProps) {
    if (!post) return null;

    return (
        <Card>
            <CardContent>
                <Typography variant='h5' fontWeight='bold'>
                    {post.title}
                </Typography>

                <Stack direction='row' my={2}>
                    <Typography variant='body1'>
                        {format(Number(post.publishedDate), 'dd MMM yyyy')}
                    </Typography>

                    <Divider orientation='vertical' sx={{ mx: 2 }} flexItem />
                    
                    <Typography variant='body1'>
                        {post.tagList.join(', ')}
                    </Typography>
                </Stack>

                <Typography variant='body2'>{post.description}</Typography>
            </CardContent>
        </Card>
    );
}
