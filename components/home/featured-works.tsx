import { Box, Container, Typography, Link as MuiLink } from '@mui/material';
import { Stack } from '@mui/system';
import Link from 'next/link';
import * as React from 'react';
import { Post, Work } from '../../models';
import WorkList from '../work/work-list';
import { PostCard } from './post-card';

export default function FeatureWorks() {
    const workList: Work[] = [
        {
            id: 1,
            title: 'Designing Dashboards',
            shortDescription: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            tagList: ['Dashboard'],
            createdAt: new Date().getTime().toString(),
            fullDescription: '',
            updatedAt: new Date().getTime().toString(),
            thumbnail: 'https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=200&q=80',
        },
        {
            id: 2,
            title: 'Vibrant Color Palettes',
            shortDescription: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            tagList: ['Illustration'],
            createdAt: new Date().getTime().toString(),
            fullDescription: '',
            updatedAt: new Date().getTime().toString(),
            thumbnail: 'https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=200&q=80',
        },
        {
            id: 3,
            title: '36 days of Malayalam type',
            shortDescription: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            tagList: ['Typography'],
            createdAt: new Date().getTime().toString(),
            fullDescription: '',
            updatedAt: new Date().getTime().toString(),
            thumbnail: 'https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=200&q=80',
        }
    ];
    return (
        <Box component='section' pt={2} pb={4}>
            <Container>
                <Typography variant='h5' mb={4}>Featured Works</Typography>

                <WorkList workList={workList} />
            </Container>
        </Box>
    );
}
