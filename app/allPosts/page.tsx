import PostPreview from '@/components/PostPreview';
import getPostMetadata from '@/helpers/getPostMetadata'
import React from 'react'

const page = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
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

export default page