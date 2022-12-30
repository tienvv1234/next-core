import { useRouter } from 'next/router';
import * as React from 'react';
import { authApi } from '../api-client';
import { useAuth } from '../hooks';

export default function LoginPage() {
    const route = useRouter();
    const {profile, login, logout} = useAuth({
        revalidateOnMount: false,
        
    })

    React.useEffect(() => {
        console.log('profile', profile);
        if (profile?.username) route.push('/about');
    }, [profile, route]);
    
    async function handleLoginClick() {
        try {
            await login()
            route.push('/about')
        } catch (error) {
            console.log(error)
        }
    }

    // async function handleGetProfileClick() {
    //     try {
    //         await getProfile()
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    async function handleLogoutClick() {
        try {
            await logout()
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <h1>Login page</h1>

            <p>Profile: {JSON.stringify(profile || {}, null, 4)}</p>
            <button onClick={handleLoginClick}>login</button>
            {/* <button onClick={handleGetProfileClick}>get profile</button> */}
            <button onClick={handleLogoutClick}>logout</button>
        </div>
    );
}
