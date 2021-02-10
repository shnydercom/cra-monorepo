const path = require('path');
const { getLoader, loaderByName } = require('@craco/craco');
const absolutePath = path.join(__dirname, '../components');

module.exports = {
	webpack: {
		alias: {},
		plugins: [],
		configure: (config) => {
			const { isFound, match } = getLoader(config, loaderByName('babel-loader'));
			if (isFound) {
				match.loader.include = [
					...(Array.isArray(match.loader.include) ? match.loader.include : [match.loader.include]),
					absolutePath,
				];
			}
			return config;
		},
	},
};
