import React, { useCallback } from 'react'
// import { useSelector, useActions } from 'react-redux';
// import { changeInput, insert, toggleCheck, remove } from '../modules/todos';
import { useSelector, useDispatch } from 'react-redux'
import { CHANGE_INPUT, INSERT, TOGGLE_CHECK, REMOVE } from '../modules/todos'
import TodoList from '../components/TodoList'

let id = 0
const TodoListContainer = () => {
    // todos 리듀서에서 관리하는 객체를 통째로 가져올 거라면 state.todos 로 간소화 시킬 수 있습니다.
    const { input, todos } = useSelector((state) => state.todos, [])
    //   const [onChangeInput, onInsert, onToggle, onRemove] = useActions(
    //     [changeInput, insert, toggleCheck, remove],
    //     []
    //   );

    const dispatch = useDispatch()

    const onChange = useCallback(
        (e) => {
            dispatch({ type: CHANGE_INPUT, payload: e.target.value })
            // onChangeInput(e.target.value);
        },
        // [onChangeInput]
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
            // onInsert(input);
            // onChangeInput('');
        },
        // [input, onChangeInput, onInsert]
        [input, dispatch],
    )

    const onToggle = (id) => {
        dispatch({ type: TOGGLE_CHECK, payload: id })
    }

    const onRemove = (id) => {
        dispatch({ type: REMOVE, payload: id })
    }

    return (
        <TodoList
            input={input}
            todos={todos}
            onChange={onChange}
            onSubmit={onSubmit}
            onToggle={onToggle}
            onRemove={onRemove}
        />
    )
}

export default TodoListContainer
