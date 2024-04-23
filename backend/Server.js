import express from "express";
import cors from "cors";
import { config } from "dotenv";
import todoRouter from "./Routes/ToDoRoutes.js";
import connDb from "./utils/connections.js";

const app = express();

config();
app.use(express.json());
app.use(cors());
connDb();

app.use("/api", todoRouter);

app.listen(process.env.PORT, () =>
  console.log("server is running on port " + process.env.PORT)
);
