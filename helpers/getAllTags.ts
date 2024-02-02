import getPostMetadata from "./getPostMetadata";

const getAllTags = (): String[] => {
  const tags = getPostMetadata().map((post) => post.tags).flat();
  return tags;
};

export default getAllTags;