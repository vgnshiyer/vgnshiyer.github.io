import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { PostMetadata } from '../types/PostMetadata';
import getFilesRecursively from './getFilesRecursively';

const getPostMetadata = (): PostMetadata[] => {
    const folder = 'public/blogs/';
    const files = getFilesRecursively(folder);
    const markdownFiles = files.filter((fn) => fn.endsWith('.md') && !fn.includes('ignore'));
    
    let posts = markdownFiles.map((filename) => {
        const fileContents = fs.readFileSync(filename, 'utf8');
        const matterResult = matter(fileContents);
        return {
            title: matterResult.data.title,
            date: matterResult.data.date,
            subtitle: matterResult.data.subtitle,
            cover: matterResult.data.cover,
            slug: path.basename(filename, '.md'),
            tags: matterResult.data.tags,
        };
    });

    posts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    return posts;
};

export default getPostMetadata;