import { AppState } from "../AppState.js"
import { todoService } from "../services/TodoService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

export class TodoController {
    constructor() {
        AppState.on('user', this.getTodo)
        AppState.on('todo', this.drawInspireTodo)

        this.getTodo()
    }

    async getTodo() {
        console.log('load to do list');
        try {
            await todoService.getTodo()
        } catch (error) {
            Pop.error(error)
            console.error(error);
        }
    }

    drawInspireTodo() {
        const Todo = AppState.todo
        setHTML('todo-for-the-day', Todo.todoHTMLTemplate)
    }
}