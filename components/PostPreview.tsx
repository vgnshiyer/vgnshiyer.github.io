import Link from "next/link";
import { PostMetadata } from "../types/PostMetadata";

const PostPreview = (props: PostMetadata) => {
    return (
        <div className="rounded-xl shadow-md bg-semi-light dark:bg-semi-dark flex flex-col md:flex-row items-start">
            {props.cover && (
                <img
                    className="rounded-lg w-full md:w-44 mr-4 object-cover h-48 md:h-full"
                    src={props.cover}
                    alt={`Cover image for ${props.title}`}
                />
            )}
            <div className="p-6">
                <Link href={`/posts/${props.slug}`}>
                    <h2 className="text-xl text-black dark:text-white font-bold hover:underline">{props.title}</h2>
                </Link>
                <p className="text-md text-tertiary-dark dark:text-tertiary-dark">{props.subtitle}</p>
                <p className="mt-2 text-sm text-contrast-light dark:text-contrast-dark">{new Date(props.date).toDateString()}</p>
            </div>
        </div>
    );
};

export default PostPreview;