import webpack from '@cypress/webpack-preprocessor';

module.exports = (on, config) => {
  const options = {
    webpackOptions: {
      resolve: {
        extensions: ['.ts', '.js']
      },
      module: {
        rules: [
          {
            test: /\.ts$/,
            use: [
              {
                loader: 'ts-loader'
              }
            ]
          }
        ]
      }
    }
  };
  on('file:preprocessor', webpack(options));
  return config;
};
