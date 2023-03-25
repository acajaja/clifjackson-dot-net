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
const CDN = `$myCdn: '${process.env.MIX_CDN_PREFIX}';`;

mix.js('resources/js/scrapbook.js', 'public/js')
    .js('resources/js/audio.js', 'public/js')
    .js('resources/js/sk8.js', 'public/js')
    .js('resources/js/mobile-nav.js', 'public/js')
    // .sass('resources/scss/home.scss', 'public/css')
    // .sass('resources/scss/audio-page.scss', 'public/css')
    .sass('resources/scss/section-index-page.scss', 'public/css', {
        additionalData: CDN
    })
    // .sass('resources/scss/gallery.scss', 'public/css')
    // .sass('resources/scss/general.scss', 'public/css')
    .sourceMaps(mix.inProduction(), 'source-map');

if (mix.inProduction()) {
    mix.version();
}
