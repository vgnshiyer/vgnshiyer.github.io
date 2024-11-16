import Link from "next/link";
import getAllTags from "@/helpers/getAllTags";
import { FaTag } from "react-icons/fa";

const TagsList = () => {
  const tags = getAllTags();
  const uniqueTags = new Map();
  tags.forEach((tag) => {
    uniqueTags.set(tag, uniqueTags.get(tag) + 1 || 1);
  });

  return (
    <div className="flex flex-wrap gap-2">
      {Array.from(uniqueTags).map(([tag, count]) => (
        <Link key={tag} href={`/tags/${tag}`}>
          <span
            className="
							bg-semi-light
							dark:bg-semi-dark
							text-tertiary-light
							dark:text-tertiary-dark
							flex
							cursor-pointer
							items-center
							rounded-md
							px-2
							py-1
							font-semibold
							hover:bg-gray-300
							dark:hover:bg-gray-700
							"
          >
            <FaTag className="mr-2" /> {tag.replace(/_/g, " ")} ({count})
          </span>
        </Link>
      ))}
    </div>
  );
};

export default TagsList;
