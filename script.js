
let number1= parseFloat(prompt("enter first number"));
let operator = prompt('enter operator');
let number2 = parseFloat(prompt("enter second number"));
let result = null

if (operator == '+') {
    result = number1+number2
}    
else if (operator == '-') {
    result = number1-number2
}
else if (operator == '*') {
    result = number1*number2
}
else if (operator == '/') {
    result = number1/number2
}
else {
    result = "Error"
}

alert('Answer = ' + result);