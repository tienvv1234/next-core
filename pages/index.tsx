import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { MainLayout } from '../components/layout'
import { NextPageWithLayout } from '../models'
import styles from '../styles/Home.module.css'

const Home: NextPageWithLayout = () => {
  // this will go to routes/[id].tsx
  // const router = useRouter();
  // if(router.isFallback) {
  //   return <div>loading ...</div>
  // }

  return (
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <p className={styles.description}>
            Get started by editing{' '}
            <code className={styles.code}>pages/index.tsx</code>
          </p>

          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Documentation &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h2>Learn &rarr;</h2>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/canary/examples"
              className={styles.card}
            >
              <h2>Examples &rarr;</h2>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <h2>Deploy &rarr;</h2>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </footer>
      </div>
  )
}


// this will go to routes/[id].tsx
// export const getStaticPaths = async () => {
//   console.log('getStaticPaths')
  
//   const response: any = await new Promise((resolve) => resolve({ data: [{id: 1}, {id: 2}] }));

//   const paths = response.data.map((item: any) => ({
//     params: { id: item.id },
//   }));

//   return { paths, fallback: true }; // blocking, true, false
//   // fallback: true - means that if the page is not pre-rendered, Next.js will attempt to generate the page on-demand. This approach is called Incremental Static Regeneration.
//   // fallback: false - means that if the page is not pre-rendered, Next.js will return a 404 page.
//   // fallback: 'blocking' - means that if the page is not pre-rendered, Next.js will wait for the page to be generated before returning the response. This approach is called Incremental Static Regeneration.
// }

// export const getStaticProps = async (context: GetStaticPropsContext) => {
//   console.log('getStaticProps');
//   const { params } = context;
//   console.log('params', params)
//   const response: any = await new Promise((resolve) => resolve({ data: [{id: 1}, {id: 2}] }));
//   console.log('response', response)
//   return {
//     props: {
//       data: 'response.data',
//     },
//     revalidate: 5, // In seconds re-generate the page (if the page is not pre-rendered, 
//     //Next.js will wait for the page to be generated before returning the response. This approach is called Incremental Static Regeneration.
//     // call after 5 seconds to get new data)
//   }
// }
Home.Layout = MainLayout;

export default Home;