import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPost } from '../modules/posts'
import Post from '../components/Post'

function PostContainer({ postId }) {
    const { data, loading, error } = useSelector(
        (state) => state.posts.post[postId],
    ) || {
        loading: false,
        data: null,
        error: null,
    } // 데이터 없을 때 비구조화 할당이 에러나지 않도록 처리
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPost(postId))
    }, [dispatch, postId])

    if (loading && !data) return <div>로딩중...</div> // 로딩 중이고 데이터 없을 때만 표시
    if (error) return <div>에러 발생!</div>
    if (!data) return null

    return (
        <>
            <Post post={data} />
        </>
    )
}

export default PostContainer
