import * as React from 'react';
import useSWR from 'swr';
import axiosClient from '../../api-client/axios-client';

export interface IStudentDetailProps {
    studentId: string;
}

export function StudentDetail({ studentId }: IStudentDetailProps) {
    const { data, error, mutate, isValidating } = useSWR(
        `/students/${studentId}`,
        {
            revalidateOnFocus: false, // default is true => revalidate when focus tab
            revalidateOnMount: true, // default is true => revalidate when mount component
            dedupingInterval: 2000, // default is 2000 => 2s het 2s moi revalidate tuc goi lai api
        }
    ); // key is url
    // const {} = useSWR('abc', () => axiosClient.get(`/students/${studentId}`));

    function handleMutateClick() {
        mutate({
            name: 'new name', // tra ve local data, trong khi api chua tra ve
        }, true);
        // mutate se return ve name va se call api de update name
        // su dung cho case update
        // truyen thang vao ui luon trong khi doi api tra ve
    }

    return (
        <div>
            {data?.name || '--'}
            <button onClick={handleMutateClick}>mutate</button>
        </div>
    );
}
