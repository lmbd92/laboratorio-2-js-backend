// Referencias en el html
import { Todo } from '../classes'
import { todoList } from '../index'

const divTodoList = document.querySelector('.todo-list')
const txtInput = document.querySelector('.new-todo')

export const crearTodoHtml = (todo) => {
  const htmlTodo = `
    <li class="${todo.completado ? 'completed' : ''}" data-id="${todo.id}">
        <div class="view">
          <input class="toggle" type="checkbox" ${
            todo.completado ? 'checked' : ''
          } />
          <label>${todo.tarea}</label>
          <button class="destroy"></button>
        </div>
      <input class="edit" value="Create a TodoMVC template" />
    </li>
  `
  const div = document.createElement('div')
  div.innerHTML = htmlTodo

  divTodoList.append(div.firstElementChild)

  return div.firstElementChild
}

//eventos
txtInput.addEventListener('keyup', (event) => {
  if (event.keyCode === 13 && txtInput.value.length > 0) {
    const nuevoTodo = new Todo(txtInput.value)
    todoList.nuevoTodo(nuevoTodo)

    crearTodoHtml(nuevoTodo)
    txtInput.value = ''
  }
})

divTodoList.addEventListener('click', (event) => {
  // console.log('click')
  // console.log(event)
  // console.log(event.target)
  // console.log(event.target.localName)
  const nombreElemento = event.target.localName // input, label, button
  const todoElemento = event.target.parentElement.parentElement
  // console.log(todoElemento)
  const todoId = todoElemento.getAttribute('data-id')
  // console.log(todoId)
  if (nombreElemento.includes('input')) {
    //click en el check
    todoList.marcarCompletado(todoId)
    // console.log(todoList)
    todoElemento.classList.toggle('completed')
  }
})
