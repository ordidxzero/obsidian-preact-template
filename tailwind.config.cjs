/** @type {import('tailwindcss').Config} */

const PLUGIN_TW_PREFIX = '__unique_prefix-';

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  prefix: PLUGIN_TW_PREFIX,
  important: true,
  theme: {
    extend: {},
  },
  plugins: [],
};
