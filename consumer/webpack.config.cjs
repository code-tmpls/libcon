
const webpackUtil = require( './config/webpack.utils.cjs' );
// const webpackConfig = require('../lib/webpack.config.cjs');
const webpackConfigAlias = webpackUtil.webpackLibraryAliasConfiguration(['library-ahaa']);

module.exports = {
  resolve: {
    symlinks: false,
    alias: Object.assign( webpackConfigAlias, {

    })
  }
};