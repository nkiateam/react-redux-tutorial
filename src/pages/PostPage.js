import React from 'react'
import PostContainer from '../containers/PostContainer'

function PostPage({ match }) {
    // URL 파라미터 조회
    const { id } = match.params
    // URL 파라미터 값은 문자열, parseInt()를 사용
    return <PostContainer postId={parseInt(id, 10)} />
}

export default PostPage
