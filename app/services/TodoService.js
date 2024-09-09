import { api } from "./AxiosService.js";
import { AppState } from "../AppState.js";
import { Inspire } from "../models/Inspire.js";

class TodoService {
    async getTodo() {
        const response = await api.get('api/todos')
        console.log(response.data);

        AppState.todo = response.data.map(todo => new Inspire(todo))
    }

    async toggleTodoStatus(todoId) {
        // @ts-ignore
        const todo = AppState.todo.find(t => t.id == todoId)
        if (!todo) return

        todo.completed = !todo.completed
        await api.put(`api/todos/${todoId}`, { completed: todo.completed })
        AppState.emit('todo')
    }

    async addTodo(todoData) {
        const response = await api.post('api/todos', todoData)
        const newTodo = new Inspire(response.data)
        // @ts-ignore
        AppState.todo.push(newTodo)
        AppState.emit('todo')
    }

    async removeTodo(todoId) {
        await api.delete(`api/todos/${todoId}`)
        // @ts-ignore
        AppState.todo = AppState.todo.filter(t => t.id !== todoId)
        AppState.emit('todos')
    }
}

export const todoService = new TodoService()