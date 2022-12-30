import { Card, CardContent, Divider, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { format } from 'date-fns';
import * as React from 'react';
import { Post } from '../../models/post';
import { PostItem } from '../blog';

export interface IPostCardProps {
    post: Post;
}

export function PostCard({ post }: IPostCardProps) {
    if (!post) return null;

    return (
        <Card>
            <CardContent>
                <PostItem post={post} />
            </CardContent>
        </Card>
    );
}
