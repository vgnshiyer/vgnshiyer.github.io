import PostListView from '@/components/PostListView';
import getAllUniqueTags from '@/helpers/getAllUniqueTags';
import React from 'react'

export const generateStaticParams = () => {
  const tags = getAllUniqueTags();
  tags.push('all');
  return tags.map((tag) => ({
    tag: tag,
  }));
};

const page = (props: any) => {
  const tag = props.params.tag;

  return (
    <PostListView tag={tag} />
  )
}

export default page