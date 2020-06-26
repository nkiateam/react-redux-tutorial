import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CHANGE_INPUT, INSERT, TOGGLE, REMOVE } from '../modules/todosHooks'
import TodoListHooks from '../components/TodoListHooks'

let id = 0
const TodoListHooksContainer = () => {
    // todos 리듀서에서 관리하는 객체를 통째로 가져올 거라면 state.todos 로 간소화 시킬 수 있습니다.
    const { input, todos } = useSelector((state) => state.todos, [])

    const dispatch = useDispatch()

    const onChange = useCallback(
        (e) => {
            dispatch({ type: CHANGE_INPUT, payload: e.target.value })
        },
        [dispatch],
    )

    const onSubmit = useCallback(
        (e) => {
            e.preventDefault()
            dispatch({
                type: INSERT,
                payload: {
                    id: ++id,
                    text: input,
                },
            })
            dispatch({ type: CHANGE_INPUT, payload: '' })
        },
        [input, dispatch],
    )

    const onToggle = (id) => {
        dispatch({ type: TOGGLE, payload: id })
    }

    const onRemove = (id) => {
        dispatch({ type: REMOVE, payload: id })
    }

    return (
        <TodoListHooks
            input={input}
            todos={todos}
            onChange={onChange}
            onSubmit={onSubmit}
            onToggle={onToggle}
            onRemove={onRemove}
        />
    )
}

export default TodoListHooksContainer
