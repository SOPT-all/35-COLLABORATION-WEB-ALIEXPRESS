import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tsconfigPaths(),
		svgr({
			svgrOptions: {
				memo: true,
			},
			include: '**/*.svg',
		}),
	],
	assetsInclude: ['**/*.ttf', '**/*.otf'],
	build: {
        assetsDir: 'assets',
    },
});
