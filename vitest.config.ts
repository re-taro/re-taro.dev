import react from '@vitejs/plugin-react-swc';
import typecript from 'vite-tsconfig-paths';
import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [react(), typecript()],
	test: {
		environment: 'jsdom',
		exclude: [...configDefaults.exclude, 'tests/**/*'],
		globals: true,
		root: 'src',
		setupFiles: ['./vitest.setup.ts'],
	},
});
