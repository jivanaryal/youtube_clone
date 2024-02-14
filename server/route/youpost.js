const express = require("express");
const multer = require("multer");
const router = express.Router();
const {
  getSingleYpostController,
  deleteYpostController,
  getYpostController,
  createYpostController,
  updateYpostController,
} = require("../controller/youpoast");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });
router.get("/", getYpostController);
router.post(
  "/",
  upload.fields([
    {
      name: "thumbimage",
      maxCount: 1,
    },
    {
      name: "profile",
      maxCount: 1,
    },
  ]),
  createYpostController
);
router.get("/:id", getSingleYpostController);
router.delete("/:id", deleteYpostController);
router.patch(
  "/:id",
  upload.fields([
    {
      name: "thumbimage",
      maxCount: 1,
    },
    {
      name: "profile",
      maxCount: 1,
    },
  ]),
  updateYpostController
);
module.exports = router;
