import { Request, Response } from "express";
import { Database } from "../database/database";
import { Task } from "../interface/task.interface";
import { TaskBodyRequest } from "../interface/taskBodyRequest.interface";

export class TasksServices {
  database: Database;

  constructor() {
    this.database = new Database(); 
  }

  public createTasks(req: TaskBodyRequest<Task>, res: Response) {
    const {task} = req.body
    const newtaskId = this.database.add(task);
    return res.status(200).send(
      { message: "tarefa criada" , id : newtaskId });
  }

  public updateTasks(req: TaskBodyRequest<Task>, res: Response) {
    const {task} = req.body
    this.database.update(task)
    return res.status(200).send({ message: "tarefa atualizada" });
  }

  public deleteTasks( taskId:string, res: Response) {
    const resp = this.database.remove(taskId)
    if(resp){
      return res.status(200).send({ message: "Tarefa deletada" });
    } else {
      return res.status(404).send({ message: "tarefa não encontrada" });
    }
    
  }

  public getAllTasks(req: Request, res: Response) {
    return res.status(200).send({ tasks: this.database.findMany()});
  }
}
