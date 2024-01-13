module.exports = {
    extends: [
        'airbnb',
        'airbnb/hooks',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'plugin:tailwindcss/recommended',
    ],
    root: true,
    env: { browser: true, es2020: true },
    ignorePatterns: ['dist'],
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    settings: { react: { version: '18.2' } },
    plugins: ['react-refresh', 'tailwindcss'],
    rules: {
        'react-hooks/rules-of-hooks': 'error',
        'no-console': 0,
        'no-plusplus': 0,
        'react/state-in-constructor': 0,
        indent: 0,
        'linebreak-style': 0,
        'react/prop-types': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        'import/no-extraneous-dependencies': [
            'error',
            { devDependencies: true },
        ],
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
        'prettier/prettier': [
            'error',
            {
                trailingComma: 'es5',
                singleQuote: true,
                printWidth: 80,
                tabWidth: 4,
                semi: true,
                endOfLine: 'auto',
            },
        ],
    },
};