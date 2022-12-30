import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post } from '../models';

const BLOG_FOLDER = path.join(process.cwd(), 'docs');

export async function getPostList(): Promise<Post[]> {
    // read all markdown files
    const fileNaneList = fs.readdirSync(BLOG_FOLDER);
    // console.log(fileNaneList);
    // traverse all markdown files
    // get the title and date of each file
    // return the list of title and date
    const postList: Post[] = [];
    for (const fileName of fileNaneList) {
        const filePath = path.join(BLOG_FOLDER, fileName);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        // console.log(fileName, '\n', fileContent);

        const {data, excerpt, content} = matter(fileContent, { excerpt_separator: '<!-- truncate-->'});
        postList.push({
            id: fileName,
            slug: data.slug,
            title: data.title,
            author: {
                name: data.author,
                title: data.author_title,
                profileUrl: data.author_url,
                avatarUrl: data.author_image_url,
            },
            tagList: data.tags,
            publishedDate: new Date().toISOString(),
            description: excerpt || '',
            mdContent: content,
             
        });
        // console.log(matterResult);
    }
    return postList;
};