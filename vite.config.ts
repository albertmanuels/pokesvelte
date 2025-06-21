import { svelteTesting } from '@testing-library/svelte/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [enhancedImages(), sveltekit(), svelteTesting()],
	ssr: {
		noExternal: ['@apollo/client']
	},
	resolve: process.env.VITEST
	? {
			conditions: ['browser']
		}
	: undefined,
	test: {
  	environment: 'jsdom',
		globals: true,
    setupFiles: ['./vitest-setup.js'],
	}
});
