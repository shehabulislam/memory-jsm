import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import { config } from "dotenv";

import postRoutes from "./routes/posts.js";

config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: "5MB" }));

//routes
app.use("/posts", postRoutes);

app.get("/", (req, res) => {
  res.send("server is running");
});

const CONNECTION_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.chayi.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(port, function () {
      console.log(`server is running on port ${port}`);
    })
  )
  .catch((error) => console.log(error));
