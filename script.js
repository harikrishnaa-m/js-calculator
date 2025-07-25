function displayNumber(num) {
  result.value += num;
}
function clearScreen() {
  result.value = "";
}
function oper() {
  result.value = eval(result.value);
}

function backspace() {
  result.value = result.value.slice(0, -1);
}
