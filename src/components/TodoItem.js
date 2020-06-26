import React, { Component } from 'react'

class TodoItem extends Component {
    render() {
        const { done, children, onToggle, onRemove } = this.props
        return (
            <div onClick={onToggle}>
                <input type="checkbox" checked={done} readOnly />
                <span>{children}</span>
                <button
                    onClick={(e) => {
                        onRemove()
                        e.stopPropagation()
                    }}
                >
                    지우기
                </button>
            </div>
        )
    }
}

export default TodoItem
