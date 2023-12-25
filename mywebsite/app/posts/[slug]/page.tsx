import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import getPostMetadata from '@/components/getPostMetadata';

const getPostConent = (slug: string) => {
    const folder = 'posts/';
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, 'utf8');
    const matterResult = matter(content);
    return matterResult;
};

export const getStaticPaths = async () => {
    const posts = getPostMetadata();
    const paths = posts.map((post) => ({
        params: {
            slug: post.slug,
        },
    }));

    return {
        paths,
        fallback: false,
    };
};

const Post = (props: any) => {
    const slug = props.params.slug;
    const post = getPostConent(slug);
    return (
        <div>
            <h1 className='text-2xl text-violet-600 font-bold'>{post.data.title}</h1>
            <article className='prose lg:prose-xl'>
                <Markdown>{post.content}</Markdown>
            </article>
        </div>
    )
};

export default Post;