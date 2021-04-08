module.exports = {
    webpack(config, options) {
    // Fixes npm packages that depend on `fs` module
    if (!options.isServer) {
    // eslint-disable-next-line no-param-reassign
    config.node = {
    fs: 'empty',
    };
    }
    return config;
    },
    };