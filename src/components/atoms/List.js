import React from 'react'
import PropTypes from 'prop-types'

const List = ({ items }) => {
    return (
        <ul className="List">
            {items.map((item) => (
                <li key={item.key}>{item.value}</li>
            ))}
        </ul>
    )
}

List.propTypes = {
    items: PropTypes.array.isRequired,
}

export default List
