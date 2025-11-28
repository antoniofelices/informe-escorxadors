// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import icon from 'astro-icon'
import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
    site: 'https://informeescorxadors.ibrabcn.com',
    i18n: {
        locales: ['es', 'ca'],
        defaultLocale: 'ca',
        routing: {
            prefixDefaultLocale: false,
        },
    },
    integrations: [icon(), mdx()],
    vite: {
        plugins: [tailwindcss()],
    },
})
