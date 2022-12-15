import { GetStaticProps, GetStaticPropsContext } from 'next';
import Link from 'next/link';
import { getPostList } from '../../utils/posts';

export interface IBlogListPageProps {
    blogs: any[];
}

export default function BlogListPage({ blogs }: IBlogListPageProps) {
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
    // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    // const blogs = await res.json();

    // convert markdown to javascpript object

    const data = await getPostList();
    return {
        props: {
            blogs: data.map((x: any) => ({id: x.id, title: x.title})),
        },
    };
}