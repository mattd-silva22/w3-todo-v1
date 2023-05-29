
import { createContext, ReactNode, useEffect, useState } from "react";
import { ITask } from "../interfaces/Task.interface";
import taskApi from "../services/TasksApi/api";

type TaskContextType = {
    loadTasks: () => void;
    addTask: (task:ITask)=>void
    updateTask: (task:ITask)=>void
    deleteTask: (id:string)=>void
    getTasks: ()=> ITask[]
    taskList : ITask[]

  };
  
  type TaskContextProviderProps = {
    children: ReactNode;
  };
  

export const taskContext = createContext({} as TaskContextType);

export function TaskContextProvider(props:TaskContextProviderProps) {
   const [taskList , setTaskList] = useState<ITask[]>([])
   useEffect(()=>{
    loadTasks()
   },[])

   const loadTasks = ()=>{
    taskApi.get("/tasks").then(res =>{
        setTaskList(res.data.tasks)
    }).catch(err=>{
        console.log("error ao carregar dados: " , err)
    })
   }

   const addTask = (task:ITask) =>{
    taskApi.post("/tasks", {"task": task}).then(res =>{
        console.log(res)
        loadTasks()
    }).catch(err=>{
        console.log("error ao adicionar tarefa: " , err)
    })
   }

   const deleteTask = (id:string)=>{
    taskApi.delete(`/tasks/${id}`).then(res =>{
        console.log(res)
        loadTasks()
    }).catch(err => {
        console.log("error ao deletar tarefa: " , err)
    })
   }

   const updateTask = (task:ITask) => {
    taskApi.patch("/tasks", {"task": {...task,concluida: !task.concluida}}).then(res =>{
        console.log(res)
        loadTasks()
    }).catch(err => {
        console.log("error ao deletar tarefa: " , err)
    })
   }
   
   const getTasks = ()=>{
    return taskList
   }
  return (
    <taskContext.Provider
      value={{
        loadTasks,
        deleteTask,
        addTask,
        updateTask,
        getTasks,
        taskList
      }}
    >
      {props.children}
    </taskContext.Provider>
  );
}