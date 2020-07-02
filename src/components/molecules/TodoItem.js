import React from 'react'
import PropTypes from 'prop-types'

import Toggle from '../atoms/Toggle'

const TodoItem = ({ todo, onToggle }) => {
    const { todoText, done } = todo

    const handleToggle = (checked) => {
        if (onToggle)
            onToggle({
                ...todo,
                done: checked,
            })
    }
    return (
        <>
            <label>
                <Toggle
                    done={done}
                    onToggle={(checked) => handleToggle(checked)}
                />
                <span
                    style={{
                        textDecoration: done ? 'line-through' : 'none',
                    }}
                >
                    {todoText}
                </span>
            </label>
        </>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.shape({
        todoText: PropTypes.string.isRequired,
        done: PropTypes.bool.isRequired,
        lastModified: PropTypes.string.isRequired,
    }),
    onToggle: PropTypes.func,
}

export default TodoItem
