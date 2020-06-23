import { combineReducers } from 'redux'
import posts, { postsSaga } from './posts'
import { all } from 'redux-saga/effects'

const rootReducer = combineReducers({ posts })
export function* rootSaga() {
    // all: 여러 사가를 동시에 실행
    yield all([postsSaga()])
}

export default rootReducer
