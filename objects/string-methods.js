let name = '   Andrew Mead   '

console.log(name.length)
console.log(name.toUpperCase())
console.log(name.toLowerCase())

let password = 'klasjhdfklhjads;fklhjasdf'
console.log(password.includes('password'))

console.log(name.trim())


let isValidPassword = function (password) {
    return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword('asdf'))
console.log(isValidPassword('sdasdflk;jasdlkfjasd;'))
console.log(isValidPassword('sdasdflk;jasdlkfjasd;password'))