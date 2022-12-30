import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { Post } from '../../models';
import { getPostList } from '../../utils/posts';

export interface BlogPageProps {
    post: Post;
}

export default function PostDetailPage({ post }: BlogPageProps) {
    if(!post) {
        return null;
    }

    return (
        <div>
            <h1>Post Detail Page</h1>
            
            <p>{post.title}</p>
            <p>{post.author?.name}</p>
            <p>{post.description}</p>

            <p>{post.mdContent}</p>
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    console.log('getStaticPaths');
    const postList = await getPostList();
    console.log(postList.map((post: Post) => ({ params: {slug : post.slug} })));
    return {
        paths: postList.map((post: Post) => ({ params: {slug : post.slug} })),
        fallback: false,
    }
};

export const getStaticProps: GetStaticProps<BlogPageProps> = async (context: GetStaticPropsContext) => {
    console.log('getStaticProps');
    const postList = await getPostList();
    const slug = context.params?.slug;
    console.log(slug);
    if(!slug) {
        return { notFound: true }
    }
    const post = postList.find((x) => x.slug === slug);

    if(!post) {
        return { notFound: true }
    }

    return {
        props: {
            post: post,
        }
    }
};