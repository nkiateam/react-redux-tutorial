import { Map, List } from 'immutable'

export const CHANGE_INPUT = 'todosHooks/CHANGE_INPUT'
export const INSERT = 'todosHooks/INSERT'
export const TOGGLE = 'todosHooks/TOGGLE'
export const REMOVE = 'todosHooks/REMOVE'

const initialState = List([
    Map({
        id: 0,
        text: 'React Hooks 공부하기',
        done: true,
    }),
    Map({
        id: 1,
        text: 'Webpack 알아보기',
        done: false,
    }),
])

const todosHooks = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_INPUT:
            return {
                ...state,
                input: action.payload,
            }
        case INSERT:
            const { id, text, done } = action.payload
            return state.push(
                Map({
                    id,
                    text,
                    done,
                }),
            )
        // return
        // ...state,
        // todos: state.todos.push({ ...action.payload, done: false })
        case TOGGLE:
            const index = state.findIndex(
                (todo) => todo.get('id') === action.payload.id,
            )
            return state.updateIn([index, 'done'], (done) => !done)
        // return {
        //   ...state,
        //   todos: state.todos.map(todo =>
        //     todo.id === action.payload
        //       ? {
        //           ...todo,
        //           done: !todo.done
        //         }
        //       : todo
        //   )
        // };
        case REMOVE:
            return state.delete(
                state.findIndex((todo) => todo.get('id') === action.payload.id),
            )
        // return {
        //   ...state,
        //   todos: state.todos.filter(todo => todo.id !== action.payload)
        // };
        default:
            return state
    }
}

export default todosHooks
