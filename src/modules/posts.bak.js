import * as postsAPI from '../api/posts'
import {
    reducerUtils,
    handleAsyncActions,
    handleAsyncActionsById,
} from '../lib/asyncUtils'
import { call, put, takeEvery } from 'redux-saga/effects'

/* 액션 타입 */

// 포스트 여러개 조회
const GET_POSTS = 'GET_POSTS' // 요청 시작
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS' // 요청 성공
const GET_POSTS_ERROR = 'GET_POSTS_ERROR' // 요청 실패

// 포스트 하나 조회
const GET_POST = 'GET_POST'
const GET_POST_SUCCESS = 'GET_POST_SUCCESS'
const GET_POST_ERROR = 'GET_POST_ERROR'

export const getPosts = () => ({ type: GET_POSTS })
// payload는 파라미터 용도, meta는 리듀서에서 id를 알기위한 용도
export const getPost = (id) => ({ type: GET_POST, payload: id, meta: id })

function* getPostsSaga() {
    try {
        // call : 특정 함수를 호출, 결과가 반환 될 때까지 기다림.
        const posts = yield call(postsAPI.getPosts)
        // 성공 액션 디스패치
        yield put({
            type: GET_POSTS_SUCCESS,
            payload: posts,
        })
    } catch (e) {
        // 실패 액션 디스패치
        yield put({
            type: GET_POSTS_ERROR,
            error: true,
            payload: e,
        })
    }
}

// 액션이 지니고 있는 값을 조회하고 싶다면, action을 파라미터로 받아와서 사용
function* getPostSaga(action) {
    const param = action.payload
    const id = action.meta
    try {
        const post = yield call(postsAPI.getPostById, param)
        yield put({
            type: GET_POST_SUCCESS,
            payload: post,
            meta: id,
        })
    } catch (e) {
        yield put({
            type: GET_POST_ERROR,
            error: true,
            payload: e,
            meta: id,
        })
    }
}

// 사가 합치기
export function* postsSaga() {
    //takeEvery, takeLatest, takeLeading 등이 있음
    yield takeEvery(GET_POSTS, getPostsSaga)
    yield takeEvery(GET_POST, getPostSaga)
}

// 반복되는 코드를 initial() 함수로 리팩토링
const initialState = {
    posts: reducerUtils.initial(),
    post: reducerUtils.initial(),
}

export default function posts(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
        case GET_POSTS_SUCCESS:
        case GET_POSTS_ERROR:
            return handleAsyncActions(GET_POSTS, 'posts', true)(state, action)
        case GET_POST:
        case GET_POST_SUCCESS:
        case GET_POST_ERROR:
            return handleAsyncActionsById(GET_POST, 'post', true)(state, action)
        default:
            return state
    }
}
