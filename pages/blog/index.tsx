import { GetStaticProps, GetStaticPropsContext } from 'next';
import Link from 'next/link';
import { getPostList } from '../../utils/posts';

export interface IBlogListPageProps {
    blogs: any[];
}

export default function BlogListPage({ blogs }: IBlogListPageProps) {
    console.log('Blogs', blogs);
    return (
        <div>
            <h1>Blog List Page</h1>

            <ul>
                {blogs.map((blog) => (
                    <li key={blog.id}>
                        <Link href={`/blogs/${blog.id}`}>
                            <a>{blog.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export const getStaticProps: GetStaticProps<IBlogListPageProps> = async (
    context: GetStaticPropsContext
) => {
    const data = await getPostList();
    return {
        props: {
            blogs: data,
        },
    };
}