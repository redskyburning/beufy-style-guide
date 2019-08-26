module.exports = {
	root: true,
	env: {
		node: true,
	},
	'extends': [
		'plugin:vue/base',
	],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'key-spacing'                : 'off',
		'space-before-function-paren': ['error', 'never'],
		'indent'                     : ['warn', 'tab'],
		'no-tabs'                    : ['warn', {allowIndentationTabs: true}],
		'semi'                       : ['error', 'always'],
		'comma-dangle'               : ['warn', 'always-multiline'],
		'no-mixed-spaces-and-tabs'   : ['warn', 'smart-tabs'],
		"vue/max-attributes-per-line": ["error", {
			"singleline": 1,
			"multiline": {
				"max": 1,
				"allowFirstLine": true,
			},
		}],
		"vue/html-indent": ["warn", 'tab', {
			"attribute": 1,
			"baseIndent": 1,
			"closeBracket": 0,
			"alignAttributesVertically": true,
			"ignores": [],
		}],
		'vue/no-use-v-if-with-v-for': 'warn',
	},
	parserOptions: {
		parser: 'babel-eslint',
	},
};
