import getPostMetadata from '@/helpers/getPostMetadata'
import React from 'react'
import PostPreview from './PostPreview';

const PostListView = ({ tag }: { tag: string }) => {
  const allPosts = getPostMetadata();
  const posts = tag  === 'all' ? allPosts : allPosts.filter((post) => post.tags.includes(tag));
  const postPreviews = posts.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:mx-8 mt-12 md:mt-16 lg:mt-20 2xl:mt-24">
        {postPreviews}
      </div>
    </>
  )
}

export default PostListView