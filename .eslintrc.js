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
	parserOptions: {
		sourceType: 'module'
	}
	// overrides: [
	// 	{
	// 		files: ['*.ts'],
	// 		extends: [
	// 			'eslint:recommended',
	// 			'plugin:@typescript-eslint/recommended',
	// 			'plugin:@typescript-eslint/recommended-requiring-type-checking'
	// 		],
	// 		parser: '@typescript-eslint/parser',
	// 		parserOptions: {
	// 			project: 'tsconfig.json',
	// 			sourceType: 'module',
	// 			ecmaFeatures: {
	// 				jsx: true
	// 			},
	// 			ecmaVersion: 12
	// 		},
	// 		plugins: ['@typescript-eslint', 'react'],
	// 		rules: {
	// 			'@typescript-eslint/no-floating-promises': ['off'],
	// 			'@typescript-eslint/restrict-template-expressions': [
	// 				'error',
	// 				{
	// 					allowNullish: true
	// 				}
	// 			]
	// 		}
	// 	},
	// 	{
	// 		files: ['*.js'],
	// 		env: {
	// 			es6: true
	// 		},
	// 		parserOptions: {
	// 			ecmaVersion: 9
	// 		},
	// 		globals: {
	// 			_: 'readonly',
	// 			$: 'readonly',
	// 			moment: 'readonly'
	// 		}
	// 	}
	// ]
};
