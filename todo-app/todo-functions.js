// Fetch existing todos from localStorage
const getSavedTodos = function () {
    const todoJSON = localStorage.getItem('todos')

    if (todoJSON !== null) {
        return JSON.parse(todoJSON)
    } else {
        return []
    }
}
// Save todos to localStorage
const saveTodos = function(todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}


// Render Application todos based on filters
const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed

        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))

    filteredTodos.forEach(function (todo) {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    })
}

// Get the DOM Elements for individual Todos
const generateTodoDOM = function (todo) {
    const todoEl = document.createElement('p')
    if (todo.text.length > 0) {
        todoEl.textContent = todo.text
    } else {
        todoEl.textContent = 'Uknown Task'
    }
    return todoEl
}

// Get the DOM elements for summary
const generateSummaryDOM = function (todos) {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${todos.length} todos left`
    return summary
}


