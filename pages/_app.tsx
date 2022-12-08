import React from 'react';
import { SWRConfig } from 'swr';
import axiosClient from '../api-client/axios-client';
import { EmptyLayout } from '../components/layout';
import { AppPropsWithLayout } from '../models';
import '../styles/globals.css';

import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { createEmotionCache, theme } from '../utils/';

// client-side cache, shared for the whole session of the user in the browser
const clientSideEmotionCache = createEmotionCache();

// app cua nextjs dùng để init khởi tạo cái trang
export default function App({
    Component,
    pageProps,
    emotionCache = clientSideEmotionCache,
}: AppPropsWithLayout) {
    console.log('App rerender');
    React.useEffect(() => {
        console.log('app mounting');

        return () => console.log('app unmounting');
    }, []);

    const Layout = Component.Layout || EmptyLayout;
    return (
        <CacheProvider value={emotionCache}>
            <ThemeProvider theme={theme}>
                <CssBaseline>
                    <SWRConfig
                        value={{
                            fetcher: (url) => axiosClient.get(url), // use axis
                            shouldRetryOnError: false, /// retry when error default is true
                        }}
                    >
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                    </SWRConfig>
                </CssBaseline>
            </ThemeProvider>
        </CacheProvider>
    );
}
