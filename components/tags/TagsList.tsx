import Link from "next/link";
import { FaTag } from "react-icons/fa";

const TagsList = ({ tags, classNames = "", ignoreCount = false }: { tags: String[], classNames?: string, ignoreCount?: boolean }) => {
  const uniqueTags = new Map();
  tags.forEach((tag: String) => {
    uniqueTags.set(tag, uniqueTags.get(tag) + 1 || 1);
  });

  return (
    <div className={`flex flex-wrap gap-2 ${classNames}`}>
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
            <FaTag className="mr-2" /> {tag.replace(/_/g, " ")} {!ignoreCount && `(${count})`}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default TagsList;
