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

// Remove a Todo
const removeTodo = function (id) {
    const todoIndex = todos.findIndex(function (todo) {
        return todo.id === id
    })

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

// Toggle a todo
const toggleTodo = function (id) {
    const todo = todos.find(function (todo) {
        return todo.id === id
    })
    if (todo !== undefined ) {
        todo.completed = !todo.completed
    }
}

// Get the DOM Elements for individual Todos
const generateTodoDOM = function (todo) {
    const todoEl = document.createElement('div')
    const textEl = generateTextEl(todo)
    const checkbox = generateCheckboxEl(todo)
    const button = generateRemoveButtonEl(todo)

    todoEl.appendChild(checkbox)
    todoEl.appendChild(textEl)
    todoEl.appendChild(button)
    return todoEl
}

// Setup Checkbox for generateTodoDOM
const generateCheckboxEl = function (todo) {
    const checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = todo.completed 

    
    checkbox.addEventListener('change', function () {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })
    return checkbox
}

// Setup remove button for generateTodoDOM
const generateRemoveButtonEl = function (todo) {
    const button = document.createElement('button')
    button.textContent = 'x'
    button.addEventListener('click', function () {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)

    })
    return button
}

// Setup Test for generateTodoDOM
const generateTextEl = function (todo) {
    const textEl = document.createElement('span')
    if (todo.text.length > 0) {
        textEl.textContent = todo.text
    } else {
        textEl.textContent = 'Uknown Task'
    }
    return textEl
}

// Get the DOM elements for summary
const generateSummaryDOM = function (todos) {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${todos.length} todos left`
    return summary
}


