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

function calculateGCD() {
  let firstNum = document.getElementById("first_number").value;
  let secondNum = document.getElementById("second_number").value;
  let HCF = 0;
  //method taken from https://www.programiz.com/javascript/examples/lcm
  for (let i = 1; i <= firstNum && i <= secondNum; i++) {
    if( firstNum % i == 0 && secondNum % i == 0) {
        HCF = i;
    }
}
  let LCM = (firstNum * secondNum)/(HCF)
  let GCD = (firstNum * secondNum)/(LCM)
  document.getElementById("GCDanswer").value = GCD;
  
}

function findSumOfInts() {
  let wholeNum = document.getElementById("integer_input").value;
  let answer = 0;
  let arrNums = wholeNum.split("");
   for (let i = 0; i < arrNums.length; i++) {
    let curNum = parseInt(arrNums[i]);
     answer = answer + curNum;
  }
  
  document.getElementById("sumOfIntsAnswer").value = answer;
}
