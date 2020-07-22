//total, tipPercent .2

let getTip = function (total, tipPercent = .2) {
    let tip = total * tipPercent
    return 'Total: ' + total + ' - Tip Amount: ' + tip + ' - Tip percent: ' + tipPercent * 100  + '%'
}

let billOne = getTip(30)
let billTwo = getTip(48.55, .15)
let billThree = getTip(100, .1)

console.log(billOne)
console.log(billTwo)
console.log(billThree)