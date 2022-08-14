import './styles.css'

import { Todo, TodoList } from './classes'
import { crarTodoHtml } from './js/componentes'

const todoList = new TodoList()

const tarea = new Todo('Aprender JavaScript')
todoList.nuevoTodo(tarea)
tarea.completado = false

console.log(todoList)

crarTodoHtml(tarea)
