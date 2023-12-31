import Link from "next/link";
import { PostMetadata } from "../types/PostMetadata";


const PostPreview = (props: PostMetadata) => {
    return (
        <div className="p-8 mx-2 md:mx-8 lg:mx-12 rounded-xl shadow-md bg-semi-dark">
            <Link href={`/posts/${props.slug}`}>
                <h2 className="text-xl text-white font-bold hover:underline">{props.title}</h2>
            </Link>
            <p className="text-md text-slate-300">{props.subtitle}</p>
            <p className="mt-2 text-sm text-secondary">{new Date(props.date).toDateString()}</p>
        </div>
    );
};

export default PostPreview;