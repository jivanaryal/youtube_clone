const express = require("express");
const multer = require("multer");

const router = express.Router();
const {
  createShortsController,
  getShortsController,
  deleteShortsController,
  updateShortsController,
  updateLikeCountController,
  updateDisLikeCountController,
} = require("../controller/shorts");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });
router.post("/", upload.single("shortimage"), createShortsController);
router.get("/", getShortsController);
router.delete("/:id", deleteShortsController);
router.patch("/:id", upload.single("shortimage"), updateShortsController);
router.patch("/like/:id", updateLikeCountController);
router.patch("/dislike/:id", updateDisLikeCountController);
module.exports = router;
