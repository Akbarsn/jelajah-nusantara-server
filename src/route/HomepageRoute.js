const Island = require("../model/Island");
const Story = require("../model/Story");
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

async function GetIslandDetailRoute(req, res, next) {
  try {
    const IslandID = req.params.islandID;

    const detail = await HomepageService.GetIslandDetail(
      Island,
      Story,
      IslandID
    );

    if (detail.status) {
      res.status(200).json(detail.data);
    } else {
      throw detail.error;
    }
  } catch (error) {
    next(error);
  }
}

function HomepageRoute(router) {
  router.get("/", GetAllIslandRoute);
  router.get("/detail/:islandID", GetIslandDetailRoute);

  return router;
}

module.exports = {
  HomepageRoute,
};
