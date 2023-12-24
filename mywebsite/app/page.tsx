import React from 'react'
import Link from 'next/link';
import getPostMetadata from '@/components/getPostMetadata';

export default function page() {
    const postMetadata = getPostMetadata();
    const postPreviews = postMetadata.map((post) => (
        <div>
            <Link href={`/posts/${post.slug}`}>
                <h2>{post.title}</h2>
            </Link>
            <p>{new Date(post.date).toDateString()}</p>
        </div>
    ));

    return (
        <div>
            {postPreviews}
        </div>
    );
}
