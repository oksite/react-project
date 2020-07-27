import { defineConfig } from 'umi';
import routes from './routes';
import proxy from './proxy';

export default defineConfig({
  publicPath: '/static/',
  hash: false,
  history: {
    type: 'browser',
  },
  nodeModulesTransform: {
    type: 'none',
  },
  antd: {
    dark: false,
  },
  routes: routes,
  proxy: proxy,
});
