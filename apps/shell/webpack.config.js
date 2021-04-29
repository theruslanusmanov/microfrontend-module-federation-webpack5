const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const mf = require('@angular-architects/module-federation/webpack');
const path = require('path');

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.base.json'),
  []);

module.exports = {
  output: {
    uniqueName: 'shell'
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      remotes: {},
      shared: {
        '@angular/core': { eager: false, singleton: true },
        '@angular/common': { eager: false, singleton: true },
        '@angular/common/http': { eager: false, singleton: true },
        '@angular/router': { eager: false, singleton: true },
        'rxjs': { eager: false, singleton: true }
        // @ben Disabled, does not work (build step stuck)
        // ...sharedMappings.getDescriptors()
      }
    }),
    sharedMappings.getPlugin()
  ]
};
