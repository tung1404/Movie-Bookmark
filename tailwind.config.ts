import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        monstserrat: ['var(--font-monstserrat)'],
      },
      gridTemplateColumns: {
        fluid: 'repeat(auto-fit,minmax(15rem,1fr))',
      },
    },
  },
  plugins: [],
}
export default config
