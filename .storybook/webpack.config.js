// Shared styles configuration.
const sharedStylesConfiguration = [
  {
    loader: "style-loader"
  },
  {
    loader: "css-loader",
    options: {
      importLoaders: 1
    }
  },
  {
    loader: "postcss-loader"
  }
];

module.exports = (storybookBaseConfig, configType) => {
  // Add file loader.
  storybookBaseConfig.module.rules.push({
    test: /\.(png|jpg|gif|svg)$/,
    use: [
      {
        loader: "file-loader",
        options: {}
      }
    ],
    exclude: /node_modules/,
    include: [/stories/, /components/]
  });

  // Add url loader.
  storybookBaseConfig.module.rules.push({
    test: /\.(png|jpg|svg)$/,
    use: [
      {
        loader: "url-loader",
        options: {
          limit: 8192
        }
      }
    ],
    exclude: /node_modules/,
    include: [/stories/, /components/]
  });

  // Add sass support.
  storybookBaseConfig.module.rules.push({
    test: /\.scss$/,
    use: [
      ...sharedStylesConfiguration,
      {
        loader: "sass-loader"
      }
    ],
    exclude: /node_modules/,
    include: [/stories/, /components/, /patterns/]
  });

  // Add css support.
  storybookBaseConfig.module.rules.push({
    test: /\.css$/,
    use: [...sharedStylesConfiguration],
    include: [/stories/, /components/, /patterns/]
  });

  // Configure TypeScript
  storybookBaseConfig.resolve.extensions.push(".ts", ".tsx");
  storybookBaseConfig.module.rules.push({
    test: /\.tsx?$/,
    use: [
      {
        loader: "babel-loader"
      },
      {
        loader: "awesome-typescript-loader",
        options: {
          transpileOnly: true
        }
      }
    ],
    exclude: /node_modules/,
    include: [/stories/, /components/, /patterns/]
  });

  return storybookBaseConfig;
};
