import fs from "fs";
import config from "../config/config.js";

const outputValues = () => {
	const SPLIT_PATTERN = "@";
	const values = fs.readFileSync(`${config.dir.output}/temp`);

	return Buffer.from(values).toString().split(SPLIT_PATTERN).splice(1);
};

export { outputValues };
