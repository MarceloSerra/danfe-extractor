const getValue = (rawValue) => {
	const PATTERN_TO_SPLIT = "%2C";
	const PATTERN_TO_JOIN = ".";

	return rawValue.split(PATTERN_TO_SPLIT).join(PATTERN_TO_JOIN);
};

export { getValue };
