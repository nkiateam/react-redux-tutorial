import React from 'react'
import PropTypes from 'prop-types'

const Toggle = ({ done, onToggle }) => {
    const handleChange = (e) => {
        const { target } = e
        if (onToggle) onToggle(target.checked)
    }
    return <input type="checkbox" checked={done} onChange={handleChange} />
}

Toggle.propTypes = {
    done: PropTypes.bool.isRequired,
    onToggle: PropTypes.func,
}
export default Toggle
