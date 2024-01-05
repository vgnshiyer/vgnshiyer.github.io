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

                {/* Post content */}
                <article className="prose lg:prose-xl">
                    <Markdown
                        options={{
                            overrides: {
                                h3: {
                                    props: {
                                        className: 'text-3xl text-black dark:text-white font-bold'
                                    }
                                },
                                p: {
                                    props: {
                                        className: 'text-tertiary-light dark:text-tertiary-dark mt-4'
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
                                }
                            },
                        }}
                    >{post.content}</Markdown>
                </article>
            </div>
            <TableOfContents headings={headings} />
        </div>
    )
}

export default PostPage