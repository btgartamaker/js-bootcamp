// const myAge = 7
// const message = myAge >=18 ?'You can vote' : 'You cannot vote'
// console.log(message)

const myAge = 27
const showPage = () => {
    console.log('Showing the Page')
}
const showErrorPage = () => {
    console.log('Showing the error Page')
}

myAge >= 21 ? showPage() : showErrorPage()

const team = ['Tyler', 'Porter', 'Jeff', 'Sarah']


console.log(team.length <=4 ? `Team size: ${team.length}` : 'Too many people on your team')