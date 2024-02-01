import PostListView from '@/components/PostListView';
import getAllTags from '@/helpers/getAllTags';
import React from 'react'

export const generateStaticParams = () => {
  const tags = getAllTags().map((tag) => tag.replace(/ /g, '%20'));
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