import getPostMetadata from "@/helpers/getPostMetadata";
import React from "react";
import PostPreview from "@/components/PostPreview";
import { FaTag } from "react-icons/fa";
import Link from "next/link";

const AllPostsPage = ({ tag }: { tag: string }) => {
  const allPosts = getPostMetadata();
  const posts =
    tag === "all"
      ? allPosts
      : allPosts.filter((post) => post.tags.includes(tag));
  const postPreviews = posts.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div className="mt-12 grid grid-cols-1 gap-4 sm:mx-8 md:mt-16 lg:mt-20 2xl:mt-24">
        <h1 className="text-3xl font-bold text-black dark:text-white">
          Posts.
        </h1>
        <Link
          href="/tags"
          className="text-tertiary-light dark:text-tertiary-dark -mb-2 text-sm font-semibold hover:underline md:text-base"
        >
          Explore tags »
        </Link>
        {tag !== "all" && (
          <div className="flex">
            <span
              className="
                bg-semi-light
                dark:bg-semi-dark
                text-tertiary-light
                dark:text-tertiary-dark
                mb-6
                flex
                items-center rounded-md
                px-2
                py-1
                text-base
                font-semibold
                hover:bg-gray-300
                lg:text-lg
                dark:hover:bg-gray-700
              "
            >
              <FaTag className="mr-2" /> {tag.replace(/_/g, " ")}
            </span>
          </div>
        )}
        {postPreviews}
      </div>
  );
};

export default AllPostsPage;
