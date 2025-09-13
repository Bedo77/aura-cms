const { mergeConfig } = require('vite');

module.exports = (config) => {
  // Important: always return the modified config
  return mergeConfig(config, {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    // Add this server configuration block to allow the healthcheck
    server: {
      allowedHosts: ['healthcheck.railway.app'],
    },
  });
};
