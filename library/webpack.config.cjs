const Path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: Path.resolve(__dirname, 'dist')
    },
    experiments: {
        outputModule: true,
    },
    resolve: {
        symlinks: false,
        alias: {
          '@Components': Path.resolve(__dirname, './src/components/'),
        }
      }
};