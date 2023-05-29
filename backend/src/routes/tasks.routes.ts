import { Router } from "express";
import { TasksController } from "../api/tasks.controller";

const tasksRoutes = Router();

const tasksController: TasksController = new TasksController();


tasksRoutes.get("/", tasksController.findAll);
tasksRoutes.post("/", tasksController.create);
tasksRoutes.patch("/", tasksController.update);
tasksRoutes.delete("/:id", tasksController.delete);

export { tasksRoutes };
