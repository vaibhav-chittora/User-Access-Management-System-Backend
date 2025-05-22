import express from "express";
import { PORT } from "./config/serverConfig.js";
import { connectDB } from "./config/dbConfig.js";
import authRouter from "./routes/auth.js";

const app = express();

app.use(express.json());

app.use("/api", authRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
