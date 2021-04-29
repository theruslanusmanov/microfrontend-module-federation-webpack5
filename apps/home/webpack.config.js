const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const mf = require('@angular-architects/module-federation/webpack');
const path = require('path');

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.base.json'),
  []);

module.exports = {
  output: {
    uniqueName: 'home'
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({

      name: 'home',
      filename: 'homeRemoteEntry.js',
      exposes: {
        './Module': './apps/home/src/app/home/home.module.ts'
      },

      shared: {
        '@angular/core': { singleton: true, requiredVersion: '^11.2.1' },
        '@angular/common': { singleton: true, requiredVersion: '^11.2.1' },
        '@angular/common/http': { singleton: true, requiredVersion: '^11.2.1' },
        '@angular/router': { singleton: true, requiredVersion: '^11.2.1' },

        // @ben Disabled, does not work (build step stuck)
        // ...sharedMappings.getDescriptors()
      }

    }),
    sharedMappings.getPlugin()
  ]
};
