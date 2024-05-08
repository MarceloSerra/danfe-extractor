import { batchReadFrom } from "../utils/batch-read-dir.js";
import { load } from "../utils/pdf-to-json.js";
import config from "../config/config.js";

const extract = async (config) => {
	const filenames = batchReadFrom(config.dir.input);

	let baseProgress = 100 / filenames.length;
	let progress = baseProgress;

	const updateProgress = () => {
		console.clear();
		progress += baseProgress;
		console.log("Extracting started... " + `[ ${progress.toFixed(0)} %]`);
	};

	for (const filename of filenames) {
		updateProgress();
		await load(filename);
	}

	console.log("Done!");
};

await extract(config);
