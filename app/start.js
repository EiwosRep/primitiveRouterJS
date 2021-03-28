import { Router } from "../core/router.js";
import { homeComponent } from "./component/home.js";
import { aboutComponent } from "./component/about.js";
import { errorComponent } from "./component/error.js";

const routerConfiguration = {
    typeOfRouting: "hash"
};

const errorHandler = errorComponent;
const defaultPage = homeComponent;

const routesArray = [
    { path: "/home", component: homeComponent },
    { path: "/about", component: aboutComponent },
];

const router = new Router(routerConfiguration, routesArray, errorHandler, defaultPage);

router.hashRouterRunner();
