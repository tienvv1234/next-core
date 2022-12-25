import { useEffect, useState } from "react";
import useSWR from "swr";
import { PublicConfiguration } from "swr/dist/types";
import { authApi } from "../api-client";
const ISSERVER = typeof window === "undefined";

export function useAuth(options?: Partial<PublicConfiguration>) {
    // profile
    // const {data: profile, error, isValidating, mutate} = useSWR<any, any>('/profile', {
    //     dedupingInterval: 60000,
    //     revalidateOnFocus: false,
    //     ...options,
    // });

    // const [ profile, setProfile ] = useState<any>(() => {
    //     if(!ISSERVER) {
    //     // Access localStorage
    //         return JSON.parse(localStorage.getItem('profile') || 'null');
    //     }
    //     return null;
    // });
    // let profile = null;
    // if (typeof window !== 'undefined') {
    //     profile = JSON.parse(localStorage.getItem('profile') || 'null');
    //     console.log('profile', profile)
    // }
    const [ profile, setProfile ] = useState<any>({})
    const [ error, setError ] = useState<any>();
    // console.log('profile', profile)

    const firstLoading = profile === undefined && error === undefined;

    // useEffect(() => {
    //     console.log('useEffect')
    //     const profile11 = JSON.parse(localStorage.getItem('profile') || 'null');
    //     if(profile11) {
    //         setProfile(profile11);
    //     }
    // }, []);

    // const isAuth = () => {
    //     // let profile = false;
    //     // if(!ISSERVER) {
    //     //     profile = JSON.parse(localStorage.getItem('profile') || 'null');
    //     //     return !!profile;
    //     // }
    //     // return profile;

    //     const profile = localStorage ? JSON.parse(localStorage.getItem('profile') || 'null') : null;
    //     return !!profile;
    // }

    async function getProfile() {
        try {
            const data = await authApi.getProfile();
            // profile= data;
            setProfile(data);
            localStorage.setItem('profile', JSON.stringify(data));
        } catch (error) {
            setError(error);
        }
    }

    async function login() {
        await authApi.login({
            username: 'admin',
            password: 'admin123',
        });
        await getProfile();
        // await mutate();
        console.log('login');
    }

    async function logout() {
        await authApi.logout();
        localStorage.clear();
        // mutate({}, false);// ko call api nen ko await
    }

    return {
        profile,
        error,
        login,
        logout,
        firstLoading,
        getProfile,
    }
}