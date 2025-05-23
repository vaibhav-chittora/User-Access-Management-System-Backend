import "reflect-metadata";
import express from "express";
import cors from "cors";
import { PORT } from "./config/serverConfig.js";
import { connectDB } from "./config/dbConfig.js";
import {
  isAuthenticated,
  isAdmin,
  isManagerOrAdmin,
} from "./middlewares/authMiddleware.js";
import apiRouter from "./routes/apiRouter.js";

const app = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
