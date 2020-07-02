import React, { Component } from 'react'
import days from 'dayjs'

import './App.css'

import TodoTemplate from '../templates/TodoTemplate'
import TodoInput from '../molecules/TodoInput'
import TodoList from '../molecules/TodoList'

class App extends Component {
    state = {
        todoText: '',
        todoList: [],
    }

    addTodo = (todoText) => {
        const { todoList } = this.state
        const today = days()
        if (todoText) {
            const todoItem = {
                todoText,
                key: +today,
                done: false,
                lastModified: today.format('YYYY.MM.DD HH:mm:ss'),
            }

            this.setState(
                {
                    todoList: todoList.concat(todoItem),
                },
                this.clear,
            )
        }
    }
    clear = () => {
        this.setState({
            todoText: '',
        })
    }
    handleChange = (value) => {
        this.setState({
            todoText: value,
        })
    }

    handleEnter = (value) => {
        this.addTodo(value)
    }

    handleAdd = (value) => {
        this.addTodo(value)
    }

    handleToggle = (toggleTodo) => {
        const { todoList } = this.state

        this.setState({
            todoList: todoList.map((todo) => ({
                ...todo,
                done: todo.key === toggleTodo.key ? toggleTodo.done : todo.done,
            })),
        })
    }

    render() {
        const { todoText, todoList } = this.state
        return (
            <TodoTemplate>
                <TodoInput
                    todoText={todoText}
                    onChange={this.handleChange}
                    onEnter={this.handleEnter}
                    onAdd={this.handleAdd}
                />
                <TodoList todoList={todoList} onToggle={this.handleToggle} />
            </TodoTemplate>
        )
    }
}

export default App
