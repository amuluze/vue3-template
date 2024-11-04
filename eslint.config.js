import antfu from '@antfu/eslint-config'
import format from 'eslint-plugin-format'

export default antfu(
    {
        type: 'lib',
        stylistic: {
            indent: 4, // 4, or 'tab'
            quotes: 'single', // or 'double'
        },
        formatters: {
            /**
             * Format CSS, LESS, SCSS files, also the `<style>` blocks in Vue
             * By default uses Prettier
             */
            css: true,
            /**
             * Format HTML files
             * By default uses Prettier
             */
            html: true,
            /**
             * Format Markdown files
             * Supports Prettier and dprint
             * By default uses Prettier
             */
            markdown: 'prettier',
        },
        typescript: true,
        vue: true,
        ignores: ['**/fixtures'],
    },
    [
        {
            files: ['**/*.css'],
            languageOptions: {
                parser: format.parserPlain,
            },
            plugins: {
                format,
            },
            rules: {
                'format/prettier': ['error', { parser: 'css', tabWidth: 4 }],
            },
        },
        {
            rules: {
                'perfectionist/sort-imports': 'off',
                'ts/no-unsafe-function-type': 'off',
                'style/indent': ['error', 4],
                'jsonc/indent': ['error', 4],
                'vue/html-indent': ['error', 4],
            },
        },
    ],
)
