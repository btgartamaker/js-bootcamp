const account = {
    name: 'Andrew',
    expenses: [],
    incomes: [],
    addIncome: function (description, amount) {
        this.incomes.push({description: description, amount: amount})
    },
    addExpense: function (description, amount) {
        this.expenses.push({description: description, amount: amount})
    },
    getAccountSummary: function () {
        let totalExpenses = 0
        let totalIncome = 0
        let accountBalance

        this.expenses.forEach(function (expense) {
            totalExpenses += expense.amount
        })
        
        this.incomes.forEach(function (income) {
            totalIncome += income.amount
        })

        accountBalance = totalIncome - totalExpenses

        return `${this.name} has a balance of $${accountBalance}. $${totalIncome} in income. $${totalExpenses} in expenses`
    }
}

//Expense -> description, amount
// addExpense -> description, amount
//getAccountSummary -> total up all expenses -> name has total in expenses

account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Job', 1000)
console.log(account.getAccountSummary())