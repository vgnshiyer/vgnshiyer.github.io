import getPostMetadata from '@/helpers/getPostMetadata'
import React from 'react'
import PostPreview from './PostPreview';
import { FaTag } from 'react-icons/fa';
import Link from 'next/link';

const PostListView = ({ tag }: { tag: string }) => {
  const allPosts = getPostMetadata();
  const posts = tag  === 'all' ? allPosts : allPosts.filter((post) => post.tags.includes(tag));
  const postPreviews = posts.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:mx-8 mt-12 md:mt-16 lg:mt-20 2xl:mt-24">
      <h1 className='text-3xl text-black dark:text-white font-bold'>Posts.</h1>
        <Link href="/tags" className="text-sm md:text-base font-semibold text-tertiary-light dark:text-tertiary-dark hover:underline -mb-2">View tags »</Link>
        {tag !== 'all' && (
          <div className="flex">
            <span
              className="
                bg-semi-light
                dark:bg-semi-dark
                text-tertiary-light
                dark:text-tertiary-dark
                hover:bg-gray-300
                dark:hover:bg-gray-700
                px-2 py-1
                rounded-md
                text-base
                lg:text-lg
                font-semibold
                flex
                items-center
                mb-6
              ">
                <FaTag className="mr-2"/> {tag.replace(/_/g, ' ')}
              </span>
            </div>
            )}
        {postPreviews}
      </div>
    </>
  )
}

export default PostListView