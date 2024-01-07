import getPostMetadata from '@/helpers/getPostMetadata';
import PostPage from '@/components/PostPage';
import generateRssFeed from '@/helpers/generateRssFeed';

export const generateStaticParams = async () => {
    await generateRssFeed();
    const posts = getPostMetadata();
    return posts.map((post: any) => ({
        slug: post.slug,
    }));
};

const Post = (props: any) => {
    const slug = props.params.slug;
    
    return (
        <PostPage slug={slug} />
    )
};

export default Post;