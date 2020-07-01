import React from 'react'
import { createStore } from 'redux'

import { render } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
    const { getByText } = render(<App />)
    const linkElement = getByText(/learn react/i)
    expect(linkElement).toBeInTheDocument()
})

test('redux test', () => {
    const reducer = (state = {}, action) => {
        return state
    }
    const store = createStore(reducer)

    const state = store.getState()
    console.log(state)
    state.hello = 'world2'
    console.log(state)
    console.log(store.getState())
})
