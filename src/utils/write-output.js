import config from "../config/config.js";
import fs from "fs";

const writeOutput = (value) => {
	fs.writeFileSync(`${config.dir.output}/result.json`, JSON.stringify(value));
};

export { writeOutput };
