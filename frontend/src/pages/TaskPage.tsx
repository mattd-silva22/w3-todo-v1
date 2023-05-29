import React from 'react'
import Header from '../components/header'
import { TaskList } from '../components/TaskList'
import { TaskContextProvider } from '../context/TaskContext'

export default function TaskPage() {
  return (
    <TaskContextProvider>
        <Header/>
        <TaskList/>
    </TaskContextProvider>
  )
}
