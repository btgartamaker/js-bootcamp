let convertTemp = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        celsius: (fahrenheit - 32) * 5 / 9,
        kelvin: (fahrenheit + 459.67) * 5 / 9
    }
}

let firstTemp = convertTemp(32)
let secondTemp = convertTemp(68)

console.log(firstTemp)


console.log(secondTemp)
