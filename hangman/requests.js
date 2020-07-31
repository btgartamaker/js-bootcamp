const getPuzzle = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`, {}).then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch the puzzle')
        }
    })
}



const getCountry = (countryCode) => new Promise((resolve, reject) => {
    const countryReq = new XMLHttpRequest()

    countryReq.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const countryData = JSON.parse(e.target.responseText)
            const country = countryData.find((country) => country.alpha2Code === countryCode)
            resolve(country)
        } else if (e.target.readyState === 4) {
            reject('An error has taken place')
        }
    })

    countryReq.open('GET', 'http://restcountries.eu/rest/v2/all')
    countryReq.send()
})
