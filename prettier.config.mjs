/**
 * @see https://prettier.io/docs/configuration
 * @type {import('prettier').Config}
 */
const prettierConfig = {
  arrowParens: 'avoid',
  trailingComma: 'es5',
  singleQuote: true,
  plugins: [
    'prettier-plugin-astro',
    'prettier-plugin-tailwindcss', // needs to be last
  ],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};

export default prettierConfig;
