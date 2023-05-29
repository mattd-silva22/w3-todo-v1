
import { Task } from "../interface/task.interface";
import { uuid } from 'uuidv4';

export class Database {
    _taskList: Task[]
    constructor(){
        this._taskList = [
            { id: "1a", titulo: "Aprender React", concluida: true },
            { id: "2b", titulo: "Estudar NodeJS", concluida: false },
            { id: "3c", titulo: "Praticar TypeScript", concluida: false }
            ];
    }

    add(task:Task){
        const uid = uuid()
        this._taskList = [...this._taskList,{...task,id:uid }]
        console.log(this._taskList)
        return uid
    }

    remove(id:string){
        let isFound = false
        this._taskList = this._taskList.filter(task => {
            if(task.id == id) {
                isFound = true
                return 
            } else {
                return task
            }
        })
        if(isFound){
            return true
        } else {
            return false
        }
    
    }

    update(updatedTask:Task){
        let isFound = false
        this._taskList = this._taskList.map( task => {
            if(updatedTask.id === task.id){
                isFound = true
                return {...task, concluida : updatedTask.concluida}
            } else {
                return task
            }
        })

        if(isFound) {
            return true
        } else {
            return false
        }
        
    }

    findMany(){
        return this._taskList
    }

    findOne(id:string){
        return this._taskList.filter(task => task.id === id)
    }
}

