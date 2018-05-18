module.exports = {
  plugins: [
    require("postcss-easy-import")({ prefix: "_" }),
    require("postcss-flexbugs-fixes")({}),
    require("postcss-cssnext")({}),
    require("perfectionist")({
      format: "compact"
    }),
    require("cssnano")({
      preset: "default",
      autoprefixer: false
    })
  ]
};
