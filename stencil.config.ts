import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'component-tester',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    
  ],
  devServer: {
    reloadStrategy: 'pageReload',
  }
};
