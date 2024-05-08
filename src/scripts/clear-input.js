import config from "../config/config.js";
import fs from "fs";

const clearInput = () => {
	try {
		fs.rmSync(config.dir.input, { recursive: true });
	} catch (err) {
		console.info("No such folder.");
	} finally {
		console.info("Creating empty folder...");
		fs.mkdirSync(config.dir.input);
		console.info("Created!");
	}
};

clearInput();
