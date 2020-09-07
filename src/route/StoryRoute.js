const Story = require("../model/Story");
const StoryService = require("../service/StoryService");

async function GetStoryBasedOnID(req, res, next) {
  const StoryID = req.params.storyID;

  try {
    const response = await StoryService.GetStoryBasedOnID(Story, StoryID);

    if (response.status) {
      res.status(200).json(response.data);
    } else {
      throw response.error;
    }
  } catch (error) {
    next(error);
  }
}

function StoryRoute(router) {
    router.get('/:storyID', GetStoryBasedOnID)

    return router
}

module.exports = {
    StoryRoute
};
