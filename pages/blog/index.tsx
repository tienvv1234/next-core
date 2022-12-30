import { Box, Container, Divider } from '@mui/material';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import Link from 'next/link';
import { PostItem } from '../../components/blog';
import { MainLayout } from '../../components/layout';
import { Post } from '../../models';
import { getPostList } from '../../utils/posts';

export interface IBlogListPageProps {
    posts: Post[];
}

export default function BlogListPage({ posts }: IBlogListPageProps) {
    console.log('Blogs', posts);
    return (
        <Box>
            <Container>
                <h1>Blog</h1>

                <Box component="ul" sx={{ listStyleType: 'none', p: 0 }}>
                    {posts.map((post) => (
                        <li key={post.id}>
                            <Link href={`/post/${post.slug}`}>
                                <a>
                                    <PostItem post={post} />
                                </a>
                            </Link>
                            <Divider sx={{ my: 3 }} />
                        </li>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}

export const getStaticProps: GetStaticProps<IBlogListPageProps> = async (
    context: GetStaticPropsContext
) => {
    const data = await getPostList();
    return {
        props: {
            posts: data,
        },
    };
};

BlogListPage.Layout = MainLayout;
