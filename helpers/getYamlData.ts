import fs from "fs";
import yaml from "js-yaml";

const getYamlData = (filename: String) => {
  const filePath = "public/" + filename + ".yml";
  const content = fs.readFileSync(filePath, "utf8");
  const data = yaml.load(content);
  return data;
};

export default getYamlData;
