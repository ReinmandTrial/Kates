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
import templateProduct from "./partials/template-product";
import templateCheckout from "./partials/template-checkout";

// Populate Router instance with DOM routes
const routes = new Router({
  templateHome, templateProduct, templateCheckout
});

// Load Events
routes.loadEvents();
