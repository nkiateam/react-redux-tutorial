import days from 'dayjs'
import { ADD_TODO, CHANGE_TODO_TEXT, TOGGLE_TODO } from '../actions/actionTypes'

const initState = {
    todoText: 'hello',
    todoList: [],
}

const todoReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_TODO:
            const moment = days()
            const todo = {
                ...action.payload,
                done: false,
                key: +moment,
                lastModified: moment.format('YYYY.MM.DD HH:mm:ss'),
            }
            return {
                ...state,
                todoText: '',
                todoList: state.todoList.concat(todo),
            }
        case CHANGE_TODO_TEXT:
            return {
                ...state,
                todoText: action.payload,
            }
        case TOGGLE_TODO:
            const toggledTodo = action.payload
            return {
                ...state,
                todoList: state.todoList.map((todo) => ({
                    ...todo,
                    done:
                        todo.key === toggledTodo.key
                            ? toggledTodo.done
                            : todo.done,
                })),
            }
        default:
            return state
    }
}

export default todoReducer
