import getPostMetadata from '@/helpers/getPostMetadata';
import PostPage from '@/components/PostPage';

export const generateStaticParams = async () => {
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