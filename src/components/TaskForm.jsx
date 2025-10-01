import { useState } from "react"

function TaskForm() {
    const [title , setTitle]=useState("");
    const handleInput=(e)=> {
        e.preventDefault();
            console.log(title);
            setTitle("");
        };
    
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
  <div className="w-full max-w-full p-6 bg-white rounded-xl shadow-lg">
    <h1 className="text-2xl font-bold text-center mb-6">Task Manager</h1>
    <form className="flex gap-3" onSubmit={handleInput}>
      <input
        type="text"
        placeholder="Enter your task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button 
        type="submit"
        className="px-5 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
      >
        Add Task
      </button>
    </form>
  </div>
</div>


  )
}

export default TaskForm
