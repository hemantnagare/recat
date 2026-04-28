import { use, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { TodoForm } from './components'
import { TodoItem } from './components'
import { TodoProvider } from './contexts/TodoContext'

function App() {
const [todos, setTodos] = useState([])  

const addTodo = (todo) => {
    console.log(todo);
  setTodos((prev)=>[...prev, {id: Date.now(), ...todo}])
}

const updateTodo = (id, todo) => {
  setTodos((prev) => prev.map((t) => t.id === id ? 
 todo: t));
}

const deleteTodo = (id) => {
    console.log(id);
  setTodos((prev) => prev.filter((t) => t.id !== id));
}

const toggleCompletete = (id) => {
  setTodos((prev) => prev.map((t) => t.id === id ? 
  {...t, completed: !t.completed} : t));
}

useEffect(() => {
    const Todos = JSON.parse(localStorage.getItem("todos"));
    if (Todos && todos.length > 0) {
        setTodos(Todos);
    }
}, []);

useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);    



  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleCompletete  }}>
<div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                            <div key={todo.id} className="w-full">
                            <TodoItem key={todo.id} todo={todo} />
                            </div>
                        ))}

                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
