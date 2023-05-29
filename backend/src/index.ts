import cors from "cors";
import express from "express";

import { Router, Request, Response } from "express";
import { tasksRoutes } from "./routes/tasks.routes";

const app = express();
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE,PATCH');
    res.header(`Access-Control-Allow-Headers`, `Content-Type`);
    app.use(cors());
    next();
});
const route = Router();

app.use(express.json());
app.use("/tasks", tasksRoutes);
route.get("/", (req: Request, res: Response) => {
  res.json({ message: "hello world with Typescript" });
});

app.use(route);

app.listen(3000, () => "server running on port 3000");
