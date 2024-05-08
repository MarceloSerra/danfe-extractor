const INPUT_DIR = "input/";
const OUTPUT_DIR = "output/";

const CURRENT_CWD = process.cwd();
const CURRENT_SOURCE = "src";

const config = {
	dir: {
		input: `${CURRENT_CWD}/${CURRENT_SOURCE}/${INPUT_DIR}`,
		output: `${CURRENT_CWD}/${CURRENT_SOURCE}/${OUTPUT_DIR}`,
	},
};

export default config;
