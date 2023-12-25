import Link from "next/link";
import { PostMetadata } from "./PostMetadata";


const PostPreview = (props: PostMetadata) => {
    return (
        <div className="border border-violet-200 p-4 rounded-md shadow-md bg-white">
            <Link href={`/posts/${props.slug}`}>
                <h2 className="font-bold text-violet-600 hover:underline">{props.title}</h2>
            </Link>
            <p className="text-slate-700">By: {props.author}</p>
            <p className="text-sm text-slate-400">{new Date(props.date).toDateString()}</p>
        </div>
    );
};

export default PostPreview;