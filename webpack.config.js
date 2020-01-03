const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  config.module.rules.concat([{
    test: /\.svg$/,
    exclude: /node_modules/,
    use: ['@svgr/webpack'],
  }]);
  return config;
};
