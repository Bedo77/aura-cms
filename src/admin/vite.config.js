const { mergeConfig } = require('vite');

module.exports = (config) => {
  // Important: always return the modified config
  return mergeConfig(config, {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    // Add BOTH hosts to the allowed list
    server: {
      allowedHosts: [
        'healthcheck.railway.app',
        'strapi-production-b2ff.up.railway.app'
      ],
    },
  });
};
