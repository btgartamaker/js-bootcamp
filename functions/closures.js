const createCounter = () => {
    let count = 0

    return {
        increment() {
            count++
        },
        decrement() {
            count--
        },
        get() {
            return count
        }
    }
}

const createTipper = (baseTip) => {
    return (amount) => {
        return baseTip * amount
    }
}

const percent10 = createTipper(.1)
const percent15 = createTipper(.15)
const percent20 = createTipper(.2)

console.log(percent10(50))
console.log(percent15(50))
console.log(percent20(50))