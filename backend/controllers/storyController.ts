import { Request, Response } from "express";
const asyncHandler = require("express-async-handler");

/* Private - GET - Get all stories /api/v/stories */
const getStories = asyncHandler(async (req: Request, res: Response) => {
  res.json({ message: "Get stories" });
});

/* Private - POST - Post a story /api/v/stories */
const postStory = asyncHandler(async (req: Request, res: Response) => {
  res.json({ message: "Post story" });
});

/* Private - PUT - Update a Story /api/v/stories/:id */
const updateStory = asyncHandler(async (req: Request, res: Response) => {
  res.json({ message: `Update story ${req.params.id}` });
});

/* Private - DELETE - Delete a Story /api/v/stories/:id */
const deleteStory = asyncHandler(async (req: Request, res: Response) => {
  res.json({ message: `Delete story ${req.params.id}` });
});

module.exports = { getStories, postStory, updateStory, deleteStory };
