import {useRouter } from 'next/router';
import React, { useEffect, useLayoutEffect } from 'react';
import { useAuth } from '../../hooks/use-auth';

export interface AuthProps {
    children: any;
}

export function Auth({ children }: AuthProps) {
    const route = useRouter();
    const { profile, login, logout, firstLoading } = useAuth();

    useLayoutEffect(() => {
        // console.log('Auth: firstLoading 111111', firstLoading);
        // console.log('Auth: profile 111111111', profile);
        // console.log('Auth 1111111', !firstLoading && !profile?.username);
        // if (!firstLoading && !profile?.username) {
        //     route.push('/login');
        // }
        const profileToken = localStorage.getItem('profile');
        if (!profileToken) {
            route.push('/login');
        }
        // if (!profile?.username && !firstLoading) {
        //     console.log('Auth: route.push(/login) 111111111');
        //     route.push('/login');
        // }
        // if (!isAuth()) {
        //     console.log('Auth: route.push(/login) 111111111');
        //     route.push('/login');
        // }
    }, [route]);

    if (firstLoading) return <div>loading...</div>;

    return <div>{children}</div>;
}
