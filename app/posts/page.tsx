import AllPostsPage from "@/components/AllPostsPage";
import getPostMetadata from "@/helpers/getPostMetadata";
import React from "react";

const Posts = () => {
  const allPosts = getPostMetadata();
  return <AllPostsPage posts={allPosts} tag="all" />;
};

export default Posts;
