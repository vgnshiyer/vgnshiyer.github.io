import fs from 'fs';
import matter from 'gray-matter';
import { PostMetadata } from './PostMetadata';

const getPostMetadata = (): PostMetadata[] => {
    const folder = 'posts/';
    const files = fs.readdirSync(folder);
    const markdownFiles = files.filter((fn) => fn.endsWith('.md'));
    
    const posts = markdownFiles.map((filename) => {
        const fileContents = fs.readFileSync(`posts/${filename}`, 'utf8');
        const matterResult = matter(fileContents);
        return {
            title: matterResult.data.title,
            date: matterResult.data.date,
            author: matterResult.data.author,
            slug: filename.split('.')[0],
        };
    });

    return posts;
};

export default getPostMetadata;