// Est clase va a agrupar toda la lista de todos

export class TodoList {
  constructor() {
    // this.todos = []
    this.cargarLocalstorage()
  }

  nuevoTodo(todo) {
    this.todos.push(todo)
    this.guardarLocalStorage()
  }

  eliminarTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id.toString() !== id)
    this.guardarLocalStorage()
  }

  marcarCompletado(id) {
    for (const todo of this.todos) {
      if (todo.id.toString() === id) {
        todo.completado = !todo.completado
        this.guardarLocalStorage()
        break
      }
    }
  }

  eliminarCompletados() {
    this.todos = this.todos.filter((todo) => !todo.completado)
    this.guardarLocalStorage()
  }

  guardarLocalStorage() {
    // localStorage.setItem('todo', this.todos)
    localStorage.setItem('todo', JSON.stringify(this.todos))
  }

  cargarLocalstorage() {
    // if (localStorage.getItem('todo')) {
    //   // this.todos = localStorage.getItem('todo')
    //   this.todos = JSON.parse(localStorage.getItem('todo'))
    //   console.log('cargar local storage:', this.todos)
    //   console.log(typeof this.todos)
    // } else {
    //   this.todos = []
    // }

    this.todos = localStorage.getItem('todo')
      ? JSON.parse(localStorage.getItem('todo'))
      : []
  }
}
