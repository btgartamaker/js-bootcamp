const todos = [{
    text: 'clean the house',
    completed: false
}, { 
    text: 'go to work',
    completed: true
}, {
    text: 'walk the dogs',
    completed: false
}, {
    text: 'get the mail',
    completed: true
}, {
    text: 'go grocery shopping',
    completed: false
}]

const deleteTodo = function (todos, todoText) {
    const index = todos.findIndex(function (todo, index) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })

    if (index > -1) {
        todos.splice(index, 1)
    }
}

const getThingsToDo = function (todos, query) {
    return todos.filter(function (todo, index) {
        return !todo.completed
    })
}

const sortTodos = function (todos) {
    todos.sort(function (a, b) {
        if (!a.completed && b.completed) {
            return -1
        } else if  (!b.completed && a.completed) {
            return 1
        } else {
            return 0
        }
        
    })
}

sortTodos(todos)
console.log(todos)

// console.log(getThingsToDo(todos))

// deleteTodo(todos, 'clean the houseas')
// console.log(todos)

