const YPOST = require("../model/youpost");
exports.createYpostController = async (req, res, err) => {
  try {
    console.log("called");
    const { title, description, chname, category } = req.body;
    const thumbimage = req.files.thumbimage[0].filename;
    console.log(req.files);
    const profile = req.files.profile[0].filename;
    // console.log(req.body);
    const ypostModel = new YPOST(
      thumbimage,
      profile,
      title,
      description,
      chname,
      category
    );
    const createRecord = await ypostModel.createYpost();
    return res.status(200).json({
      createRecord,
      msg: "db created successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getYpostController = async (req, res, err) => {
  const YpostModel = await YPOST.getYppost();
  return res.status(200).json(YpostModel[0]);
};
exports.getSingleYpostController = async (req, res, err) => {
  try {
    const { id } = req.params;
    const YpostModel = await YPOST.getYpostbyId(id);

    return res.status(200).json(YpostModel[0]);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
exports.deleteYpostController = async (req, res, err) => {
  try {
    const { id } = req.params;
    const YpostModel = await YPOST.deleteYpost(id);
    return res.status(200).json({
      YpostModel,
      msg: "deleted succesfully",
    });
  } catch (error) {}
};
exports.updateYpostController = async (req, res, err) => {
  try {
    const { id } = req.params;

    const { title, description, chname, category } = req.body;
    const thumbimage = req.files.thumbimage[0].filename;
    const profile = req.files.profile[0].filename;

    const ypostModel = new YPOST(
      thumbimage,
      profile,
      title,
      description,
      chname,
      category
    );
    const updateRecoed = await ypostModel.updateYpost(id);

    return res.status(200).json({
      updateRecoed,
      msg: "Db updated successfully",
    });
  } catch (error) {
    console.log(error);
  }
};
