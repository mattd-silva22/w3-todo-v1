import { FormEvent,   useState } from "react";
import { Trash, CheckSquare, Square } from "@phosphor-icons/react";
import { TaskListContainer, TaskListContent, TasksTable } from "./styles";
import { useTasks } from "../hooks/useTasks";
import { ITask } from "../../interfaces/Task.interface";
export function TaskList() {
  const [newTask, setNewTask] = useState<string>("");
 const {taskList,addTask, deleteTask,updateTask} = useTasks()
  
  const handleSubitNewTask = (event:FormEvent)=>{
    event.preventDefault()

    if(newTask.trim() !== ""){
        const newTaskData = {
            id : "1",
            titulo : newTask,
            concluida : false
        }
        addTask(newTaskData)

        console.log(newTaskData)
        setNewTask("")
    } else {
        console.log("tarefa não pode estar vazia")
        setNewTask("")
        return
    }
    
  }

  function countConcluido(taskList: ITask[]): number {
    return taskList.reduce((count, task) => {
      if (task.concluida) {
        return count + 1;
      }
      return count;
    }, 0);
  }

  const handleRemoveTask = (id:string)=>{
    deleteTask(id)
  }

  const handleCompleteTask = (task:ITask)=>{
    updateTask(task)
  }
  return (
    <TaskListContainer>
      <TaskListContent>
        <header>
          <div className="top-area">
            <h1 className="title">Minhas Tarefas</h1>

            <form className="input-wrapper" onSubmit={handleSubitNewTask}>
              <input
                type="text"
                placeholder="Adicione aqui sua tarefa"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
              />
              <button
                type="submit"
                onSubmit={handleSubitNewTask}
              >
                <CheckSquare size="16" />
              </button>
            </form>
          </div>

          <div className="tasks-stats">
            <div className="tasks-stats-item">
              <h2>Disponiveis</h2>
              <span>{taskList? taskList.length - countConcluido(taskList) : "0"}</span>
            </div>

            <div className="tasks-stats-item">
              <h2>Concluidas</h2>
              <span>{taskList? countConcluido(taskList) : "0"}</span>
            </div>
          </div>
        </header>

        <TasksTable>


          {taskList? taskList.map(item => (
            <li className={`taskRow ${item.concluida? "complete" : ""}`}>
            <div className="title-area">
              <div className="task-checker" onClick={()=>{handleCompleteTask(item)}}>
                {item.concluida? <CheckSquare size="16px"/> : <Square size="16" />}
                
              </div>

              <span>{item.titulo}</span>
            </div>
            <div className="task-remover" onClick={()=>{handleRemoveTask(item.id)}}>
              <Trash size="16px" color="#ad273f"/>
            </div>
          </li>
          )) : ""}
        </TasksTable>
      </TaskListContent>
    </TaskListContainer>
  );
}
