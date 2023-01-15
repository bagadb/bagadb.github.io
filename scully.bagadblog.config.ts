import { ScullyConfig } from '@scullyio/scully';
import { path } from '@scullyio/scully/src/lib/utils';
export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "bagadblog",
  outDir: './dist/static',
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      }
    },
    
  }
};