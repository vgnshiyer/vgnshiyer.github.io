"use client";

import hljs from "highlight.js";
import { useEffect, useState } from "react";

import FullScreenImage from "@/components/posts/FullScreenImage";
import TableOfContents from "@/components/posts/TableOfContents";
import TagsList from "@/components/tags/TagsList";
import PostMarkdown from "@/components/posts/PostMarkdown";
import SubscriptionLink from "@/components/posts/Subscription";
import PostHeader from "@/components/posts/PostHeader";
import getMarkdownHeadings from "@/helpers/getMarkdownHeadings";

const addCopyButtons = () => {
  const codeBlocks = document.querySelectorAll("pre");
  codeBlocks.forEach((codeBlock) => {
    if (codeBlock.querySelector(".code-copy-button")) {
      return;
    }
    const button = document.createElement("button");
    button.className =
      "code-copy-button absolute top-0 right-0 p-1 rounded-md text-tertiary-dark bg-gray-700 hover:text-white cursor-pointer text-xs md:text-sm mr-1 mt-1 hidden group-hover:block";
    button.type = "button";
    button.innerText = "Copy";
    button.title = "Copy code to clipboard";
    button.addEventListener("click", () => {
      let code = codeBlock.querySelector("code");
      if (code === undefined || code === null) {
        return;
      }
      navigator.clipboard.writeText(code.innerText);
      button.innerText = "Copied!";
      setTimeout(() => {
        button.innerText = "Copy";
      }, 1000);
    });
    codeBlock.append(button);
    codeBlock.classList.add("relative", "group");
  });
};

const PostContent = ({ post }: { post: any }) => {
  if (!post) {
    console.error(`No post found for slug: ${post.slug}`);
    return null;
  }
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const headings = getMarkdownHeadings(post.content);

  useEffect(() => {
    hljs.highlightAll();
    addCopyButtons();
  }, []);

  return (
    <div className="mt-10 flex sm:mx-8 md:mt-20">
      <div className="w-full lg:w-3/4">
        {/* Header */}
        <PostHeader post={post} />
        {/* Body */}
        <article className="prose lg:prose-xl relative overflow-hidden">
          <PostMarkdown
            content={post.content}
            options={{
              overrides: {
                img: {
                  component: ({ src, alt }: { src: string; alt: string }) => (
                    <img
                      src={src}
                      alt={alt}
                      className="cursor-pointer"
                      onClick={() => setImgSrc(src)}
                    />
                  ),
                },
              },
            }}
          />
          {imgSrc && (
            <FullScreenImage src={imgSrc} onClick={() => setImgSrc(null)} />
          )}
        </article>
        {/* Tags */}
        <div className="mt-4 border-b-2 border-gray-200 dark:border-gray-800"></div>
        {post.data.tags && (
          <div className="mb-4 mt-8">
            <TagsList
              tags={post.data.tags}
              classNames="mt-4"
              ignoreCount={true}
            />
          </div>
        )}
        {/* Footer */}
        <SubscriptionLink />
      </div>
      {/* Index */}
      <TableOfContents headings={headings} />
    </div>
  );
};

export default PostContent;
