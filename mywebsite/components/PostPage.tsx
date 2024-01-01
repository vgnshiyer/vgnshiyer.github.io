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
        <div className='flex'>
            <div className='w-full lg:w-3/4'>
                <h1 className='text-3xl text-white font-bold'>{post.data.title}</h1>
                <p className='text-slate-300 mt-4'>{post.data.subtitle}</p>
                <article className='prose lg:prose-xl'>
                    <Markdown>{post.content}</Markdown>
                </article>
            </div>
            <TableOfContents headings={headings} />
        </div>
    )
}

export default PostPage