const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js('resources/js/app.js', 'public/js')
mix.sass('resources/scss/home.scss', 'public/css')
    .sass('resources/scss/audio-page.scss', 'public/css')
    .sass('resources/scss/section-index-page.scss', 'public/css')
    .sass('resources/scss/gallery.scss', 'public/css')
    .sass('resources/scss/general.scss', 'public/css')
    .sourceMaps(false, 'source-map');
