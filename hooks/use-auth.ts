import useSWR from "swr";
import { PublicConfiguration } from "swr/dist/types";
import { authApi } from "../api-client";

export function useAuth(options?: Partial<PublicConfiguration>) {
    // profile
    const {data: profile, error, isValidating, mutate} = useSWR('/profile', {
        dedupingInterval: 60000,
        revalidateOnFocus: false,
        ...options,
    });

    const firstLoading = profile === undefined && error === undefined;

    async function login() {
        await authApi.login({
            username: 'admin',
            password: 'admin123',
        });
        await mutate();
        console.log('login');
    }

    async function logout() {
        await authApi.logout();
        mutate({}, false);// ko call api nen ko await
    }

    return {
        profile,
        error,
        login,
        logout,
        firstLoading
    }
}