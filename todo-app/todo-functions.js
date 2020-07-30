'use strict'
// Fetch existing todos from localStorage
const getSavedTodos = () => {
    const todoJSON = localStorage.getItem('todos')
    try {
        return todoJSON ? JSON.parse(todoJSON) : []
    } catch (e) {
        return []
    }
}

// Save todos to localStorage
const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}


// Render Application todos based on filters
const renderTodos = (todos, filters) => {
    const filteredTodos = todos.filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed

        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed)

    document.querySelector('#todos').innerHTML = ''
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))

    filteredTodos.forEach((todo) => {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    })
}

// Remove a Todo
const removeTodo = (id) => {
    const todoIndex = todos.findIndex(function (todo) {
        return todo.id === id
    })

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

// Toggle a todo
const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)
    if (!todo) {
        todo.completed = !todo.completed
    }
}

// Get the DOM Elements for individual Todos
const generateTodoDOM = (todo) => {
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
const generateCheckboxEl = (todo) => {
    const checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = todo.completed 

    
    checkbox.addEventListener('change', () => {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })
    return checkbox
}

// Setup remove button for generateTodoDOM
const generateRemoveButtonEl = (todo) => {
    const button = document.createElement('button')
    button.textContent = 'x'
    button.addEventListener('click', () => {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)

    })
    return button
}

// Setup Test for generateTodoDOM
const generateTextEl = (todo) => {
    const textEl = document.createElement('span')
    if (todo.text.length > 0) {
        textEl.textContent = todo.text
    } else {
        textEl.textContent = 'Uknown Task'
    }
    return textEl
}

// Get the DOM elements for summary
const generateSummaryDOM = (todos) => {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${todos.length} todos left`
    return summary
}


