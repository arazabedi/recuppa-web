/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
			colors: {
				'deepblue': '#021835',
				'blue1': '#01214B',
				'blue2': '#426A8E',
				'blue3': '#BEE5F4',
				'deepgreen': '#003E48',
				'green1': '#005E6E',
				'green2': '#47938A',
				'green3': '#C0EDE6',
				'brightyellow': '#FFF58C',
				'yellow1': '#FFD86B',
				'yellow2': '#FFE6A6',
				'yellow3': '#F7F5E2',
			},
    },
  },
  plugins: [],
}
