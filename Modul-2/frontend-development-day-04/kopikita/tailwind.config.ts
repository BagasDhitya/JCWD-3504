import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './app/**/*.{js,jsx,ts,tsx}',
        './components/**/*.{js,jsx,ts,tsx}'
    ],
    theme: {
        extend: {
            colors: {
                coffee: {
                    light: '#fefaf6',
                    dark: '#432818',
                    brown: '#6b4c3b',
                    accent: '#d4a373'
                }
            }
        }
    },
    plugins: []
}

export default config;