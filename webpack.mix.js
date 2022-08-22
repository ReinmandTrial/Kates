let mix = require("laravel-mix");
require("laravel-mix-clean");

mix.setPublicPath("dist");

// Page list
const page_styles = ["base", "default", "template-home", "template-about", "template-catalog", "template-material", "template-material-shop", "template-product", "template-cart", "template-registration", "template-checkout", "template-news", "template-news-single", "template-profile", "template-contact", "template-price"];

// Add pages to mix
for (let index = 0; index < page_styles.length; index++) {
  mix.sass(`src/sass/pages/${page_styles[index]}.scss`, "styles").options({
    processCssUrls: false,
    postCss: [require("autoprefixer")],
  });
}

// JS
mix.js("src/js/app.js", "js");

// Copy html
mix.copy("views/*.html", "dist");

// Images
mix.copyDirectory("src/img", "dist/img");

// BrowserSync
mix.browserSync({
  proxy: false,
  server: "dist",
  files: ["dist/**/*.{css,js,html,php,jpg,jpeg,png,gif,svg}"],
});

if (mix.inProduction()) {
  mix.clean().sourceMaps().version();
}

mix.disableNotifications();