import * as React from 'react';
import { authApi } from '../api-client';

export default function LoginPage() {
    async function handleLoginClick() {
        try {
            await authApi.login({
                username: 'admin',
                password: 'admin123',
            })
        } catch (error) {
            console.log(error)
        }
    }

    async function handleGetProfileClick() {
        try {
            await authApi.getProfile()
        } catch (error) {
            console.log(error)
        }
    }

    async function handleLogoutClick() {
        try {
            await authApi.logout()
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <h1>Login page</h1>
            <button onClick={handleLoginClick}>login</button>
            <button onClick={handleGetProfileClick}>get profile</button>
            <button onClick={handleLogoutClick}>logout</button>
        </div>
    );
}
