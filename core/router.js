export class Router {
    _config;
    _routes;
    _error;
    _default;

    constructor(config, routes, error, defaultPage) {
        this._config = config;
        this._routes = routes;
        this._error = error;
        this._default = defaultPage;
    }

    hashRouterRunner() {
        window.addEventListener("DOMContentLoaded", (Event) => {
            const routerOutlet = document.getElementById("routerOutlet");
            routerOutlet.innerHTML = this.hashViewRenderer();
            console.log(this.hashViewRenderer());
        });

        window.addEventListener("hashchange", (Event) => {
            const routerOutlet = document.getElementById("routerOutlet");
            routerOutlet.innerHTML = this.hashViewRenderer();
            console.log(this.hashViewRenderer());
        });
    }

    hashViewRenderer() {
        let viewToRender = this._error.render();
        const currentHashUrl = this.hashUrlParser();
        const arrayLength = this._routes.length;
        let increment = 0;

        if (currentHashUrl === undefined) {
            return this._default.render();
        }

        while (increment < arrayLength) {
            const currentRoutesDefinition = this._routes[increment];
            if (String(currentRoutesDefinition.path) === String(currentHashUrl)) {
                viewToRender = currentRoutesDefinition.component.render();
                break;
            }

            if (increment === arrayLength - 1) {
                viewToRender = this._error.render();
                break;
            }
            increment++;
        }

        return viewToRender;
    }

    hashUrlParser() {
        return window.location.hash.split("#")[1];
    }
}
