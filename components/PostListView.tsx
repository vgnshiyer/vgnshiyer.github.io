import getPostMetadata from '@/helpers/getPostMetadata'
import React from 'react'
import PostPreview from './PostPreview';
import { FaTag } from 'react-icons/fa';

const PostListView = ({ tag }: { tag: string }) => {
  const allPosts = getPostMetadata();
  const posts = tag  === 'all' ? allPosts : allPosts.filter((post) => post.tags.includes(tag));
  const postPreviews = posts.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:mx-8 mt-12 md:mt-16 lg:mt-20 2xl:mt-24">
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
                mb-6
              ">
                <FaTag className="mt-1 mr-2"/> {tag.replace(/_/g, ' ')}
              </span>
            </div>
            )}
        {postPreviews}
      </div>
    </>
  )
}

export default PostListView