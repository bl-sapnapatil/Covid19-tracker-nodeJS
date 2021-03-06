module.exports = {
	env: {
		es6: true,
		node: true,
		commonjs: true,
	},
	plugins: ['eslint-plugin-prettier', 'import'],
	extends: ['eslint:recommended'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: { ecmaVersion: 2020, sourceType: 'module' },
	ignorePatterns: ['./node_modules/', './.vscode/*', './images.dev.bridgelabz.com/*', './.git/*'],
	rules: {
		'prettier/prettier': [
			'error',
			{
				trailingComma: 'es5',
				singleQuote: true,
				printWidth: 120,
				tabWidth: 4,
			},
		],
		'no-mixed-spaces-and-tabs': 'error',
		indent: [1, 'tab', { VariableDeclarator: { var: 1, let: 1, const: 1 }, SwitchCase: 1 }],
		'no-unused-vars': [
			'error',
			{
				vars: 'all',
				args: 'after-used',
				ignoreRestSiblings: false,
			},
		],
		'arrow-parens': ['error', 'as-needed'], //es6
		'linebreak-style': ['error', 'unix'],
		'max-len': ['error', { code: 120 }],
		'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'off' : 'warn',
		'no-control-regex': 'error',
		'no-duplicate-case': 'error',
		'no-empty': 'error',
		'no-empty-character-class': 'error',
		'no-extra-boolean-cast': 'error',
		'no-extra-semi': 'error',
		'no-invalid-regexp': 'error',
		'no-irregular-whitespace': 'error',
		'no-sparse-arrays': 'error',
		'no-unexpected-multiline': 'error',
		'no-var': 'off', //es6
		'prefer-const': 'off', //es6
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'use-isnan': 'error',
		'valid-typeof': 'error',
	},
};
