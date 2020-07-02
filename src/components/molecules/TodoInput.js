import React from 'react'
import Input from '../atoms/Input'
import PropTypes from 'prop-types'
import Button from '../atoms/Button'

const TodoInput = ({ todoText, onChange, onEnter, onAdd }) => {
    const handleAdd = () => {
        if (onAdd) onAdd(todoText)
    }
    return (
        <div className="TodoInput">
            <Input value={todoText} onChange={onChange} onEnter={onEnter} />
            <Button onClick={handleAdd} label="추가" />
        </div>
    )
}

TodoInput.propTypes = {
    todoText: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onEnter: PropTypes.func.isRequired,
    onAdd: PropTypes.func,
}

export default TodoInput
