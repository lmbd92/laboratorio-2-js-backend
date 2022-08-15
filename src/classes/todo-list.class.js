// Est clase va a agrupar toda la lista de todos

export class TodoList {
  constructor() {
    this.todos = []
  }

  nuevoTodo(todo) {
    this.todos.push(todo)
  }

  eliminarTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id.toString() !== id)
  }

  marcarCompletado(id) {
    for (const todo of this.todos) {
      if (todo.id.toString() === id) {
        todo.completado = !todo.completado
        break
      }
    }
  }

  eliminarCompletado() {
    // TODO: Implementar método
  }
}
