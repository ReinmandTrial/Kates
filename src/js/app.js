// Modules
import Common from "./modules/common";

// Autoload modules
const modules = [Common];

modules.forEach((module) => {
  module.init();
});

// import local dependencies
import Router from "./utils/Router";
import templateHome from "./partials/template-home";
import templateAbout from "./partials/template-about";
import templateProduct from "./partials/template-product";
import templateCheckout from "./partials/template-checkout";
import templateNewsSingle from "./partials/template-news-single";
import templateContact from "./partials/template-contact";
import templateMaterialShop from "./partials/template-material-shop";

// Populate Router instance with DOM routes
const routes = new Router({
  templateHome, templateAbout, templateProduct, templateCheckout, templateNewsSingle, templateContact, templateMaterialShop
});

// Load Events
routes.loadEvents();
