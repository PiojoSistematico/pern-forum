import express, { Request, Response } from "express";
const dotenv = require("dotenv").config();
const colors = require("colors");

const { errorHandler } = require("./middleware/errorHandler");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/stories", require("./routes/storyRoutes"));

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
