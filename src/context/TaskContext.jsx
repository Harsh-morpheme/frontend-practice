import { createContext , useState } from "react";
//create the context 
const  TaskContext=createContext();
//create provider context
export function TaskContextProvider({children}) {
    const [tasks , setTasks]=useState([]);
    //Add task function 
    const addTask=(title)=>{
        const newTask={
            id:Date.now(),
            title,
      completed: false
        };
setTasks((prev)=> [...prev ,newTask] )
    };
    //Toggle task function
    const toggleTask=(id)=> {
        setTasks((prev)=>
            prev.map((task)=>
                task.id === id ? {...task , completed:!task.completed} :task
            )
        )

    };
    //delte the task
    const deleteTask=(id)=> {
        setTasks((prev)=>prev.filter((task)=>task.id !==id));
 
    }
    return(
        <TaskContext.Provider value={{tasks , addTask , toggleTask , deleteTask}}>
           {children}
          </TaskContext.Provider>
    )
    
};
export default TaskContext;