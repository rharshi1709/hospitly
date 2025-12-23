// tailwind.config.js
export const theme = {
    extend: {
        keyframes: {
            fadeUp: {
                '0%': { opacity: 0, transform: 'translateY(20px) scale(0.95)' },
                '100%': { opacity: 1, transform: 'translateY(0) scale(1)' },
            },
        },
        animation: {
            fadeUp: 'fadeUp 0.5s ease-out forwards',
        },
    },
};
export const plugins = [];
