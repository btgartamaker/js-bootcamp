const getDataCallback = (callback) => {
    setTimeout(() => {
        callback('This my callback error', undefined, )
    }, 2000)
}
getDataCallback((err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
})

const getDataPromise = (data) => new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve(`This is my success ${data}`)
        // reject('This time is up')
    }, 2000)
})

const myPromise = getDataPromise(123)

myPromise.then((data) => {
    console.log(data)
}, (err) => {
    console.log(err)
})