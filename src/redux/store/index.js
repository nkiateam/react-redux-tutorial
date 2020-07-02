import { createStore, compose } from 'redux'
import todoReducer from '../reducers/todoReducer'

export default (serverState) => {
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    return createStore(todoReducer, serverState, composeEnhancers())
}
