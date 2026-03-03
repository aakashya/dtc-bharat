import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            colors: {
                'w1-brand': '#FF5757',
                'w1-dark-bg': '#0A0A0B',
                'w2-brand': '#FF5757',
                'w2-ink': '#0F172A',
                'w2-surface': '#F8FAFC',
                'w3-brand': '#FF5757',
                'w3-glow': '#F27D26',
                'w3-ink': '#1A1A1A',
                'w3-bg': '#F9F8F3',
                'w3-surface': '#FFFFFF',
            },
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [forms],
};
