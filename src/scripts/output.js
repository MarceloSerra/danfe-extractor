import config from "../config/config.js";
import fs from "fs";

const result = () => {
	try {
		const resultFile = fs
			.readFileSync(`${config.dir.output}/result.json`)
			.toString();

		console.log(JSON.parse(resultFile));
	} catch (err) {
		console.info("No such file.");
	}
};

result();
