module.exports = {
  Route() {
    const utilityRoute = require("./utility");
    const authorizationRoute = require("./auth");

    const route = {
      Utility: {
        Ping: utilityRoute.PingRoute,
      },
      Authorization: {
        Register: authorizationRoute.RegisterUser,
      },
    };

    return route;
  },
  InitRoute(router) {
    const route = this.Route();

    router.get("/ping", route.Utility.Ping);
    router.post("/register", route.Authorization.Register);

    return router;
  },
};
