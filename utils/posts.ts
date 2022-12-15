import fs from 'fs';
import path from 'path';

const BLOG_FOLDER = path.join(process.cwd(), 'docs');

export async function getPostList() {
    // read all markdown files
    const fileNaneList = fs.readdirSync(BLOG_FOLDER);
    console.log(fileNaneList);
    // traverse all markdown files
    // get the title and date of each file
    // return the list of title and date
    for (const fileName of fileNaneList) {
        const filePath = path.join(BLOG_FOLDER, fileName);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        console.log(fileName, '\n', fileContent);
    }
    return [];
};