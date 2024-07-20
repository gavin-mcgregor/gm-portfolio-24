import { defineConfig, passthroughImageService } from 'astro/config'
import netlify from '@astrojs/netlify'

// https://astro.build/config
export default defineConfig({
	site: 'https://gavinmcgregor-2024.netlify.app/',
	assets: true,
	output: 'server',
	adapter: netlify({
		imageCDN: true
	}),
	image: {
		service: passthroughImageService()
	}
})
