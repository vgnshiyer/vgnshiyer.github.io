import React from "react";

import PostsList from "@/components/posts/PostsList";
import getPostMetadata from "@/helpers/getPostMetadata";

const Posts = () => {
  const allPosts = getPostMetadata();
  return (
    <div className="mt-12 grid grid-cols-1 gap-4 sm:mx-8 md:mt-16 lg:mt-20 2xl:mt-24">
      <PostsList posts={allPosts} tag="all" />
    </div>
  )
};

export default Posts;
