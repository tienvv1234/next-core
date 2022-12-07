import '../styles/globals.css'
import React from 'react'
import { AppPropsWithLayout } from '../models'
import { EmptyLayout } from '../components/layout'

// app cua nextjs dùng để init khởi tạo cái trang
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  console.log('App rerender')
  React.useEffect(() => {
    console.log('app mounting')

    return () => console.log('app unmounting')
  }, [])

  const Layout = Component.Layout || EmptyLayout
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
