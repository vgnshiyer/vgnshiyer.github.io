import fs from 'fs';
import RSS from 'rss';
import { PostMetadata } from '@/types/PostMetadata';

async function generateRssFeed(allPosts: PostMetadata[]) {
    const site_url = "https://blog.vgnshiyer.dev";
    const feedOptions = {
        title: "Vignesh Iyer - Blog",
        description: "Vignesh Iyer's Blog",
        site_url: site_url,
        feed_url: `${site_url}/feed.xml`,
        image_url: `${site_url}/images/favicon.ico`,
        language: "en",
        pubDate: new Date().toISOString(),
        copyright: `All Rights Reserved ${new Date()}`,
    };
    const feed = new RSS(feedOptions);

    allPosts.map((post) => {
        feed.item({
            title: post.title,
            description: post.subtitle,
            url: `${site_url}/blog/${post.slug}`,
            date: post.date,
        });
    });

    const rss = feed.xml({ indent: true });
    fs.writeFileSync('./public/feed.xml', rss);
}

export default generateRssFeed;
