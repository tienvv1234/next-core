import { Box } from '@mui/material'
import { HeroSection } from '../components/home'
import FeatureWorks from '../components/home/featured-works'
import RecentPost from '../components/home/recent-posts'
import { MainLayout } from '../components/layout'
import { NextPageWithLayout } from '../models'

const Home: NextPageWithLayout = () => {
  // this will go to routes/[id].tsx
  // const router = useRouter();
  // if(router.isFallback) {
  //   return <div>loading ...</div>
  // }

  return (
      <Box>
        <HeroSection />
        <RecentPost />
        <FeatureWorks />
      </Box>
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