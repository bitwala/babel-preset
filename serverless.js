module.exports = () => {
  return {
    presets: [
      [
        require('@babel/preset-env'),
        {
          targets: {
            node: 'current',
          },
        },
      ],
      [
        require('@babel/preset-typescript'),
        {
          onlyRemoveTypeImports: true,
        },
      ],
    ],
    plugins: [
      require('@babel/plugin-proposal-class-properties'),
      require('@babel/plugin-proposal-object-rest-spread'),
      require('@babel/plugin-proposal-optional-chaining'),
      // serverless config
      require('babel-plugin-source-map-support'),
    ],
  };
};
