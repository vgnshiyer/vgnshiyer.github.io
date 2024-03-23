import getAllUniqueTags from "@/helpers/getAllUniqueTags";
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

  return <AllPostsPage tag={tag} />;
};

export default page;
