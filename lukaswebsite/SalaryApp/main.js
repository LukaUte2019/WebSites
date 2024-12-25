let result = document.getElementById("pagraph");
let salary = 1000;
const salaryAmount = 1000;
const rent = 375;
const bills = 250;

function pay(amount) {
    salary = salary - amount;
    console.log(salary);
    return salary;
}
let totalExpenses = salaryAmount - salary;
pay(rent);
alert(`You have ${salary} left`);
console.log(totalExpenses);