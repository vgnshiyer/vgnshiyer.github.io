import React from "react";

import getAllUniqueTags from "@/helpers/getAllUniqueTags";
import getPostMetadata from "@/helpers/getPostMetadata";
import PostsList from "@/components/posts/PostsList";

export const generateStaticParams = () => {
  const tags = getAllUniqueTags();
  return tags.map((tag) => ({
    tag: tag,
  }));
};

const page = (props: any) => {
  const tag = props.params.tag;
  const posts = tag === "all" ? getPostMetadata() : getPostMetadata().filter((post) => post.tags.includes(tag));
  return (
    <div className="mt-12 grid grid-cols-1 gap-4 sm:mx-8 md:mt-16 lg:mt-20 2xl:mt-24">
      <PostsList posts={posts} tag={tag} />
    </div>
  )
};

export default page;
