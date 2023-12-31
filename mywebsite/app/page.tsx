import React from 'react'
import getPostMetadata from '@/helpers/getPostMetadata';
import PostPreview from '@/components/PostPreview';
import Banner from '@/components/Banner';
import Readme from '@/components/Readme';

export default function page() {
    const postMetadata = getPostMetadata();
    const postPreviews = postMetadata.map((post) => (
        <PostPreview key={post.slug} {...post} />
    ));

    return (
        <>
            <Banner />
            <div className='grid grid-cols-1 gap-4'>
                <h1 className='text-3xl ml-4 md:ml-8 lg:ml-12 text-white font-bold'>Posts.</h1>
                {postPreviews}
            </div>
            <Readme />
        </>
    );
}
