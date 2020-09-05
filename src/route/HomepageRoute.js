const Island = require("../model/Island");
const HomepageService = require("../service/HomepageService");

async function GetAllIslandRoute(req, res, next) {
  try {
    const islands = await HomepageService.GetAllIsland(Island);
    if (islands.status) {
      res.status(200).json(islands.data);
    } else {
      throw islands.error;
    }
  } catch (error) {
    next(error);
  }
}

function HomepageRoute(router) {
  router.get("/", GetAllIslandRoute);

  return router;
}

module.exports = {
  HomepageRoute,
};
