import adapterNode from '@sveltejs/adapter-node';
import adapterNetlify from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/kit/vite';

const isProduction = process.env.NODE_ENV === 'production';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: isProduction ? adapterNetlify() : adapterNode()
	}
};

export default config;
