import { cloudflare } from '@cloudflare/vite-plugin';
import { reactRouter } from '@react-router/dev/vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { defineConfig, type Plugin } from 'vite';

const stripSsrExternal = (): Plugin => {
  return {
    name: 'strip-ssr-external',
    enforce: 'post',
    config(config) {
      if (config.ssr) delete config.ssr.external;
    },
    configEnvironment(name, config) {
      if (name === 'ssr' && config.resolve) delete config.resolve.external;
    },
  };
};

export default defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    vanillaExtractPlugin(),
    stripSsrExternal(),
    cloudflare({ viteEnvironment: { name: 'ssr' } }),
    reactRouter(),
  ],
});
