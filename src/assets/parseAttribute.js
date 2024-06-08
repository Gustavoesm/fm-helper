const parseAttribute = (value) => Math.min(20, Math.max(0, Number(value) || 0));

export default parseAttribute;
