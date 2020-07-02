import React from 'react'
import PropTypes from 'prop-types'

const Contents = ({ content }) => {
    return <div className="Contents">{content}</div>
}

Contents.propTypes = {
    content: PropTypes.node.isRequired,
}
export default Contents
