import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TaskContextProvider } from './context/TaskContext.jsx'
//wrapping in context provider
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <TaskContextProvider>
       <App />
    </TaskContextProvider>
   
  </StrictMode>,
)
