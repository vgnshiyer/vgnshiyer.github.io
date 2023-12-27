import Markdown from 'markdown-to-jsx';
import getPostMetadata from '@/helpers/getPostMetadata';
import getPostConent from '@/helpers/getPostContent';

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
        <div className='ml-8'>
            <h1 className='text-2xl text-violet-600 font-bold'>{post.data.title}</h1>
            <article className='prose lg:prose-xl'>
                <Markdown>{post.content}</Markdown>
            </article>
        </div>
    )
};

export default Post;