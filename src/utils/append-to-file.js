import config from "../config/config.js";
import fs from "fs";

const append = (content) => {
	fs.appendFileSync(`${config.dir.output}temp`, `@${content}`);
};

export { append };
