const { GeneralError } = require("../utils/Error");

module.exports = {
  async GetAllIsland(IslandModel) {
    try {
      const islands = await IslandModel.find({});

      return { status: true, data: islands };
    } catch (error) {
      return { status: false, error: new GeneralError("Query failed") };
    }
  },
};
