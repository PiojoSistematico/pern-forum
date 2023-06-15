import express, { Request, Response } from "express";
const {
  getStories,
  postStory,
  updateStory,
  deleteStory,
} = require("../controllers/storyController");

const router = express.Router();

router.get("/", getStories);

router.post("/", postStory);

router.put("/:id", updateStory);

router.delete("/:id", deleteStory);

module.exports = router;
