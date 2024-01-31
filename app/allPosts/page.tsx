import PostPreview from '@/components/PostPreview';
import getPostMetadata from '@/helpers/getPostMetadata';
import { PostMetadata } from '@/types/PostMetadata';
import React from 'react';
import { useSearchParams } from 'next/navigation';

const page = () => {
  // const tag = useSearchParams().get('tag');
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post: PostMetadata) => (
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