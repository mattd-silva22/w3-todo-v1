import { useContext } from 'react'
import { taskContext } from '../../context/TaskContext'



export function useTasks() {
  const value = useContext(taskContext)
  return value
}