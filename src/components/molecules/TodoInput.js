import React from 'react'
import Input from '../atoms/Input'
import Button from '../atoms/Button'
import { connect } from 'react-redux'
import { addTodo, changeTodoText } from '../../redux/actions/actionCreators'

const TodoInput = ({ todoText, dispatch }) => {
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

const mapStateToProps = (state, ownProps) => ({ todoText: state.todoText })

export default connect(mapStateToProps)(TodoInput)
