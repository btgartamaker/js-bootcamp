const todo = ['clean the house', 'go to work', 'walk the dogs', 'get the mail', 'go grocery shopping']

todo.splice(2, 1)
todo.push('take shower')
todo.shift()

console.log(`You have ${todo.length} todos`)
console.log(todo)
