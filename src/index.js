import './styles.css'

import { Todo, TodoList } from './classes'

// import { Todo } from './classes/todo.class.js'
// import { TodoList } from './classes/todo-list.class.js'

const todoList = new TodoList()

const tarea = new Todo('Aprender JavaScript')
const tarea2 = new Todo('Comprar una figura de Iroman')

todoList.nuevoTodo(tarea)
todoList.nuevoTodo(tarea2)

console.log(todoList)
