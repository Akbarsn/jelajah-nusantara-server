module.exports = {
  InitRoute(router) {
    const utilityRoute = require("./UtilityRoute");
    const authorizationRoute = require("./AuthRoute");
    const homepageRoute = require("./HomepageRoute");
    const storyRoute = require("./StoryRoute");

    const { CheckToken } = require("../middleware/CheckTokenHandler");

    router.get("/ping", utilityRoute.PingRoute);
    router.get("/migrate", utilityRoute.MigrateRoute);
    router.use("/auth", authorizationRoute.AuthRoute(router));

    router.use("/home", CheckToken, homepageRoute.HomepageRoute(router));
    router.use("/story", CheckToken, storyRoute.StoryRoute(router));

    return router;
  },
};
