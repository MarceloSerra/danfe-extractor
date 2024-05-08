import fs from "fs";
import config from "../config/config.js";

const clearOutput = () => {
	console.log("Cleaning started...");

	const TEMP_FILE = `${config.dir.output}/temp`;
	const LAST_OUTPUT_RESULT_FILE = `${config.dir.output}/result.json`;

	const FILES = [TEMP_FILE, LAST_OUTPUT_RESULT_FILE];

	FILES.forEach((file) => {
		try {
			const hasFile = fs.readFileSync(file);

			if (hasFile) {
				fs.rmSync(file);
			}
		} catch (err) {
			console.info("No such file.");
		}
	});

	console.log("Done!");
};

clearOutput();
