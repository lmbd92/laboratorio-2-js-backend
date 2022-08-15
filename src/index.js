import './styles.css'

import { Todo, TodoList } from './classes'
import { crearTodoHtml } from './js/componentes'

export const todoList = new TodoList()

// const tarea = new Todo('Aprender JavaScript')
// todoList.nuevoTodo(tarea)
// tarea.completado = false
// crearTodoHtml(tarea)

// localStorage.setItem('mi-llave', 'ABC1234')

// setTimeout(() => {
//   localStorage.removeItem('mi-llave')
// }, 1500)

// sessionStorage.setItem('mi-llave', 'ABC1234')

console.log(todoList.todos)

todoList.todos.forEach((todo) => crearTodoHtml(todo))
