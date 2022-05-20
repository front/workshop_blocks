let mix = require('laravel-mix');

mix.webpackConfig({
  externals: {
    'wp': 'wp',
    'react': 'React',
    'react-dom': 'ReactDOM',
  }
});

mix
  .js('./blocks/index.js', 'dist')
  .react()
  .sass('./blocks/style.scss', 'dist')
  .sass('./blocks/editor.scss', 'dist')
  .browserSync({
    proxy: 'workshop.ddev.site:80',
    files: [
      'dist/*',
    ]
  });