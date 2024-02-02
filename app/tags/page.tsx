import getAllTags from '@/helpers/getAllTags';
import Link from 'next/link';
import React from 'react'
import { FaTag } from 'react-icons/fa';

const Tags = () => {
  const tags = getAllTags();
  const uniqueTags = new Map();
  tags.forEach((tag) => {
    uniqueTags.set(tag, uniqueTags.get(tag) + 1 || 1);
  });

  return (
    <>
    <div className="grid grid-cols-1 gap-4 sm:mx-8 mt-12 md:mt-16 lg:mt-20 2xl:mt-24">
      <h1 className='text-3xl text-black dark:text-white font-bold'>Tags.</h1>
      <div className="flex flex-wrap gap-2">
        {Array.from(uniqueTags).map(([tag, count]) => (
          <Link key={tag} href={`/tags/${tag}`}>
            <span
              className="
                bg-semi-light
                dark:bg-semi-dark
                text-tertiary-light
                dark:text-tertiary-dark 
                px-2 
                py-1 
                rounded-md
                cursor-pointer
                hover:bg-gray-300
                dark:hover:bg-gray-700
                flex
                items-center
                font-semibold
                "
            >
              <FaTag className="mr-2" /> {tag.replace(/_/g, ' ')} ({count})
            </span>
          </Link>
        ))}
      </div>
    </div>
    </>
  )
}

export default Tags;