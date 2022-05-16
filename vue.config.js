const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: '../backend/public/assets',
  publicPath: '/assets',
  pages: {
    app: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: `../../resources/views/app.blade.php`,
    },
  },
})
