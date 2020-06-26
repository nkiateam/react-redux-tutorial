import React from 'react'

const TodoInput = ({ value, onChange, onInsert }) => {
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            onInsert()
        }
    }

    return (
        <div>
            <input
                onChange={onChange}
                value={value}
                onKeyPress={handleKeyPress}
            />
            <button onClick={onInsert}>추가</button>
        </div>
    )
}

export default TodoInput
