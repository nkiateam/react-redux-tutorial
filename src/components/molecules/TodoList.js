import React from 'react'
import List from '../atoms/List'
import TodoItem from './TodoItem'
import { connect } from 'react-redux'
import { toggleTodo } from '../../redux/actions/actionCreators'

const TodoList = ({ todoList, dispatch }) => {
    const handleToggle = (todo) => dispatch(toggleTodo(todo))
    const makeTodoItems = () =>
        todoList.map((todo) => ({
            key: todo.key,
            value: <TodoItem todo={todo} onToggle={handleToggle} />,
        }))

    return <List items={makeTodoItems()} />
}

export default connect(({ todoList }) => ({ todoList }))(TodoList)
