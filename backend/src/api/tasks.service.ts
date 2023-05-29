import { Request, Response } from "express";
import { idText } from "typescript";
import { Database } from "../database/database";
import { Task } from "../interface/task.interface";
import { TaskBodyRequest } from "../interface/taskBodyRequest.interface";

export class TasksServices {
  database: Database;

  constructor() {
    this.database = new Database(); 
  }

  public createTasks(req: TaskBodyRequest<Task>, res: Response) {
    try {
      const {task} = req.body
      if(task){
        const newtaskId = this.database.add(task);
        return res.status(200).send(
          { message: "tarefa criada" , id : newtaskId });
      } else{
        return res.status(400).send({ message: "Bad request" });
      }
      
    } catch (error) {
      return res.status(500).send({ message: "server error" });
    }
   
    
  }

  public updateTasks(req: TaskBodyRequest<Task>, res: Response) {
    
    try {
      const {task} = req.body
      if(task) {
        const resp = this.database.update(task)
        if(resp){
          return res.status(200).send({ message: "tarefa atualizada" });
        } else{
          return res.status(400).send({ message: "Tarefa não localizada - id invalido" });
        }
        } else {
          return res.status(400).send({ message: "Bad request" });
        }
        
      } 
     catch (error) {
      return res.status(500).send({ message: "server error" });
    }
  }

  public deleteTasks( taskId:string, res: Response) {

    try {
      if(taskId){
        const resp = this.database.remove(taskId)
        if(resp){
          return res.status(200).send({ message: "Tarefa deletada" });
        } else {
          return res.status(404).send({ message: "tarefa não encontrada" });
        }
      } else {
        return res.status(400).send({ message: "Bad request" });
      }
      
    } catch (error) {
      return res.status(500).send({ message: "server error" });
    }
    
  }

  public getAllTasks(req: Request, res: Response) {
    try {
      return res.status(200).send({ tasks: this.database.findMany()});
    } catch (error) {
      return res.status(500).send({ message: "server error" });
    }
   
  }
}
