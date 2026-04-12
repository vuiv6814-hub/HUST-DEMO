let number1 = document.form.number1;
let number2 = document.form.number2;
let result = document.getElementById("result");

function add(){
  let num1 = Number(number1.value);
  let num2 = Number(number2.value);
  result.innerText = (num1 + num2).toString();
}

function sub() {
  let num1 = Number(number1.value);
  let num2 = Number(number2.value);
  result.innerText = (num1 - num2).toString();
}

function mult() {
  let num1 = Number(number1.value);
  let num2 = Number(number2.value);
  result.innerText = (num1 * num2).toString();
}

function div() {
  let num1 = Number(number1.value);
  let num2 = Number(number2.value);
  result.innerText = (num1 / num2).toString();
}
