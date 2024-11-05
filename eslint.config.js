import antfu from '@antfu/eslint-config'

export default antfu(
    {
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
    {
        rules: {
            'style/no-tabs': 'off',
            'perfectionist/sort-imports': 'off',
            'ts/no-unsafe-function-type': 'off',
            'style/indent': ['error', 4],
            'jsonc/indent': ['error', 4],
            'vue/html-indent': ['error', 4],
        },
    },
)
