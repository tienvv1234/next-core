import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useAuth } from '../../hooks/use-auth';

export interface AuthProps {
    children: any;
}

export function Auth({ children }: AuthProps) {
    const route = useRouter();
    const { profile, login, logout, firstLoading } = useAuth();

    useEffect(() => {
        console.log('profile', profile);
        if (!firstLoading && !profile?.username) route.push('/login');
    }, [profile, route, firstLoading]);

    if (!profile?.username) return <div>loading...</div>;

    return <div>{children}</div>;
}
