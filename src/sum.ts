import fs from "fs";

const writeFile = (str) => {
  fs.writeFileSync("data.json", str);
};

export default writeFile;
