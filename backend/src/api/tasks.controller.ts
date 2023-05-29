import { Task } from "../interface/task.interface";
import { TaskBodyRequest } from "../interface/taskBodyRequest.interface";
import { TasksServices } from "./tasks.service";
import { Request, Response } from "express";

const tasksService: TasksServices = new TasksServices();
export class TasksController {
  public findAll(req: Request, res: Response) {
    return tasksService.getAllTasks(req, res);
  }

  public update(req: TaskBodyRequest<Task>, res: Response) {
    return tasksService.updateTasks(req, res);
  }

  public create(req: TaskBodyRequest<Task>, res: Response) {
    return tasksService.createTasks(req, res);
  }

  public delete(req: Request, res: Response) {
    return tasksService.deleteTasks(req.params.id,res);
  }
}
