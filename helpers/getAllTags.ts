import getPostMetadata from "./getPostMetadata";

const getAllTags = (): String[] => {
  const tags = getPostMetadata().map((post) => post.tags).flat();
  const uniqueTags = Array.from(new Set(tags));
  return uniqueTags;
};

export default getAllTags;