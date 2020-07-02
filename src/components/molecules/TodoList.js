import React from 'react'
import PropTypes from 'prop-types'
import List from '../atoms/List'
import TodoItem from './TodoItem'

const TodoList = ({ todoList, onToggle }) => {
    const makeTodoItems = () =>
        todoList.map((todo) => ({
            key: todo.key,
            value: <TodoItem todo={todo} onToggle={onToggle} />,
        }))

    return <List items={makeTodoItems()} />
}

TodoList.propTypes = {
    todoList: PropTypes.array.isRequired,
    onToggle: PropTypes.func,
}

export default TodoList
