import { AppState } from "../AppState.js";
import { Inspire } from "../models/Inspire.js";
import { api } from "./AxiosService.js";

class TodoService {
    async getTodo() {
        const response = await api.get('api/todos')
        console.log(response.data);

        const newTodo = new Inspire(response.data)
        AppState.todo = newTodo
    }
}

export const todoService = new TodoService()