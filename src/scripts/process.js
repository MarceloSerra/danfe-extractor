import { sum } from "../utils/sum-value.js";
import { outputValues } from "../utils/read-output.js";
import { writeOutput } from "../utils/write-output.js";

const process = async () => {
	console.log("Process started...");

	const values = outputValues();

	const result = {
		_metadata: {
			timestamp: Date.now(),
		},
		data: {
			notes: values.length,
			total: sum(values).toFixed(2),
		},
	};

	console.log(result);
	writeOutput(result);

	console.log("Done!");
};

await process();
