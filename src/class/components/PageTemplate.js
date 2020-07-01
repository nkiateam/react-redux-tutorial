import React from 'react'

const PageTemplate = ({ children }) => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>일정 관리</h1>
            <div>{children}</div>
        </div>
    )
}

export default PageTemplate
