import React from 'react'
import List from '../atoms/List'
import TodoItem from './TodoItem'
import { connect, useDispatch, useSelector } from 'react-redux'
import { toggleTodo } from '../../redux/actions/actionCreators'

const TodoList = () => {
    const todoList = useSelector((state) => state.todoList)
    const dispatch = useDispatch()

    const handleToggle = (todo) => dispatch(toggleTodo(todo))
    const makeTodoItems = () =>
        todoList.map((todo) => ({
            key: todo.key,
            value: <TodoItem todo={todo} onToggle={handleToggle} />,
        }))

    return <List items={makeTodoItems()} />
}

export default TodoList
