const { json } = require("body-parser");
const SHORTS = require("../model/shorts");
exports.createShortsController = async (req, res, err) => {
  try {
    const { title, description, chname } = req.body;
    const shortimage = req.file ? req.file.filename : null;
    console.log(req.file);
    const shortsModel = new SHORTS(shortimage, title, description, chname);
    const createRecord = await shortsModel.createShort();
    return res.status(200).json({
      createRecord,
      msg: "shorts db created successfully",
    });
  } catch (error) {
    console.log(error);
  }
};
exports.getShortsController = async (req, res, err) => {
  try {
    const shortsModel = await SHORTS.getShort();
    return res.status(200).json(shortsModel[0]);
  } catch (error) {
    console.log(err);
  }
};
exports.deleteShortsController = async (req, res, err) => {
  try {
    const { id } = req.params;
    const shortsModel = await SHORTS.deleteShort(id);
    return res.status(200).json({
      shortsModel,
      msg: "deleted successfully",
    });
  } catch (error) {
    console.log(error);
  }
};
exports.updateShortsController = async (req, res, err) => {
  try {
    const { id } = req.params;
    const { title, description, chname } = req.body;
    const shortimage = req.file ? req.file.filename : null;
    const shortsModel = new SHORTS(shortimage, title, description, chname);
    const updateShort = await shortsModel.updateShort(id);
    return res.status(200).json({
      updateShort,
      msg: "db updated successfully",
    });
  } catch (error) {}
};
exports.updateLikeCountController = async (req, res, err) => {
  try {
    const { id } = req.params;
    const like_counts = await SHORTS.getLikesByID(id);
    const like_counting = JSON.stringify(like_counts[0]);
    const like_counted = like_counting.replace(/[^0-9]*/g, "");
    const like_count = parseInt(like_counted);
    console.log(like_count, "sdfbkjfhsduh");
    const shortsModel = new SHORTS();
    shortsModel.like_count = like_count;
    const updateShort = await shortsModel.updateLikeCount(id);
    return res.status(200).json({
      updateShort,
      msg: "liked",
    });
  } catch (error) {
    console.log(error);
  }
};
exports.updateDisLikeCountController = async (req, res, err) => {
  try {
    const { id } = req.params;
    const dislike_counts = await SHORTS.getDislikesByID(id);
    const dislike_counting = JSON.stringify(dislike_counts[0]);
    const dislike_counted = dislike_counting.replace(/[^0-9]*/g, "");
    const dislike_count = parseInt(dislike_counted);
    const shortsModel = new SHORTS();
    shortsModel.dislike_count = dislike_count;
    const updateShort = await shortsModel.updateDisLikeCount(id);
    return res.status(200).json({
      updateShort,
      msg: "disliked",
    });
  } catch (error) {
    console.log(error);
  }
};
