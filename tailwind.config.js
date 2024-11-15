const flowbite = require("flowbite-react/tailwind");

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {},
  },
  content: [
    flowbite.content()
  ],
  variants: {},
  plugins: [
    flowbite.plugin
  ],
}

