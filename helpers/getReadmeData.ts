import fs from "fs";
import matter from "gray-matter";

const getReadmeData = () => {
  const folder = "public/";
  const file = `${folder}readme.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export default getReadmeData;
