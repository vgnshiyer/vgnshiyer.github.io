import React from 'react'
import getPostMetadata from '@/helpers/getPostMetadata';
import PostPreview from '@/components/PostPreview';
import Banner from '@/components/Banner';
import Link from 'next/link';

export default function page() {
    const getFiveRecentPosts = () => {
        const postMetadata = getPostMetadata();
        return postMetadata.splice(0, 5);
    };
    const fiveRecentPosts = getFiveRecentPosts();
    const postPreviews = fiveRecentPosts
        .map((post) => (
            <PostPreview key={post.slug} {...post} />
        ));

    return (
        <>
            <Banner />
            <div className='grid grid-cols-1 gap-4 sm:mx-8'>
                <h1 className='text-3xl text-black dark:text-white font-bold'>Posts.</h1>
                {postPreviews}
            </div>
            <div className="flex justify-end mt-8 space-x-4 sm:mx-8">
                <Link href="/tags/all" className="text-sm md:text-base font-semibold text-tertiary-light dark:text-tertiary-dark hover:underline -mb-2">View more »</Link>
            </div>
        </>
    );
}
