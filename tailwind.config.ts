import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class", "dark"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            screens: {
                csm: { max: "957px" },
                cmid: { max: "1177px" },
                sm: { max: "640px" },
            },
            fontFamily: {
                // monte: ['var(--font-montserrat)', 'sans-serif'],
                inter: ['var(--font-inter)', 'sans-serif'],
            },
            rotate: {
                '360': '360deg',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
            },
            animation: {
                slideIn: 'slideIn 0.5s ease-out',
            },
            keyframes: {
                slideIn: {
                    '0%': { transform: 'translateX(100%)' },
                    '100%': { transform: 'translateX(0)' },
                },
            },
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                accent: 'var(--accent)',
            }
        }
    },

    plugins: [],
};

export default config;

