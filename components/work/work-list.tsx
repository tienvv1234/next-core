import { Box, Divider } from '@mui/material';
import React, { Fragment } from 'react';
import { Work } from '../../models';
import { WorkCard } from './work-card';

export interface IWorkListProps {
    workList: Work[];
}

export default function WorkList({ workList }: IWorkListProps) {
    if (workList.length === 0) return null;

    return (
        <Box>
            {workList.map((work) => (
                <Fragment key={work.id}>
                    <WorkCard work={work} />
                    <Divider sx={{ mt: 2, mb: 4}}/>
                </Fragment>
            ))}
        </Box>
    );
}
