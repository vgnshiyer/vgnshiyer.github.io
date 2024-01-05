import fs from 'fs';
import matter from 'gray-matter';
import { PostMetadata } from '../types/PostMetadata';
import getFilesRecursively from './getFilesRecursively';
import path from 'path';

const getPostMetadata = (): PostMetadata[] => {
    const folder = 'public/blogs/';
    const files = getFilesRecursively(folder);
    const markdownFiles = files.filter((fn) => fn.endsWith('.md'));
    
    const posts = markdownFiles.map((filename) => {
        const fileContents = fs.readFileSync(filename, 'utf8');
        const matterResult = matter(fileContents);
        return {
            title: matterResult.data.title,
            date: matterResult.data.date,
            subtitle: matterResult.data.subtitle,
            cover: matterResult.data.cover,
            slug: path.basename(filename, '.md'),
        };
    });

    return posts;
};

export default getPostMetadata;