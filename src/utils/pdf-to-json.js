import PDFParser from "pdf2json";
import { getValue } from "../utils/get-value.js";
import config from "../config/config.js";
import { append } from "./append-to-file.js";

const SEARCH_PATTERN = "V.%20TOTAL%20DA%20NOTA";

const extract = (data) => {
	const textRuns = data.Pages[0].Texts.map((content) => content.R).flatMap(
		(content) => content
	);

	let searchValueIndex;

	textRuns.find(({ T }, index) => {
		searchValueIndex = index + 1;
		return T === SEARCH_PATTERN;
	});

	return getValue(textRuns[searchValueIndex].T);
};

const load = async (filePath) => {
	const pdfParser = new PDFParser();

	pdfParser.on("pdfParser_dataError", (errData) =>
		console.error(errData.parserError)
	);

	pdfParser.on("pdfParser_dataReady", (pdfData) => {
		const content = `@${extract(pdfData)}`;
		append(content);
	});

	await pdfParser.loadPDF(config.dir.input.concat(filePath));
};

export { load };
