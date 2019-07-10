module.exports = {
	css : {
		sourceMap: process.env.NODE_ENV === 'development',
		extract: process.env.NODE_ENV !== 'development',
	}
};
