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

// Populate Router instance with DOM routes
const routes = new Router({
  templateHome,
});

// Load Events
routes.loadEvents();
