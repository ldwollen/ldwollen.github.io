// function convert() {
//   let fahrenheit = document.getElementById("F_input").value;
//   let convertedData = (fahrenheit - 32) * (5/9);
//   document.getElementById("C_output").value = convertedData;
  
// }

var addButton = document.querySelector("#convert")
addButton.addEventListener("click", e => {
  let inputObject = document.getElementById("F_input")
  let num = (parseFloat(inputObject.value) -32) * (5/9)
  C_output.value = num
})
