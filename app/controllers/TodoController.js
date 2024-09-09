import { AppState } from "../AppState.js"
import { todoService } from "../services/TodoService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

export class TodoController {
    constructor() {
        AppState.on('user', this.getTodo.bind(this))
        AppState.on('todo', () => {
            this.drawTodo()
            this.drawTodoCount()
        })
        AppState.on('account', this.drawTodo.bind(this))

        this.getTodo()
    }

    async getTodo() {
        try {
            if (AppState.user) {
                await todoService.getTodo()
            }
        } catch (error) {
            Pop.error(error)
            console.error(error);
        }
    }

    async addTodo() {
        try {
            event.preventDefault()
            if (!AppState.user) {
                Pop.error("Please log in to add a todo")
                return
            }
            const form = event.target
            const todoData = {
                // @ts-ignore
                description: form.description.value
            }
            await todoService.addTodo(todoData)
            // @ts-ignore
            form.reset()
        } catch (error) {
            Pop.error(error)
            console.error(error);
        }
    }

    async removeTodo(todoId) {
        try {
            const willDelete = await Pop.confirm('Are you sure you want to delete this todo?')
            if (willDelete) {
                await todoService.removeTodo(todoId)
            }
        } catch (error) {
            Pop.error(error)
            console.error(error);
        }
    }

    async toggleTodoStatus(todoId) {
        try {
            await todoService.toggleTodoStatus(todoId)
        } catch (error) {
            Pop.error(error)
            console.error(error);
        }
    }

    drawTodo() {
        const todos = AppState.todo
        const user = AppState.user
        let template = ''
        if (user) {
            if (Array.isArray(todos) && todos.length > 0) {
                todos.forEach(todo => {
                    template += todo.TodoTemplate
                })
            }
        }
        setHTML('todo-list', template)
        this.drawTodoCount()

        const todoForm = document.querySelector('#todo-for-the-day .bg-secondary')
        if (todoForm) {
            todoForm.classList.toggle('d-none', !this.isTodoFormVisible)
        }
    }

    drawTodoCount() {
        const todos = AppState.todo
        if (Array.isArray(todos)) {
            const uncompletedCount = todos.filter(todolist => !todolist.completed).length
            setHTML('todo-count', `${uncompletedCount} task${uncompletedCount !== 1 ? 's' : ''} remaining`)
        } else {
            setHTML('todo-count', '0 tasks remaining')
        }
    }

    toggleTodoForm() {
        this.isTodoFormVisible = !this.isTodoFormVisible
        const todoForm = document.querySelector('#todo-for-the-day .bg-secondary')
        if (todoForm) {
            todoForm.classList.toggle('d-none', !this.isTodoFormVisible)
        }
    }
}