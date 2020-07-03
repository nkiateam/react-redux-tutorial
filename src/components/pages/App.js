import React, { Component } from 'react'

import './App.css'

import TodoTemplate from '../templates/TodoTemplate'
import TodoInput from '../molecules/TodoInput'
import TodoList from '../molecules/TodoList'

class App extends Component {
    render() {
        return (
            <TodoTemplate>
                <TodoInput />
                <TodoList />
            </TodoTemplate>
        )
    }
}

export default App
