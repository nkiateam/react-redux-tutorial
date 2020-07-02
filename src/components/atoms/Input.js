import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ value, onChange, onEnter, readOnly, style }) => {
    const handleKeyPress = (e) => {
        const { key, target } = e
        if (key === 'Enter') {
            if (onEnter) onEnter(target.value)
        }
    }

    const handleChange = (e) => {
        const { target } = e
        if (onChange) onChange(target.value)
    }
    return (
        <input
            style={style}
            onChange={handleChange}
            value={value}
            onKeyPress={handleKeyPress}
            readOnly={readOnly}
        />
    )
}

Input.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    onEnter: PropTypes.func,
    readOnly: PropTypes.bool,
}

export default Input
