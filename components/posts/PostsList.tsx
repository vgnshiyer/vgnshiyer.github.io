"use client";

import Fuse from "fuse.js";
import Link from "next/link";
import { useEffect, useState } from "react";

import PageTitle from "@/components/PageTitle";
import PostPreview from "@/components/posts/PostPreview";
import TagsList from "../tags/TagsList";

const PostsList = ({ posts, tag }: { posts: Array<any>, tag: string }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(posts);

  useEffect(() => {
    const fuse = new Fuse(posts, {
      keys: ["title", "subtitle", "tags"],
      threshold: 0.3,
    });

    if (searchQuery.length > 0) {
      setFilteredPosts(fuse.search(searchQuery).map((result) => result.item));
    } else {
      setFilteredPosts(posts);
    }
  }, [searchQuery, posts]);


  const postPreviews = filteredPosts.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <>
      <div className="flex flex-row justify-between gap-2">
        <PageTitle title="Posts." />
        <input
          type="text"
          placeholder="Search posts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="
            p-2
            mt-2
            px-4
            text-lg
            text-black
            dark:text-white
            bg-semi-light
            dark:bg-semi-dark
            border-none
            rounded-2xl
            shadow-md
            focus:ring-2
            focus:ring-primary-light
            dark:focus:ring-primary-dark
            focus:outline-none
            dark:focus:outline-none
          "
        />
      </div>

      <Link
        href="/tags"
        className="text-tertiary-light dark:text-tertiary-dark -mt-3 -mb-2 text-sm font-semibold hover:underline md:text-base"
      >
        Explore tags »
      </Link>

      {tag !== "all" && (
        <TagsList tags={[tag]} ignoreCount={true} />
      )}
      {postPreviews && postPreviews.length > 0 ? (
        postPreviews
      ) : (
        <p className="text-tertiary-light dark:text-tertiary-dark text-lg mt-10">
          No posts found ? 🤔 Try seaching something else...
        </p>
      )}
    </>
  );
};

export default PostsList;
