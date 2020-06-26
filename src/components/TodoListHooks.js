import React from 'react'

const TodoItem = React.memo(({ todo, onRemove, onToggle }) => {
    const { id, text, done } = todo
    return (
        <div onClick={() => onToggle(id)}>
            <input type="checkbox" checked={done} readOnly />
            <span>{text}</span>
            <button onClick={() => onRemove(id)}>지우기</button>
        </div>
    )
})

const TodoItems = React.memo(
    ({ todos, onRemove, onToggle }) =>
        todos &&
        todos.map((todo) => (
            <TodoItem
                key={todo.id}
                todo={todo}
                onRemove={onRemove}
                onToggle={onToggle}
            />
        )),
)

const TodoListHooks = ({
    todos,
    input,
    onRemove,
    onToggle,
    onChange,
    onSubmit,
}) => {
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={input} onChange={onChange} />
                <button type="submit">추가</button>
            </form>
            <ul>
                <TodoItems
                    todos={todos}
                    onRemove={onRemove}
                    onToggle={onToggle}
                />
            </ul>
        </div>
    )
}

export default TodoListHooks
