import { PostData } from "@/types/PostData";
import getPostMetadata from "@/helpers/getPostMetadata";
import generateRssFeed from "@/helpers/generateRssFeed";
import getPostContent from "@/helpers/getPostContent";
import PostContent from "@/components/posts/PostContent";

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  await generateRssFeed(posts);
  return posts.map((post: any) => ({
    slug: post.slug,
  }));
};

const Post = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  const PostData: PostData = {
    content: post?.content,
    data: {
      title: post?.data.title,
      subtitle: post?.data.subtitle,
      date: post?.data.date,
      cover: post?.data.cover,
      tags: post?.data.tags,
    },
    slug: slug
  };

  return <PostContent post={PostData} />;
};

export default Post;
