const Path = require('path');

function webpackLibraryAliasConfiguration(modules) {
 let webpackConfigAlias = { };
 modules.forEach((module)=>{
  const webpackConfig = require( Path.resolve(__dirname+'./../node_modules/'+module+'/webpack.config.cjs') );
    Object.keys( webpackConfig.resolve.alias ).map((k)=>{
      webpackConfigAlias[k] = webpackConfig.resolve.alias[k]
    });
  });
  return webpackConfigAlias;
}

exports.webpackLibraryAliasConfiguration = webpackLibraryAliasConfiguration;