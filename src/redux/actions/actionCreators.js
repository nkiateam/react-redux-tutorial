import { ADD_TODO, CHANGE_TODO_TEXT, TOGGLE_TODO } from './actionTypes'

export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo,
    }
}

export const changeTodoText = (todoText) => {
    return {
        type: CHANGE_TODO_TEXT,
        payload: todoText,
    }
}

export const toggleTodo = (todo) => {
    return {
        type: TOGGLE_TODO,
        payload: todo,
    }
}
