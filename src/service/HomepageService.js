const { GeneralError, BadRequest } = require("../utils/Error");

module.exports = {
  async GetAllIsland(IslandModel) {
    try {
      const islands = await IslandModel.find({}, '_id name imgSrc');

      return { status: true, data: islands };
    } catch (error) {
      return { status: false, error: error };
    }
  },

  async GetIslandDetail(IslandModel, StoryModel, IslandID) {
    try {
      const island = await IslandModel.findOne({
        _id: IslandID,
      });

      if (island) {
        const stories = await StoryModel.find({
          islandID: IslandID,
        }, '_id islandID title description imgSrc');

        const response = {
          detail: island,
          stories: stories,
        };

        return { status: true, data: response };
      } else {
        return { status: false, error: new BadRequest("Island ID is wrong") };
      }
    } catch (error) {
      return { status: false, error: new GeneralError("Query failed", error) };
    }
  },
};
