import { GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';
import { authApi } from '../api-client';
import { useAuth } from '../hooks';

export default function LoginPage() {
    const route = useRouter();
    const {profile, login, logout, firstLoading} = useAuth()
    console.log('LoginPage')
    React.useLayoutEffect(() => {
        console.log('LoginPage: firstLoading', firstLoading);
        const profileToken = localStorage.getItem('profile');
        console.log('LoginPage: profileToken', profileToken)
        if(profileToken) route.push('/about')
    }, [route]);

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
            {console.log(1111)}
            <h1>Login page</h1>

            <p>Profile: {JSON.stringify(profile || {}, null, 4)}</p>
            <button onClick={handleLoginClick}>login</button>
            {/* <button onClick={handleGetProfileClick}>get profile</button> */}
            <button onClick={handleLogoutClick}>logout</button>
        </div>
    );
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
//   console.log('getStaticProps');
//   const { params } = context;
//   console.log('params', params)
//   const response: any = await new Promise((resolve) => resolve({ data: [{id: 1}, {id: 2}] }));
//   console.log('response', response)


  return {
    props: {
      data: 'response.data',
    },
    revalidate: 5, // In seconds re-generate the page (if the page is not pre-rendered, 
    //Next.js will wait for the page to be generated before returning the response. This approach is called Incremental Static Regeneration.
    // call after 5 seconds to get new data)
  }
}