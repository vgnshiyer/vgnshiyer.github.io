import Image from "next/image";

const PostHeader = ({ post }: { post: any }) => (
  <>
    <h1 className="text-3xl font-bold text-black dark:text-white">
      {post.data.title}
    </h1>
    <p className="text-tertiary-light dark:text-tertiary-dark mt-4">
      {post.data.subtitle}
    </p>
    <p className="text-contrast-light dark:text-contrast-dark mt-2 text-sm">
      {post.data.date}
    </p>
    <div className="mt-8 border-b-2 border-gray-200 dark:border-gray-800"></div>
    <Image
      src={post.data.cover}
      alt="Post cover"
      width={700}
      height={700}
      className="mt-8 rounded-md"
      loading="lazy"
    />
  </>
);

export default PostHeader;
