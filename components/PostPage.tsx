"use client";

import React, { useEffect, useState } from "react";
import Markdown from "markdown-to-jsx";
import Image from "next/image";
import Link from "next/link";
import { FaTag } from "react-icons/fa";
import hljs from "highlight.js";

import TableOfContents from "@/components/TableOfContents";
import FullScreenImage from "@/components/FullScreenImage";
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
      if (code === undefined || code === null) { return; }
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

const PostPage = ({ post }: { post: any }) => {
  if (!post) {
    console.error(`No post found for slug: ${post.slug}`);
    return null;
  }
  const [imgSrc, setImgSrc] = useState(null);
  const headings = getMarkdownHeadings(post.content);

  useEffect(() => {
    hljs.highlightAll()
    addCopyButtons();
  }, []);

  return (
    <div className="mt-10 flex sm:mx-8 md:mt-20">
      <div className="w-full lg:w-3/4">
        {/* Post title */}
        <h1 className="text-3xl font-bold text-black dark:text-white">
          {post.data.title}
        </h1>
        {/* Post subtitle */}
        <p className="text-tertiary-light dark:text-tertiary-dark mt-4">
          {post.data.subtitle}
        </p>
        {/* Post date */}
        <p className="text-contrast-light dark:text-contrast-dark mt-2 text-sm">
          {post.data.date}
        </p>
        <div className="mt-8 border-b-2 border-gray-200 dark:border-gray-800"></div>
        {/* Post cover image */}
        <Image
          src={post.data.cover}
          alt="Post cover"
          width={700}
          height={700}
          className="mt-8 rounded-md"
          loading="lazy"
        />
        {/* Post content */}
        <article className="prose lg:prose-xl relative overflow-hidden">
          <Markdown
            options={{
              overrides: {
                h2: { props: { className: "text-black dark:text-white font-bold", }, },
                h3: { props: { className: "text-black dark:text-white font-bold", }, },
                h4: { props: { className: "text-black dark:text-white font-bold", }, },
                p: { props: { className: "text-tertiary-light dark:text-tertiary-dark text-base", }, },
                li: { props: { className: "text-tertiary-light dark:text-tertiary-dark text-base", }, },
                strong: { props: { className: "font-bold text-black dark:text-white text-base", }, },
                pre: { props: { className: "rounded-md !p-2 !bg-semi-dark !text-base", }, },
                code: { props: { className: "!text-white !font-mono !text-sm", }, },
                img: {
                  component: ({src, alt}) => (
                    <img
                      src={src}
                      alt={alt}
                      className="cursor-pointer"
                      onClick={() => setImgSrc(src)}
                    />
                  ),
                },
                a: {
                  props: {
                    className:
                      "text-tertiary-light dark:text-tertiary-dark hover:text-contrast-light dark:hover:text-contrast-dark text-base",
                  },
                },
              },
            }}
          >
            {post.content}
          </Markdown>
          {imgSrc && <FullScreenImage src={imgSrc} onClick={() => setImgSrc(null)} />}
        </article>
        <div className="mt-4 border-b-2 border-gray-200 dark:border-gray-800"></div>
        {/* Post tags */}
        {post.data.tags && (
          <div className="mb-4 mt-8">
            <div className="mt-4 flex flex-wrap gap-2">
              {post.data.tags.map((tag: string, index: number) => (
                <Link key={index} href={`/tags/${tag}`}>
                  <span
                    className="
                      bg-semi-light
                      dark:bg-semi-dark
                      text-tertiary-light
                      dark:text-tertiary-dark
                      flex
                      cursor-pointer
                      items-center
                      rounded-md
                      px-2
                      py-1
                      text-base
                      font-semibold
                      hover:bg-gray-300
                      dark:hover:bg-gray-700"
                    >
                    <FaTag className="mr-2 text-sm" /> {tag.replace(/_/g, " ")}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
        <p className="text-tertiary-light dark:text-tertiary-dark mt-8 text-base">
          Subscribe to my{" "}
          <Link
            href="https://blog.vgnshiyer.dev/feed.xml"
            className="text-contrast-light dark:text-contrast-dark hover:underline"
          >
            RSS feed
          </Link>{" "}
          to get notified about new posts.
        </p>
      </div>
      <TableOfContents headings={headings} />
    </div>
  );
};

export default PostPage;
