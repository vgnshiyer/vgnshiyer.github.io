import fs from "fs";
import yaml from "js-yaml";
import { NowItem } from "@/types/NowItem";

const getNowData = () => {
  const filePath = "public/now.xml";
  const content = fs.readFileSync(filePath, "utf8");
  const data = yaml.load(content);
  return data;
};

export default getNowData;
