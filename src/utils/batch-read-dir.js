import fs from "fs";

const batchReadFrom = (path) => {
	const files = fs.readdirSync(path, { withFileTypes: true });
	return files.map((file) => file.name).filter((file) => file.endsWith(".pdf"));
};

export { batchReadFrom };
