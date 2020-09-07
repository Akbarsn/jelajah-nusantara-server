const { BadRequest, GeneralError } = require("../utils/Error");

module.exports = {
  async GetStoryBasedOnID(StoryModel, StoryID) {
    try {
      const story = await StoryModel.findOne({
        _id: StoryID,
      });

      if (story) {
        return { status: true, data: story };
      } else {
        return {
          status: false,
          error: new BadRequest("There is no story with that ID"),
        };
      }
    } catch (error) {
      return { status: false, error: new GeneralError("Query failed", error) };
    }
  },
};
