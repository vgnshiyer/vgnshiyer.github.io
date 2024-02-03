'use client';

import React, { useEffect } from 'react'
import Markdown from 'markdown-to-jsx';
import TableOfContents from './TableOfContents';
import getMarkdownHeadings from '@/helpers/getMarkdownHeadings';
import Image from 'next/image';
import Link from 'next/link';
import { FaTag, FaCopy } from 'react-icons/fa';

const PostPage = ( { post }: { post: any } ) => {
    if (!post) {
        console.error(`No post found for slug: ${post.slug}`);
        return null;
    }

    const headings = getMarkdownHeadings(post.content);

    const addCopyButtons = () => {
        const codeBlocks = document.querySelectorAll('pre');
        codeBlocks.forEach((codeBlock) => {
            if (codeBlock.querySelector('.code-copy-button')) {
                return;
            }

            const button = document.createElement('button');
            button.className = 'code-copy-button absolute top-0 right-0 p-1 bg-semi-light dark:bg-semi-dark rounded-md text-tertiary-light dark:text-tertiary-dark hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer text-xs md:text-sm mr-1 mt-1';
            button.type = 'button';
            button.innerText = 'Copy';
            button.title = 'Copy code to clipboard';
            button.addEventListener('click', () => {
                let code = codeBlock.querySelector('code');
                if (code === undefined || code === null) {
                    return;
                }
                navigator.clipboard.writeText(code.innerText);
                button.innerText = 'Copied!';
                setTimeout(() => {
                    button.innerText = 'Copy';
                }, 1000);
            });
            codeBlock.append(button);
            codeBlock.classList.add('relative');
        });
    }

    useEffect(() => {
        addCopyButtons();
    },[]);

    return (
        <div className="flex sm:mx-8 mt-10 md:mt-20">
            <div className="w-full lg:w-3/4">
                {/* Post title */}
                <h1 className="text-3xl text-black dark:text-white font-bold">{post.data.title}</h1>
                {/* Post subtitle */}
                <p className="text-tertiary-light dark:text-tertiary-dark mt-4">{post.data.subtitle}</p>
                {/* Post date */}
                <p className="text-sm text-contrast-light dark:text-contrast-dark mt-2">{post.data.date}</p>
                <div className="border-b-2 border-gray-200 dark:border-gray-800 mt-8"></div>

                {/* Post cover image */}
                <Image src={post.data.cover} alt="Post cover" width={700} height={700} className="mt-8 rounded-md" loading="lazy" />

                {/* Post content */}
                <article className="prose lg:prose-xl relative overflow-hidden">
                    <Markdown
                        options={{
                            overrides: {
                                h2: {
                                    props: {
                                        className: 'text-4xl text-black dark:text-white font-bold'
                                    }
                                },
                                h3: {
                                    props: {
                                        className: 'text-3xl text-black dark:text-white font-bold'
                                    }
                                },
                                h4: {
                                    props: {
                                        className: 'text-2xl text-black dark:text-white font-bold'
                                    }
                                },
                                p: {
                                    props: {
                                        className: 'text-tertiary-light dark:text-tertiary-dark'
                                    }
                                },
                                li: {
                                    props: {
                                        className: 'text-tertiary-light dark:text-tertiary-dark leading-tight'
                                    }
                                },
                                strong: {
                                    props: {
                                        className: 'font-bold text-black dark:text-white'
                                    }
                                },
                                pre: {
                                    props: {
                                        className: 'rounded-md p-4 bg-semi-light dark:bg-semi-dark'
                                    }
                                },
                                code: {
                                    props: {
                                        className: 'text-tertiary-light dark:text-tertiary-dark'
                                    }
                                },
                                a: {
                                    props: {
                                        className: 'text-tertiary-light dark:text-tertiary-dark hover:text-contrast-light dark:hover:text-contrast-dark'
                                    }
                                },
                            },
                        }}
                    >{post.content}</Markdown>
                </article>
                <div className="border-b-2 border-gray-200 dark:border-gray-800 mt-4"></div>
                {/* Post tags */}
                {
                    post.data.tags && (
                        <div className="mt-8 mb-4">
                            <div className="flex gap-2 mt-4 flex-wrap">
                                {post.data.tags.map((tag: string, index: number) => (
                                    <Link key={index} href={`/tags/${tag}`}>
                                        <span
                                        className="
                                            bg-semi-light
                                            dark:bg-semi-dark
                                            text-tertiary-light
                                            dark:text-tertiary-dark 
                                            px-2 
                                            py-1 
                                            rounded-md
                                            text-sm
                                            md:text-base
                                            lg:text-lg
                                            hover:bg-gray-300
                                            dark:hover:bg-gray-700
                                            cursor-pointer
                                            flex
                                            items-center
                                            font-semibold"
                                        >
                                            <FaTag className="mr-2" /> {tag.replace(/_/g, ' ')}
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )
                }
                <p className="text-tertiary-light dark:text-tertiary-dark text-xl mt-8">Subscribe to my <a href="https://vgnshiyer.dev/feed.xml" className="text-contrast-light dark:text-contrast-dark hover:underline">RSS feed</a> to get notified about new posts.</p>
            </div>
            <TableOfContents headings={headings} />
        </div>
    )
}

export default PostPage;
