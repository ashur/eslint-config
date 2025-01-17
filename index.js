module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: "eslint:recommended",
	rules: {
		"arrow-parens": ["error", "always"],
		"brace-style": ["error", "allman"],
		camelcase: "warn",
		"comma-dangle": ["error", "always-multiline"],
		indent: ["error", "tab"],
		"max-len": [0, {
			ignoreComments: true,
			ignoreTrailingComments: true,
			ignoreUrls: true,
			ignoreStrings: true,
			ignoreTemplateLiterals: true,
			ignoreRegExpLiterals: true,
			ignorePattern: true,
		}],
		"new-cap": "warn",
		"no-console": "warn",
		"no-invalid-this": "error",
		"no-negated-condition": "warn",
		"no-unused-vars": ["error", {
			argsIgnorePattern: "^_",
			varsIgnorePattern: "^_",
		}],
		"object-curly-spacing": ["error", "always"],
		"quote-props": ["error", "as-needed"],
		quotes: ["error", "double"],
		"require-jsdoc": ["error", {
			require: {
				FunctionDeclaration: true,
			},
		}],
		semi: ["error", "always"],
		"sort-requires/sort-requires": 2,
		"sort-vars": ["error", {
			ignoreCase: true,
		}],
		"space-in-parens": ["error", "always", {
			exceptions: ["empty"],
		}],
		"valid-jsdoc": ["error", {
			prefer: {
				returns: "return",
			},
			requireParamDescription: false,
			requireReturn: true,
			requireReturnDescription: false,
		}],
	},
	parserOptions: {
		sourceType: "module",
	},
	plugins: [
		"sort-requires",
	],
};
