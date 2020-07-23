// students score, total score
// 15/20  -> you got a C (75%)
// A 90 - 100, B 80 - 89, C 70 -79, D 60 -69 , f 0 -59


const letterGrade = function (studentScore, totalScore) {
    const percentage = (studentScore / totalScore) * 100
    let letterGrade = undefined

    if (percentage >= 90) {
        letterGrade = 'A'
    } else if (percentage >= 80 && percentage <= 89) {
        letterGrade = 'B'
    } else if (percentage >= 70 && percentage <= 79) {
        letterGrade = 'C'
    } else if (percentage >= 60 && percentage <= 69) {
        letterGrade = 'D'
    } else if (percentage >= 0 && percentage <= 59) {
        letterGrade = 'F'
    } else {
        return 'Please provide the student score and the total score'
    }

    return `You got a ${letterGrade} (${percentage}%)`
}

let totalScorePossible = 20

const studentOne = letterGrade(19, totalScorePossible)
const studentTwo = letterGrade(17, totalScorePossible)
const studentThree = letterGrade(15, totalScorePossible)
const studentFour = letterGrade(13, totalScorePossible)
const studentFive = letterGrade(11, totalScorePossible)
const studentSix = letterGrade(totalScorePossible)

console.log(studentOne)
console.log(studentTwo)
console.log(studentThree)
console.log(studentFour)
console.log(studentFive)
console.log(studentSix)