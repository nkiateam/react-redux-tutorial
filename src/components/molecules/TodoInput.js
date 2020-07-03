import React from 'react'
import Input from '../atoms/Input'
import Button from '../atoms/Button'
import { connect, useDispatch, useSelector } from 'react-redux'
import { addTodo, changeTodoText } from '../../redux/actions/actionCreators'

const TodoInput = () => {
    const todoText = useSelector((state) => state.todoText)
    const dispatch = useDispatch()
    const handleAdd = () => {
        if (todoText) {
            dispatch(
                addTodo({
                    todoText,
                }),
            )
        }
    }

    const handleChange = (value) => {
        dispatch(changeTodoText(value))
    }

    return (
        <div className="TodoInput">
            <Input
                value={todoText}
                onChange={handleChange}
                onEnter={handleAdd}
            />
            <Button onClick={handleAdd} label="추가" />
        </div>
    )
}

export default TodoInput
