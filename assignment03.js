function convert() {
  let fahrenheit = document.getElementById("F_input").value;
  let convertedData = (fahrenheit - 32) * (5/9);
  document.getElementById("C_output").value = convertedData;
  
}
