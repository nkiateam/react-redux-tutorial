import React from 'react'
import Title from '../atoms/Title'
import Contents from '../atoms/Contents'
import './TodoTemplate.scss'

const TodoTemplate = ({ children }) => {
    return (
        <div className="TodoTemplate">
            <Title title="Todo List" />
            <Contents content={children} />
        </div>
    )
}

export default TodoTemplate
