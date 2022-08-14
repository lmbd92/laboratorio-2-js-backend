// Est clase va a agrupar toda la lista de todos

export class TodoList {
  constructor() {
    this.todos = []
  }

  nuevoTodo(todo) {
    this.todos.push(todo)
  }

  eliminarTodo(id) {
    // TODO: Implementar método
  }

  marcarCompletado(id) {
    for (const todo of this.todos) {
      if (todo.id === id.toString()) {
        todo.completado = !todo.completado
        break
      }
    }
  }

  eliminarCompletado() {
    // TODO: Implementar método
  }
}
