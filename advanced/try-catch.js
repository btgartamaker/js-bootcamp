const getTip = (amount) => {
    if (typeof amount == 'number') {
        return ammount * .25
    } else {
        throw Error('Argument must be a number')
    }
}


try {
    const result = getTip('test')
    console.log(result)

} catch (e) {
    console.log('catch block is running')
}
