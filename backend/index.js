import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";

import postRoutes from "./routes/postRoutes.js";
import inciteRoutes from "./routes/inciteRoutes.js";
import connectDB from "./mongodb/connect.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/post", postRoutes);
app.use("/api/v1/incite", inciteRoutes);

app.get("/", async (req, res) => {
  res.status(200).json({ message: "Hello from Incite." });
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () => {
      console.log("Server has started running on port 8080");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
