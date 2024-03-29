import fs from "fs";
import matter from "gray-matter";
import getFilesRecursively from "./getFilesRecursively";
import path from "path";

const getPostContent = (slug: string) => {
  const folder = "public/blogs/";
  const files = getFilesRecursively(folder);
  const markdownFiles = files.filter((fn) => fn.endsWith(".md"));
  const file = markdownFiles.find((fn) => path.basename(fn, ".md") === slug);

  if (!file) {
    console.warn("No file found for slug: ", slug);
    return;
  }

  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export default getPostContent;
