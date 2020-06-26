import input from './input'
import todos from './todos'
import todosHooks from './todosHooks'
import { combineReducers } from 'redux'

export default combineReducers({
    input,
    todos,
    todosHooks,
})
