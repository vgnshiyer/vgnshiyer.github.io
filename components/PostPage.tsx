import React from 'react'
import getPostConent from '@/helpers/getPostContent';
import Markdown from 'markdown-to-jsx';
import TableOfContents from './TableOfContents';
import getMarkdownHeadings from '@/helpers/getMarkdownHeadings';

const PostPage = ( props: any ) => {
    const slug = props.slug;
    const post = getPostConent(slug);

    if (!post) {
        console.error(`No post found for slug: ${slug}`);
        return null;
    }

    const headings = getMarkdownHeadings(post.content);

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
                <img src={post.data.cover} alt="Post cover" className="mt-8 rounded-md" />

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
                                        className: 'text-tertiary-light dark:text-tertiary-dark'
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
                                        className: 'text-black dark:text-white'
                                    }
                                },
                            },
                        }}
                    >{post.content}</Markdown>
                    {post.data.read_more && (
                        <div className="absolute bottom-0 left-0 right-0 h-52 bg-gradient-to-b from-transparent to-light dark:from-transparent dark:to-dark"></div>
                    )}
            </article>
            <br></br>
            {post.data.read_more && (
                <span className="text-black dark:text-white font-bold text-xl">Read the full article <a href={post.data.link} 
                    className="text-contrast-light dark:text-contrast-dark hover:underline">here</a>
                .</span>
            )}
            </div>
            <TableOfContents headings={headings} />
        </div>
    )
}

export default PostPage