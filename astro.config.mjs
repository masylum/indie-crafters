import { defineConfig } from 'astro/config'

import cloudflare from '@astrojs/cloudflare'

export default defineConfig({
    plugins: [],
    adapter: cloudflare({}),
})
