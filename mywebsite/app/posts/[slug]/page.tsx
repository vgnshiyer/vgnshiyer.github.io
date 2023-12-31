import Markdown from 'markdown-to-jsx';
import getPostMetadata from '@/helpers/getPostMetadata';
import getPostConent from '@/helpers/getPostContent';

export const generateStaticParams = async () => {
    const posts = getPostMetadata();
    return posts.map((post: any) => ({
        slug: post.slug,
    }));
};

const Post = (props: any) => {
    const slug = props.params.slug;
    const post = getPostConent(slug);
    if (!post) {
        console.error(`No post found for slug: ${slug}`);
        return null;``
    }
    return (
        <div className='ml-8'>
            <h1 className='text-2xl text-violet-600 font-bold'>{post.data.title}</h1>
            <article className='prose lg:prose-xl'>
                <Markdown>{post.content}</Markdown>
            </article>
        </div>
    )
};

export default Post;