let add = function (a, b) {
    return a + b
}

let result = add(10, 1)
console.log(result)

let getScoreText =  function (name = 'Anonymous', score = 0) {
    return `Name: ${name} - Score: ${score}`
    //return 'Name: ' + name + ' - Score: ' + score
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)