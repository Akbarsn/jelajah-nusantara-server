const { GeneralError, BadRequest } = require("../utils/Error");

module.exports = {
  async GetAllIsland(IslandModel) {
    try {
      const islands = await IslandModel.find({});

      return { status: true, data: islands };
    } catch (error) {
      console.log("Here");
      console.log(error);
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
        });

        const response = {
          island,
          stories: stories,
        };
        console.log(response);

        return { status: true, data: response };
      } else {
        return { status: false, error: new BadRequest("Island ID is wrong") };
      }
    } catch (error) {
      return { status: false, error: new GeneralError("Query failed") };
    }
  },
};
