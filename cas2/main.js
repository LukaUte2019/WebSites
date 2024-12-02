let firstName = 'Luka';
let lastName = "Utevski";
let city = "Ohrid";

// Concatenation
document.write('Concatenation');
console.log('Concatenation');
let fullName = firstName + lastName + 2024;
document.write(fullName);
console.log(fullName);

let fullName1 = `${firstName} ${lastName} 2024`;

document.write("Name with " +fullName1);
console.log("Name with " +fullName1);

//Special numbers
document.write('Special numbers');
console.log('Special numbers');
let result = 2/'test'
document.write(result);
document.write('Type is:', typeof result);
console.log('Type is:', typeof result);
console.log(result == NaN);
document.write(result == NaN);
console.log(result === NaN);
document.write(result === NaN);

document.write(isNaN (result));
console.log(isNaN (result));
document.write(Number.isNaN (result));
console.log(Number.isNaN (result));
document.write("<a href=http://lukaserver.ddns.net>This is my first web page with JavaScript…</a>");
console.log("http://lukaserver.ddns.net This is my first web page with JavaScript…");

console.log('result');
document.write('result');

let res = 1 / 0;
console.log(res);
document.write(typeof res);
console.log(typeof res);


console.log('Logical AND');
document.write('Logical AND');
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log('Logical OR');
document.write('Logical OR');
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

let isLoading = true;
let isValid = true;
console.log(isLoading && isValid);

console.log('Negation');
document.write('Negation');
console.log(!true);
console.log(!false);

console.log('Comparison');
document.write('Comparison');
let num1 = 10;
let num2 = 5;
console.log(num1>num2);
console.log(10>=10);

console.log(isLoading && isValid && num1>num2);

//truthy values
console.log('truthy values');

console.log(false && (3 === 4));
console.log('' && true);
console.log('Cat' && 'Dog');
console.log(false && '.');

console.log('false' || '.');
console.log(!'');

let isRendered = true
console.log(!!isRendered);

console.log('<,> test');

console.log('25' === 25);

let a = 25;;
let b = '30';
let c = '35';

console.log(a < b);
console.log(a > b);

let value = 50;

if (value > 100) {
    // execute
    console.log('inside if');
}

if (value < 100) {
    console.log('inside if works');
    console.log('inside if works again');
}

if (value === 50) {
    console.log('Equal');
}
else {
    console.log('Not equal')
}


let score = 70;

if (score > 80) {
    console.log('Grade 5');
}   else if (score > 70) {
     console.log("Grade 4");
    } else if (score > 60) {
        console.log("Grade 3")
    } else {
        console.log("Failed")
    } 