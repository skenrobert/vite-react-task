import { useEffect, useState } from 'react'
import TaskForm from './TaskForm'
import TaskList from './TaskList'
import {tasks} from './tasks'

function App() {

      //shortcut useStatesnippet
      const [mapTask, setmapTask] = useState(tasks)
    
      // useEffect(() => {
      //     setmapTask(mapTask)
      // }, [])

      //shortcut clg
     // console.log(mapTask)

      if (mapTask.length === 0) {
        return <h1>there not tasks now</h1>
    }

  return (
    <>
      
      <TaskForm/>
      <TaskList tasks = {mapTask} />

    </>
  )
}

export default App