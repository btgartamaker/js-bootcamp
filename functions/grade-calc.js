// students score, total score
// 15/20  -> you got a C (75%)
// A 90 - 100, B 80 - 89, C 70 -79, D 60 -69 , f 0 -59


const letterGrade = function (studentScore, totalScore) {
    if (typeof studentScore !== 'number' || typeof totalScore !== 'number') {
        throw Error('Arguments must be a number')
    } else {
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
}

let totalScorePossible = 20

try {
    const studentOne = letterGrade(19, totalScorePossible)
    console.log(studentOne)
} catch {
    console.log('Please submit a number instead')
}
