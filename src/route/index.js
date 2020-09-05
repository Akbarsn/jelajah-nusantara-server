module.exports = {
  InitRoute(router) {
    const utilityRoute = require("./UtilityRoute");
    const authorizationRoute = require("./AuthRoute");
    const homepageRoute = require("./HomepageRoute");

    const { CheckToken } = require("../middleware/CheckTokenHandler");

    router.get("/ping", utilityRoute.PingRoute);
    router.get("/migrate", utilityRoute.MigrateRoute);
    router.use("/auth", authorizationRoute.AuthRoute(router));

    router.use("/home", CheckToken, homepageRoute.HomepageRoute(router));

    return router;
  },
};
