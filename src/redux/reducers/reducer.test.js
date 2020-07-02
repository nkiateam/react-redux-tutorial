import { ADD_TODO, CHANGE_TODO_TEXT, TOGGLE_TODO } from '../actions/actionTypes'
import days from 'dayjs'

const initState = {
    todoText: 'hello',
    todoList: [],
}

const todoReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_TODO:
            const moment = days()
            const todo = {
                ...action.payload,
                key: +moment,
                lastModified: moment.format('YYYY.MM.DD HH:mm:ss'),
            }
            return {
                ...state,
                todoText: '',
                todoList: state.todoList.concat(todo),
            }
        case CHANGE_TODO_TEXT:
            return {
                ...state,
                todoText: action.payload,
            }
        case TOGGLE_TODO:
            const toggledTodo = action.payload
            return {
                ...state,
                todoList: state.todoList.map((todo) => ({
                    ...todo,
                    done:
                        todo.key === toggledTodo.key
                            ? toggledTodo.done
                            : todo.done,
                })),
            }
        default:
            return state
    }
}

test('리듀서 테스트', () => {
    let newState = todoReducer(undefined, {
        type: CHANGE_TODO_TEXT,
        payload: '교육을 마무리해야해',
    })
    console.log(newState)

    newState = todoReducer(newState, {
        type: CHANGE_TODO_TEXT,
        payload: '교육을 마무리해야해.. 곧 끝나가',
    })
    console.log(newState)

    newState = todoReducer(newState, {
        type: ADD_TODO,
        payload: {
            todoText: '테스트 할 일',
            done: false,
        },
    })
    console.log(newState)

    newState = todoReducer(newState, {
        type: ADD_TODO,
        payload: {
            todoText: '테스트 할 일2',
            done: false,
        },
    })
    console.log(newState)

    const toggledTodo = newState.todoList[0]
    newState = todoReducer(newState, {
        type: TOGGLE_TODO,
        payload: {
            ...toggledTodo,
            done: true,
        },
    })
    console.log(newState)
})
