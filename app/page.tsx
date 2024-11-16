import React from "react";
import Link from "next/link";
import getPostMetadata from "@/helpers/getPostMetadata";
import PostPreview from "@/components/posts/PostPreview";
import Banner from "@/components/Banner";
import PageTitle from "@/components/PageTitle";

export default function page() {
  const getFiveRecentPosts = () => {
    const postMetadata = getPostMetadata();
    return postMetadata.splice(0, 5);
  };
  const fiveRecentPosts = getFiveRecentPosts();
  const postPreviews = fiveRecentPosts.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));
  return (
    <>
      <Banner />
      <div className="grid grid-cols-1 gap-4 sm:mx-8">
        <PageTitle title="Posts." />
        {postPreviews}
      </div>
      <div className="mt-8 flex justify-end space-x-4 sm:mx-8">
        <Link
          href="/posts"
          className="text-tertiary-light dark:text-tertiary-dark -mb-2 text-sm font-semibold hover:underline md:text-base"
        >
          View more »
        </Link>
      </div>
    </>
  );
}
