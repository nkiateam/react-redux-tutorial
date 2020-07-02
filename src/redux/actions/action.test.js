import { ADD_TODO } from './actionTypes'

const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo,
    }
}

test('액션 테스트', () => {
    const addAction = addTodo({
        todoText: '나의 할 일2',
        done: false,
    })

    console.log(addAction)
})
