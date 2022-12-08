import '../styles/globals.css'
import React from 'react'
import { AppPropsWithLayout } from '../models'
import { EmptyLayout } from '../components/layout'
import { SWRConfig } from 'swr'
import axiosClient from '../api-client/axios-client'

// app cua nextjs dùng để init khởi tạo cái trang
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  console.log('App rerender')
  React.useEffect(() => {
    console.log('app mounting')

    return () => console.log('app unmounting')
  }, [])

  const Layout = Component.Layout || EmptyLayout
  return (
    <SWRConfig value={{
      fetcher: url => axiosClient.get(url),// use axis 
      shouldRetryOnError: false, /// retry when error default is true
      }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  )
}
