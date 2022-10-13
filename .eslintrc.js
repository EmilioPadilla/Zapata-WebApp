module.exports = {
	env: {
		browser: true,
		node: true,
		es2021: true
	},
	extends: ['plugin:react/recommended', 'prettier'],
	rules: {
		'comma-dangle': ['error', 'never'],
		'eol-last': ['error', 'always'],
		'function-call-argument-newline': ['error', 'consistent'],
		indent: [
			'error',
			'tab',
			{
				SwitchCase: 1
			}
		],
		'keyword-spacing': 'error',
		'max-len': [
			'warn',
			180,
			{
				ignoreStrings: true,
				ignoreTemplateLiterals: true
			}
		],
		'no-console': 'warn',
		'no-debugger': 'warn',
		'no-tabs': ['off'],
		'object-curly-spacing': ['error', 'never'],
		// Commented out because it conflicts with Prettier
		//'operator-linebreak': ['error', 'after'],
		quotes: [
			'error',
			'single',
			{
				avoidEscape: true
			}
		],
		semi: ['error', 'always'],
		'space-before-blocks': 'error',
		'space-before-function-paren': [
			'error',
			{
				anonymous: 'always',
				named: 'never',
				asyncArrow: 'always'
			}
		],
		'space-in-parens': 'error'
	},
	plugins: ['react', '@typescript-eslint'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 12,
		sourceType: 'module'
	},
	settings: {
		react: {
			version: 'detect'
		}
	}
};
