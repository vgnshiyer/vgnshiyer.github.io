import getPostMetadata from '@/helpers/getPostMetadata';
import PostPage from '@/components/PostPage';
import generateRssFeed from '@/helpers/generateRssFeed';
import getPostConent from '@/helpers/getPostContent';

export const generateStaticParams = async () => {
    const posts = getPostMetadata();
    await generateRssFeed(posts);
    return posts.map((post: any) => ({
        slug: post.slug,
    }));
};



const Post = (props: any) => {
    const slug = props.params.slug;

    const post = getPostConent(slug);

    const PostData = {
        content: post?.content,
        data: {
            title: post?.data.title,
            subtitle: post?.data.subtitle,
            date: post?.data.date,
            cover: post?.data.cover,
            tags: post?.data.tags,
        },
    };
    
    return (
        <PostPage post={PostData} />
    )
};

export default Post;