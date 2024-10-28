import getAllUniqueTags from "@/helpers/getAllUniqueTags";
import getPostMetadata from "@/helpers/getPostMetadata";
import AllPostsPage from "@/components/AllPostsPage";
import React from "react";

export const generateStaticParams = () => {
  const tags = getAllUniqueTags();
  return tags.map((tag) => ({
    tag: tag,
  }));
};

const page = (props: any) => {
  const tag = props.params.tag;
  const posts = tag === "all" ? getPostMetadata() : getPostMetadata().filter((post) => post.tags.includes(tag));
  return <AllPostsPage posts={posts} tag={tag} />;
};

export default page;
