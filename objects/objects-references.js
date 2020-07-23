let myAccount = {
    name: 'Andrew',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses += amount
}

let addIncome = function(account, income) {
    account.income += income
}

let resetAccount = function(account, income) {
    account.income = 0
    account.expenses = 0
}


let getAccountSummary = function(account) {
    let balance = account.income - account.expenses
    return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses`
}

addIncome(myAccount, 1000)
addExpense(myAccount, 50)
addExpense(myAccount, 50)
let summary = getAccountSummary(myAccount)
console.log(summary)
resetAccount(myAccount)
summary = getAccountSummary(myAccount)
console.log(summary)
